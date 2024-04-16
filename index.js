var input = document.querySelector("#input");
var btn = document.querySelector("#btn-translate");
var output = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json";
// var serverURL = "https://api.funtranslations.com/translate/minion.json";

function constructURL(input){
    console.log(serverURL + "?" + "text=" + input)
    return serverURL + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("some error occured, "+ error)
    alert("There is something wrong with the server, please try again after some time");
}

function translate(){
    var inputTxt = input.value;
    fetch(constructURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        
        output.innerText = json.contents.translated;
    })
    .catch(errorHandler)
}

btn.addEventListener("click", translate)
