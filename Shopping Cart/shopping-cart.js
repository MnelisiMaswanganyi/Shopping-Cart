// Retrieve or initialize the shopping cart from local storage
let productsInCart = JSON.parse(localStorage.getItem('shoppingCart'));
if (!productsInCart) {
	productsInCart = [];
}

// Select DOM elements
const parentElement = document.querySelector('#buyItems');
const cartSumPrice = document.querySelector('#sum-prices');
const products = document.querySelectorAll('.product-under');

// Calculate the total sum of prices in the shopping cart
const countTheSumPrice = function () { // 4
	let sum = 0;
	productsInCart.forEach(item => {
		sum += item.price;
	});
	return sum;
}

// Update the HTML representation of the shopping cart
const updateShoppingCartHTML = function () {  // 3
	// Store the shopping cart in local storage
	localStorage.setItem('shoppingCart', JSON.stringify(productsInCart));

	// Check if the shopping cart is not empty
	if (productsInCart.length > 0) {
		// Generate HTML for each product in the cart
		let result = productsInCart.map(product => {
			return `
				<li class="buyItem">
					<img src="${product.image}">
					<div>
						<h5>${product.name}</h5>
						<h6>R${product.price}</h6>
						<div>
							<button class="button-minus" data-id=${product.id}>-</button>
							<span class="countOfProduct">${product.count}</span>
							<button class="button-plus" data-id=${product.id}>+</button>
						</div>
					</div>
				</li>`;
		});

		// Update the HTML of the shopping cart
		parentElement.innerHTML = result.join('');
		document.querySelector('.checkout').classList.remove('hidden');
		cartSumPrice.innerHTML = 'R' + countTheSumPrice();
	} else {
		// Display a message when the shopping cart is empty
		document.querySelector('.checkout').classList.add('hidden');
		parentElement.innerHTML = '<h4 class="empty">Your shopping cart is empty</h4>';
		cartSumPrice.innerHTML = '';
	}
}

// Update the quantity and price of a product in the shopping cart
function updateProductsInCart(product) { // 2
	for (let i = 0; i < productsInCart.length; i++) {
		if (productsInCart[i].id == product.id) {
			productsInCart[i].count += 1;
			productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
			return;
		}
	}
	// If the product is not in the cart, add it
	productsInCart.push(product);
}

// Add click event listeners to each product for adding to the cart
