const form = document.querySelector("#timeForm"),
    minDiv = document.querySelector("#minDiv"),
    secDiv = document.querySelector("#secDiv"),
    timesSettingSec = document.querySelector(".timesSetting");

var audio = new Audio("clock.mp3");
var alarm = new Audio("alarm.wav");

form.onsubmit = function(e) {
    e.preventDefault();
    try {
        clearInterval(timer);
    } catch (err) {
        console.log(err);
    }
    console.log("Ll");
    let min = this["min"].value,
        sec = this["sec"].value;
    timesSettingSec.style.display = "none";
    showCount(min, sec);
};

function showCount(min, sec) {
    let minTime = min,
        secTime = sec;
    var date = new Date().getTime(),
        target = date + secTime * 1000 + minTime * 60 * 1000 + 1000;
    var timer = setInterval(function() {
        var time = new Date().getTime();
        var minTimeP = Math.floor(
            ((target - time) % (1000 * 60 * 60)) / (1000 * 60)
        );
        var secTimeP = Math.floor(((target - time) % (1000 * 60)) / 1000) + 1;
        // minDiv.innerText = minTimeP < 10 ? "0"+minTimeP : minTimeP;
        if (minTimeP < 0) {
            minDiv.innerText = minTimeP < 10 ? "0" + 0 : 0;
        } else {
            minDiv.innerText = minTimeP < 10 ? "0" + minTimeP : minTimeP;
        }
        secDiv.innerText = secTimeP < 10 ? "0" + secTimeP : secTimeP;
        audio.play();
        // audio.pause();
        audio.currentTime = 0;
        // if(minTimeP > 0 && secTimeP == 0){
        //     minTimeP++;
        // }
        if (minTimeP < 0 && secTimeP <= 0) {
            console.log("ll");
            audio.pause();
            alarm.play();
            clearInterval(timer);
        }

        console.log(
            minTimeP < 10 ? "0" + minTimeP : minTimeP,
            secTimeP < 10 ? "0" + secTimeP : secTimeP
        );
    }, 1000);
}

function reset() {
    timesSettingSec.style.display = "block";
    document.location.reload(true);
}