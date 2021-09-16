let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener('click', function() {
		this.classList.toggle('active');
		let panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + 'px';
		}
	});
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
	myFunction();
};

// Get the navbar
let navbar = document.getElementById('navbar');
let button = document.querySelector('.nav-button');

// Get the offset position of the navbar
let sticky = navbar.offsetTop + 20;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add('sticky');
		button.classList.add('sticky-button');
	} else {
		navbar.classList.remove('sticky');
		button.classList.remove('sticky-button');
	}
}
