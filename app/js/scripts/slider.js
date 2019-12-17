document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".glide");
  const conf = {
    type: "carousel",
    gap: 0,
    animationDuration: 1000,
    animationTimingFunc: "ease-in-out"
  };
  sliders.forEach(item => {
    let glide = new Glide(item, conf).mount();
    item.onmouseenter = event => glide.go(">");
  });
});
