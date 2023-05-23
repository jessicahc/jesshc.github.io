// hamburger menu icon
let menuIcon = document.querySelector('svg.menu');
let navigation = document.querySelector('nav');
let header = document.querySelector('header');

function toggleNav() {
    console.log('Toggle');

    // toggling the application of the class "toggle" to this element
    navigation.classList.toggle("toggle");
    header.classList.toggle('toggle');
}

menuIcon.addEventListener('click', toggleNav);


// randomly selects and displays a radiation icon image 
function changeIconColor() {
	let outcome = Math.round(Math.random()); // randomly generates 0 or 1
	console.log('Outcome:', outcome);

	let image; 
	let imgSrcset;

	// If 0 was chosen, then display the yellow radiation icon. Otherwise, display the blue radiation icon.
	if (outcome == 0) {
	  image = 'images/yellow-radiation-symbol-80.jpeg';
	  imgSrcset = 'images/yellow-radiation-symbol-80.jpeg 80w, images/yellow-radiation-symbol-160.jpeg 160w';
	} else {
	  image = 'images/blue-radiation-symbol-80.jpeg';
	  imgSrcset = 'images/blue-radiation-symbol-80.jpeg 80w, images/blue-radiation-symbol-160.jpeg 160w';
	}

	// access icon image
	let icon = document.querySelector('#icon');
	icon.src = image; 
	icon.srcset = imgSrcset;
}

// assigns a random color to the side-bar
function sideBarColorRand() {
	const sideBar = document.querySelector(".side-bar");
	// array of hex colors
	const colors = ["#CDB4DB", "#FFC8DD", "#BDE0FE", '#CCD5AE', '#FFCDB2'];

	// randomly select a hex from the colors array
	randColorHex = colors[Math.floor(Math.random() * 6)];
	console.log('randColorHex: ', randColorHex);
	sideBar.style.backgroundColor = randColorHex;
}

function changeFontByDay() {
	let day = new Date().getDay();
	let fontType;

	console.log('Day: ' + day); 

	if (day == 1 || day == 3) { 
		fontType = 'Arial, sans-serif';
	} else if (day == 6 || day == 0) {
		fontType = 'Helvetica, sans-serif';
	} else { 
		fontType = 'RalewaySB, sans-serif';
	}

	console.log('FontType:', fontType);
	let mainTitle = document.getElementById('main-heading');
	console.log('mainTitle:', mainTitle);
	mainTitle.style.fontFamily = fontType;
}

window.addEventListener('load', changeFontByDay);

changeIconColor();
sideBarColorRand();




