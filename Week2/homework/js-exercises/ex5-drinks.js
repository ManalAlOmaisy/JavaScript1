
// let drinkTray = [];
// let drinkTypes = ['cola', 'lemonade', 'water'];

// for ( let i = 0; i < drinkTypes.length; i++ ) {

//     for ( let j = 0; j < 2; j++) {
//       if ( drinkTray.length < 5 ) {
//          drinkTray.push(drinkTypes[i]);
//       }
//     }
//   }
// console.log("Hey guys, I brought a" + " " + drinkTray.join(', ') + "!")

let drinktypes=['cola','lemonade','water'];
let drinkTray=[];

 for (let i=0; i< 5;i++) {
 let continueAddingDrinks = true;
 while(continueAddingDrinks){
     const randomDrink = drinktypes[Math.floor(Math.random()*3)];
     const drinksInTray = drinkTray.filter(function(drink) {
         return drink === randomDrink;
     });
     if (drinksInTray.length<2){
         drinkTray.push(randomDrink);
         continueAddingDrinks=false;
        }
         else {
            continueAddingDrinks=true;
         }
     }
 }
 console.log('Hey guys, I brought a ' + drinkTray.join(' ') + '!!!')
 