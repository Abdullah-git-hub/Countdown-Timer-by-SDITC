const form = document.querySelector("#timeForm"),
minDiv = document.querySelector("#minDiv"),
secDiv = document.querySelector("#secDiv"),
timesSettingSec = document.querySelector(".timesSetting"),
startBtn = document.querySelector(".startBtn");

var audio = new Audio('clock.mp3');
var alarm = new Audio('alarm.wav');

let minSet, secSet;  // this values are got from settings

form.onsubmit = function(e){
    e.preventDefault();
    // try{
    //     clearInterval(timer);
    // }catch(err){console.log(err)}
    console.log("Ll");
    minSet = this["min"].value;
    secSet = this["sec"].value;
    displayCount(minSet, secSet)
    timesSettingSec.style.display = "none";
    // showCount(min, sec);
}

startBtn.onclick = function(){
    let minTime = minSet,
        secTime = secSet;
    var date = new Date().getTime(),
        target = date + (secTime * 1000) + (minTime * 60 * 1000) + 1000;  // next time when the timer ends
    var timer = setInterval(function(){
            
        var time = new Date().getTime()
        var minTimeP = Math.floor(((target - time) % (1000 * 60 * 60)) / (1000 * 60));  // difference min value of target and current time
        var secTimeP = Math.floor(((target - time) % (1000 * 60)) / 1000) + 1;  // difference sec value of target and current time
        // minDiv.innerText = minTimeP < 10 ? "0"+minTimeP : minTimeP;
        // if(minTimeP < 0){
        //     minDiv.innerText = minTimeP < 10 ? "0"+ 0 : 0;
        // }else{
        //     minDiv.innerText = minTimeP < 10 ? "0"+minTimeP : minTimeP;
        // }
        // secDiv.innerText = secTimeP < 10 ? "0"+secTimeP : secTimeP;

        displayCount(minTimeP, secTimeP)

        audio.play();
        // audio.pause();
        audio.currentTime = 0;	
        // if(minTimeP > 0 && secTimeP == 0){
        //     minTimeP++;
        // }
        if(minTimeP < 0 && secTimeP <= 0){
            console.log("ll");
            audio.pause();
            alarm.play()
            displayCount(minSet, secSet)
            clearInterval(timer);
        }
        
        console.log((minTimeP < 10 ? "0"+minTimeP : minTimeP),(secTimeP < 10 ? "0"+secTimeP : secTimeP));
 
    }, 1000)


}

function reset(){
    timesSettingSec.style.display = "block";
}

function displayCount(minDis, secDis){
    if(minDis < 0){
        minDiv.innerText = minDis < 10 ? "0"+ 0 : 0;
    }else{
        minDiv.innerText = minDis < 10 ? "0"+minDis : minDis;
    }
    secDiv.innerText = secDis < 10 ? "0"+secDis : secDis;
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
