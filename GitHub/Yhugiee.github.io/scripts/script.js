const white = document.querySelector(".white");
const slider = document.querySelector(".slider");

const tl = new TimelineMax();

tl.fromTo(white, 1, {height: "0%"}, { height: "80%", ease: Power2.easeInOut});
	.fromTo(
	white,
	1.2,
	{width: "100%"},
	{width: "100%", ease: Power2.easeInOut}
)
.fromTo(
	slider,
	1.2,
	{x: "-100%"},
	{x: "0%", ease: Power2.easeInOut},
	"-=1.2"
)