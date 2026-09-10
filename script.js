// =========================
// LOGIN POPUP
// =========================

function openLogin() {
    document.getElementById("loginPopup").classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeLogin() {
    document.getElementById("loginPopup").classList.remove("show");
    document.body.style.overflow = "";
}


// =========================
// CALCULATOR POPUP
// =========================

let calculatorValue = "0";

function openCalculator() {
    document.getElementById("calculatorPopup").classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeCalculator() {
    document.getElementById("calculatorPopup").classList.remove("show");
    document.body.style.overflow = "";
}

function updateCalculator() {
    document.getElementById("calcDisplay").textContent = calculatorValue;
}

function calculatorInput(value) {

    if (value === "+/-") {

        if (calculatorValue !== "0") {
            calculatorValue = calculatorValue.startsWith("-")
                ? calculatorValue.slice(1)
                : "-" + calculatorValue;
        }

    } 
    
    else if (value === "%") {

        calculatorValue = String(
            parseFloat(calculatorValue) / 100
        );

    } 
    
    else {

        if (calculatorValue === "0") {
            calculatorValue = value;
        } 
        else {
            calculatorValue += value;
        }
    }

    updateCalculator();
}

function clearCalculator() {
    calculatorValue = "0";
    updateCalculator();
}

function calculateResult() {

    try {

        calculatorValue = String(
            Function("return " + calculatorValue)()
        );

    } 
    
    catch {

        calculatorValue = "Error";
    }

    updateCalculator();
}


// =========================
// CLOSE POPUP BY CLICKING OUTSIDE
// =========================

document.getElementById("loginPopup").addEventListener("click", function(event) {

    if (event.target === this) {
        closeLogin();
    }

});

document.getElementById("calculatorPopup").addEventListener("click", function(event) {

    if (event.target === this) {
        closeCalculator();
    }

});