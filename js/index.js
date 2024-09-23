

document.getElementById('donate-now-button').addEventListener('click',function(){
    const inputValue= convertNumber('input')
    const navBdt = convertNumber2('nav-totoal-bdt')
    const noakaliBdt = convertNumber2('noakali-bdt')
  if(typeof numberValue === 'number' || inputValue >= 0){

   const noakaliTotal = inputValue +noakaliBdt;
   document.getElementById('noakali-bdt').innerText = noakaliTotal
   const navValue= navBdt-inputValue;
   document.getElementById('nav-totoal-bdt').innerText= navValue
   
   const div = document.createElement('div')
   div.innerHTML +=`
    <p >${inputValue} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
    <p >${time} </p>
    `
 const history = document.getElementById('history-section')
 history.appendChild(div)
   
    
  }
  else{
    alert("Please Enter  Valid Number")
  }  
  
})


// swich donate and history button
document.getElementById('click-donate').addEventListener('click',function(){
donationHistory('donation-section')
})
document.getElementById('click-history').addEventListener('click',function(){
donationHistory('history-section')
})