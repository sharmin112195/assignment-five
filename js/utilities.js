function donationAmount(id){
    const donationElement = document.getElementById(id).value;
    const donation = parseFloat(donationElement);
    return donation;
}