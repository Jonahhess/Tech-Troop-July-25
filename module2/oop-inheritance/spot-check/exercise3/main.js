class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }

  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }
}

class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(null, startYear);
    this.name = `Professor ${name}`;
    this.courses = {};
    this.salary = salary;
  }
  addCourse(courseName) {
    courseName in this.courses
      ? this.courses[courseName]++
      : (this.courses[courseName] = 1);
  }
}

// driver code
const t1 = new Teacher("Cassandra", 2002, 40000);
t1.addCourse("Algebra II");
t1.addCourse("Algebra II");
t1.addCourse("Trigonometry");
console.log(t1.courses); //should print {Algebra II: 2, Trigonometry: 1}
