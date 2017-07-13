function rand(num) {
    //Returns a random integer between 0 and num
    var randomNum = num * Math.random();
    var result = Math.floor(randomNum);
    return result;   
} 

function randLetter() {
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z"]
    //var alphabet = "abcdefghijklmnopqrstuvwxyz"
   // return alphabet[rand(alphabet.length)];
    var randomNum = rand(alphabet.length);
    var letter = alphabet[randomNum]; 
    return letter;
}

function randWord(){
    //use a loop to pick 5 rand Letters
    for (var i = 0; i < 15; i++) {
        //pick a letter
        word = word + randLetter();
    }
    return word;
}

function randSentence(){
    var Sentence = ""; 
    ///Use a loop to pick 5 randomm words
    for ( var i = 0; i < 5; i++) {
        return Sentence;
    }
}