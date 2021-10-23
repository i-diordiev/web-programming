function loadText(path) {
    let request = new XMLHttpRequest();
    request.open("get", path, false);
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            document.getElementById("textfield").innerHTML = request.responseText;
        }
    }
    request.send(null);
}