const numChildren =[1, 2, 3, 4, 5];
const partnerNames =["zee", "ammar", "mohd", "sam", "whatever"]; //:)
const locations =["london", "paris", "Netherland", "Dubai", "Japan"];
const jobs =["Programmer", "Accountant", "Doctor", "Artist", "Designer"];

function tellFortune(numOfChildren, partnerNames, geographiclocations, jobTitle){
    for (let i = 0; i < 3; i++){

let NUMBER_KIDS = numOfChildren[Math.floor(Math.random() * 5)];
let PARTNER_NAME = partnerNames[Math.floor(Math.random() * 5)];
let LOCATION = geographiclocations[Math.floor(Math.random() * 5)];
let JOB_TITLE = jobTitle[Math.floor(Math.random() * 5)];

console.log("You will be a", JOB_TITLE, "in", LOCATION + ",", "married to", 
PARTNER_NAME, "with", NUMBER_KIDS, "kids.");

}}
   
tellFortune(numChildren, partnerNames, locations, jobs);

