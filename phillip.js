//task
//Create a rand() function
//Takes a number 
//Returnd a random number between 0 and that number

//PSEUDOCODE
//Multiply Math.Random() by the given number
//remove the decimal part 
//return the remaining integer

function rand(num) {
    //Returns a random integer between 0 and num
    var randomNum = num * Math.random();
    var result = Math.floor(randomNum);
    return result;   
} 