const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const guestName = "steve";

if (!(guestName in reservations)) {
  reservations[guestName] = { claimed: true };
} else if (reservations[guestName].claimed === true) {
  console.log("Hmm, someone already claimed this reservation");
} else {
  console.log(`Welcome, ${guestName}`);
}

console.log(reservations);
