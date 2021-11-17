let a = document.getElementById("a").value;
let b = document.getElementById("b").value;
let c = document.getElementById("c").value;

function oplosje(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    let op_rez = 2*(a*b+a*c+b*c)

    document.getElementById("op_rez").innerHTML = op_rez.toFixed(2) + "cm";
}

function pros_diajg() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    let pros_rez = a*2 + b*2 + c*2
    document.getElementById("pros_rez").innerHTML = pros_rez.toFixed(2) + "cm";
}

function vol() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    let vol_rez = a*b*c
    document.getElementById("vol_rez").innerHTML = vol_rez.toFixed(2) + "cm";
}

var input = document.getElementById("a");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn1").click();
    }
});

var input1 = document.getElementById("b");
input1.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn1").click();
    }
});

var input2 = document.getElementById("c");
input2.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn1").click();
    }
});

function reset() {
    document.getElementById("op_rez").innerHTML = ""
    document.getElementById("pros_rez").innerHTML = ""
    document.getElementById("vol_rez").innerHTML = ""
}


