//if we click on the start/reset
var ifplaying = false;
var score;
var timeleft = 60;
var timer;
var ans;
var correctposition;

document.getElementById("startreset").onclick = function () {
  //if we are playing
  if (ifplaying == true) {
    location.reload(); //relaoding the page
  }
  //if not already playing,start playing
  else {
    ifplaying = true;
    score = 0;
    document.getElementById("scorevalue").innerHTML = score; //set score to 0
    show("timeremaining");
    //change button to reset
    document.getElementById("startreset").innerHTML = "Reset Game";

    //reduce time by 1sec in loops
    //timeleft=60;
    timecounter(timeleft);
    //hide gameover message
    hide("gameover");

    //generate new Q&A
    qna();
  }
};

//checking if correct
document.getElementById("box" + 1).onclick = function () {
  if (1 == correctposition && timeleft != 0) {
    //if correct

    score += 1; //increment score by one
    //hide wrong message and shoe correct message
    hide("wrong");
    show("correct");
    setTimeout(function () {
      hide("correct");
    }, 1000); //for making it disappear in a sec

    document.getElementById("scorevalue").innerHTML = score; //update score
    qna(); //generate new question
  } else if (timeleft != 0) {
    //if wrong
    hide("correct");
    show("wrong");
    setTimeout(function () {
      hide("wrong");
    }, 1000);
  }
};
document.getElementById("box" + 2).onclick = function () {
  if (2 == correctposition && timeleft != 0) {
    score += 1;
    hide("wrong");
    show("correct");
    setTimeout(function () {
      hide("correct");
    }, 1000);
    document.getElementById("scorevalue").innerHTML = score; //update score
    qna();
  } else if (timeleft != 0) {
    hide("correct");
    show("wrong");
    setTimeout(function () {
      hide("wrong");
    }, 1000);
  }
};
document.getElementById("box" + 3).onclick = function () {
  if (3 == correctposition && timeleft != 0) {
    score += 1;
    hide("wrong");
    show("correct");
    setTimeout(function () {
      hide("correct");
    }, 1000);
    document.getElementById("scorevalue").innerHTML = score; //update score
    qna();
  } else if (timeleft != 0) {
    hide("correct");
    show("wrong");
    setTimeout(function () {
      hide("wrong");
    }, 1000);
  }
};
document.getElementById("box" + 4).onclick = function () {
  if (4 == correctposition && timeleft != 0) {
    score += 1;
    hide("wrong");
    show("correct");
    setTimeout(function () {
      hide("correct");
    }, 1000);
    document.getElementById("scorevalue").innerHTML = score; //update score
    qna();
  } else if (timeleft != 0) {
    hide("correct");
    show("wrong");
    setTimeout(function () {
      hide("wrong");
    }, 1000);
  }
};

//functions

function timecounter(timeleft) {
  timer = setInterval(function () {
    //time left
    //yes, continue
    timeleft = timeleft - 1;
    document.getElementById("timeremainingvalue").innerHTML =
      " " + timeleft + " ";
    //no, gameover
    if (timeleft == 0) {
      clearInterval(timer);
      gameover();
    }
  }, 1000);
}

function gameover() {
  show("gameover");
  document.getElementById("gameover").innerHTML =
    "<p>Game Over!</p><p>Your Score is " + score + " </p";
  hide("timeremaining");
  hide("correct");
  hide("wrong");
  hide("question");
  hide("score");
  hide("choices");
  hide("instruction");
  document.getElementById("startreset").style.top = "350px";

  document.getElementById("startreset").innerHTML = "Start Game";
}

//changing display property of id
function hide(id) {
  document.getElementById(id).style.display = "none"; //show countdown box
}

function show(id) {
  document.getElementById(id).style.display = "block"; //show countdown box
}

function qna() {
  var m1 = Math.round(Math.random() * 10) + 1;
  var m2 = Math.round(Math.random() * 10) + 1;
  ans = m1 * m2;
  document.getElementById("question").innerHTML = m1 + " X " + m2;
  //displaying correct answer at random choice
  correctposition = Math.round(Math.random() * 3) + 1;
  document.getElementById("box" + correctposition).innerHTML = ans;

  //displaying other options
  var answers = [ans]; //array for keeping record of answers generated so that no two options are same
  for (var i = 1; i < 5; i++) {
    if (i != correctposition) {
      var wronganswer;
      do {
        wronganswer =
          (Math.round(Math.random() * 10) + 1) *
            Math.round(Math.random() * 10) +
          1;
      } while (answers.indexOf(wronganswer) > -1);
      document.getElementById("box" + i).innerHTML = wronganswer;
      answers.push(wronganswer);
    }
  }
}

//if we click on answer box
//if we are playing
//correct?
//yes
//increase score
//show correct box for 1 sec
//generate new Q&A
//no
//show try again box for 1sec
