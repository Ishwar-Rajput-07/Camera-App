import {
    canvas,
    captureBtn,
    closeBtn,
    player,
    restart,
    startBtn,
    switchBtn,
    mode,
} from "./constants.js"


export const closeCamera = () => {
    const tracks = player.srcObject.getVideoTracks()
    for (let i = 0; i < tracks.length; i++) {
        tracks[i].stop()
    }
    captureBtn.classList.add("d-none")
    closeBtn.classList.add("d-none")
    startBtn.classList.remove("d-none")
    player.classList.add("d-none")
    switchBtn.classList.add("d-none")
    canvas.classList.add("d-none")
    restart.classList.add("d-none")

}
export const openCamera = async () => {
    // handleCamera Start
    if (navigator.mediaDevices) {
        document.getElementById("loader").innerHTML = `
       opening camare...💥 <div class="spinner-border text-dark" ></div>
    `
        startBtn.setAttribute("disabled", true)
        try {
            const x = await navigator.mediaDevices.getUserMedia({
                video: {
                    // facingMode:"user"
                    facingMode: mode
                },

            })
            player.srcObject = x
        } catch (error) {
            console.log(ERROR);
        }
        document.getElementById("loader").innerHTML = ""
        startBtn.removeAttribute("disabled")

    } else {
        console.error("mediaDevices not supported");
    }

    captureBtn.classList.remove("d-none")
    closeBtn.classList.remove("d-none")
    startBtn.classList.add("d-none")
    player.classList.remove("d-none")
    switchBtn.classList.remove("d-none")

}