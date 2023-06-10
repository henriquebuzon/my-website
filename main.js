const timeline = gsap.timeline();

timeline
  .from("h2", {
    duration: 0.5,
    x: "-10%",
    autoAlpha: 0,
    opacity: 0,
    ease: "power1",
    delay: 1.5,
  })
  .from("h1", {
    duration: 0.5,
    x: "10%",
    autoAlpha: 0,
    opacity: 0,
    ease: "power1",
  });
