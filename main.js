function increaseButtonA() {
  let increaseA = document.getElementById("teamScoreA");
  let increaseAA = Number(increaseA.innerHTML);
  increaseA.innerHTML = increaseAA + 1;
}

function decreaseButtonA() {
  let decreaseB = document.getElementById("teamScoreA");
  let decreaseBB = Number(decreaseB.innerHTML);
  if (decreaseBB > 0) {
    decreaseB.innerHTML = decreaseBB - 1;
  }
}

function resetButtonA() {
  let resetA = document.getElementById("teamScoreA");
  resetA.innerHTML = 0;
}

function teamNameButtonA() {
  let teamA = document.getElementById("teamNameA");
  let teamAA = prompt("Takım Adını Giriniz:");
  teamA.innerHTML = teamAA;
}

function teamScoreA() {
  let scoreA = document.getElementById("teamScoreA");
  let scoreAA = Number(prompt("Skor Giriniz:"));
  scoreA.innerHTML = scoreAA;
}

// <-------------------------------------------------------------->

function increaseButtonB() {
  let increaseA = document.getElementById("teamScoreB");
  let increaseAA = Number(increaseA.innerHTML);
  increaseA.innerHTML = increaseAA + 1;
}

function decreaseButtonB() {
  let decreaseB = document.getElementById("teamScoreB");
  let decreaseBB = Number(decreaseB.innerHTML);
  if (decreaseBB > 0) {
    decreaseB.innerHTML = decreaseBB - 1;
  }
}

function resetButtonB() {
  let resetA = document.getElementById("teamScoreB");
  resetA.innerHTML = 0;
}

function teamNameButtonB() {
  let teamA = document.getElementById("teamNameB");
  let teamAA = prompt("Takım Adını Giriniz:");
  teamA.innerHTML = teamAA;
}

function teamScoreB() {
  let scoreA = document.getElementById("teamScoreB");
  let scoreAA = Number(prompt("Skor Giriniz:"));
  scoreA.innerHTML = scoreAA;
}
