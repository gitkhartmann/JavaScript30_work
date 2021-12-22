'use strict';

document.addEventListener('keydown', event => {

	const keyCodeAudio = document
		.querySelector(`audio[data-key="${event.keyCode}"]`);

	if (!keyCodeAudio) {
		return;
	}

	document.querySelector(`.key[data-key="${event.keyCode}"]`)
		.classList.add('playing');

	keyCodeAudio.play();
	keyCodeAudio.currentTime = 0;
});

document.addEventListener('keyup', event => {

	const keyCodeAudio = document
		.querySelector(`audio[data-key="${event.keyCode}"]`);
	if (!keyCodeAudio) {
		return;
	}

	document.querySelector(`.key[data-key="${event.keyCode}"]`)
		.classList.remove('playing');
});