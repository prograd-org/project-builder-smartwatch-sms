setInterval(() => {
  let today = new Date();
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("day").textContent = `${day[today.getDay()]}`;
  document.getElementById("timeS").textContent = `${String(
    today.getHours()
  ).padStart(2, "0")}:${String(today.getMinutes()).padStart(2, "0")}`;
  document.getElementById("timeB").textContent = `${String(
    today.getHours()
  ).padStart(2, "0")}:${String(today.getMinutes()).padStart(2, "0")}`;
}, 1000);

let msgList = [
  "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
  "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
  "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
];

let selectMsg = (msgId) => {
  let msg = document.getElementById("showMsg");
  msg.style.display = "block";
  msg.textContent = msgList[msgId - 1];
};
