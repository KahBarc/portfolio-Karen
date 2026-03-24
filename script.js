window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  const triggerBottom = (window.innerHeight / 5) * 4;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease-out";
});
