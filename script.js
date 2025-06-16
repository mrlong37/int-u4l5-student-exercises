let button = document.querySelector("button");


button.addEventListener("click", function() {
    let waterTemp = document.querySelector("input").value;
    if (waterTemp >= 212) {
   document.querySelector("p").innerHTML="Boiling!";
    }
    // 1. Add an else-if and else so that:
    //  - If the water temp is greater than 32°, the user knows it's ok to drink.
    //  - If the water temp is 32° or less, the user knows the water is frozen.
    else if(waterTemp>32){
        document.querySelector("p").innerHTML = "This water is ok to drink.";
    }
    else{
        document.querySelector("p").innerHTML = "Frozen!";
    }
    
    
});

// Bonus: According to research, 155°F is an optimal temperature for consuming hot drinks. 
//  - How would you improve the conditional statements above so that your code gives some more helpful information to the user?