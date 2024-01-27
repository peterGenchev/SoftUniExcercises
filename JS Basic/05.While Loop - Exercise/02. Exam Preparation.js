function exam(input) {
    let index = 0;
    let countNegGrades = Number(input[index]);
    index++;
  
    let command = input[index];
    index++;
  
    let currentNegGrade = 0;
    let sumGrades = 0;
    let countProblems = 0;
    let lastName = "";
    let isNeedBrake = false;
  
    while (command !== "Enough") {
      let problemName = command;
      let grade = Number(input[index]);
      index++;
  
      lastName = problemName;
      countProblems++;
      sumGrades += grade;
  
      if (grade <= 4) {
        currentNegGrade++;
      }
      if (currentNegGrade === countNegGrades) {
        console.log(`You need a break, ${countNegGrades} poor grades.`);
        isNeedBrake = true;
        break;
      }
      command = input[index];
      index++;
    }
    if (!isNeedBrake) {
      let avg = sumGrades / countProblems;
      console.log(`Average score: ${avg.toFixed(2)}`);
      console.log(`Number of problems: ${countProblems}`);
      console.log(`Last problem: ${lastName}`);
    }
  }