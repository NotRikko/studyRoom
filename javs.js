const songs = [
    {
        title: "Night in Kyoto",
        artist: "Avbe",
        song: "Songs/Kyoto.mp3"
    },
    {
        title: "Moonshine",
        artist: "Prigida",
        song: "Songs/Moonshine.mp3"
    }
]



let promptInput = document.querySelector("#promptInput");
let promptSubmit = document.querySelector("#promptButton");
let promptWindow = document.querySelector("#prompt");
let currentTask = document.querySelector("#task");
let currentTime = document.querySelector("#time");
let mainContainer = document.querySelector("#mainContainer");
let songAudio = document.querySelector("#songAudio");
let songTitle = document.querySelector("#songTitle");
let songArtist = document.querySelector("#songArtist");

function updateTime() {
    let Time = new Date();
    let hours = Time.getHours();
    let AmOrPm = hours >= 12 ? "PM" : "AM";
    hours = (hours % 12) || 12;
    let minutes = Time.getMinutes();
    let displayTime = hours + ":" + minutes + "" + AmOrPm
   
    currentTime.textContent = displayTime;
}

let currentSongIndex = 0;
currentSongIndex = Math.floor(Math.random()*songs.length);
console.log(currentSongIndex);

function playSong () {
    let currentSong = songs[currentSongIndex];
    console.log(currentSong);
    songAudio.src = currentSong.song;
    songTitle.textContent = currentSong.title;
    songArtist.textContent = currentSong.artist;
    songAudio.play();

}
promptSubmit.addEventListener("click", () => {
    currentTask.textContent = "Task:" + " " + promptInput.value;
    promptWindow.style.display= "none";
    updateTime();
    playSong();
    mainContainer.style.display = "flex";
    });   
setInterval(updateTime, 1000);



function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong();
}

songAudio.addEventListener('ended', playNextSong);
