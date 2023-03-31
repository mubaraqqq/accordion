import { gsap } from "gsap";

const app = document.querySelector("#app");
if (!app) throw new Error("App not found");

const menu = document.querySelector(".menu");
if (!menu) throw new Error("Menu not found");

const span1 = menu.querySelector("span:first-child");
const span2 = menu.querySelector("span:last-child");
if (!span1 || !span2) throw new Error("menu span not found");

const page1 = document.querySelector(".page.one");
const page2 = document.querySelector(".page.two");
if (!page1 || !page2) throw new Error("page1 and page2 not found");

const page1heading = page1.querySelector("h1");
const page2heading = page2.querySelector("h1");
const page2Divs = document.querySelectorAll(".page.two .grid div");

let isMenuOpen = false;

menu.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    menuOpenAnimation();
  } else {
    menuCloseAnimation();
  }
});

function menuOpenAnimation() {
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      // ease: "bounce.out",
    },
  });

  tl.to(
    span1,
    {
      rotate: "45deg",
    },
    "initial"
  )
    .to(
      span2,
      {
        rotate: "-45deg",
      },
      "initial"
    )
    .to(
      menu,
      {
        "--gap": "0px",
      },
      "initial"
    )
    .to(
      page2Divs,
      {
        height: "100%",
        stagger: 0.1,
      },
      "initial"
    )
    .to(page1heading, { autoAlpha: 0 }, "initial")
    .to(page2heading, { autoAlpha: 1 });
}

function menuCloseAnimation() {
  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      // ease: "bounce.out",
    },
  });

  tl.to(
    span1,
    {
      rotate: "0",
    },
    "initial"
  )
    .to(
      span2,
      {
        rotate: "0",
      },
      "initial"
    )
    .to(
      menu,
      {
        "--gap": "10px",
      },
      "initial"
    )
    .to(
      page2Divs,
      {
        height: "0%",
        stagger: 0.1,
      },
      "initial"
    )
    .to(page1heading, { autoAlpha: 1 }, "initial")
    .to(page2heading, { autoAlpha: 0 }, "initial");
}

window.addEventListener("DOMContentLoaded", () => {
  gsap.to(app, {
    autoAlpha: 1,
    duration: 1.5,
  });
});
