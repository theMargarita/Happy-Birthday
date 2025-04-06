const ballonCointainer = document.querySelector(".balloons-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(275);
  var g = random(275);
  var b = random(275);
  var ml = random(50);
  var mt = random(200);
  var left = random(100);
  var dur = random(5) + 5;
  return `background-color:rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  left: ${left}%;
  animation: float ${dur}s ease-in infinite`;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style = getRandomStyles();

    // restets styles when animation loops 
    balloon.addEventListener("animationiteration", () => {
        balloon.style.animation = "none";
  void balloon.offsetWidth; // force reflow
  balloon.style = getRandomStyles();
    });

// pop effect on click 
    balloon.addEventListener("click", () => {
      balloon.style.transition = "transform 0.2s ease, opacity 0.2s ease";
      balloon.style.transform = "scale(1)";
      balloon.style.opacity = "0";
      
      // setTimeout(() => {
      //   balloon.remove();
      // }, 200);
    })

    ballonCointainer.append(balloon);
  }
}

window.addEventListener("load", () => {
  createBalloons(200);
});

