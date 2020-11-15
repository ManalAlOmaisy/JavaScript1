

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
   console.log("You got a", grade,"(", percentage, "%)!");
  
  }
 else if(percentage >= 80){
    grade = "B";
    console.log("You got a", grade, "(", percentage, "%)!");
  }
  else if(percentage >= 70){
    grade = "C";
    console.log("you got a", grade, "(", percentage, "%)!");
  }
  else if(percentage >= 60){
    grade = "D";
    console.log("You got a", grade, "(", percentage, "%)!");
  }
  else if(percentage >= 50){
    grade = "E";
    console.log("You got a", grade, "(", percentage, "%)!");
  }
  else
  {
    grade = "F";
    console.log("You got a", grade, "(", percentage, "%)!");
  } 
 
}
return(finalScore(99, 100));




