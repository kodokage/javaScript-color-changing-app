const btn = document.querySelector('.btn');
const bodyBgc = document.querySelector('body');
const colors = ['magenta', 'cyan', 'maroon', 'indigo'];

btn.addEventListener('click', changeColor);

function changeColor(){

	let random = Math.floor(Math.random()* colors.length);
	bodyBgc.style.backgroundColor = colors[random];

}