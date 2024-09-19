// Function to verify user's age for 18+ content
function checkAge() {
    let age = document.getElementById("input").value; // Get the value from the age input field
    let alert = document.getElementById("alt-output"); // Reference to the output div for messages
    let modal = document.getElementById("age-modal-container"); // Reference to the modal container

    // Debugging logs
    console.log("hello", Number(age) % 1 !== 0 ); // Check if the age is not an integer
    console.log();

    // Check if the age starts with a negative sign
    if(age[0] === "-"){
        alert.innerHTML = "Enter a positive integer."; // Alert the user to enter a positive integer
    }
    // Check if the input is not a number or not an integer
    else if(isNaN(age) || Number(age) % 1 !== 0) {
        alert.innerHTML = "Enter an integer."; // Ask the user to enter a valid integer
        console.log("age", age);
        console.log("hello");
    }
    // If the age is a valid integer and within the allowed range (18-120)
    else if(Number(age) >= 18 && Number(age) <= 120) {
        modal.style.opacity = "0"; // Hide the modal by changing opacity
        modal.style.pointerEvents = "none"; // Disable modal interaction
    }
    // If the age is less than 18 or outside the valid range
    else {
        alert.innerHTML = "You may not view this content."; // Display a denial message
    }
}

// Function to handle calculator operations
function operation(op) {
    let a = document.getElementById("f-number"); // Get first number input
    let b = document.getElementById("s-number"); // Get second number input
    let c = document.getElementById("o-number"); // Get the output field for result
    c.style.color = "black"; // Set the result color to black initially
    op(a, b, c); // Call the appropriate operation function with inputs and output
}

// Function for addition operation
function b_add(x, y, c) {
    let a = x.value;
    let b = y.value;
    c.innerHTML = Number(a) + Number(b); // Display the sum of two numbers
}

// Function for subtraction operation
function b_sub(x, y, c) {
    let a = x.value;
    let b = y.value;
    let t = Number(a) - Number(b); // Calculate the difference

    // If the result is negative, change output text color to red
    if(t < 0) {
        c.style.color = "red";
    }
    
    c.innerHTML = t; // Display the result
}

// Function for multiplication operation
function b_mul(x, y, c) {
    let a = x.value;
    let b = y.value;
    c.innerHTML = Number(a) * Number(b); // Display the product of two numbers
}

// Function for division operation
function b_div(x, y, c) {
    let a = x.value;
    let b = y.value;
    c.innerHTML = Number(a) / Number(b); // Display the quotient of two numbers
}

// Function for exponentiation operation (power)
function b_pow(x, y, c) {
    let a = x.value;
    let b = y.value;

    // If the exponent is zero, return 1
    if(b == 0) { // Weak equality (==) used intentionally
        c.innerHTML = 1;
        return;
    }

    let d = a; // Store the base value

    // Calculate the power using a loop
    for(let i = 0; i < b-1; i++) {
        a = d * a; // Multiply base by itself b-1 times
    }

    c.innerHTML = a; // Display the result of exponentiation
}

// Function to clear the calculator inputs and reset the output
function b_c(x, y, c) {
    x.value = null; // Clear the first number input
    y.value = null; // Clear the second number input
    c.innerHTML = "_"; // Reset the output display to default
}

// Function to close the mobile navigation menu
function accordClose() {
    console.log("hello");
    document.getElementById("mob-nav").style.display = "none"; // Hide the mobile nav menu
    document.getElementById("mob-nav-open").style.display = "flex"; // Show the "open" button
}

// Function to open the mobile navigation menu
function accordOpen() {
    console.log("hello");
    document.getElementById("mob-nav").style.display = "flex"; // Display the mobile nav menu
    document.getElementById("mob-nav-open").style.display = "none"; // Hide the "open" button
}
