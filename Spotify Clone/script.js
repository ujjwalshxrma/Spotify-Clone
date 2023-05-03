console.log("Welcome to Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('Call Out My Name - The Weeknd.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
      {songName: "Alone-Weekend", filepath:"Call Out My Name - The Weeknd.mp3", coverPath:"covers/cover.jpg"},
      {songName: "Alone-Weekend", filepath:"Call Out My Name - The Weeknd.mp3", coverPath:"covers/cover.jpg"},
      {songName: "Alone-Weekend", filepath:"Call Out My Name - The Weeknd.mp3", coverPath:"covers/cover.jpg"},
      {songName: "Alone-Weekend", filepath:"Call Out My Name - The Weeknd.mp3", coverPath:"covers/cover.jpg"},
      {songName: "Alone-Weekend", filepath:"Call Out My Name - The Weeknd.mp3", coverPath:"covers/cover.jpg"},
      {songName: "Alone-Weekend", filepath:"Call Out My Name - The Weeknd.mp3", coverPath:"covers/cover.jpg"},
      {songName: "Alone-Weekend", filepath:"Call Out My Name - The Weeknd.mp3", coverPath:"covers/cover.jpg"},
]

//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
      if(audioElement.paused || audioElement.currentTime<=0){
           audioElement.play();
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');
           gif.style.opacity = 1;
      }
      else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
      }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
        console.log('timeupdate');
        //update Seekbar
      progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
      console.log(progress);
} )