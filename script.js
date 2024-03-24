const tl = gsap.timeline();

const animation = {
  translateY: -100,
  opacity: 0,
  duration: 0.3,
  stagger: 0.05,
};

tl.from(".logo, nav li, .header-btns button", animation);

tl.from("h1,h1 span", animation);

tl.from(".hero p", animation);

tl.from(".hero i", animation);

tl.from("img", {
  ...animation,
  scale: 0.5,
});