// Project 7: Build a tip calculator.

// Requirements:
// -Create a Github repository for this project.
// -You should have a form where a user is able to input the cost of the meal.
// -The form should also let the user choose the percentage tip they want to give.
// -When they submit the form, show them the total with tip added.
// -Display the total tip amount as well so they know how much they're tipping.


const sliders = document.querySelectorAll("input[type='range']");


 sliders.forEach(function(slider){
    slider.addEventListener("input", calculateTip);
 });

const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);


function calculateTip() {
    
    let bill = parseFloat(billInput.value); 
    let tipPercent = document.getElementById("tip").value;
   


  
    billInput.value = bill.toFixed(2); 
   
    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));
   

    
    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;
    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
}

calculateTip();

























