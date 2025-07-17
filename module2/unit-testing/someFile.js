const add = (a, b) => a + b;
const calculateHyp = (a, b) => Math.sqrt(a * a + b * b);
const removeBugs = (code) => code.filter((c) => c != "BUG");
const clearLowPriority = (objArr) =>
  obj.filter((obj) => obj.priority === "HIGH");
module.exports = { add, calculateHyp, removeBugs, clearLowPriority };
