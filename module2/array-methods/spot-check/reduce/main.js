let scores = [87, 92, 78, 95, 88, 91];

console.log(scores.reduce((a, b) => (a > b ? a : b), -Infinity));

// Common reduce patterns:

// Sum/Total: arr.reduce((sum, num) => sum + num, 0)
// Find maximum: arr.reduce((max, num) => num > max ? num : max, -Infinity)
// Count occurrences: arr.reduce((counts, item) => { counts[item] = (counts[item] || 0) + 1; return counts }, {})
// Group by property: arr.reduce((groups, item) => { groups[item.category] = groups[item.category] || []; groups[item.category].push(item); return groups }, {})
