// /*
// 1. add event listener to the case plus button..
// 2. get the value inside the case number field (input field)..
// 3. convert a number string to number..
// 4. calculate value the new case number..
// 5. set the value to the case number field
// internal
// */

function updateCaseNumber (isIncrease) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const priviousCaseNumber = parseInt(caseNumberString);
    
    let caseNewNumber ;
    if (isIncrease) {
        caseNewNumber = priviousCaseNumber + 1;

    }
    else {
        caseNewNumber = priviousCaseNumber - 1 ;
    }
    caseNumberField.value = caseNewNumber;
    return caseNewNumber;
}

function updateCaseTotalPrice (newCaseNumber){
    const newCaseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = newCaseTotalPrice;

}
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
})

document.getElementById('btn-case-minus').addEventListener('click' , function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
})


// again practice....

// function updateCaseNumber (isIncrease) {
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const priviousCaseNumber = parseInt(caseNumberString);
//     let caseNewNumber;
//    if(isIncrease) {
//     caseNewNumber = priviousCaseNumber + 1;
//     // const caseNewPrice = caseNewNumber * 59;
//    }

//    else{
//     caseNewNumber = priviousCaseNumber - 1;
//    }

//    caseNumberField.value = caseNewNumber;
//    return caseNewNumber;
// }

// document.getElementById('btn-case-plus').addEventListener('click', function(){
//     const newCaseNumber=  updateCaseNumber(true);
//     const newCaseTotalPrice = newCaseNumber * 59 ;
//     const caseTotalElement = document.getElementById('case-total');
//     const totalElement = caseTotalElement.innerText;
//     caseTotalElement.innerText = newCaseTotalPrice;
// })

// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const newCaseNumber=  updateCaseNumber(false);
//     const newCaseTotalPrice = newCaseNumber * 59 ;
//     const updateCaseTotalPrice = newCaseTotalPrice / 59 ;
//     const caseTotalElement = document.getElementById('case-total');
//     const totalElement = caseTotalElement.innerText;
//     caseTotalElement.innerText = newCaseTotalPrice;
// })