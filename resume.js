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
        modal.style.pointerEvents = "none";
    }

    else {
        alert.innerHTML = "You may not view this content."
    }
}

function operation (op) {
    let a = document.getElementById("f-number");
    let b = document.getElementById("s-number");
    let c = document.getElementById("o-number");
    c.style.color = "black";
    op(a,b,c);
}

function b_add(x,y,c) {
    let a = x.value;
    let b = y.value;
    

    c.innerHTML = Number(a) + Number(b);
}
function b_sub(x,y,c) {
    let a = x.value;
    let b = y.value;

    let t = Number(a) - Number(b);

    if(t<0) {
        c.style.color = "red";
    }
    
    c.innerHTML = t;
}
function b_mul(x,y,c) {
    let a = x.value;
    let b = y.value;
    

    c.innerHTML = Number(a) * Number(b);
}
function b_div(x,y,c) {
    let a = x.value;
    let b = y.value;
    

    c.innerHTML = Number(a) / Number(b);
}
function b_pow(x,y,c) {

    let a = x.value;
    let b = y.value;
    
    if(b == 0) { //weak equality on purpose
   
        c.innerHTML = 1;
        return;
    }

    let d = a;

    for(let i = 0; i < b-1; i++) {
        a =  d * a;
        console.log(a)
    }
    

    c.innerHTML = a;
}
function b_c(x,y,c) {
   
    

    x.value = null;
    y.value = null;
    c.innerHTML = "_";
}

function accordClose() {
    console.log("hello")
    document.getElementById("mob-nav").style.display = "none";
    document.getElementById("mob-nav-open").style.display = "flex";

}
function accordOpen() {
    console.log("hello")
    document.getElementById("mob-nav").style.display = "flex";
    
    document.getElementById("mob-nav-open").style.display = "none";
}