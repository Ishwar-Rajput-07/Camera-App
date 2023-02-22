
import {
    startBtn,
    captureBtn,
    closeBtn,
    player,
    switchBtn,
    canvas,
    restart,

} from "./constants.js"

import { openCamera, closeCamera, changeMode } from "./camera.js"


switchBtn.addEventListener("click", () => {
    // mode = mode === "environment" ? "user" : "environment"
    changeMode()
    player.classList.add("d-none")
    const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop()
    }
    openCamera()
})


startBtn.addEventListener("click", () => {
    openCamera()
})
captureBtn.addEventListener("click", () => {

    const preview = canvas.getContext("2d")
    preview.drawImage(player, 0, 0, canvas.width, canvas.height)
    canvas.classList.remove("d-none")
    player.classList.add("d-none")
    captureBtn.classList.add("d-none")
    restart.classList.remove("d-none")

    // startBtn.classList.remove("d-none")
})

closeBtn.addEventListener("click", () => {
    closeCamera()
})
restart.addEventListener("click", () => {
    closeCamera()
})
