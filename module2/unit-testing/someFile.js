const add = (a, b) => a + b;
const calculateHyp = (a, b) => Math.sqrt(a * a + b * b);
const removeBugs = (code) => code.filter((c) => c != "BUG");

module.exports = { add, calculateHyp, removeBugs };
