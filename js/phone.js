
function updatePhoneNumber (isIncrease) {
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberString = phoneNumberField.value;
    const priviousPhoneNumber = parseInt(phoneNumberString);
    
    let phoneNewNumber ;
    if (isIncrease) {
        phoneNewNumber = priviousPhoneNumber + 1;

    }
    else {
        phoneNewNumber = priviousPhoneNumber - 1 ;
    }
    phoneNumberField.value = phoneNewNumber;
    return phoneNewNumber;
}

function updatePhoneTotalPrice (newPhoneNumber) {
    const newPhoneTotalPrice = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    // const phoneTotalPrice = phoneTotalElement.innerText;
    phoneTotalElement.innerText = newPhoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);
    updatePhoneTotalPrice(newPhoneNumber); 
    calculateSubTotal();
    
})

document.getElementById('btn-phone-minus').addEventListener('click' , function(){
   const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber); 
    calculateSubTotal();
})