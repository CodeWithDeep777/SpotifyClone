console.log("Welcome to Spotify");
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
//let songItems = Arrayy.from(document.getElementByClassName('songItem'));

let songs =[
    {songName: "Farishtey", filePath: "SpotifyClone/1.mp3", coverPath: "Farishtey-1.jpg"},
    {songName: "Aa Chaliye", filePath: "SpotifyClone/2.mp3", coverPath: "2cover.jpg"},
    {songName: "Udd Gya", filePath: "SpotifyClone/3.mp3", coverPath: "3cover.jpg"},
    {songName: "Basically", filePath: "SpotifyClone/4.mp3", coverPath: "4cover.jpg"},
    {songName: "Jannat", filePath: "SpotifyClone/5.mp3", coverPath: "4cover.jpg"},
    {songName: "Meri Zuban", filePath: "SpotifyClone/6.mp3", coverPath: "6cover.jpg"},
    {songName: "Mera Na", filePath: "SpotifyClone/7.mp3", coverPath: "7cover.jpg"},
]/*
songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
})*/


masterPlay.addEventListener('click',()=>
{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-sharp fa-solid fa-circle-play');
        masterPlay.classList.add('fa-solid fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-circle-pause');
        masterPlay.classList.add('fa-sharp fa-solid fa-circle-play');
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    
// Update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress; 

})
myProgressBar.addEventListener('change', ()=>{
audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlay = () =>
{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-solid fa-circle-pause');
        element.classList.remove('fa-sharp fa-solid fa-circle-play');
    }
)}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' ,(e)=>
    {
        makeAllPlay();
        e.target.classList.remove('fa-sharp fa-solid fa-circle-play');
        e.target.classList.add('fa-solid fa-circle-pause')
        audioElement.src = 'SpotifyClone/3.mp3';
        audioElement.currentTime=0;
        audioElement.play();

    })
})