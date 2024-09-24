function convertNumber (id){
    const value = document.getElementById(id).value;
    const valueNumber = parseFloat(value)
    return valueNumber;
}

// texarea
function convertNumber2 (id){
    const value1 = document.getElementById(id).innerText;
    const valueNumber1 = parseFloat(value1)
    return valueNumber1;
}



function donationHistory (id){
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('donation-section').classList.add('hidden')

    // remove

    document.getElementById(id).classList.remove('hidden')
}

// remove style 

