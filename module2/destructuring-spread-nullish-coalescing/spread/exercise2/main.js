let firstPiece = { id: 101, name: "Ofri" };
let seoncdPiece = { country: "Israel" };

let passport = { ...firstPiece, ...seoncdPiece };
console.log(passport);
