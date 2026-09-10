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
// CALCULATOR
// =========================

let calculatorValue = "0";


function openCalculator() {

    document
        .getElementById("calculatorPopup")
        .classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeCalculator() {

    document
        .getElementById("calculatorPopup")
        .classList.remove("show");

    document.body.style.overflow = "";
}


function updateCalculator() {

    document.getElementById("calcDisplay").textContent =
        calculatorValue;
}


function calculatorInput(value) {

    // Plus / Minus
    if (value === "+/-") {

        if (calculatorValue !== "0") {

            if (calculatorValue.startsWith("-")) {

                calculatorValue =
                    calculatorValue.slice(1);

            } else {

                calculatorValue =
                    "-" + calculatorValue;
            }
        }
    }


    // Percentage
    else if (value === "%") {

        calculatorValue =
            String(parseFloat(calculatorValue) / 100);
    }


    // Numbers / operators
    else {

        if (calculatorValue === "0") {

            calculatorValue = value;

        } else {

            calculatorValue += value;
        }
    }


    updateCalculator();
}


// Clear calculator

function clearCalculator() {

    calculatorValue = "0";

    updateCalculator();
}


// Calculate

function calculateResult() {

    try {

        calculatorValue =
            String(
                Function(
                    "return " + calculatorValue
                )()
            );

    } catch {

        calculatorValue = "Error";
    }


    updateCalculator();
}


// =========================
// CLOSE POPUPS BY CLICKING OUTSIDE
// =========================

const loginPopup =
    document.getElementById("loginPopup");


const calculatorPopup =
    document.getElementById("calculatorPopup");


if (loginPopup) {

    loginPopup.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {

                closeLogin();
            }
        }
    );
}


if (calculatorPopup) {

    calculatorPopup.addEventListener(
        "click",
        function (event) {

            if (event.target === this) {

                closeCalculator();
            }
        }
    );
}


// =========================
// DARK MODE
// =========================

const sunButton =
    document.querySelector(".sun");


if (sunButton) {

    sunButton.addEventListener(
        "click",
        function () {

            document.body.classList.toggle(
                "dark-mode"
            );


            if (
                document.body.classList.contains(
                    "dark-mode"
                )
            ) {

                sunButton.textContent = "☾";

            } else {

                sunButton.textContent = "☼";
            }
        }
    );
}


// =========================
// SCROLL ANIMATION
// =========================

const steps =
    document.querySelectorAll(".step");


const howSection =
    document.querySelector(".how-it-works");


const teamSection =
    document.querySelector(".team");


function checkAnimation() {

    const screenHeight =
        window.innerHeight;


    // =========================
    // HOW IT WORKS
    // =========================

    if (howSection) {

        const howPosition =
            howSection.getBoundingClientRect().top;


        if (howPosition < screenHeight - 100) {

            howSection.classList.add("animate");
        }
    }


    // Individual steps

    steps.forEach(function (step) {

        const stepPosition =
            step.getBoundingClientRect().top;


        if (stepPosition < screenHeight - 80) {

            step.classList.add("show");
        }
    });


    // =========================
    // TEAM
    // =========================

    if (teamSection) {

        const teamPosition =
            teamSection.getBoundingClientRect().top;


        if (teamPosition < screenHeight - 100) {

            teamSection.classList.add("show");
        }
    }
}


// Scroll

window.addEventListener(
    "scroll",
    checkAnimation
);


// Initial check

checkAnimation();


// =========================
// ESC KEY TO CLOSE POPUP
// =========================

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeLogin();

            closeCalculator();
        }
    }
);