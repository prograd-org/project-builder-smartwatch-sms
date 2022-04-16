function time() {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let day = date.getDay()


    hr = hr < 10 ? "0" + hr : hr
    min = min < 10 ? "0" + min : min
    let timeformat = hr + ":" + min

    document.querySelector(".smalltime").innerHTML = timeformat
    document.querySelector(".time").innerHTML = timeformat
    document.querySelector(".day").innerHTML = days[day]
}
let timer = setInterval(time, 1000)
document.querySelector(".message").addEventListener("click", displaymessage)
let messageclick = false

function displaymessage() {
    messageclick = !messageclick
    if (messageclick) {
        let screen = document.querySelector(".times")
        let p = document.createElement("p")
        screen.style.backgroundColor = "white"
        screen.style.color = "black"
        screen.style.border = "solid "
        let span = document.querySelectorAll(".times span")
        span.forEach((ele) => ele.style.display = "none")

        p.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        screen.appendChild(p)
    }
    else {
        let screen = document.querySelector(".times")
        let p = document.querySelector(".times p")

        screen.style.backgroundColor = "black"
        screen.style.color = "white"
        screen.style.border = "none "
        let span = document.querySelectorAll(".times span")
        span.forEach((ele) => ele.style.display = "block")
        screen.removeChild(p)
    }
} 