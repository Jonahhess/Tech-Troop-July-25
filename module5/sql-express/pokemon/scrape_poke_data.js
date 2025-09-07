const pokeData = require("./poke_data.json");
const fs = require("fs");

// enums
const types = new Set();
const towns = new Set();

// optimize trainer collection
const trainersTowns = new Set();

// collect enums + unique trainers
pokeData.forEach((pokemon) => {
  types.add(pokemon.type);
  pokemon.ownedBy.forEach((trainer) => {
    trainersTowns.add(`${trainer.name}-${trainer.town}`);
    towns.add(trainer.town);
  });
});

// table + map
const trainerTableData = [...trainersTowns].map((tt, id) => {
  const [name, town] = tt.split("-");
  return { id, name, town };
});

const trainerIndexMap = [...trainerTableData].reduce((ac, trainer) => {
  ac[trainer.name] = trainer.id;
  return ac;
}, {});

// collect both pokemon data and pokemon-trainers
const pokemonTrainerTableData = [];
const pokemonTableData = [];

pokeData.forEach((pokemon) => {
  const { ownedBy, id, ...rest } = pokemon;
  pokemonTableData.push({ id, ...rest });
  ownedBy.forEach((trainer) => {
    pokemonTrainerTableData.push({
      pokemon: id,
      trainer: trainerIndexMap[trainer.name],
    });
  });
});

const createInsertStatements = (table_name, data, values) => {
  const opening = `INSERT INTO ${table_name} (${values.reduce(
    (a, b) => a + ", " + b
  )}) values \n`;

  const statements = data
    .map(
      (entry) =>
        `(${values
          .map((a) => entry[a])
          .map((a) => (typeof a === "string" ? `'${a}'` : a))
          .reduce((a, b) => a + ", " + b)})`
    )
    .reduce((a, b) => `${a}, \n${b}`);

  return opening.concat(statements);
};

const pokemonInsertStatements = createInsertStatements(
  "pokemon",
  pokemonTableData,
  ["id", "name", "type", "weight", "height"]
);

const trainerTableInsertStatements = createInsertStatements(
  "trainer",
  trainerTableData,
  ["id", "name", "town"]
);

const pokemonTrainerTableInsertStatements = createInsertStatements(
  "pokemon_trainer",
  pokemonTrainerTableData.map((entry, id) => {
    return { ...entry, id };
  }),
  ["id", "pokemon", "trainer"]
);

const fullText = [
  pokemonInsertStatements,
  trainerTableInsertStatements,
  pokemonTrainerTableInsertStatements,
]
  .join(";\n\n")
  .concat(";");

fs.writeFileSync("test.txt", fullText);
