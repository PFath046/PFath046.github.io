	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "salmon",
		lactoseFree: true,
		nutFree: true,
		price: 10.00
	},
	{
		name: "yogurt",
		lactoseFree: false,
		nutFree: true,
		price: 1.99
	},
	{
		name: "almond granola",
		lactoseFree: true,
		nutFree: false,
		price: 2.35
	},
	{
		name: "tuna",
		lactoseFree: true,
		nutFree: true,
		price: 10.00
	}
	,
	{
		name: "milk",
		lactoseFree: false,
		nutFree: true,
		price: 3.00
	}
	,
	{
		name: "chocolate",
		lactoseFree: true,
		nutFree: false,
		price: 2.00
	}
	,
	{
		name: "shrimp",
		lactoseFree: true,
		nutFree: true,
		price: 10.00
	}
	,
	{
		name: "butter",
		lactoseFree: false,
		nutFree: true,
		price: 2.00
	}
	,
	{
		name: "bread",
		lactoseFree: true,
		nutFree: false,
		price: 1.00
	}
	,
	{
		name: "beef",
		lactoseFree: true,
		nutFree: true,
		price: 10.00
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
