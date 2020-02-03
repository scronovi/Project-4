/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game = new Game;
const gameBtn = document.getElementById('btn__reset');
const keys = document.querySelectorAll('.key');

gameBtn.addEventListener('click', () => {
    game.startGame();
});

keys.forEach(key => {
    key.addEventListener('click', function(){
        game.handleInteraction(key);
    })
})

