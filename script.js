gsap.registerPlugin(ScrollTrigger);

// Hero Section
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  gsap.from("#hello-text", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
  });

  gsap.from("#desc-text", {
    opacity: 0,
    x: -100,
    delay: 0.3,
    duration: 1,
    ease: "power2.out",
  });

  // About Section
  gsap.from("#about img", {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      once: true
    },
  });

  gsap.from("#about .space-y-6", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2,
    scrollTrigger: {
      trigger: "#about",
      start: "top 80%",
      once: true
    },
  });

  // General Section Animation Function
  function animateSection(selector, staggerGrid = false) {
    gsap.from(`${selector} h2`, {
      scrollTrigger: { trigger: selector, start: "top 80%", once: true },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(`${selector} p`, {
      scrollTrigger: { trigger: selector, start: "top 80%", once: true },
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out"
    });

    if (staggerGrid) {
      gsap.from(`${selector} .grid > div`, {
        scrollTrigger: { trigger: selector, start: "top 80%", once: true },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });
    }
  }

  // Call animation for each section
  animateSection("#education", true);
  animateSection("#experience", true);
  animateSection("#skills");
  animateSection("#services", true);
  animateSection("#work", true);
  animateSection("#contact");

  gsap.from("#contact form", {
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%",
      once: true
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from("footer", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
      once: true
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power2.out"
  });

  // Skill Bars Animation
  const skillBars = document.querySelectorAll("#skills .bg-blue-500");
  skillBars.forEach(bar => {
    const width = bar.dataset.width || bar.style.width;
    bar.style.width = "0%";
    gsap.to(bar, {
      width: width,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: bar,
        start: "top 90%",
        once: true
      },
      clearProps: "all"
    });
  });
} // End reduced motion check
