// Project 7: Build a tip calculator.

// Requirements:
// -Create a Github repository for this project.
// -You should have a form where a user is able to input the cost of the meal.
// -The form should also let the user choose the percentage tip they want to give.
// -When they submit the form, show them the total with tip added.
// -Display the total tip amount as well so they know how much they're tipping.


// NEED TO CHANGE :  #ofGuest field to tip number-- convert that to percentage -- 
// --showTipAmount is changed to total amount -- and displays tipAmt + mealAmt = total

// get access to 3 input boxes

const amount = document.getElementById('amount');
const guest = document.getElementById('guest');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

calculate = () => {
    const tip =  ((amount.value * quality.value) /(guest.value)).toFixed(2); //return 2 dec
    //clear the fields
    amount.value = '';
    guest.value = '';
    quality.value = '';
    // checks for NaN
    if(tip === 'NaN') {
        tipAmount.innerHTML = 'Tip $0 each';
        showTipAmount();
    }
    else {
        tipAmount.innerHTML = 'Tip $' + tip + ' each';
        showTipAmount();
    }
}

showTipAmount = () => {
    var x = tipAmount;
    x.className = 'show'; // this will show initiate the hidden feature and display animation
    //setTimeout to change className from show, back to what it was
    setTimeout(function(){x.className = x.className.replace('show', '');}, 3000);
}
