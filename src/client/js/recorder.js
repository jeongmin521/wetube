const stratBtn = document.getElementById("startBtn");
const video = document.getElementById("preview");

const handleStart = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: flase,
        video: true,
    });
    video.srcObject = stream;
    video.play();
};

stratBtn.addEventListener("click", handleStart)