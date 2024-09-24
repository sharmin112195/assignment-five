// Donation for Noakhali
document.getElementById('donate-btn-noakhali')
 .addEventListener('click', function(){
    const donation = donationAmount('donate-input');   
     const donationOne = parseFloat(donation);
    const peopleDonateAmount =parseFloat(document.getElementById('money-add').innerText);

    const totalDonation = donationOne + peopleDonateAmount;
     
    
    if(isNaN(donation)){
       alert('Please enter a valid number');
       cardSectionById('Successfully-card-section')
        return 
      }


   if(donationOne <= 0 || donationOne > peopleDonateAmount){
    alert('Invalid Donation Amount');
    cardSectionById('Successfully-card-section')
    return;
   }

   

   document.getElementById('money-add').innerText = totalDonation;

//    empty input

document.getElementById('donate-input').value = '';
   
   const balance = parseFloat(document.getElementById('nav-btn-amount').innerText);

   if(balance < donationOne){
      alert('You do not enough money');
      cardSectionById('Successfully-card-section')
      return;
   }
   const newBalance = balance - donationOne;
   document.getElementById('nav-btn-amount').innerText = newBalance;


// history create html Noakhali
const historyItem = document.createElement('div');
historyItem.className = "bg-white p-3 rounded-md border-solid border-2 border-gray-400 mx-12 mb-4 shadow-lg";
historyItem.innerHTML = `
<h4 class ="text-3xl text-gray-700 font-semibold"> ${donationOne} Taka is Donate for Flood at Noakhali, Bangladesh</h4> 
<p class = "text-lg text-gray-500 bg-gray-100 p-3 rounded-md">Date: ${new Date()}</p>
`
const historyContainer = document.getElementById('history-container');
historyContainer.insertBefore(historyItem, historyContainer.firstChild);


 })

//  Donation for Feni

document.getElementById('donate-btn-feni')
 .addEventListener('click', function(){
   const donate = donationAmount('feni-donate-input')
    const donation = parseFloat(donate)
   const peopleDonateAmountFeni =parseFloat(document.getElementById('feni-add-money').innerText);

   const totalDonationTwo = donation + peopleDonateAmountFeni;

   if(donation <= 0 || donation > peopleDonateAmountFeni){
    alert('Invalid Donation Amount');
    cardSectionById('Successfully-card-section')
    return;
   }

   if(isNaN(donate)){
    alert('Please enter a valid number');
    cardSectionById('Successfully-card-section')
    return
   }
   document.getElementById('feni-add-money').innerText = totalDonationTwo;

//    empty input

document.getElementById('feni-donate-input').value = '';
   
   const balanceTwo = parseFloat(document.getElementById('nav-btn-amount').innerText);

   if(balanceTwo < donation){
      alert('You do not enough money');
      cardSectionById('Successfully-card-section')
      return;
   }
   const newBalance = balanceTwo - donation;
   document.getElementById('nav-btn-amount').innerText = newBalance;

   // history create html Feni
const historyItem = document.createElement('div');
 historyItem.className = "bg-white p-3 rounded-md border-solid border-2 border-gray-400 mx-12 mb-4 shadow-lg";
 historyItem.innerHTML = `
 <h4 class ="text-3xl text-gray-700 font-semibold"> ${donation} Taka is Donate for Flood Relief in Feni,Bangladesh</h4> 
 <p class = "text-lg text-gray-500 bg-gray-100 p-3 rounded-md">Date: ${new Date()}</p>
 `
 const historyContainer = document.getElementById('history-container');
 historyContainer.insertBefore(historyItem, historyContainer.firstChild);

 
 })

//  Injured in the Quota Movement

document.getElementById('quota-donate-btn')
 .addEventListener('click', function(){
   const donateTwo = donationAmount('quota-input-donation')
    const donation = parseFloat(donateTwo);
   const peopleDonateAmount =parseFloat(document.getElementById('quota-injured-add-money').innerText);

  

   const totalDonation = donation + peopleDonateAmount;

   if(donation <= 0 || donation > peopleDonateAmount){
    alert('Invalid Donation Amount');
    cardSectionById('Successfully-card-section')
    return;
   }

   if(isNaN(donateTwo)){
    alert('Please enter a valid number');
    cardSectionById('Successfully-card-section')
    return
   }

   document.getElementById('quota-injured-add-money').innerText = totalDonation;

//    empty input

document.getElementById('quota-input-donation').value = '';
   
   const balance = parseFloat(document.getElementById('nav-btn-amount').innerText);

   if(balance < donation){
      alert('You do not enough money');
      cardSectionById('Successfully-card-section')
      return;
   }
   const newBalance = balance - donation;
   document.getElementById('nav-btn-amount').innerText = newBalance;

      // history create html
 const historyItem = document.createElement('div');
 historyItem.className = "bg-white mx-12 p-3 rounded-md border-solid border-2 border-gray-400 mb-4 shadow-lg";
 historyItem.innerHTML = `
 <h4 class ="text-3xl text-gray-700 font-semibold"> ${donation} Taka is Aid for Injured in the Quota Movement</h4> 
 <p class = "text-lg text-gray-500 bg-gray-100 p-3 rounded-md">Date: ${new Date()}</p>
 `
 const historyContainer = document.getElementById('history-container');
 historyContainer.insertBefore(historyItem, historyContainer.firstChild);
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
   document.getElementById('donation-full-section').classList.add('hidden');
   document.getElementById('history-section').classList.remove('hidden');
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
   document.getElementById('donation-full-section').classList.remove('hidden');
   document.getElementById('history-section').classList.add('hidden');

})








