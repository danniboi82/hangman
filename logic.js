let wordArray = ["cat", "dog", "superman"];
let randomWord = '';
let wrongGuesses = '';
let correctGuess = '';
let encryptedWord = '';
let life = 10;


//game logic function 

let gameStart = () => {


    //need array of words 
    //randomly select a word from the array of words 
    randomWord = wordArray[Math.floor(Math.random() * wordArray.length)]
    encryptedWord = randomWord.replace(/[A-Za-z]/g, '_').split('');
    console.log(randomWord);

    $('.wordToGuess').text(`${encryptedWord}`);
    //display word but by replacing each letter with an _ or something else 

}


let checkLetters = (randomWord, encryptedWord) => {
    document.onkeyup = (event) => {
        let userInput = event.key;
        for (let letter in randomWord) {
            console.log(randomWord[letter])
            console.log(randomWord);
            console.log(letter);
            if (userInput === randomWord[letter]) {
                //replace _ with the letter
                console.log("YOU ARE GETTING SOMEWHERE!!")
                console.log(encryptedWord[letter])
                encryptedWord[letter] = userInput;
                //add alphabet to correctGuess array?
                console.log(encryptedWord[letter])

                //congratulate user for right guess
            } else {
                //add alphabet to wrongGuesses
                //tell user they are wrong! 
                life--
            }
        }
        //loop through word and check if userinput matches letter in word
        // //if (user input === a letter in word) {
        //     display matching letter;
        //     correctGuess ++;

        // }
    }
}

let restart = () => {
    //what data do you want to be cleared when function is run??
    wrongGuesses = 0;
    correctGuesses = 0;
}


$().ready(() => {
    //press button game starts
    $('#gameStart').on('click', () => {
        //acutal game logic function
        gameStart();
        checkLetters(randomWord, encryptedWord);
    })
})