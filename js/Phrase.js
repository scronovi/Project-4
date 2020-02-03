/* Treehouse FSJS Techdegree
* Project 4 - OOP Game App
* Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    // Target phrase div and append new li for each char in phrase.
    addPhraseToDisplay() {
        const phraseUl = document.getElementById('phrase');
        const splitPhrase = this.phrase.split('');
        splitPhrase.forEach( char => {
            const phraseLi = document.createElement('li');
            phraseLi.innerHTML = (`${char}`);
            phraseUl.append(phraseLi);
            phraseLi.classList.add('hide');
            if (char === ' ') {
                phraseLi.classList.add('space');
            } else {
                phraseLi.classList.add('letter');
                phraseLi.classList.add('unselectable'); // Prevent cheating where selecting elements with mouse would show letters inside. 
            }
        })
    }
    // Check if letter is in phrase
    checkLetter(letter) {
        if (this.phrase.includes(letter)){
            return true;
        }else{
            return false;
        }
    }
    // Showing matched letter if the letter pressed by user is in the phrase
    showMatchedLetter(letter) {
        let letterElement = document.getElementsByClassName('letter');
        for (let i = 0; i < letterElement.length; i += 1){
            if (letterElement[i].innerHTML === letter){
                letterElement[i].className = 'letter show';
                }
            }
        }
    }