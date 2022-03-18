var updateTime = setInterval(showTimeDay, 1000); 



function showTimeDay() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() ; 

    document.getElementById('topTime').innerHTML = time

    document.getElementById('time').innerHTML = time; 

    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    document.getElementById('day').innerHTML = weekDays[today.getDay()] 
}


let message = document.getElementById('messageDisplay')
let innerMsg = document.getElementById('innermessage')
let hr = document.createElement('hr')
var msg = document.createElement('p')


function showMsg() {
    document.getElementById('timeDisplay').style.display = 'none'
    document.getElementById('messageDisplay').style.display = 'block'
    document.getElementById('music').style.color = 'gray'
    document.getElementById('clock').style.color = 'gray'
}

function showJavaMsg() {
    document.getElementById('btnMessage').disabled = true
    message.style.display = 'none'
    innerMsg.style.display = 'block'

   
    msg.innerText = "Java is a high-level programming language developed by Sun Microsystems."
    innerMsg.appendChild(msg)
    innerMsg.appendChild(hr)

}
function showHtmlMsg() {
    msg.innerText=''
    document.getElementById('btnMessage').disabled = true
    message.style.display = 'none'
    innerMsg.style.display = 'block'
    
    
    msg.innerText = "HTML stands for Hyper Text Markup Language. HTML describes the structure of a Web page."
    innerMsg.appendChild(msg)
    innerMsg.appendChild(hr)
}
function showCssMsg() {
    msg.innerText = ''
    document.getElementById('btnMessage').disabled = true
    message.style.display = 'none'
    innerMsg.style.display = 'block'
    
    
    msg.innerText = "Css is a cascading style sheet used for styling purpose."
    innerMsg.appendChild(msg)
    innerMsg.appendChild(hr)
}


function showWatch() {
    msg.innerText = ''
    document.getElementById('btnMessage').disabled = false
    document.getElementById('messageDisplay').style.display = 'none'
    innerMsg.style.display = 'none'
    document.getElementById('timeDisplay').style.display = 'block'
    showTimeDay()
    document.getElementById('music').style.color = 'white'
    document.getElementById('clock').style.color = 'white'
}
