const videoButton = document.getElementById('videoButton')
const audioButton = document.getElementById('audioButton')
let video = 0, audio = 0

videoButton.addEventListener('click', ()=>{
    if(!video){
        videoButton.innerHTML = '<i class="fa-solid fa-video"></i>'
        videoButton.style.backgroundColor = 'black'
        video ^= 1
    } else{
        videoButton.innerHTML = '<i class="fa-solid fa-video-slash"></i>'
        videoButton.style.backgroundColor = 'red'
        video ^= 1
    }
})

audioButton.addEventListener('click', ()=>{
    if(!audio){
        audioButton.innerHTML = '<i class="fa-solid fa-microphone"></i>'
        audioButton.style.backgroundColor = 'black'
        audio ^= 1
    } else{
        audioButton.innerHTML = '<i class="fa-solid fa-microphone-slash"></i>'
        audioButton.style.backgroundColor = 'red'
        audio ^= 1
    }
})