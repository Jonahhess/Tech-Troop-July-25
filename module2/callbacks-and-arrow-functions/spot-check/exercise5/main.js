const getFormalTitle = (title, lname) => title + " " + lname;

const formalTitle = getFormalTitle("Madamme", "Lellouche");
console.log(formalTitle); //returns "Maddame Lellouche"

// again, using currying ftw
const getFormalTitle2 = (title) => (lname) => title + " " + lname;
const formalTitle2 = getFormalTitle2("Sir")("Knight");
console.log(formalTitle2);
