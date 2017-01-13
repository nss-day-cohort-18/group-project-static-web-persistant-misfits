// The team's product page will be driven from JavaScript code. Decide on the names of, at least, 8 products that your business manufactures. The product page must have a linked JavaScript file.

// Create an array to hold your products.
// Each item in the array must be an object that contains the following information: name, description, price, and URL for product image. You can add more properties if that's what the team wants, but it must have those.
// The team will use JavaScript to add each product to the DOM.
// Each product must be a card, much like everyone made in the Static Web quiz. As a team, decide on the style of the card.
// The layout of the product page should be a grid of cards. 3-wide, 4-wide, 5-wide, the teams must decide how many cards are on each row.
/*=============================================*/






//Product is an ARRAY with OBJECTS as the values
var product = [
	{
		title1: "Product 1",
		description1: "description 1",
		price1: 1,
		URL1: "something1.com",
	},
	{
		title2: "Product 2",
		description2: "description 2",
		price2: 2,
		URL2: "something2.com",
	},
	{
		title3: "Product 3",
		description3: "description 3",
		price3: 3,
		URL3: "something3.com",
	},
	{
		title4: "Product 4",
		description4: "description 4",
		price4: 4,
		URL4: "something4.com",
	},
];


//Grabbing the div that will be wrapping the 
//product cards
var sectionEntirety = document.getElementById("something");



/*---
The purpose of this function:
1. Cycle through each object or product
2. Grab both key and value pairs to 
	push to DOM and use for id naming
3.Assign id names for each element created, and class
	name for the product cards in general
4. Create div to hold the contents of productcard
5. Create header for each card
6. Create paragraph for description, price, and url
7. Update content to appropriate elements
8. Append elements appropriately
---*/
function innerPushin() {
	if (product.length >= 1) {
		for (var prop in product) {
			var something = product[prop];
			var myValues = [];
			var myKeys = [];
			// console.log(Object.values(something));
			myValues.push(Object.values(something));
			myKeys.push(Object.keys(something));
			console.log(myValues);

			console.log(myValues[0][1]);
			console.log(myKeys[0][1]);

			var titleIdName = myKeys[0][0];
			var descriptionIdName = myKeys[0][1];
			var priceIdName = myKeys[0][2];
			var websiteIdName = myKeys[0][3];
			console.log(titleIdName, descriptionIdName, priceIdName, websiteIdName);


			var titleContent = myValues[0][0];
			var descriptionContent = myValues[0][1];
			var priceContent = myValues[0][2];
			var websiteContent = myValues[0][3];

			// function createItems() {

			var div = document.createElement("div");
			div.className = "productCards";
			var head = document.createElement("h2");
			head.id = titleIdName;
			var para = document.createElement("p");
			para.id = descriptionIdName;
			var price = document.createElement("p");
			price.id = priceIdName
			var website = document.createElement("p");
			website.id = websiteIdName;

			head.innerHTML += titleContent;
			para.innerHTML += descriptionContent;
			price.innerHTML += priceContent;
			website.innerHTML += websiteContent;

			sectionEntirety.appendChild(div);
			div.appendChild(head);
			div.appendChild(para);
			div.appendChild(price);
			div.appendChild(website);

    	}
    }
};

//Call'd
innerPushin();




