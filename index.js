const btnEl = document.querySelector(".btn");

const trailerEl = document.querySelector(".trailer-container");

const iconEl = document.querySelector(".close-icon");

const videoEl = document.querySelector(".video");

btnEl.addEventListener("click",()=>{
    trailerEl.classList.remove("active");
})

iconEl.addEventListener("click",()=>{
    trailerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})