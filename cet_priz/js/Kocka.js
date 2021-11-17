function oplosje(){
    let a = document.getElementById("a").value;
    let h = document.getElementById("h").value;

    let p = 4*a*h

    let op_rez = 2*Math.pow(a, 2) + p
    document.getElementById("op_rez").innerHTML = op_rez.toFixed(2) + "cm";
}

function vol() {
    let a = document.getElementById("a").value;
    let h = document.getElementById("h").value;

    let vol_rez = Math.pow(a,2)*h
    document.getElementById("vol_rez").innerHTML = vol_rez.toFixed(2) + "cm";
}

var input = document.getElementById("a");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn1").click();
    }
});

var input1 = document.getElementById("h");
input1.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("btn1").click();
    }
});

function reset() {
    document.getElementById("op_rez").innerHTML = ""
    document.getElementById("vol_rez").innerHTML = ""
}


