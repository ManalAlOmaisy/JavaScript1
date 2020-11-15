
let drinkTray = [];
let drinkTypes = ['cola', 'lemonade', 'water'];

for ( let i = 0; i < drinkTypes.length; i++ ) {

    for ( let j = 0; j < 2; j++) {
      if ( drinkTray.length < 5 ) {
         drinkTray.push(drinkTypes[i]);
      }
    }
  }
console.log("Hey guys, I brought a" + " " + drinkTray.join(', ') + "!")
 