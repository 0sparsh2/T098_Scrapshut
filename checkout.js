window.onload = function () {
    multi()
};

function multi() {
    price = document.getElementsByClassName("price");
    var prices = []
    quantity = document.getElementsByClassName("quantity");
    var quantities = []

    finalprice = document.getElementsByClassName("finalprice");
    for (var j = 0; j < price.length; j = j + 1) {
        prices[j] = price[j].innerHTML;
        quantities[j] = quantity[j].innerHTML;
        finalprice[j].innerHTML = prices[j] * quantities[j];

    }
    console.log(prices[0] * quantities[0]);
    finalvalue()
}




function add1() {
    x = parseInt(document.getElementById("q1").innerHTML);
    y = x + 1;
    document.getElementById("q1").innerHTML = y;
    multi()
}

function add2() {
    x = parseInt(document.getElementById("q2").innerHTML);
    y = x + 1;
    document.getElementById("q2").innerHTML = y;
    multi()
}

function add3() {
    x = parseInt(document.getElementById("q3").innerHTML);
    y = x + 1;
    document.getElementById("q3").innerHTML = y;
    multi()
}

function add4() {
    x = parseInt(document.getElementById("q4").innerHTML);
    y = x + 1;
    document.getElementById("q4").innerHTML = y;
    multi()
}

function add5() {
    x = parseInt(document.getElementById("q5").innerHTML);
    y = x + 1;
    document.getElementById("q5").innerHTML = y;
    multi()
}

function add6() {
    x = parseInt(document.getElementById("q6").innerHTML);
    y = x + 1;
    document.getElementById("q6").innerHTML = y;
    multi()
}

function add7() {
    x = parseInt(document.getElementById("q7").innerHTML);
    iy = x + 1;
    document.getElementById("q7").innerHTML = y;
    multi()
}

function add8() {
    x = parseInt(document.getElementById("q8").innerHTML);
    y = x + 1;
    document.getElementById("q8").innerHTML = y;
    multi()
}

function sub1() {
    x = parseInt(document.getElementById("q1").innerHTML);
    if (x > 0) {
        y = x - 1;
    }

    document.getElementById("q1").innerHTML = y;
    multi()
}

function sub2() {
    x = parseInt(document.getElementById("q2").innerHTML);
    if (x > 0) {
        y = x - 1;
    }

    document.getElementById("q2").innerHTML = y;
    multi()
}

function sub3() {
    x = parseInt(document.getElementById("q3").innerHTML);
    if (x > 0) {
        y = x - 1;
    }

    document.getElementById("q3").innerHTML = y;
    multi()
}

function sub4() {
    x = parseInt(document.getElementById("q4").innerHTML);
    if (x > 0) {
        y = x - 1;
    }

    document.getElementById("q4").innerHTML = y;
    multi()
}

function sub5() {
    x = parseInt(document.getElementById("q5").innerHTML);
    if (x > 0) {
        y = x - 1;
    }

    document.getElementById("q5").innerHTML = y;
    multi()
}

function sub6() {
    x = parseInt(document.getElementById("q6").innerHTML);
    if (x > 0) {
        y = x - 1;
    }

    document.getElementById("q6").innerHTML = y;
    multi()
}

function sub7() {
    x = parseInt(document.getElementById("q7").innerHTML);
    if (x > 0) {
        y = x - 1;
    }

    document.getElementById("q7").innerHTML = y;
    multi()
}

function sub8() {
    x = parseInt(document.getElementById("q8").innerHTML);
    if (x > 0) {
        y = x - 1;
    }

    document.getElementById("q8").innerHTML = y;
    multi()
}


function finalvalue() {
    finalprice = document.getElementsByClassName("finalprice");
    var x = 0;
    var z = 0;
    var finalprices = []
    for (var j = 0; j < finalprice.length; j = j + 1) {
        finalprices[j] = finalprice[j].innerHTML;
        x = x + Number(finalprices[j]);
        z = x * 1.18;
    }
    console.log(x)
    document.getElementById("subtotal").innerHTML = x;
    document.getElementById("valtax").innerHTML = z;
}