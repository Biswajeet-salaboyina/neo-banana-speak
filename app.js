var btnTranslate=document.querySelector("#btn-translate");
var outputDiv=document.querySelector("#output");



btnTranslate.addEventListener("click",clickHandler)

// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL="https://api.funtranslations.com/translate/minion.json"
function getTranslationURL(text)
{
     return serverURL + "?" + "text=" +text
}

function errorhandler(error){
    console.log("error occured", error);
    alert("somethig went wrong")
}
function clickHandler()
{
    // console.log("clicked") ;//call back
    // console.log("input",txtInput.value);
    // outputDiv.innerText="afaagagh "+ txtInput.value;
    var inputText=txtInput.value;
fetch(getTranslationURL(inputText))
.then(response => response.json())
.then(json => {
    var translatedText=json.contents.translated;
    outputDiv.innerText=translatedText;
    })
.catch(errorhandler)
};


var txtInput=document.querySelector("#txt-input");

