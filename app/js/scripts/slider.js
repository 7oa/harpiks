document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".glide");
  const conf = {
    type: "carousel",
    gap: 0,
    dragThreshold: 10,
    animationDuration: 700,
    perTouch: 1,
    animationTimingFunc: "ease-in-out"
  };
  sliders.forEach(item => {
    new Glide(item, conf).mount();
  });
});
