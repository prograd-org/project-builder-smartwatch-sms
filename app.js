function clock(){
    var rtClock=new Date();
    var hours=rtClock.getHours();
    var minutes=rtClock.getMinutes();
    var day=rtClock.getDay();
    if(day==0){
        day="sunday";
    }
    if(day==1){
        day="Monday";
    }
    if(day==2){
        day="Tuesday";
    }
    if(day==3){
        day="Wednesday";
    }
    if(day==4){
        day="Thrusday";
    }
    if(day==5){
        day="Friday";
    }
    if(day==6){
        day="Saturday";
    }
    document.getElementById('clock1').innerHTML=hours+":"+minutes;
    document.getElementById('clock2').innerHTML=hours+":"+minutes;
    document.getElementById('day').innerHTML=day;
    
}
document.querySelector("#message").addEventListener("click",function(){
    
})