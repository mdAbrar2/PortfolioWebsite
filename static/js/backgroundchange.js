// const video = document.getElementById("myVideo");
//         const videoSources = ["{% static 'videos/portfoliobackground2.mp4' %}" , "{% static 'videos/portfoliobackground.mp4' %}" ]; // Add your video files here
//         let index = 0;

//         setInterval(() => {
//             index = (index + 1) % videoSources.length; // Cycle through videos
//             video.src = videoSources[index]; // Change video source
//             video.load(); // Reload video
//             video.play(); // Auto-play the new video
//         }, 1000); // Change every 60,000ms (1 minute)


const videos = [
    'static/videos/portfoliobackground2.mp4' ,
    'static/videos/portfoliobackground.mp4',
    'static/videos/portfoliobackground1.mp4',
    'static/videos/portfoliobackground4.mp4'
    // "{% static 'videos/video3.mp4' %}"
];

let currentIndex = 0;

function changeVideo() {
    currentIndex = (currentIndex + 1) % videos.length;
    const videoElement = document.getElementById("myVideo");
    const sourceElement = document.getElementById("videoSource");

    sourceElement.src = videos[currentIndex];
    videoElement.load(); // Reload the new video
    videoElement.play();
}

setInterval(changeVideo, 60000); // Change video every 60 seconds