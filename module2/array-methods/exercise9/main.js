let studentScores = [
  92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81,
];

function giveGrade(score) {
  if (score >= 90) {
    return "A";
  }

  if (score >= 80) {
    return "B";
  }

  if (score >= 70) {
    return "C";
  }

  if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const gradeDict = studentScores.reduce((dict, score) => {
  const grade = giveGrade(score);
  grade in dict ? (dict[grade] += 1) : (dict[grade] = 1);
  return dict;
}, {});

console.log(gradeDict);
