let stop_btn=document.getElementById("stop-btn");
stop_btn.addEventListener("click", ()=> {
    cancion.pause();
    cancion.currentTime=0;
} )

let play_btn=document.getElementById("play-btn");
play_btn.addEventListener("click", ()=> {
    cancion.play();
    
} )

let pause_btn=document.getElementById("pause-btn");
pause_btn.addEventListener("click", ()=> {
    cancion.pause();
    
} )

