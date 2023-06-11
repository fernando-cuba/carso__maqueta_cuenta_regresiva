function countDownLoader() {
    let element__countdown_days = document.querySelector(".countdown-days .counter")
    let element__countdown_hours = document.querySelector(".countdown-hours .counter")
    let element__countdown_minutes = document.querySelector(".countdown-minutes .counter")
    let element__countdown_seconds = document.querySelector(".countdown-seconds .counter")

    async function countdownTimer(endDate, endTime) {
        return new Promise((resolve, reject) => {
            var currentDate = new Date();
            var targetDate = new Date(endDate + " " + endTime);

            var timeDifference = targetDate.getTime() - currentDate.getTime();

            if (timeDifference <= 0) {
                console.log("La cuenta regresiva ha terminado.");
                reject("La cuenta regresiva ha terminado.");
                return;
            }

            var seconds = Math.floor(timeDifference / 1000) % 60;
            var minutes = Math.floor(timeDifference / 1000 / 60) % 60;
            var hours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
            var days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

            const countdownData = {
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            };

            resolve(countdownData);
        });
    }

    setInterval(async () => {
        var endDate = "08/30/2023";
        var endTime = "24:00:00";

        try {
            const countdownData = await countdownTimer(endDate, endTime);
            element__countdown_days.textContent = countdownData.days;
            element__countdown_hours.textContent = countdownData.hours;
            element__countdown_minutes.textContent = countdownData.minutes;
            element__countdown_seconds.textContent = countdownData.seconds;
        } catch (error) {
            console.error(error);
        }
    }, 1000);
}

function iframeLoaded() {
    console.clear()
}

function loadYouTubeVideo(videoId) {
    var container = document.querySelector(".current-video");
    container.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" onload="iframeLoaded()" width= "100%" height= "100%" frameborder= "0" allowfullscreen= "true" autoplay="true"></iframe>`;
    console.clear()
}

function eventVideoClick() {
    document.querySelectorAll(".circle-video").forEach(element => {
        element.addEventListener("click", () => {
            let full_url_video = element.getAttribute("data--video-url")
            const [youtube_url, id_video] = full_url_video.split("v=")
            loadYouTubeVideo(id_video);
            console.clear()
        })
    });
}

window.onload = () => {
    countDownLoader()
    loadYouTubeVideo("mAinJyxqrBY");
    eventVideoClick();
}