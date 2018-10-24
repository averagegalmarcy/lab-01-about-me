var aboutMeForm = document.getElementById('about-me')
var correctResponse = document.getElementById('correct-response')

function checkAboutMe() {
    var elements = aboutMeForm.elements;

    var dogInput = elements.dogs;
    var likeDogs = dogInput.value;


    var colorInput = elements.color;
    var purpleColor = colorInput.value;

    var countryInput = elements.country;
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
    
    correctResponse.textContent = 'You got ' + correct + ' out of 2';
    
    // if (countryInput.value === "japan") {
    //     countryInput.classList.add('correct');
    //     countryInput.classList.remove('incorrect');
    // }

    // else {
    //     countryInput.classList.add('incorrect'); 
    //     countryInput.classList.remove('correct');
    // }
    
    function resetAboutMe() {
        var elements = aboutMeForm.elements;
        var catsInput = elements.cats;
        var foodInput = elements.food;
    
        dogInput.classList.remove('correct');
        dogInput.classList.remove('incorrect');
        colorInput.classList.remove('correct');
        colorInput.classList.remove('incorrect');
    
        aboutMeResponse.textContent = '';
    
    }   
}
