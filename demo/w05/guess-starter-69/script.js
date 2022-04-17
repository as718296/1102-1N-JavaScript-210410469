let random = Math.floor(Math.random() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = random;
document.querySelector(".number").textContent = "?";


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess, guess);

  // 猜中數字

   if (guess === random) {
    document.querySelector(".message").textContent = "請開始輸入數字";
    document.querySelector(".highscore").textContent = score;
    document.querySelector(".number").textContent = random;
    document.querySelector("body").style.backgroundColor = "#32CD32";
    document.querySelector(".number").style.width = "20rem";

// 紀錄

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
   }

// 數字大，剩餘次數

  else if (guess > random) {
    if (score > 1) {
      document.querySelector(".message").textContent = "再低一點";
      score--;
      document.querySelector(".score").textContent = score;
    }

    // 次數用完

    else {
      document.querySelector(".message").textContent = "下次加油~!!";
      document.querySelector(".score").textContent = 0;
     
    }
  }
 
// 數字小，剩餘次數

  else if (guess < random) {
    if (score > 1) {
      document.querySelector(".message").textContent = "再高一點";
      score--;
      document.querySelector(".score").textContent = score;
    }

    // 次數用完

    else {
      document.querySelector(".message").textContent = "下次加油~!!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#FFC0CB	";
    }
  }
});

//重新

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  random = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "開始遊戲";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "20rem";
});
