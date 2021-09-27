var labPath = "";

function loadText(path, fileName) {
    var fullPath = path + fileName;
    var request = new XMLHttpRequest();
    request.open("get", fullPath, false);
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            document.getElementById("textfield").innerHTML = request.responseText;
        }
    }
    request.send(null);
}

function test() {
    
}

function loadCurrentSideBar(elementId){
    if(document.getElementById("sideBarLab1").hidden == false){
        document.getElementById("sideBarLab1").hidden = true;
    }
    else if(document.getElementById("sideBarLab2").hidden == false){
        document.getElementById("sideBarLab2").hidden = true;
    }

    document.getElementById(elementId).hidden = false;
}

function chooseLab1() {
    labPath = "lab1/";
    document.getElementById("startString").hidden = true;
    loadCurrentSideBar("sideBarLab1");
    loadText(labPath, "description.html");
}

function chooseLab2() {
    labPath = "lab2/";
    document.getElementById("startString").hidden = "true";
    loadCurrentSideBar("sideBarLab2");
    loadText(labPath, "description.html");
}

function chooseLab3() {
    labPath = "lab3/";
    document.getElementById("startString").hidden = "true";
    loadText(labPath, "description.html");
}

function chooseLab4() {
    labPath = "lab4/";
    document.getElementById("startString").hidden = "true";
    loadText(labPath, "description.html");
}

function chooseLab5() {
    labPath = "lab5/";
    document.getElementById("startString").hidden = "true";
    loadText(labPath, "description.html");
}

function chooseLab6() {
    labPath = "lab6/";
    document.getElementById("startString").hidden = "true";
    loadText(labPath, "description.html");
}

function chooseLab7() {
    labPath = "lab7/";
    document.getElementById("startString").hidden = "true";
    loadText(labPath, "description.html");
}

function chooseLab8() {
    labPath = "lab8/";
    document.getElementById("startString").hidden = "true";
    loadText(labPath, "description.html");
}

function chooseLab9() {
    labPath = "lab9/";
    document.getElementById("startString").hidden = "true";
    loadText(labPath, "description.html");
}