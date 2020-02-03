/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

// Targets overlay element
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = [
            "Some rocks are heavy",
            "Stay in school",
            "Water is wet",
            "Snails are slow",
            "Tesla was smart"];
        this.activePhrase = null;
    };
    getRandomPhrase(){
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        const phrase = this.phrases[randomPhrase];
        return phrase;
    };
    startGame(){ 
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        const phrase = new Phrase(this.activePhrase);
        phrase.addPhraseToDisplay();
        console.log(phrase);
    };
    handleInteraction(button){
        button.disabled = true;
        let letter = button.textContent;
        // console.log(this.activePhrase); // The phrase in play
        
        if (!this.activePhrase.includes(letter)){
            // add the wrong CSS class to the selected letter's keyboard button and remove 1 life
            button.className = 'wrong';
            this.removeLife();
        } else{

            button.className = 'chosen';
            const phrase = new Phrase(this.activePhrase);
            phrase.showMatchedLetter(button.textContent);
            if (this.checkForWin() === true){
                this.gameOver(true);
            }
        }

    };
    removeLife(){
        // Increment 'missed' by 1. Find heart image and replace with broken heart image.
        // If 'missed' is equal to 5 then set gameOver to false.
        this.missed += 1;
        const heartImage = document.querySelectorAll('img');
        for (let i = 0; i < this.missed; i ++){
            heartImage[i].src = 'images/lostHeart.png';
        }
        if (this.missed === 5){
            this.gameOver(false)
        }
    };
    checkForWin(){
        const hidden = document.getElementsByClassName('hide letter');
        if (hidden.length === 0){
            console.log('ALL LETTERS FOUND');
            this.gameOver(true);
        }
    };
    resetGame(){
        this.missed = 0;
        // Remove all li elements from the Phrase ul element.
        $('#phrase li').remove();
        // Enable all of the onscreen keyboard buttons and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
        const keys = document.querySelectorAll('button');
        keys.forEach(key => {
            key.disabled = false;
            key.className = "key";
        });
        // Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.
        const heartImages = document.querySelectorAll('img');
        heartImages.forEach(image => {
            image.src = "images/liveHeart.png";
        });
    };
    gameOver(gameState){
        
        // Grab overlay and overlay h1 element
        const overlay = document.getElementById('overlay');
        const overlayh1 = document.getElementById('game-over-message');

        // Conditional statement to determine outcome depending on wether the game is won or lost.
        if (gameState === true){
            console.log('GAME WON');
            overlayh1.textContent = 'YOU WIN! Congratulations on finding all the letters!'
            overlay.className = 'win';
            overlay.style.display = 'initial';
        }else {
            console.log('GAME LOST');
            overlayh1.textContent = 'Aww shucks.. Better luck next time!';
            overlay.className = 'lose';
            overlay.style.display = 'initial';
        }
        // Run function to reset the game.
        this.resetGame();
    };

}