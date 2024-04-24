let isPone = true;
let playerOnePoint = 0;
let playerTwoPoint = 0;
const gameRule = [
  ["1x1", "1x2", "1x3"],
  ["2x1", "2x2", "2x3"],
  ["3x1", "3x2", "3x3"],
  ["1x1", "2x2", "3x3"],
  ["1x3", "2x2", "3x1"],
  ["1x1", "2x1", "3x1"],
  ["1x2", "2x2", "3x2"],
  ["1x3", "2x3", "3x3"],
];
const modal =document.getElementById("modal");
const who =document.getElementById("who");
let isWinnerCelabrate = false;
let playerOne = [];
let playerTwo = [];
let PoneScore = document.querySelector(".playerOneScoreboard");
let PtwoScore = document.querySelector(".playerTwoScoreboard");

function choice(e) {
  const position = e.getAttribute("position");
  isPone
    ? (e.classList.add("bg-green-600"),
      e.setAttribute("disabled", true),
      playerOne.push(position))
    : (e.classList.add("bg-red-600"),
      e.setAttribute("disabled", true),
      playerTwo.push(position));
  checkForWinner();
  isPone = !isPone;
}

function checkForWinner() {
  let currentPlayer = isPone ? playerOne : playerTwo;

  for (let i = 0; i < gameRule.length; i++) {
    let rule = gameRule[i];
    let matched = rule.every((position) => currentPlayer.includes(position));
    if (matched) {
      isPone
    ? ( who.textContent="one")
    : ( who.textContent="two");
      plusPlayers();
      restart();
      return;
    } else {
      console.log();
    }
  }
}

function plusPlayers() {
  isPone
    ? (playerOnePoint++, who.textContent="one")
    : (playerTwoPoint++, who.textContent="two");
  if (playerOnePoint === 7 || playerTwoPoint === 7) {
    isWinnerCelabrate = true;
    winnerCelebrate();
    alert("2");
    playerOnePoint = 0;
    playerTwoPoint = 0;
showModal();
  }
  PoneScore.textContent = playerOnePoint;
  PtwoScore.textContent = playerTwoPoint;
  if (isWinnerCelabrate === false) {
    for (let index = 0; index < 3; index++) {
      const count = 200,
        defaults = {
          origin: { y: 0.9 },
        };

      function fire(particleRatio, opts) {
        confetti(
          Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio),
          })
        );
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });

      fire(0.2, {
        spread: 60,
      });

      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    }
  }
  isWinnerCelabrate = false;
}

function winnerCelebrate() {

  let love = setInterval(() => {
    const defaults = {
      spread: 360,
      ticks: 50,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["star"],
      colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
    };

    function shoot() {
      confetti({
        ...defaults,
        particleCount: 10,
        scalar: 1.2,
        shapes: ["star"],
      });

      confetti({
        ...defaults,
        particleCount: 20,
        scalar: 0.75,
        shapes: ["circle"],
      });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
  }, 1000);
  setTimeout(() => {
    clearInterval(love);
  }, 4000);
}

function restart() {
  document.querySelectorAll(".box").forEach((e) => {
    e.classList.remove("bg-blue-100");
    e.classList.remove("bg-green-600");
    e.classList.remove("bg-red-600");
    e.classList.add("bg-blue-100");
    e.removeAttribute("disabled");
  });
  playerOne = [];
  playerTwo = [];

}

////////////////////////////////////////////

const container = document.querySelector("..fireworks-example");
const fireworks = new Fireworks(container, {
  rocketsPoint: {
    min: 50,
    max: 50,
  },
  hue: {
    min: 0,
    max: 360,
  },
  delay: {
    min: 0.015,
    max: 0.03,
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 3,
    },
    trace: {
      min: 1,
      max: 2,
    },
  },
  lineStyle: "round",
  speed: 2,
  acceleration: 1.05,
  friction: 0.95,
  gravity: 1.5,
  particles: 50,
  traceLength: 3,
  flickering: 50,
  opacity: 0.5,
  explosion: 5,
  intensity: 30,
  traceSpeed: 10,
  autoresize: true,
  brightness: {
    min: 50,
    max: 80,
  },
  decay: {
    min: 0.015,
    max: 0.03,
  },
  mouse: {
    click: false,
    move: false,
    max: 1,
  },
  boundaries: {
    x: 50,
    y: 50,
    width: 0,
    height: 0,
  },
  sound: {
    enable: true,
    files: ["explosion0.mp3", "explosion1.mp3", "explosion2.mp3"],
    volume: { min: 4, max: 8 },
  },
});

fireworks.start();
function showModal(){
  modal.classList.remove("hidden");
  setTimeout(() => {
modal.classList.add("hidden");
  }, 5000);
}