const constraints = {
    'video': true,
    'audio': true
}
navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
        console.log('Got MediaStream:', stream)
    })
    .catch(error => {
        console.error('Error accessing media devices.', error)
    })

// Fetch an array of devices of a certain type
const getConnectedDevices = (type, callback)=>{
    navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            const filtered = devices.filter(device => device.kind === type)
            callback(filtered)
        })
}

// getConnectedDevices('videoinput', cameras => console.log('Cameras found', cameras))
// getConnectedDevices('audioinput', mics => console.log('Mics found', mics))
// getConnectedDevices('audiooutput', speakers => console.log('speakers found', speakers))
// Updates the select element with the provided set of cameras
function updateCameraList(cameras) {
    let listElement = document.getElementById('availableCameras');
    // listElement.innerHTML = '';
    cameras.map(camera => {
        let cameraOption = document.createElement('option');
        cameraOption.label = camera.label;
        cameraOption.value = camera.deviceId;
        console.log(cameraOption)
    }).forEach(cameraOption => listElement.appendChild(cameraOption));
}

// Get the initial set of cameras connected
getConnectedDevices('videoinput', cameras => {updateCameraList(cameras)});

// Listen for changes to media devices and update the list accordingly
navigator.mediaDevices.addEventListener('devicechange', event => {
    const newCameraList = getConnectedDevices('video', newCameraList => {updateCameraList(newCameraList)});
});
