
let days = 00;
let hours= 00;
let mins = 00;
let secs = 00;


function render (){
    let targetDate = new Date('1 januaury 2022');
    let currentDate = new Date();
    
    let timeRemained = Math.round((targetDate.getTime() - currentDate.getTime())/1000);
    
    days = Math.floor(timeRemained / 86400);
    
    timeRemained %= 86400;
    hours = Math.floor(timeRemained / 3600);
    
    timeRemained %= 3600;
    mins = Math.floor(timeRemained / 60);
    
    timeRemained %= 60;
    
    secs = timeRemained+1;

    if(days < 10 ){
        days = "0" + days;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    
    if (mins < 10) {
      mins = "0" + mins;
    }
    
    if (secs < 10) {
      secs = "0" + secs;
    }
    
    
   

   let day =  document.getElementById('day');
   day.innerHTML = days;
   let hour = document.getElementById("hour");
   hour.innerHTML = hours;
   let min = document.getElementById("min");
   min.innerHTML = mins;
   let sec = document.getElementById("sec");
   sec.innerHTML = secs;
    
    
}

setInterval(render,1000);









