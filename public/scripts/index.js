const loginElement = document.querySelector('#login-form');
const contentElement = document.querySelector("#content-sign-in");
const userDetailsElement = document.querySelector('#user-details');
const authBarElement = document.querySelector("#authentication-bar");

// Elements for GPIO states
const stateElement1 = document.getElementById("state1");
const stateElement2 = document.getElementById("state2");
const stateElement3 = document.getElementById("state3");

// Button Elements
const btn1On = document.getElementById('btn1On');
const btn1Off = document.getElementById('btn1Off');
const btn2On = document.getElementById('btn2On');
const btn2Off = document.getElementById('btn2Off');
const btn3On = document.getElementById('btn3On');
const btn3Off = document.getElementById('btn3Off');

//timerval
const starttime=99;
let time=startMin=99;
const countdownEl = document.getElementById('countdown');
function updtcnt(){
    const minutes=Math.floor(time/60);
    let seconds =time%60;
    countdownEl.innerHTML= `${minutes}`;
    time--;

}

// Database path for GPIO states
var dbPathOutput1 = 'board1/outputs/digital/12';
var dbPathOutput2 = 'board1/outputs/digital/13';
var dbPathOutput3 = 'board1/outputs/digital/14';

// Database references
var dbRefOutput1 = firebase.database().ref().child(dbPathOutput1);
var dbRefOutput2 = firebase.database().ref().child(dbPathOutput2);
var dbRefOutput3 = firebase.database().ref().child(dbPathOutput3);

// MANAGE LOGIN/LOGOUT UI
const setupUI = (user) => {
  if (user) {
    //toggle UI elements
    loginElement.style.display = 'none';
    contentElement.style.display = 'block';
    authBarElement.style.display ='block';
    userDetailsElement.style.display ='block';
    userDetailsElement.innerHTML = user.email;

    //Update states depending on the database value
    // dbRefOutput1.on('value', snap => {
    //     if(snap.val()==1) {
    //         stateElement1.innerText="ON";
    //     }
    //     else{
    //         stateElement1.innerText="OFF";
    //     }
    // });
    // dbRefOutput2.on('value', snap => {
    //     if(snap.val()==1) {
    //         stateElement2.innerText="ON";
    //     }
    //     else{
    //         stateElement2.innerText="OFF";
    //     }
    // });
    // dbRefOutput3.on('value', snap => {
    //     if(snap.val()==1) {
    //         stateElement3.innerText="Trigger";
    //         let i=30;
    //         while(i){
    //             setInterval(updtcnt,1000);
    //             i--;
    //         }

    //     }
    //     else{
    //         stateElement3.innerText="OFF";
    //         countdownEl.innerHTML= `${0}: ${0}`;
    //     }
    // });
    // const timerDisplay = document.getElementById('timer');
    // let timer;
    
    // function startCountdown(duration) {
    //     let time = duration;
    //     timerDisplay.textContent = time;
        
    //     timer = setInterval(() => {
    //         time--;
    //         timerDisplay.textContent = time;
            
    //         if (time <= 0) {
    //             clearInterval(timer);
    //         }
    //     }, 1000);
    // }
    // dbRefOutput2.on('value', snap => {
    //     timer=snap.val()
    // });
    // // Listen for changes to the startTimerFlag and timerDuration
    // document.addEventListener("DOMContentLoaded", function() {
    //     var timerElement = document.getElementById('timer');
    //     var timeLeft = timer;

    //     function updateTimer() {
    //         timerElement.textContent = timeLeft;
    //         if (timeLeft > 0) {
    //             timeLeft--;
    //         } else {
    //             clearInterval(timerInterval);
    //             timerElement.textContent = "Time's up!";
    //         }
    //     }

    //     var timerInterval = setInterval(updateTimer, 1000);
    // });
    // Update database uppon button click
    btn1On.onclick = () =>{
        dbRefOutput1.set(1);
    }
    btn1Off.onclick = () =>{
        dbRefOutput1.set(0);
    }

    btn2On.onclick = () =>{
        dbRefOutput2.set(1);
    }
    btn2Off.onclick = () =>{
        dbRefOutput2.set(0);
    }

    btn3On.onclick = () =>{
        dbRefOutput3.set(1);
    }
    btn3Off.onclick = () =>{
        dbRefOutput3.set(0);
    }
    

  // if user is logged out
  } else{
    // toggle UI elements
    loginElement.style.display = 'block';
    authBarElement.style.display ='none';
    userDetailsElement.style.display ='none';
    contentElement.style.display = 'none';
  }
}