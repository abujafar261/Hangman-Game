// Letters
const letters  = "abcdefghijklmnopqrstuvwxyz+#";

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter =>{
   let span = document.createElement("span");
   let theLetter = document.createTextNode(letter);

   span.appendChild(theLetter);
   
   span.className = 'letter-box';

   lettersContainer.appendChild(span);
});

//Object of words 
const words = {
    programming: ["Python", "c++", "c+", "Javasqript", "HTML", "css"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["JAFAR MOHAMMED", "ALI MOHAMMED", "HASSAN", "HUSSAN", 'MOHAMMED AHMED', "MAHDE"],
    cuntry: ["IRAQ", "IRAN", "PALISTEN", "QUIT", "BAHRAIN", "YEMEN"],
}

// Get randm property
let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValueName = randomPropValue[randomValueNumber]

// Set caterory info

document.querySelector(".game-info span").innerHTML = randomPropName;

//Select letter guess element
let lettersGuess = document.querySelector(".letters-guess");

// Convert chosen word to array
let lettersAndSpace = Array.from(randomValueName);

//Creat spans depened on word
lettersAndSpace.forEach(letter => {
    let emptySpan = document.createElement("span");

    if(letter === ' '){
        emptySpan.className = "with-space"
    }
    
    lettersGuess.appendChild(emptySpan);
});

//Select guess spans 
let guessSpan = document.querySelectorAll(".letters-guess span");

//Set wrong Attempts and the draw element
let worngAttempts = 0;
let draw = document.querySelector(".hangman-draw");




//Handle clicking on letters
document.addEventListener("click", (e) =>{
    // Set the chose status
    let status = false;

    if(e.target.className === 'letter-box'){
        e.target.classList.add("clicked");

        //Get cliked letter
        let clickLetter = e.target.innerHTML.toLowerCase();

        let choseWord = Array.from(randomValueName.toLowerCase());
       
        //The chosen word lettersAndSpace
        choseWord.forEach((wordLetter, wordIndex) =>{
            if(clickLetter == wordLetter.toLowerCase()){
                status = true;

                guessSpan.forEach((span, spanIndex) =>{
                    if(wordIndex === spanIndex){
                        span.innerHTML = wordLetter;
                    }
                })
            }
        });
        if(status != true){
            worngAttempts++;

            draw.classList.add(`wrong-${worngAttempts}`);

            if(worngAttempts === 8){
                endGame();
                lettersContainer.classList.add("finish");
            }
        }
    }

});

//End game function
function endGame(){
    let div = document.createElement('div');
    let divText = document.createTextNode(`Game over, The word is ${randomValueName}`);
    div.appendChild(divText);

    //add class on div
    div.className = 'flfl';
    document.body.appendChild(div);
}

