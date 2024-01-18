// Responsive Navbar Functionality
const responsiveNavbar = (function () {
	// Select button and navbar elements
	const button = document.querySelector("#menuButton");
	const navbar = document.querySelector("#navbar");

	// Add click event listener to the button
	button.addEventListener("click", function () {
		// Check the current class name of the navbar
		if (navbar.className === "navbar") {
			// If it's not responsive, add the responsive class
			navbar.className += " navbarResponsive";
		} else {
			// If it's already responsive, remove the class
			navbar.className = "navbar";
		}
	});
})();

// Header Slide
if (document.getElementById('hearderSlide')) {
	// Initialize multislider for the header slide
	$('#hearderSlide').multislider();
	// Pause the multislider
	$('#hearderSlide').multislider('pause');
}

// Function to close the shopping cart
function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	// Toggle the 'hide' class on the cart
	cart.classList.toggle('hide');
	// Toggle the 'stopScrolling' class on the body to prevent scrolling
	document.querySelector('body').classList.toggle('stopScrolling');
}

// Open Shopping Cart Event Listener
const openShopCart = document.querySelector('.shoppingCartButton');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	// Toggle the 'hide' class on the cart
	cart.classList.toggle('hide');
	// Toggle the 'stopScrolling' class on the body to prevent scrolling
	document.querySelector('body').classList.toggle('stopScrolling');
});

// Close Shop
