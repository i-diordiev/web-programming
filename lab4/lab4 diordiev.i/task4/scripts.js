function getRandom() {
    return Math.floor(Math.random() * 1000 - Math.random() * 1000);
}


function loadNumber() {
    let number = parseInt(document.getElementById("input-form").value);
    let array = [];
    for (let i = 0; i < number; i++) {
        array.push(getRandom());
    }

    let arrString = "";
    array.forEach(element => arrString += element + " ");
    document.getElementById("start-array").innerText = arrString;

    let sum = 0;
    for (let i = 0; i < number; i += 2) {
        sum += array[i];
    }
    document.getElementById("sum").innerText += sum;

    let dobutok = 1;
    for (let i = 1; i < number; i++) {
        if (array[i] < 0) {
            dobutok *= array[i];
        }
    }
    document.getElementById("product").innerText += dobutok;

    let max = 0;
    let maxIndex = 0;
    for (let i = 0; i < number; i++) {
        if (array[i] > max) {
            max = array[i];
            maxIndex = i;
        }
    }
    maxIndex++;
    document.getElementById("max").innerText += max;
    document.getElementById("max-index").innerText += maxIndex;

    let min = 0;
    let minIndex = 0;
    for (let i = 0; i < number; i += 2) {
        if (array[i] < min) {
            min = array[i];
            minIndex = i;
        }
    }
    minIndex++;
    document.getElementById("min").innerText += min;
    document.getElementById("min-index").innerText += minIndex;

    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    arrString = "";
    array.forEach(element => arrString += element + " ");
    document.getElementById("sorted-array").innerText = arrString;
}