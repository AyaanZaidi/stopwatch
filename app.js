var hour = 0;
var min = 0;
var sec = 0;
var milisec = 0;

var hrTimer = document.getElementById("hr")
var minTimer = document.getElementById("min")
var secTimer = document.getElementById("sec")
var miliTimer = document.getElementById("milisec")

var interval;


function timer(){
    milisec++
    if(milisec == 10){
        milisec = 0
        sec++
        if(sec == 60){
            sec = 0
            min++
        }
        if(min == 60){
            min = 0
            hour++
        }
    }
    miliTimer.innerHTML = milisec
    secTimer.innerHTML = sec
    minTimer.innerHTML = min
    hrTimer.innerHTML = hour}

function startTimer(){
    interval = setInterval(function(){
        timer()
    },1000)
}

function stopTimer(){
    clearInterval(interval)
}

function resetTimer(){
    hour = 0
    min = 0
    sec = 0
    milisec = 0
    miliTimer.innerHTML = milisec
    secTimer.innerHTML = sec
    minTimer.innerHTML = min
    hrTimer.innerHTML = hour
    stopTimer()
}