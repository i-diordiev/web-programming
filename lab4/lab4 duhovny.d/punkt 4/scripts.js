function getRandom() {
    return Math.floor(Math.random() * 50 - Math.random() * 50);
}


function loadNumber() {
    let number = parseInt(document.getElementById("input-form").value);
    let array = [];
    for (let i = 0; i < number; i++) {
        array.push(getRandom());
    }
    document.getElementById("input-form").readOnly = true;
    document.querySelector('button').disabled = true;

    let arrString = " ";
    array.forEach(element => arrString += element + " ");
    document.getElementById("start-array").innerText += arrString;

    let maxEl = 0;
    for (let i = 0; i < number; i++) {
        if(array[i] > maxEl){
            maxEl = array[i];
        }    
    }

    let changedArray = [];
    array.forEach(element => changedArray += (maxEl * element) + " ");
    document.getElementById("changed-array").innerText += (" " + changedArray);

    const insertionSort = arr => {
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
    };

    insertionSort(array);
    arrString = "";
    array.forEach(element => arrString += element + " ");
    document.getElementById("sorted-array").innerText += (" " + arrString);
}