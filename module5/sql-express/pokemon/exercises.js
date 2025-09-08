const Sequelize = require("sequelize");
const sequelize = new Sequelize("mysql://root:1234@localhost/pokemonDB");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const ex2 = () =>
  sequelize
    .query(
      "SELECT * FROM pokemon WHERE weight = (SELECT MAX(weight) FROM pokemon);"
    )
    .then(([res]) => {
      console.log(res);
    });

const ex3 = (type) =>
  sequelize
    .query("SELECT * FROM pokemon WHERE type = :type;", {
      replacements: { type },
    })
    .then(([res]) => {
      console.log(res);
    });

const ex4 = (name) =>
  sequelize
    .query(
      `SELECT pokemon.name as pokemon_name, trainer.name as trainer_name from trainer 
      inner join pokemon_trainer on pokemon_trainer.trainer = trainer.id 
      inner join pokemon on pokemon_trainer.pokemon = pokemon.id 
      where pokemon.name = :name`,
      { replacements: { name } }
    )
    .then(([res]) => {
      console.log(res);
    });

const ex5 = (trainer) =>
  sequelize
    .query(
      `SELECT pokemon.name from trainer 
      inner join pokemon_trainer on pokemon_trainer.trainer = trainer.id 
      inner join pokemon on pokemon_trainer.pokemon = pokemon.id 
      where trainer.name = :trainer`,
      { replacements: { trainer } }
    )
    .then(([res]) => {
      console.log(res);
    });

const ex6 = () =>
  sequelize
    .query(
      `SELECT name FROM (
        SELECT pokemon.name, COUNT(*) AS count
        FROM pokemon_trainer
        INNER JOIN pokemon ON pokemon_trainer.pokemon = pokemon.id
        GROUP BY pokemon.name
      ) AS counts
      WHERE count = (
        SELECT MAX(count) FROM (
          SELECT COUNT(*) AS count
          FROM pokemon_trainer
          INNER JOIN pokemon ON pokemon_trainer.pokemon = pokemon.id
          GROUP BY pokemon.name
        ) AS inner_counts
      );`
    )
    .then(([res]) => {
      console.log(res);
    });
