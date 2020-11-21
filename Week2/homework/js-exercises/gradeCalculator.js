

function finalScore(score, maxscore) {
//converting the score into percentage
const percentage = (score * 100) / maxscore;
let grade;

// I used an if/else statement by entering the score (converted into percentage) and if it meets
// the first condition is will execute the console if not it will go on to the next  else statment till it 
// match the best condition
// and execute the grade

if(percentage >= 90){
   grade = "A";
  }
 else if(percentage >= 80){
    grade = "B";
  }
  else if(percentage >= 70){
    grade = "C";
  }
  else if(percentage >= 60){
    grade = "D";
  }
  else if(percentage >= 50){
    grade = "E";
  }
  else
  {
    grade = "F";
  } 
  console.log("You got a", grade, "(", percentage, "%)!");
return;
}

finalScore(70, 100);




