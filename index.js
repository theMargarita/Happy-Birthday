document.addEventListener("DOMContentLoaded", () => {
    const openBTN = document.querySelector(".open-btn");
  const closeBTN = document.querySelector(".close-btn");
  // const container = document.querySelector(".container");
  const popup = document.getElementById("present-popup");
  const present = document.querySelector(".present");
  // const lid = document.querySelector(".lid");

  
present.addEventListener("mouseenter", () => {
  startConfetti();
})

  openBTN.addEventListener("click", () => {
    popup.classList.add("show");
  })

      if (openBTN) {
    closeBTN.addEventListener("click", () => {
      popup.classList.remove("show");
    });
  }

  // if (closeBTN) {
  //   closeBTN.addEventListener("click", (event) => {
  //     event.stopPropagation(); //prevent event bubbling
  //     popup.classList.remove("show");
  //   });
  // }

  function startConfetti() {
    const duration = 7 * 1000,
      animationEnd = Date.now() + duration,
      defaults = { startVelocity: 40, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (min, max) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 100 * (timeLeft / duration);

      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
  }
});
