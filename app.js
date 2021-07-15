// Project 7: Build a tip calculator.

// Requirements:
// -Create a Github repository for this project.
// -You should have a form where a user is able to input the cost of the meal.
// -The form should also let the user choose the percentage tip they want to give.
// -When they submit the form, show them the total with tip added.
// -Display the total tip amount as well so they know how much they're tipping.

// const sliders = document.querySelectorAll("input[type='range");
// console.log(sliders);

//Step 1. addEventListeners
//Step 2. get Input Values
//Step 3. calculate outPut values.
//Step 4. display output values.

//1a.create a variable for the input range sliders
const sliders = document.querySelectorAll("input[type='range']");
 // should confirm a nodeList for 0-input#tip, 1-no-of-people
//  console.log(sliders);

 //1B. creating a event for the input field to run a function
 sliders.forEach(function(slider){
    slider.addEventListener("input", calculateTip);
 });
// 1d. 
const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);

//1C. create funtion name;
function calculateTip() {
    //2a. create a variable to hold the value
    let bill = parseFloat(billInput.value); // returns the value as a number
    let tipPercent = document.getElementById("tip").value;
    let noOfPeople = document.getElementById("no-of-people");


    // // check the functionality of these
    // console.log(bill, tipPercent, noOfPeople);
    //2a.
    billInput.value = bill.toFixed(2); //create a constraint on the input field
    //3a.
    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));
    // console.log(totalTip, tip);
    // let tipPerPerson = (totalTip/noOfPeople).toFixed(2);
    // let totalPerPerson = (total / noOfPeople).toFixed(2);
    // console.log(noOfPeople, totalTip, tip, tipPerPerson, totalPerPerson);

    //4. Step 4. display output values.
    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;
    document.getElementById("tip-percent").textContent = `${tipPercent}%`;
    // document.getElementById("split-num").textContent = noOfPeople; //issue with slider now
    // document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;

}

calculateTip();

























