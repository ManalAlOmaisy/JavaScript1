const cartForParty = {
    chips : 1.6,
    pepsi : 0.8,
    cheese: 1.25,
    banana: 2.7,
    choclate: 3.65,
};

function calculateTotalPrice(groceryItems){

    let Total = 0;

    for(let properties in groceryItems){
  
    Total += groceryItems[properties];
   
}
  console.log( "Total: €", Total); 

}

calculateTotalPrice(cartForParty);



