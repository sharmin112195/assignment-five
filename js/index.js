// Donation for Noakhali
document.getElementById('donate-btn-noakhali')
 .addEventListener('click', function(){
    const donation = parseFloat(donationAmount('donate-input'))
   const peopleDonateAmount =parseFloat(document.getElementById('money-add').innerText);

   const totalDonation = donation + peopleDonateAmount;

   if(donation < 0){
    alert('Invalid Donation Amount');
    return;
   }

   if(isNaN(donation)){
    alert('Please enter a valid number');
    return
   }

   document.getElementById('money-add').innerText = totalDonation;

//    empty input

document.getElementById('donate-input').value = '';
   
   const balance = parseFloat(document.getElementById('nav-btn-amount').innerText);
   const newBalance = balance - donation;
   document.getElementById('nav-btn-amount').innerText = newBalance;
 })

//  Donation for Feni

document.getElementById('donate-btn-feni')
 .addEventListener('click', function(){
    const donation = parseFloat(donationAmount('feni-donate-input'))
   const peopleDonateAmount =parseFloat(document.getElementById('feni-add-money').innerText);

   const totalDonation = donation + peopleDonateAmount;

   if(donation < 0){
    alert('Invalid Donation Amount');
    return;
   }

   if(isNaN(donation)){
    alert('Please enter a valid number');
    return
   }
   document.getElementById('feni-add-money').innerText = totalDonation;

//    empty input

document.getElementById('feni-donate-input').value = '';
   
   const balance = parseFloat(document.getElementById('nav-btn-amount').innerText);
   const newBalance = balance - donation;
   document.getElementById('nav-btn-amount').innerText = newBalance;
 })

//  Injured in the Quota Movement

document.getElementById('quota-donate-btn')
 .addEventListener('click', function(){
    const donation = parseFloat(donationAmount('quota-input-donation'))
   const peopleDonateAmount =parseFloat(document.getElementById('quota-injured-add-money').innerText);

  

   const totalDonation = donation + peopleDonateAmount;

   if(donation < 0){
    alert('Invalid Donation Amount');
    return;
   }

   if(isNaN(donation)){
    alert('Please enter a valid number');
    return
   }

   document.getElementById('quota-injured-add-money').innerText = totalDonation;

//    empty input

document.getElementById('quota-input-donation').value = '';
   
   const balance = parseFloat(document.getElementById('nav-btn-amount').innerText);
   const newBalance = balance - donation;
   document.getElementById('nav-btn-amount').innerText = newBalance;
 })


//  if(peopleDonateAmount < 0){
//     alert('Invalid Donation Amount');
//     return
//  }


