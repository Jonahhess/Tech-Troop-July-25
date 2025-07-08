const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const guestName = "Ted";

if (!(guestName in reservations)) {
  console.log("You have no reservation");
} else if (reservations[guestName].claimed === true) {
  console.log("Hmm, someone already claimed this reservation");
} else {
  console.log(`Welcome, ${guestName}`);
}
