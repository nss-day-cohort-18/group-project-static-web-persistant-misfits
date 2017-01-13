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
		title1: "Gibson Hummingbird Acoustic-Electric Guitar, Heritage Cherry",
		description1: "Much of the Hummingbird's appeal lies in its versatility. However you attack this flat-top, it pumps out rich, deep tones, and is equally at home thrumming out first-position chords as it is taking the spotlight for flatpicking leadlines further up the neck. Its spacious mahogany body and sweet, select Sitka spruce top are more than capable of nailing down the rhythm in the hands of a rock and roll sideman, or of accompanying the most nuanced performance under the fingers of today' alternative singer-songwriter.",
		price1: "PRICE: $3349.00",
		URL1: "http://www.guitarcenter.com/Gibson/2016-Hummingbird-Square-Shoulder-Dreadnought-Acoustic-Electric-Guitar.gc",
	},
	{
		title2: "Martin Standard Series D-28 Dreadnought Acoustic Guitar",
		description2: "The very first dreadnought guitars were designed and crafted by C. F. Martin & Co. in 1916, but marketed in Boston and New York exclusively under the Oliver Ditson brand. Originally made for Hawaiian slide playing style, the very first dreadnought made was a Model 222 shipped to Ditson in August of 1916. After Ditson went out of business in the early 1930s, Martin introduced the D-1 and D-2 dreadnoughts for standard playing style that would soon become Martin\'s iconic D-18 and D-28 models. Over the past 100 years, the Martin dreadnought has helped define what an acoustic guitar can and should be, and subsequently, it has become one of the most popular acoustic guitar designs in the world.",
		price2: "PRICE: $2629.00",
		URL2: "http://www.guitarcenter.com/Martin/Standard-Series-D-28-Dreadnought-Acoustic-Guitar.gc",
	},
	{
		title3: "Larrivee OM-40RWAT Orchestra Model Acoustic Guitar Natural",
		description3: "Based on Larriv&#233e's tried-and-true X-Brace design, owner Jean Larriv&#233e blended a non-symmetrical scalloped lateral cross-bracing pattern. This means maximum strength using the least amount of material. It's a build that allows even further vibration of the soundboard, while still offering a controlled bass response. All 40 Series guitars, including the OM-40RWAT are built in America using all-solid wood, like all Larriv&#233e's, and feature brand-new upgrades like bone bridge pins, nut and saddle, diamond fingerboard dots and 18:1 open back tuners. Jean's exciting new design means a fresh new sound that is sure to appeal to traditional and long-time Larriv&#233e players alike. The OM-40RWAT features an Austrian Red spruce top paired with rosewood body, a mahogany neck with ebony fingerboard, bold rope rosette and purfling, and a tortoise pickguard.<br /><br>Includes hardshell case.",
		price3: "PRICE: $1911.00",
		URL3: "http://www.guitarcenter.com/Larrivee/OM-40RWAT-Orchestra-Model-Acoustic-Guitar.gc",
	},
	{
		title4: "Fender Limited Edition American Standard Telecaster Rosewood Neck Electric Guitar Surf Green Mint Green Pickguard",
		description4: "This limited-edition exclusive from Fender is loaded with premium features, including the striking 1-piece rosewood modern C-shape neck with an etched headstock logo. It an alder body and Fender Twisted single-coil and Broadcaster pickups for buckets of fabulous tone. Other fantastic appointments include 6-saddle tele bridge, master no-load tone control and hand-rubbed oil neck finish. Includes hardshell case.",
		price4: "PRICE: $1449.99",
		URL4: "http://www.guitarcenter.com/Fender/Limited-Edition-American-Standard-Telecaster-Rosewood-Neck-Electric-Guitar.gc",
	},
	{
		title5: "PRS 2017 SE 277 Baritone Electric Guitar",
		description5: "Built with a longer 27.7 in. scale length, the SE 277 Baritone is perfect for heavier, more aggressive guitar playing. But this is no one trick pony. The 277\'s 85/15 pickups deliver articulate growl, allowing the 277 to handle blues and funk with flair as well.<br>Additional appointments include a string-through bridge design for strong, resonant tone. So whether you\'re interested in rocking a clean tone, picking bass lines beneath higher melodies on one guitar, or chugging out the heaviest drop-tuned riffs, the SE 277 offers versatility in a reliable package for players looking to push the envelope. Ships tuned B to B. Includes gig bag.",
		price5: "PRICE: $749.00",
		URL5: "http://www.guitarcenter.com/PRS/2017-SE-277-Baritone-Electric-Guitar.gc",
	},
	{
		title6: "Gretsch Guitars G6136T White Falcon with Bigsby White",
		description6: "Luxurious gold appointments and elegant white finish enhance the world-famous appeal of the classic Gretsch Guitars G6136T White Falcon. The White Falcon features dual High Sensitive Filter'Tron pickups, a vertical Gretsch headstock logo, Bigsby B6GB vibrato tailpiece, and feather engraved mother-of-pearl hump block position markers. Gretsch includes a hardshell case with the G6136T. Includes case.",
		price6: "PRICE: $3499.00",
		URL6: "http://www.guitarcenter.com/Gretsch-Guitars/G6136T-White-Falcon-with-Bigsby.gc",
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
		for (var eachObject in product) {
			var something = product[eachObject];
			var myValues = [];
			var myKeys = [];
			// console.log(Object.values(something));
			myValues.push(Object.values(something));
			myKeys.push(Object.keys(something));
			console.log(myKeys, myValues);

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




