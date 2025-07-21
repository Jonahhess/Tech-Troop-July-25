function safeJsonParse(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    return "Invalid JSON format";
  }
}

console.log(safeJsonParse('{"name": "John"}'));
// Output: { name: "John" }

console.log(safeJsonParse("invalid json"));
// Output: "Invalid JSON format"
