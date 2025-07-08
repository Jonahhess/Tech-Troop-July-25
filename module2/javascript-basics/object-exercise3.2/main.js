const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const inputName = "tED";
const guestName =
  inputName.charAt(0).toUpperCase() + inputName.slice(1).toLowerCase();

if (!(guestName in reservations)) {
  reservations[guestName] = { claimed: true };
} else if (reservations[guestName].claimed === true) {
  console.log("Hmm, someone already claimed this reservation");
} else {
  console.log(`Welcome, ${guestName}`);
}

console.log(reservations);
