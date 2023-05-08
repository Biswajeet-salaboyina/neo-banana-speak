var btnTranslate=document.querySelector("#btn-translate");

btnTranslate.addEventListener("click",clickHandler)

function clickHandler()
{
    console.log("clicked") ;//call back
    console.log("input",txtInput.value);
};

var txtInput=document.querySelector("#txt-input");

