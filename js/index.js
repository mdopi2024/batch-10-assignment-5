

document.getElementById('donate-now-button').addEventListener('click',function(){
    const inputValue= convertNumber('input')
    const navBdt = convertNumber2('nav-totoal-bdt')
    const noakaliBdt = convertNumber2('noakali-bdt')
  if(typeof numberValue === 'number' || inputValue >= 0){
   const noakaliTotal = inputValue +noakaliBdt;
   document.getElementById('noakali-bdt').innerText = noakaliTotal
   const navValue= navBdt-inputValue;
   document.getElementById('nav-totoal-bdt').innerText= navValue
   const time =new Date()
   const div = document.createElement('div')
    div.classList.add('border')
    div.classList.add('mt-3')
   div.innerHTML +=`
    <p >${inputValue} Taka is Donated for famine-2024 at Noakhali, Bangladesh </p>
    <p >${time} </p>
    `
 const history = document.getElementById('history-section')
 history.appendChild(div) 



  }
  else{
   const reutn = alert("Please Enter  Valid Number")
   return reutn;
    
  }  
  
})


// feni blood section here start
document.getElementById('donate-now-button-feni').addEventListener('click',function(){
  const inputValue= convertNumber('input-feni')
  const navBdt = convertNumber2('nav-totoal-bdt')
  const feniBdt = convertNumber2('feni-bdt')
  if(typeof numberValue === 'number' || inputValue >= 0){
   const feniTotal = feniBdt + inputValue;
   document.getElementById('feni-bdt').innerText= feniTotal
  const navTotal = navBdt - inputValue
  document.getElementById('nav-totoal-bdt').innerText = navTotal

  const time =new Date()
  const div = document.createElement('div')
   div.classList.add('border')
   div.classList.add('mt-3')
  div.innerHTML +=`
   <p >${inputValue} Taka is Donated for Flood Relief in Feni,Bangladesh </p>
   <p >${time} </p>
   `
const history = document.getElementById('history-section')
history.appendChild(div)

  }
  else{
    alert("Please Enter  Valid Number")
  } 

})
// feni blood section here end


// movement injorieded start 
document.getElementById('donate-now-button-movment').addEventListener('click',function(){
  const inputValue= convertNumber('input-movment')
  const navBdt = convertNumber2('nav-totoal-bdt')
  const movmentBdt = convertNumber2('movment-bdt')
  if(!isNaN(inputValue) || inputValue >= 0){
    const movementTotal = inputValue + movmentBdt
    document.getElementById('movment-bdt').innerText = movementTotal;
    const navTotal = navBdt - inputValue;
    document.getElementById('nav-totoal-bdt').innerText = navTotal;
    const time =new Date()
  const div = document.createElement('div')
   div.classList.add('border')
   div.classList.add('mt-3')
  div.innerHTML +=`
   <p >${inputValue} Taka is Donated for famine-2024 at movment injoried, Bangladesh </p>
   <p >${time} </p>
   `
const history = document.getElementById('history-section')
history.appendChild(div) 

  

  }
  else{
    alert("Please Enter  Valid Number")
  }  
})

// movement injorieded end


// swich donate and history button
document.getElementById('click-donate').addEventListener('click',function(){
donationHistory('donation-section');
document.getElementById('click-donate').classList.add('bg-lime-400')
document.getElementById('click-history').classList.remove('bg-lime-400')


})
document.getElementById('click-history').addEventListener('click',function(){
donationHistory('history-section');

document.getElementById('click-history').classList.add('bg-lime-400');
document.getElementById('click-donate').classList.remove('bg-lime-400');
document.getElementById('click-donate').classList.add('bg-gray-300');
})


// form
document.getElementById('form').addEventListener('submit',function(event){
  event.preventDefault();
  const model5=document.getElementById('my_modal_5');
  model5.close()
})