// const constraints = {
//     'video': true,
//     'audio': true
// }
// const MediaTrackConstraint = {
//     "video": {
//         "width": {
//             "min": 640,
//             "max": 1024
//         },
//         "height": {
//             "min": 480,
//             "max": 768
//         }
//     }
// }
// navigator.mediaDevices.getUserMedia(constraints, MediaTrackConstraint)
// .then(stream => {
//     console.log('Got MediaStream:', stream);
// })
// .catch(error => {
//     console.error('Error accessing media devices.', error);
// });

// async function getConnectedDevices(type) {
//     const devices = await navigator.mediaDevices.enumerateDevices();
//     return devices.filter(device => device.kind === type)
// }

// // Open camera with at least minWidth and minHeight capabilities
// async function openCamera(cameraId, minWidth, minHeight) {
//     const constraints = {
//         'audio': {'echoCancellation': true},
//         'video': {
//             'deviceId': cameraId,
//             'width': {'min': minWidth},
//             'height': {'min': minHeight}
//             }
//         }

//     return await navigator.mediaDevices.getUserMedia(constraints);
// }

// const cameras = getConnectedDevices('videoinput');
// if (cameras && cameras.length > 0) {
//     // Open first available video camera with a resolution of 1280x720 pixels
//     const stream = openCamera(cameras[0].deviceId, 1280, 720);
// }

// async function playVideoFromCamera() {
//     try {
//         const constraints = {'video': true, 'audio': true};
        
//         const stream = await navigator.mediaDevices.getUserMedia(constraints, MediaTrackConstraint);
//         const videoElement = document.querySelector('video#localVideo');
//         videoElement.srcObject = stream;
//     } catch(error) {
//         console.error('Error opening video camera.', error);
//     }
// }
// playVideoFromCamera()
// // navigator.mediaDevices.getDisplayMedia({
// //     video: {
// //         cursor: 'always',
// //         displaySurface: 'application',
// //     }
// // }).then((result)=>{
// //     console.log(result)
// // }).catch((error)=>{
// //     console.log(error)
// // })
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