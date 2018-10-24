var aboutMeForm = document.getElementById('about-me')
var correctReponse = document.getElementById('correct-response')

function checkAboutMe() {
    var elements = aboutMeForm.elements;

    var dogInput = elements.dogs;
    var likeDogs = dogInput.value;
    console.log(dogInput); 

    var colorInput = elements.color;
    var purpleColor = colorInput.value;
    console.log(colorInput); 
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

    // if (countryInput.value === "japan") {
    //     countryInput.classList.add('correct');
    //     countryInput.classList.remove('incorrect');
    // }

    // else {
    //     countryInput.classList.add('incorrect'); 
    //     countryInput.classList.remove('correct');
    // }

}
