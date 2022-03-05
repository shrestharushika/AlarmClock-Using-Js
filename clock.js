
setAlarm=document.getElementById("setAlarm");

setAlarm.addEventListener("click",alarm);

 //1sec=1000ms

const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
audio.loop = true;

let alarmList=[];

function ring(){
    audio.play();
    // alert('reminder');
}


function time(){

    
    now=new Date();

    var crr_hour=now.getHours();
    var crr_min=now.getMinutes();
    var crr_sec=now.getSeconds();
    if(crr_hour<10){
        crr_hour="0"+crr_hour;
    }

    if(crr_min<10){
        crr_min="0"+crr_min;
    }

    if(crr_sec<10){
        crr_sec="0"+crr_sec;
    }

    let time=crr_hour+":"+crr_min+":"+crr_sec;
    // console.log(time);
    
    document.getElementById("time").innerHTML=time;


    console.log(alarmList);

    if(alarmList.includes(time));{
       ring();
    }
}

setInterval(time,1000);
function alarm(e){

    e.preventDefault();
    var date=document.getElementById("date").value;
    var s_hour=document.getElementById("hour").value;
    var s_min=document.getElementById("min").value;
    var s_sec=document.getElementById("sec").value;
    
    var alarm_time=date+" "+s_hour+":"+s_min+":"+s_sec;
    var alarmT= new Date(alarm_time);

    var hour=alarmT.getHours();
    var min=alarmT.getMinutes();
    var sec=alarmT.getSeconds();

    console.log(hour+" "+sec);
    if(hour<10){
        hour="0"+hour;
    }

    if(min<10){
        min="0"+min;
    }

    if(sec<10){
        sec="0"+sec;
    }
    
    let alarmTime=hour+":"+min+":"+sec;

    console.log(alarmTime);
    
    if(isNaN(alarmTime))
    {
        alarmList.push(alarmTime);
    }

   
   
}