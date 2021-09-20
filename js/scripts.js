var labPath = "lab1/";

function loadText(path, fileName) {
    var fullpath = path + fileName;
    $("textfield").load(fullpath);
}

function showDescription() {
    loadText(labPath, "description.txt");
}

function showTheme() {
    var element = document.getElementById("stringfortext");
    element.innerText = "THEME";
}

function showStructure() {
    var element = document.getElementById("stringfortext");
    element.innerText = "STRUCTURE";
}

function showHtmlTableCode() {
    var element = document.getElementById("stringfortext");
    element.innerText = "TABLE CODE";
}

function showHtmlFormCode() {
    var element = document.getElementById("stringfortext");
    element.innerText = "FORM CODE";
}

function showHtmlImageCode() {
    var element = document.getElementById("stringfortext");
    element.innerText = "IMAGE CODE";
}

function showConclusion() {
    var element = document.getElementById("stringfortext");
    element.innerText = "CONCLUSION";
}

function chooseLab1() {
    labPath = "lab1/";
    document.getElementById("startString").hidden = "true";
}

            function chooseLab2() {
                labPath = "lab2/";
                document.getElementById("startString").hidden = "true";
            }

            function chooseLab3() {
                labPath = "lab3/";
                document.getElementById("startString").hidden = "true";
            }

            function chooseLab4() {
                labPath = "lab4/";
                document.getElementById("startString").hidden = "true";
            }

            function chooseLab5() {
                labPath = "lab5/";
                document.getElementById("startString").hidden = "true";
            }

            function chooseLab6() {
                labPath = "lab6/";
                document.getElementById("startString").hidden = "true";
            }

            function chooseLab7() {
                labPath = "lab7/";
                document.getElementById("startString").hidden = "true";
            }

            function chooseLab8() {
                labPath = "lab8/";
                document.getElementById("startString").hidden = "true";
            }

            function chooseLab9() {
                labPath = "lab9/";
                document.getElementById("startString").hidden = "true";
            }