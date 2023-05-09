var btnTranslate=document.querySelector("#btn-translate");
var outputDIv=document.querySelector("#output");



btnTranslate.addEventListener("click",clickHandler)

function clickHandler()
{
    // console.log("clicked") ;//call back
    // console.log("input",txtInput.value);
    outputDIv.innerText="afaagagh "+ txtInput.value;
};

var txtInput=document.querySelector("#txt-input");

