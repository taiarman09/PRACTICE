const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

/* auto width + gap */
const cardStyle = getComputedStyle(cards[0]);
const gap = parseInt(getComputedStyle(slider).gap);
const cardWidth = cards[0].offsetWidth + gap;

let index = 1;

/* create dots */
cards.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  slider.style.transform = `translateX(${-(index - 1) * cardWidth}px)`;

  cards.forEach(card => card.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  cards[index].classList.add("active");
  dots[index].classList.add("active");
}

/* next */
next.addEventListener("click", () => {
  index++;
  if (index >= cards.length) index = 0;
  updateSlider();
});

/* prev */
prev.addEventListener("click", () => {
  index--;
  if (index < 0) index = cards.length - 1;
  updateSlider();
});

/* init */
updateSlider();
