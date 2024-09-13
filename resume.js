function checkAge() {
    let age = document.getElementById("input").value;
    let alert = document.getElementById("alt-output");
    let modal = document.getElementById("age-modal-container");

   


    console.log("hello", Number(age) % 1 !== 0 );
    console.log()

    if(age[0] === "-"){
        alert.innerHTML = "Enter a positive integer.";
    }

    else if(isNaN(age) || Number(age) % 1 !== 0) {
        alert.innerHTML = "Enter an integer.";

        console.log("age", age)
        console.log("hello")
    }


    else if(Number(age) >= 18 && Number(age)<=120) {
        modal.style.opacity = "0";
    }

    else {
        alert.innerHTML = "You may not view this content."
    }
    
}