/* exported checkAboutMe, resetAboutMe */
'use strict';
var aboutMeForm = document.getElementById('about-me')
var correctResponse = document.getElementById('correct-response')

function checkAboutMe() {
    var elements = aboutMeForm.elements;

    var dogInput = elements.dogs;
    var likeDogs = dogInput.value.toLowerCase();


    var colorInput = elements.color;
    var purpleColor = colorInput.value.toLowerCase();

    var countryInput = elements.country;
    var countryAnswer = countryInput.value.toLowerCase();
    
    var dogName = elements.name;
    var nameInput = dogName.value.toLowerCase();

    var correct = 0;

    if(likeDogs === 'yes' ||  likeDogs === 'absolutely') {
        correct = correct + 1;
        dogInput.classList.add('correct');
        dogInput.classList.remove('incorrect');

    }
    
    else if (likeDogs !=='') {
        dogInput.classList.add('incorrect');
        dogInput.classList.remove('correct');
    }
    if (purpleColor === 'lavender' || purpleColor === 'purple') {
        correct = correct + 1;
        colorInput.classList.add('correct');
        colorInput.classList.remove('incorrect');
    }

    else {
        colorInput.classList.remove('correct');
        colorInput.classList.add('incorrect');
    }

    if (countryAnswer === 'Japan') {
        correct = correct + 1;
        countryInput.classList.add('correct');
        countryInput.classList.remove('incorrect');
    }
    else if (countryAnswer !=='') {
        countryInput.classList.add('incorrect');
        countryInput.classList.remove('correct')
    }

    if (nameInput === 'Cheddar' || nameInput === 'Pickles') {
        correct = correct + 1;
        dogName.classList.add('correct');
        dogName.classList.remove('incorrect');
    }
    
    else if (nameInput !== '') {
        dogName.classList.remove('correct');
        dogName.classList.add('incorrect');
    }
    correctResponse.textContent = 'You got ' + correct + ' out of 5'; 
}

function resetAboutMe() {
    var elements = aboutMeForm.elements;
    var colorInput = elements.color;
    var dogInput = elements.dog;

    dogInput.classList.remove('correct');
    dogInput.classList.remove('incorrect');
    colorInput.classList.remove('correct');
    colorInput.classList.remove('incorrect');
    countryAnswer.classList.remove('correct');
    countryAnswer.classList.remove('incorrect');


    correctResponse.textContent = '';

}  