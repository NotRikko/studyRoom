let promptInput = document.querySelector("#promptInput");
let promptSubmit = document.querySelector("#promptButton");
let promptWindow = document.querySelector("#prompt");
let currentTask = document.querySelector("#task");
let currentTime = document.querySelector("#time");

function updateTime() {
    let Time = new Date();
    let hours = Time.getHours();
    let AmOrPm = hours >= 12 ? "PM" : "AM";
    hours = (hours % 12) || 12;
    let minutes = Time.getMinutes();
    let displayTime = hours + ":" + minutes + "" + AmOrPm
   
    currentTime.textContent = displayTime;
}
promptSubmit.addEventListener("click", () => {
    currentTask.textContent = "Task:" + " " + promptInput.value;
    promptWindow.style.display="none"
    updateTime();
    });   
setInterval(updateTime, 1000);