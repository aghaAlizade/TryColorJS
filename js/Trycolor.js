/**
 * Created by Agha Alizade on 8.6.2015.
 */

var firstTime;
firstTime = true;

var red=0;
var green=0;
var blue=0;
var opacity=0;

var incrementValue=10;
var opacityIncrementValue=0.1;

var color="";
var word="background-color:";

var refreshIntervalId=0;

var myBody=document.getElementsByTagName("body");
myBody[0].style.backgroundColor="rgba(100,0,0,0.3)";
var divElement=document.createElement("div");
    divElement.style.height="90px";
    divElement.style.width="200px";
    divElement.style.marginLeft="40%";
    divElement.style.borderRadius="15px";
    divElement.style.backgroundColor="rgba(0,0,0,0.1)";

var OutputValue=document.createElement("input");
    OutputValue.type="text";
    OutputValue.style.borderRadius="10px"
    OutputValue.style.margin="10px";
    OutputValue.style.width="180px";
    divElement.appendChild(OutputValue);

var ContinueButton =document.createElement("input");
    ContinueButton.type="button";
    ContinueButton.value="Start";
    ContinueButton.style.width="90px";
    ContinueButton.style.borderRadius="15px";
    ContinueButton.style.margin="5px";
    ContinueButton.style.marginTop="20px";
    ContinueButton.addEventListener("click",Start);
    divElement.appendChild(ContinueButton);

var StopButton =document.createElement("input");
    StopButton.type="button";
    StopButton.value="Stop";
    StopButton.style.width="90px";
    StopButton.style.borderRadius="15px";
    StopButton.style.margin="5px";
    StopButton.style.marginTop="20px";
    StopButton.addEventListener("click",Stop);
    divElement.appendChild(StopButton);

var info=document.createElement("p");
    info.style.width="500px";
//Burda da mümkünse bir deðiþkenle çalýþmaya özen gösterelim.

    divElement.appendChild(info);

document.body.appendChild(divElement);

function Start(){
    if(firstTime){
        ContinueButton.value="Continue";
        firstTime=false;
    }
    Continue();
}

function Stop(){
    clearInterval(refreshIntervalId);
}

function Continue(){
    refreshIntervalId =setInterval(ChangeColor,100);
}

function ChangeColor(){
    if(red==0 && green==0){
        incrementBlue();
        writeColor();
        if(blue==250){
            incrementGreen();
            resetBlue();
        }
    }
    if(red==0){
        incrementBlue();
        writeColor();
        if(blue==250){
            incrementGreen();
            resetBlue();
        }
        if(green==250)
        {
            incrementRed();
            resetBlue();
            resetGreen();
        }
    }
    else
    {
        incrementBlue();
        writeColor();
        if(blue==250){
            incrementGreen();
            resetBlue();
        }
        if(green==250)
        {
            incrementRed();
            resetBlue();
            resetGreen();
        }
        if(red==250){
            resetBlue();
            reserRed();
            resetGreen();
        }
    }

}

function incrementRed(){
    red+=incrementValue;
}

function decrementRed(){
    red-=incrementValue;
}

function incrementGreen(){
    green+=incrementValue;
}

function decrementGreen(){
    green-=incrementValue;
}

function incrementBlue(){
    blue+=incrementValue;
}

function decrementBlue(){
    blue-=incrementValue;
}

function incrementOpacity(){
    opacity+=opacityIncrementValue;
}

function decrementOpacity(){
    opacity-=opacityIncrementValue;
}

function reserRed(){
    red=0;
}

function resetGreen(){
    green=0;
}

function resetBlue(){
    blue=0;
}

function writeColor(){
    info.innerHTML="background-color:rgba("+red+","+green+","+blue+",1)";
    OutputValue.value="rgba("+red+","+green+","+blue+",1)";
    myBody[0].style.backgroundColor="rgba("+red+","+green+","+blue+",1)";
}