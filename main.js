const form = document.querySelector("#timeForm"),
    minDiv = document.querySelector("#minDiv"),
    secDiv = document.querySelector("#secDiv"),
    timesSettingSec = document.querySelector(".timesSetting"),
    startBtn = document.querySelector(".startBtn");

var audio = new Audio("clock.mp3");
var alarm = new Audio("alarm.wav");
var buzz = new Audio("buzz.wav");
var timerDiv = document.getElementById("select");
let minSet, secSet, timer, audioStartDelay = 0; // this values are got from settings

function changeStyle() {
    timerDiv.classList.remove("clockDiv");
}

form.onsubmit = function(e) {
    e.preventDefault();
    // try{
    //     clearInterval(timer);
    // }catch(err){console.log(err)}
    console.log("Ll");
    minSet = this["min"].value;
    secSet = this["sec"].value;
    displayCount(minSet, secSet);
    timesSettingSec.style.display = "none";
    // showCount(min, sec);
};

startBtn.onclick = function() {
    audio.currentTime = 0;
    startBtn.setAttribute("disabled", true)
    let minTime = minSet,
        secTime = secSet;
    var date = new Date().getTime(),
        target = date + secTime * 1000 + minTime * 60 * 1000 + 1000; // next time when the timer ends
        target = target - (target % 1000); // -------------

        startCount(target - 1000);

        target -= 1000;

    timer = setInterval(function() {


        startCount(target);


        // var time = new Date().getTime();
        // // time = time - (time % 1000);
        // var minTimeP = Math.floor(
        //     ((target - time) % (1000 * 60 * 60)) / (1000 * 60)
        // ); // difference min value of target and current time
        // var secTimeP = Math.floor(((target - time) % (1000 * 60)) / 1000) + 1; // difference sec value of target and current time

        // displayCount(minTimeP, secTimeP);

        // if(audioStartDelay == 1){
        //     audio.play();
        //     audio.currentTime = 0;
        // }
        // if (minTimeP < 0 && secTimeP <= 0) {
        //     startBtn.removeAttribute("disabled");
        //     console.log("ll");
        //     audio.pause();
        //     alarm.play();
        //     clearInterval(timer);
        // }

        // console.log(
        //     minTimeP < 10 ? "0" + minTimeP : minTimeP,
        //     secTimeP < 10 ? "0" + secTimeP : secTimeP
        // );

        // audioStartDelay = 1;

    }, 1000);
};

function settings() {
    audioStartDelay = 0;
    timesSettingSec.style.display = "block";
    timerDiv.classList.add("clockDiv");
    startBtn.removeAttribute("disabled");
    clearInterval(timer);
    displayCount(minSet, secSet);
    audio.pause();
    alarm.pause();
    buzz.play();
}

function reset() {
    audioStartDelay = 0;
    startBtn.removeAttribute("disabled");
    document.clear();
    clearInterval(timer);
    displayCount(minSet, secSet);
    audio.pause();
    alarm.pause();
    buzz.play();
}

function displayCount(minDis, secDis) {
    if (minDis < 0) {
        minDiv.innerHTML = minDis < 10 ? "0" + 0 + "<small> min</small>" : 0;
    } else {
        minDiv.innerHTML = minDis < 10 ? "0" + minDis + "<small> min</small>" : minDis + "<small> min</small>";
    }
    secDiv.innerHTML = secDis < 10 ? "0" + secDis + "<small> sec</small>" : secDis + "<small> sec</small>";
}

function startCount(target){
    var time = new Date().getTime();
        // time = time - (time % 1000);
        var minTimeP = Math.floor(
            ((target - time) % (1000 * 60 * 60)) / (1000 * 60)
        ); // difference min value of target and current time
        var secTimeP = Math.floor(((target - time) % (1000 * 60)) / 1000) + 1; // difference sec value of target and current time
        // minDiv.innerText = minTimeP < 10 ? "0"+minTimeP : minTimeP;
        // if(minTimeP < 0){
        //     minDiv.innerText = minTimeP < 10 ? "0"+ 0 : 0;
        // }else{
        //     minDiv.innerText = minTimeP < 10 ? "0"+minTimeP : minTimeP;
        // }
        // secDiv.innerText = secTimeP < 10 ? "0"+secTimeP : secTimeP;

        displayCount(minTimeP, secTimeP);

        if(audioStartDelay == 1){
            audio.play();
            audio.currentTime = 0;
        }
        // audio.pause();
        // if(minTimeP > 0 && secTimeP == 0){
        //     minTimeP++;
        // }
        if (minTimeP < 0 && secTimeP <= 0) {
            startBtn.removeAttribute("disabled");
            console.log("ll");
            audio.pause();
            alarm.play();
            // displayCount(minSet, secSet);-
            clearInterval(timer);
            audio.currentTime = 0;
        }

        console.log(
            minTimeP < 10 ? "0" + minTimeP : minTimeP,
            secTimeP < 10 ? "0" + secTimeP : secTimeP
        );

        audioStartDelay = 1;
}

// startBtn.onclick = function(minSet, secSet){
//     let minTime = min,
//         secTime = sec;
//     var date = new Date().getTime(),
//         target = date + (secTime * 1000) + (minTime * 60 * 1000) + 1000;  // next time when the timer ends
//     var timer = setInterval(function(){

//         var time = new Date().getTime()
//         var minTimeP = Math.floor(((target - time) % (1000 * 60 * 60)) / (1000 * 60));  // difference min value of target and current time
//         var secTimeP = Math.floor(((target - time) % (1000 * 60)) / 1000) + 1;  // difference sec value of target and current time
//         // minDiv.innerText = minTimeP < 10 ? "0"+minTimeP : minTimeP;
//         // if(minTimeP < 0){
//         //     minDiv.innerText = minTimeP < 10 ? "0"+ 0 : 0;
//         // }else{
//         //     minDiv.innerText = minTimeP < 10 ? "0"+minTimeP : minTimeP;
//         // }
//         // secDiv.innerText = secTimeP < 10 ? "0"+secTimeP : secTimeP;

//         displayCount(minTimeP, secTimeP)

//         audio.play();
//         // audio.pause();
//         audio.currentTime = 0;
//         // if(minTimeP > 0 && secTimeP == 0){
//         //     minTimeP++;
//         // }
//         if(minTimeP < 0 && secTimeP <= 0){
//             console.log("ll");
//             audio.pause();
//             alarm.play()
//             displayCount(minSet, secSet)
//             clearInterval(timer);
//         }

//         console.log((minTimeP < 10 ? "0"+minTimeP : minTimeP),(secTimeP < 10 ? "0"+secTimeP : secTimeP));

//     }, 1000)

// }
