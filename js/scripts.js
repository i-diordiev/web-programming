function loadText(path) {
    var request = new XMLHttpRequest();
    request.open("get", path, false);
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            document.getElementById("textfield").innerHTML = request.responseText;
        }
    }
    request.send(null);
}