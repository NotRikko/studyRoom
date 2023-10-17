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
    },
    {
        title: "Alone",
        artist: "Musikal",
        song: "Songs/Alone.mp3"
    },
]



let promptInput = document.querySelector("#promptInput");
let timerSet = document.querySelector("#timerSet")
let timer = document.querySelector("#timer")
let promptSubmit = document.querySelector("#promptButton");
let promptWindow = document.querySelector("#prompt");
let currentTask = document.querySelector("#task");
let currentTime = document.querySelector("#time");
let mainContainer = document.querySelector("#mainContainer"); 
let songAudio = document.querySelector("#songAudio");
let songTitle = document.querySelector("#songTitle");
let songArtist = document.querySelector("#songArtist");
let skipButton = document.querySelector("#skip");
let returnButton = document.querySelector("#return");
let volumeControl = document.querySelector("#volumeSlider");
let pausePlay = document.querySelector("#play");
 
function updateTime() {
    let Time = new Date();
    let hours = Time.getHours();
    let AmOrPm = hours >= 12 ? "PM" : "AM";
    hours = (hours % 12) || 12;
    let minutes = Time.getMinutes();
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let displayTime = hours + ":" + formattedMinutes + "" + AmOrPm
   
    currentTime.textContent = displayTime;
}

function setTimer() {

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

let timerDuration = 0;
let actualTimer;

function timerDone() {  
    if (timerDuration ===0) {
    clearInterval(actualTimer);
    timer.textContent = "";
    pauseSong();
    promptWindow.style.display= "flex";
    }
}


function startTimer(){ 
    actualTimer = setInterval(function() {
        if (timerDuration > 0){
            timerDuration--;
            console.log(timerDuration);
            timer.textContent = timerDuration +"" + "min";
        }

    },10000)
};



promptSubmit.addEventListener("click", setTimer);
promptSubmit.addEventListener("click", startTimer);
promptSubmit.addEventListener("click", () =>
    setInterval(timerDone, 3000)
);

function setTimer() {
    clearInterval(actualTimer);
    timerDuration = parseInt(timerSet.value );
    if (isNaN(timerDuration)) {
        timerDuration = 1;
    }
    timer.textContent += timerDuration +"" + "min";
}





function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong();
}

function playPreviousSong() {
    if (currentSongIndex == 0) {
        currentSongIndex = songs.length -1;
        console.log(currentSongIndex);
        playSong();
    }
    else {
        currentSongIndex = (currentSongIndex -1) % songs.length;
        playSong();
    } 
}


skipButton.addEventListener("click", playNextSong);
songAudio.addEventListener('ended', playNextSong);
returnButton.addEventListener("click", playPreviousSong);

volumeControl.addEventListener("change", function(volume) {
    songAudio.volume = volume.target.value /100;
    console.log(songAudio.volume);
})

function continueSong() {
    pausePlay.textContent = "⏹";
    songAudio.play();
    pausePlay.removeEventListener("click", continueSong);
    pausePlay.addEventListener("click", pauseSong);
}

function pauseSong() {
    pausePlay.textContent = "▶";
    songAudio.pause();
    pausePlay.removeEventListener("click", pauseSong)
    pausePlay.addEventListener ("click", continueSong);
}

pausePlay.addEventListener ("click", pauseSong)




