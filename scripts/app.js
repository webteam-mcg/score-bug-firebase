  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB_fCrqzAGkDkAYDtdtERw_IMwoCgmkrJQ",
    authDomain: "lqlk-5370b.firebaseapp.com",
    databaseURL: "https://lqlk-5370b.firebaseio.com",
    projectId: "lqlk-5370b",
    storageBucket: "lqlk-5370b.appspot.com",
    messagingSenderId: "612878491224",
    appId: "1:612878491224:web:be9732520ddf14b97c742d",
    measurementId: "G-0QQYMZPR82"
  };

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore(app);

  db.collection("main").doc("live")
    .onSnapshot((doc)=>  {
        console.log("Current data: ", doc.data());

        document.getElementById("team").textContent = doc.data().team.toUpperCase();
        document.getElementById("player1").textContent = doc.data().player1.name.split(" ")[0].toUpperCase();
        document.getElementById("player2").textContent = doc.data().player2.name.split(" ")[0].toUpperCase();
        document.getElementById("bowler").textContent = doc.data().bowler.name.split(" ")[0].toUpperCase();
        document.getElementById("wckt").textContent = doc.data().wickets;
        document.getElementById("player1_balls").textContent = doc.data().player1.balls;
        document.getElementById("player2_balls").textContent = doc.data().player2.balls;
        document.getElementById("bowler_score").textContent = doc.data().bowler.score;

        const balls = doc.data().balls;
        document.getElementById("overs").textContent = Math.floor(balls/6)+(balls%6)/10;

        const thisOver = doc.data().thisOver.trim().split(" ");
        console.log(thisOver);
        const thisOverLen = thisOver.length;
        var this_over = "";
        for (let i = 0; i < thisOverLen; i++) {
          
          if (thisOver[i] === "0") {
            this_over = this_over+'•'
          }else{
            this_over = this_over+thisOver[i];
          }
          if(i+1<thisOverLen){
            this_over = this_over+" | ";
            console.log(i, thisOverLen);
          }
        }
        document.getElementById("this_over").textContent = this_over;
    });