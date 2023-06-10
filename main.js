const timeline = gsap.timeline({
  defaults: { duration: 0.5, ease: "power1", autoAlpha: 0 },
});

const iconAnimation = {
  scale: 0,
  delay: "-0.3",
};

timeline
  .from("h2", {
    x: "-10%",
    opacity: 0,
    delay: 1.5,
  })
  .from("h1", {
    x: "10%",
    opacity: 0,
  })
  .from(".icon:nth-child(1)", iconAnimation)
  .from(".icon:nth-child(2)", iconAnimation)
  .from(".icon:nth-child(3)", iconAnimation)
  .from(["main", "footer"], { y: "10%", autoAlpha: 0 });
