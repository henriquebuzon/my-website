gsap.registerPlugin(ScrollTrigger)

const headerIcons = document.getElementsByClassName('headerIcon')

gsap
  .timeline({
    defaults: { duration: 0.5, ease: 'power1', autoAlpha: 0 },
  })
  .from('h2', {
    x: '-10%',
    opacity: 0,
    delay: 1.7,
  })
  .from('h1', {
    x: '10%',
    opacity: 0,
  })
  .from(headerIcons[0], {
    scale: 0,
  })
  .from(headerIcons[1], {
    scale: 0,
    delay: -0.4,
  })
  .from(headerIcons[2], {
    scale: 0,
    delay: -0.4,
  })
  .from(['main', 'footer'], { y: '5%', autoAlpha: 0, delay: -0.2 })

setTimeout(() => {
  gsap.to('.sun', {
    scrollTrigger: {
      trigger: '.wavySectionContainer',
      scrub: true,
    },
    rotation: 180,
    duration: 2,
    ease: 'linear',
  })
}, 3500)

const elementsScaledOnHover = [
  ...document.getElementsByClassName('headerIcon'),
  ...document.getElementsByClassName('footerIcon'),
  document.querySelector('.latestProjectButton'),
]

elementsScaledOnHover.forEach((element) => {
  element.addEventListener('mouseover', () => {
    gsap.to(element, { scale: 1.2, duration: 0.3 })
  })

  element.addEventListener('mouseout', () => {
    gsap.to(element, { scale: 1, duration: 0.3 })
  })
})
