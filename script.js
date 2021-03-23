const invalidInputString = "*Please input a value";

const decButton = document.getElementById("dec-button");
const binButton = document.getElementById("bin-button");

decButton.addEventListener("click", function () {
    const decimalInputString = document.getElementById("dec-input").value;
    const decBinResult = document.getElementById("dec-bin-result");
    const decHexResult = document.getElementById("dec-hex-result");
    let invalidWarning = document.getElementById("invalid-dec");

    if (decimalInputString == "") {
        invalidWarning.innerText = invalidInputString;
        return;
    }

    invalidWarning.innerText = "";

    let decValue = parseInt(decimalInputString);

    decBinResult.innerText = decValue.toString(2);
    decHexResult.innerText = decValue.toString(16);
});

binButton.addEventListener("click", function () {
    const binaryInputString = document.getElementById("bin-input").value;
    const binDecResult = document.getElementById("bin-dec-result");
    const binHexResult = document.getElementById("bin-hex-result");
    let invalidWarning = document.getElementById("invalid-bin");

    if (binaryInputString == "") {
        invalidWarning.innerText = invalidInputString;
        return;
    }

    invalidWarning.innerText = "";
    let decValue = 0;
    let pow = 0;
    for (let i = binaryInputString.length - 1; i >= 0; i--) {
        if (binaryInputString.charAt(i) == "1") {
            decValue += Math.pow(2, pow);
        }
        pow++;
    }
    binDecResult.innerText = decValue.toString();
    binHexResult.innerText = decValue.toString(16);
});
