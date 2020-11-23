
let compliments = ["great", "awesome", "nice", "beautiful", "helpful", "intelligent", "amazing", "One of a kind", "creative", "wonderful"];
function  giveCompliment(name){
    for (let i = 0; i < 3; i++){

  let randomCompliment = compliments[Math.floor(Math.random() * 10)];

  console.log("You are",randomCompliment, name, "!");
 
    }  
  }
giveCompliment('manal');

