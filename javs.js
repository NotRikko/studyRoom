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


let promptQuestion = document.querySelector("#question");
let promptInput = document.querySelector("#promptInput");
let timerSet = document.querySelector("#timerSet");
let timer = document.querySelector("#timer");
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
let materialSymbol = document.querySelector(".playButton");
let darkMode = document.querySelector("#darkMode");
let darkModeIcon = document.querySelector(".darkModeIcon");
let studyGif = document.querySelector("#studyGif");
let studyGifContainer = document.querySelector("#studyGifContainer");
 
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

    },60000)
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
    materialSymbol.textContent = "pause";
    songAudio.play();
    pausePlay.removeEventListener("click", continueSong);
    pausePlay.addEventListener("click", pauseSong);
}

function pauseSong() {
    materialSymbol.textContent = "play_arrow";
    songAudio.pause();
    pausePlay.removeEventListener("click", pauseSong)
    pausePlay.addEventListener ("click", continueSong);
}

pausePlay.addEventListener ("click", pauseSong);

let pageBody = document.querySelector("#pageBody");

function switchDark() {
    darkModeIcon.textContent = "light_mode";
    darkModeIcon.style.color = "white";
    pageBody.style.backgroundColor = "rgb(25, 24, 34)";
    pageBody.style.color = "white";
    studyGifContainer.style.borderColor = "white";
    studyGif.src = "https://64.media.tumblr.com/ad9042c6fd131ce9b5c0fdae39a91102/tumblr_ouuiq8cdJK1tlgv32o1_540.gif";
    materialSymbol.style.color = "white";
    skipButton.style.color = "white";
    returnButton.style.color = "white";
    promptWindow.style.borderColor = "white";
    promptWindow.style.color= "white";
    promptInput.style.borderColor= "white";
    promptSubmit.style.borderColor = "white";
    timerSet.style.borderColor = "white";
    promptQuestion.style.color = "white";
    promptInput.style.color = "white";
    timerSet.style.color = "white";
    promptSubmit.style.color = "white";
  
    darkMode.removeEventListener("click",switchDark);
    darkMode.addEventListener("click", switchLight);
}

function switchLight() {
    darkModeIcon.textContent = "dark_mode";
    darkModeIcon.style.color = "black";
    pageBody.style.backgroundColor = "rgb(168, 214, 223)";
    pageBody.style.color = "black";
    studyGifContainer.style.borderColor = "black";
    studyGif.src = "https://64.media.tumblr.com/d3781c73ba77c36791f0cd0a4134aa9d/tumblr_ouuryxTxBT1tlgv32o2_540.gif"
    materialSymbol.style.color = "black";
    skipButton.style.color = "black";
    returnButton.style.color = "black";
    promptWindow.style.borderColor = "black";
    promptWindow.style.color= "black";
    promptInput.style.borderColor= "black";
    promptSubmit.style.borderColor = "black";
    timerSet.style.borderColor = "black";
    promptQuestion.style.color = "black";
    promptInput.style.color = "black";
    timerSet.style.color = "black";
    promptSubmit.style.color = "black";
    darkMode.removeEventListener("click",switchLight);
    darkMode.addEventListener("click", switchDark);
}

darkMode.addEventListener("click",switchLight);




