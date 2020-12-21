var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.querySelector('span#rgb');
var squares = document.querySelectorAll('.square');
var messageDisplay = document.querySelector('span#message');
var h1 = document.querySelector('h1');
var reset = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

colorDisplay.textContent = pickedColor;

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove('selected');
		modeButtons[1].classList.remove('selected');
		this.classList.add('selected');
		// if(this.textContent === "Easy"){
		// 	numSquares = 3;
		// }else{
		// 	numSquares = 6;
		// }
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		resetAll();

		//figure out how many squares to show
		//pick new colors
		//pick a new pickedColor
		//Update page to reflect changes
	})
}

function resetAll(){
	//generate all new color
	colors = generateRandomColors(numSquares);
	//pick one new color from array
	pickedColor = pickColor();
	//change color display to match the pick color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	reset.textContent = "New Colors";
	//change the color of the squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

// easyButton.addEventListener("click", function(){
// 	hardButton.classList.remove("selected");
// 	easyButton.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor =  pickColor();
// 	messageDisplay.textContent = "";
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardButton.addEventListener("click", function(){
// 	easyButton.classList.remove("selected");
// 	hardButton.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor =  pickColor();
// 	messageDisplay.textContent = "";
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}
// })

reset.addEventListener("click", function(){
	//generate all new color
	colors = generateRandomColors(numSquares);
	//pick one new color from array
	pickedColor = pickColor();
	//change color display to match the pick color
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	//change the color of the squares
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
})


for(var i = 0; i < squares.length; i++){
	//adding color
	squares[i].style.backgroundColor = colors[i];

	//adding event listener
	squares[i].addEventListener("click",function(){

		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			messageDisplay.textContent = "Correct!";
			reset.textContent = "Play Again?"
		}else{
			messageDisplay.textContent = "Wrong!!!";
			this.style.backgroundColor = "#232323";
		}
	})
}

function changeColor(color){
	//loop through all the color
	for(var i = 0; i < squares.length; i++){
		//Change the color with the given color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an Array
	var arr = [];
	//add num number of colors on the Array
	for(var i = 0; i < num; i++){
		//get random color and push into array
		arr.push(randomColor())
	}
	//return Array
	return arr;
}

function randomColor(){
	//pick a red 0 to 255
	var red = Math.floor(Math.random() * 255);
	//pick a green 0 to 255
	var green = Math.floor(Math.random() * 255);
	//pick a blue 0 to 255
	var blue = Math.floor(Math.random() * 255);

	//return all 
	return "rgb" + "("+ red + ", " + green + ", " + blue + ")";
}