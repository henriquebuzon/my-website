gsap.registerPlugin(ScrollTrigger);

const iconAnimation = {
  scale: 0,
  delay: "-0.3",
};

gsap.set(".sun", { xPercent: -50 });

gsap
  .timeline({
    defaults: { duration: 0.5, ease: "power1", autoAlpha: 0 },
  })
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
  .from(["main", "footer"], { y: "10%", autoAlpha: 0 })
  .to(".sun", {
    scrollTrigger: {
      trigger: ".wavySectionContainer",
      scrub: true,
    },
    rotation: 360,
    duration: 2,
    ease: "none",
  });

const elementsScaledOnHover = [
  ...Array.from(document.querySelectorAll(".icon")),
  document.querySelector(".latestProjectButton"),
];

elementsScaledOnHover.forEach((element) => {
  element.addEventListener("mouseover", () => {
    gsap.to(element, { scale: 1.3, duration: 0.3 });
  });

  element.addEventListener("mouseout", () => {
    gsap.to(element, { scale: 1, duration: 0.3 });
  });
});
