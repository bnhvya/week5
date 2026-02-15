const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const pointsEl = card.querySelector(".card__points");
  let points = 0;

  card.addEventListener("click", () => {
    points += 1;
    pointsEl.textContent = String(points);

    card.classList.remove("is-odd", "is-even", "is-milestone");

    if (points % 5 === 0) {
      card.classList.add("is-milestone");
      return;
    }

    if (points % 2 === 0) {
      card.classList.add("is-even");
    } else {
      card.classList.add("is-odd");
    }
  });
});
