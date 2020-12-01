
// created a function to validate the length of the credit card
function validateLength(cardNumber){
  return cardNumber.length === 16;
}

// created a function to validate that all numbers
function validateAllNumbers(cardNumber){
    return (!isNaN(cardNumber));
}

// created a function to validate different digits
function validateDifferentDigits(cardNumber){
    const changeToArray = cardNumber.split('');
    const setOfCardNumber = new Set(changeToArray); 

    return (setOfCardNumber.size) > 1 ;
}

// created a function to validate last even Number
function validateLastEvenNumber(cardNumber){
    return cardNumber % 2 === 0;
    }

//   created a function to validate sum of all numbers must be over 16
   function validateSumOfNumbers(cardNumber){
  
    const Total = cardNumber.split('').reduce(function(acc, elem){
        acc = acc + parseInt(elem,10);
        return acc;
    }, 0);
    return Total > 16;
}

//the credit card validation function
  function validateCreditNumber(cardNumber){
      if(!validateLength(cardNumber)){
        console.log("invalid! The input", cardNumber, "should be 16 characters!");
      }
      else if(!validateAllNumbers(cardNumber)){
        console.log("invalid! The input", cardNumber, "should be all numbers!");  
      }
      else if(!validateDifferentDigits(cardNumber)){
        console.log("invalid! The input", cardNumber, "should at least two different numbers represented!");    
      }
      else if(!validateLastEvenNumber(cardNumber)){
        console.log("invalid! The input", cardNumber, "should contains an odd final number!");
      }
      else if(!validateSumOfNumbers(cardNumber)){
        console.log("invalid! The input", cardNumber, "The sum of all numbers should be greater than 16!");
      }
      else {
        console.log("Success! The input", cardNumber, "is a valid credit card number!");
      }
      }

      validateCreditNumber('1234567654323454');
      validateCreditNumber('1aa5676543234554');
      validateCreditNumber('4444444444444444');
      validateCreditNumber('1234567654323455');
      validateCreditNumber('1111111100111010');
      validateCreditNumber('123457654323454');

  
  




