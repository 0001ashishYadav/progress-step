const circlesEl = document.querySelectorAll(".circle");
console.log(circlesEl.length);
const proLineEl = document.getElementById("pro-line");

const nextBtn = document.getElementById("next");
const preBtn = document.getElementById("pre");

let currentInd = 1;

nextBtn.addEventListener("click", () => {
  currentInd++;
  if (currentInd > circlesEl.length) {
    currentInd = circlesEl.length;
  }

  updateStep();
});

preBtn.addEventListener("click", () => {
  currentInd--;
  if (currentInd < 1) {
    currentInd = 1;
  }

  updateStep();
});

function updateStep() {
  circlesEl.forEach((val, ind) => {
    if (ind < currentInd) {
      val.classList.add("active-circle");
    } else {
      val.classList.remove("active-circle");
    }
  });

  const activeCircle = document.querySelectorAll(".active-circle");

  proLineEl.style.width =
    ((activeCircle.length - 1) / (circlesEl.length - 1)) * 100 + "%";

  if (currentInd === 1) {
    preBtn.disabled = true;
  } else if (currentInd === circlesEl.length) {
    nextBtn.disabled = true;
  } else {
    preBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
