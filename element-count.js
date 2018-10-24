/* exported tryQuerySelector */
'use strict'

function tryQuerySelector() {
    var sectionInputs = document.querySelectorAll('input[name="section"]');

    for (var i=0; i < sectionInputs.length; i++) {
        var input = sectionInputs[i]; 
        console.log("bananas", input.value, input.id, input.checked);
    }

    var selectedSectionInput = document.querySelector('input[name="section"]:checked');

    if(selectedSectionInput) {
        console.log("selected input value", selectedSectionInput.value); 
    }

    else {
        console.log('no section selected');
    }

    var selectedAllInput = document.querySelector('input checked'); 

    if (selectedAllInput) {
        console.log("all selected input", selectedAllInput.value); 
    }
} 