const playbtn = document.getElementById('start');
const pausebtn = document.getElementById('stop');
const restartbtn = document.getElementById('restart');
const textbox = document.getElementById('text');

let time ={'minute': 0,'second' : 0, 'millisecond' : 0};
let interval =null;

function displaypause(){
    playbtn.style.display= "none";
    pausebtn.style.display = "flex";
}

function hidepause(){
    playbtn.style.display= "flex";
    pausebtn.style.display = "none";
}


function timeshow(minute,second,millisecond){
    let min,sec,ms;
    if(millisecond < 10){
        ms = '0'+millisecond;
    }else{
        ms = millisecond;
    }
    if(second < 10){
        sec = '0'+second;
    }else{
        sec = second;
    }
    if(minute < 10){
        min = '0'+minute;
    }else{
        min = minute;
    }
    textbox.innerHTML = min + ' : ' + sec + ' : ' + ms;    
}
function start(){
    interval = setInterval(()=>{
        if(time.millisecond == 99){
            time.second++;
            time.millisecond = 0;    
        }else if(time.second > 59){
            time.minute++;
            time.second=0;
            time.millisecond++;
        }
        else{
            time.millisecond++;
        }
        timeshow(time.minute,time.second,time.millisecond);  
    },10);

    displaypause();
}

function stop(){
    clearInterval(interval);
    hidepause();
}

function restart(){
    clearInterval(interval);
    time.minute = 0;
    time.second = 0;
    time.millisecond = 0;
    timeshow(time.minute,time.second,time.millisecond);
    hidepause();
}

playbtn.addEventListener("click",start);

pausebtn.addEventListener("click",stop);

restartbtn.addEventListener("click",restart);