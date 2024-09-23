// Donation for Noakhali
document.getElementById('donate-btn-noakhali')
 .addEventListener('click', function(){
    const donation = parseFloat(donationAmount('donate-input'))
   const peopleDonateAmount =parseFloat(document.getElementById('money-add').innerText);

   const totalDonation = donation + peopleDonateAmount;

   if(donation < 0){
    alert('Invalid Donation Amount');
    cardSectionById('Successfully-card-section')
    return;
   }

   if(isNaN(donation)){
    alert('Please enter a valid number');
    cardSectionById('Successfully-card-section')
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
   const peopleDonateAmountFeni =parseFloat(document.getElementById('feni-add-money').innerText);

   const totalDonationTwo = donation + peopleDonateAmountFeni;

   if(donation < 0){
    alert('Invalid Donation Amount');
    cardSectionById('Successfully-card-section')
    return;
   }

   if(isNaN(donation)){
    alert('Please enter a valid number');
    cardSectionById('Successfully-card-section')
    return
   }
   document.getElementById('feni-add-money').innerText = totalDonationTwo;

//    empty input

document.getElementById('feni-donate-input').value = '';
   
   const balanceTwo = parseFloat(document.getElementById('nav-btn-amount').innerText);
   const newBalance = balanceTwo - donation;
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
    cardSectionById('Successfully-card-section')
    return;
   }

   if(isNaN(donation)){
    alert('Please enter a valid number');
    cardSectionById('Successfully-card-section')
    return
   }

   document.getElementById('quota-injured-add-money').innerText = totalDonation;

//    empty input

document.getElementById('quota-input-donation').value = '';
   
   const balance = parseFloat(document.getElementById('nav-btn-amount').innerText);
   const newBalance = balance - donation;
   document.getElementById('nav-btn-amount').innerText = newBalance;
 })


// donation and history button
const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');
historyTab.addEventListener('click', function(){
   historyTab.classList.add(
      "text-black",
      "bg-lime-300"
   );
   historyTab.classList.remove("text-gray-500");
   donationTab.classList.remove(
      "text-black",
      "bg-lime-300" 
   );
   donationTab.classList.add("text-gray-500");
})

donationTab.addEventListener('click', function(){
   donationTab.classList.add(
      "text-black",
      "bg-lime-300"
   );
   donationTab.classList.remove("text-gray-500");
   historyTab.classList.remove(
      "text-black",
      "bg-lime-300" 
   );
   historyTab.classList.add("text-gray-500");
})



