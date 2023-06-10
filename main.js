gsap.registerPlugin(ScrollTrigger);

const iconAnimation = {
  scale: 0,
  delay: -0.3,
};

gsap.set(".sun", { xPercent: -50 });

const headerIcons = document.getElementsByClassName("headerIcon");

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
  .from(headerIcons[0], iconAnimation)
  .from(headerIcons[1], iconAnimation)
  .from(headerIcons[2], iconAnimation)
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
  ...document.getElementsByClassName("headerIcon"),
  ...document.getElementsByClassName("footerIcon"),
  document.querySelector(".latestProjectButton"),
];

elementsScaledOnHover.forEach((element) => {
  element.addEventListener("mouseover", () => {
    gsap.to(element, { scale: 1.2, duration: 0.3 });
  });

  element.addEventListener("mouseout", () => {
    gsap.to(element, { scale: 1, duration: 0.3 });
  });
});
