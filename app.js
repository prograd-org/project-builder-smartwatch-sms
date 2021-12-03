//time
var everyday = new Date();
var hrs = everyday.getHours();
if(hrs<10){
    hrs=`0${hrs}`;
}
var min = everyday.getMinutes();
if(min<10){
    min=`0${min}`;
}
var time = hrs + " : " + min;
document.getElementById('firsttime').innerHTML = time;

//msg
document.getElementById("msg1").addEventListener("click",function(){
    var msg1 = document.getElementById("msg1");
    msg1.innerHTML="HTML is a Hypertext Markup language used to create web pages.";
    msg1.style.display="block";
    var msg2 = document.getElementById("msg2");
    msg2.style.display="none";
    var msg3 = document.getElementById("msg3");
    msg3.style.display="none";
    var mess = document.getElementById("msg");
    mess.style.display="none";
    mess.style.display="flex";
})
document.getElementById("msg2").addEventListener("click",function(){
    var msg1 = document.getElementById("msg1");
    msg1.style.display="none";
    var msg2 = document.getElementById("msg2");
    msg2.innerHTML="CSS is the language we use to style an HTML document.";
    msg2.style.display="block";
    var msg3 = document.getElementById("msg3");
    msg3.style.display="none";
    var mess = document.getElementById("msg");
    mess.style.display="none";
    mess.style.display="flex";
})
document.getElementById("msg3").addEventListener("click",function(){
    var msg1 = document.getElementById("msg1");
    msg1.style.display="none";
    var msg2 = document.getElementById("msg2");
    msg2.style.display="none";
    var msg3 = document.getElementById("msg3");
    msg3.innerHTML="Java is a high level programming language developed by Sun Microsystems.";
    msg3.style.display="block";
    var mess = document.getElementById("msg");
    mess.style.display="none";
    mess.style.display="flex";
})