

const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const peopleInput = document.querySelector("#people");

const tipOutput = document.querySelector("#tip-total");
const totalOutput = document.querySelector("#total");

const perPersonText = document.querySelectorAll(".per-person-text");

const tipMinusButton = document.querySelector("#tip-minus-button");
const tipPlusButton = document.querySelector("#tip-plus-button");

const peopleMinusButton = document.querySelector("#people-minus-button");
const peoplePlusButton = document.querySelector("#people-plus-button");

billInput.addEventListener('input', update);
tipInput.addEventListener('input', update);
peopleInput.addEventListener('input', update);

peopleMinusButton.addEventListener('click', decrementPeople);
peoplePlusButton.addEventListener('click', incrementPeople);

tipMinusButton.addEventListener('click', decrementTip);
tipPlusButton.addEventListener('click', incrementTip);

function decrementPeople(e){

    if(parseFloat(peopleInput.value) > 1){

        let initalVal = parseFloat(peopleInput.value) - 1;
        peopleInput.value = initalVal;
        update();

    }

}

function incrementPeople(e){

    let initalVal = parseFloat(peopleInput.value) + 1;
    peopleInput.value = initalVal;
    update();

}

function decrementTip(e){

    if(parseFloat(tipInput.value) > 0){

        let initalVal = parseFloat(tipInput.value) - 1;
        tipInput.value = initalVal;
        update();

    }

}

function incrementTip(e){

    let initalVal = parseFloat(tipInput.value) + 1;
    tipInput.value = initalVal++;
    update();

}


function update(e){

    if(parseInt(peopleInput.value) > 1){

        for(let text of perPersonText){

            text.style.opacity = "1";

        }

    }else{

        for(let text of perPersonText){

            text.style.opacity = "0";

        }

    }

    const tipPercentage = parseFloat(tipInput.value);
    const billAmount = parseFloat(billInput.value);
    const billPerPerson = billAmount / parseInt(peopleInput.value);

    
    const finalTip = billPerPerson * (tipPercentage / 100);
    const total = finalTip + billPerPerson;

    tipOutput.innerHTML = `$${finalTip.toFixed(2)}`;
    totalOutput.innerHTML = `$${total.toFixed(2)}`;

}