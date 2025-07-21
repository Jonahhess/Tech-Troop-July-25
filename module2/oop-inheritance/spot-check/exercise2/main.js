const { Student, Teacher, Person } = require("../exercise1/main.js");

const s1 = new Student("Ronda", 2017);
const t1 = new Teacher("Cassandra", 2002, 40000);
const p1 = new Person("Anon", 1999);

s1 instanceof Person; // true
t1 instanceof Teacher; // true
t1 instanceof Person; // true
s1 instanceof Teacher; // false
t1 instanceof Student; // false
p1 instanceof Person; // true
p1 instanceof Student; // false
p1 instanceof Teacher; // false

//s1 instanceof p1; // error
