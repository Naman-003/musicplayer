console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {songName: "Salam-e-Ishq",filePath: "song/1.mp3", coverPath: "covers/10.jpg"},
    {songName: "Salam-e-Ishq",filePath: "song/1.mp3", coverPath: "covers/10.jpg"},
    {songName: "Salam-e-Ishq",filePath: "song/1.mp3", coverPath: "covers/10.jpg"},
    {songName: "Salam-e-Ishq",filePath: "song/1.mp3", coverPath: "covers/10.jpg"},
    {songName: "Salam-e-Ishq",filePath: "song/1.mp3", coverPath: "covers/10.jpg"},
    {songName: "Salam-e-Ishq",filePath: "song/1.mp3", coverPath: "covers/10.jpg"},
]

//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})
//Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //Update Seekbar
})