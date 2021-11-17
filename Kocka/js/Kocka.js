function oplosje(){
    let num1 = document.getElementById("numb1").value;

    let op_rez = 6*Math.pow(num1, 2)
    document.getElementById("op_rez").innerHTML = op_rez.toFixed(2) + "cm";
}

function plos_diajg() {
    let num1 = document.getElementById("numb1").value;

    let plos_rez = num1*Math.sqrt(2)
    document.getElementById("plos_rez").innerHTML = plos_rez.toFixed(2) + "cm";
}

function pros_diajg() {
    let num1 = document.getElementById("numb1").value;

    let pros_rez = num1*Math.sqrt(3)
    document.getElementById("pros_rez").innerHTML = pros_rez.toFixed(2) + "cm";
}

function vol() {
    let num1 = document.getElementById("numb1").value;

    let vol_rez = Math.pow(num1,3)
    document.getElementById("vol_rez").innerHTML = vol_rez.toFixed(2) + "cm";
}

var input = document.getElementById("numb1");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn1").click();
        document.getElementById("btn2").click();
        document.getElementById("btn3").click();
        document.getElementById("btn4").click();
    }
});

function reset() {
    document.getElementById("op_rez").innerHTML = ""
    document.getElementById("plos_rez").innerHTML = ""
    document.getElementById("pros_rez").innerHTML = ""
    document.getElementById("vol_rez").innerHTML = ""
}


