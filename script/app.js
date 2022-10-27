const fast = document.querySelector('.js-fast');
const medium = document.querySelector('.js-normal');
const slow = document.querySelector('.js-slow');
let tl = gsap.timeline({
	defaults: {
		duration: 1,
		ease: 'power1.inOut',
	},
	repeat: -1,
	yoyo: true,
});

tl.set('#Shadow', {
	transformOrigin: '50% 100%',
})
	.fromTo(
		'#Robot',
		{
			y: 2.5,
		},
		{
			y: -2.5,
		}
	)
	.to(
		'#Shadow',
		{
			scale: 0.75,
		},
		'-=.75'
	);

fast.onclick = function () {
	tl.timeScale(2);
};
medium.onclick = function () {
	tl.timeScale(1);
};
slow.onclick = function () {
	tl.timeScale(0.48);
};

const button = document.querySelector('.c-controls__button--pause');
const iconpause = document.querySelector('.c-play-icon--pause');
const iconplay = document.querySelector('.c-play-icon--play');
button.addEventListener('click', function () {
	if (iconpause.style.display === 'none') {
		iconpause.style.display = 'block';
		iconplay.style.display = 'none';
		tl.play();
	} else {
		iconpause.style.display = 'none';
		iconplay.style.display = 'block';
		tl.pause();
	}
});
