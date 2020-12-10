function getCurrentDate(){
    var curDate=new Date();
    var day= curDate.getDay();
    var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; 
    
    var hours = curDate.getHours(); 
    var minutes = curDate.getMinutes(); 
    minutes = minutes < 10 ? '0' + minutes : minutes; 
    var myTime = hours + " " + " : " + minutes;
    document.getElementById("smartTime").innerHTML = myTime; 
    document.getElementById("smartTimeBig").innerHTML = myTime;
    document.getElementById("smartDay").innerHTML = weekday[day];
}
function showMessages(){
    document.getElementById("displayBox").style.cssText = 'grid-area: 2/1/span 2/span 1; border-radius: 60px; width: 80%; margin-left: 90px; background-color: rgb(49, 48, 48);';
    document.getElementById("displayBox").innerHTML= "<div id='message1' onclick='showMessage1()'>Java</div></br><div id='message2' onclick='showMessage2()'>Ruby</div></br><div id='message3' onclick='showMessage3()'>Python</div>";
   // document.getElementById("displayBox").innerHTML = "Ruby";

}
function showMessage1(){
    document.getElementById("displayBox").innerHTML ='Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.';
}
function showMessage2(){
    document.getElementById("displayBox").innerHTML = 'Ruby is an interpreted, high-level, general-purpose programming language. It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in Japan.';
}
function showMessage3(){
    document.getElementById("displayBox").innerHTML='Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.';
}