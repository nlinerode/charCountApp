//get selectors

var textarea = document.querySelector("textarea");
var submit = document.querySelectorAll(".submitBtn");
var display = document.querySelector(".resultDisplay");
var countBtn = document.querySelector(".submitBtn");
var charBtn = document.querySelector(".charBtn");
var wordBtn = document.querySelector(".wordBtn");
var charLength;
var wordCount;

//return val of text area
function textValue(){
	var value = textarea.value;
	return value;
}

//click listeners for each button
// var charClick = charBtn.addEventListener("click", clickEventChar);
// var wordClick = wordBtn.addEventListener("click", clickEventWord);
var getCount = countBtn.addEventListener("click", getCountEvent);

function getCountEvent(){
	charLength = clickEventChar();
	wordCount = clickEventWord();
	displayResults();
}

//take val from event, and find length of string
function clickEventChar(){
	var charValue = textValue().trim();
	var charLength = charValue.length;
//return length of string for chars
	return charLength;
}

//return word count based on array lenght of indices (array indicies + 1) (last index of array plus one)
function clickEventWord(){
	//take value from text area
	var wordValue = textValue();
	var wordCount;
//create array using split to separate words by spaces
	// var arr = value.split(" ");
	if(wordValue === ""){
		wordCount = 0;
	} else{
			var arr = wordValue.trim().replace(/  +/g, " ").split(/[\s:/\\]/gi);
			wordCount = arr.length;
	}
	return wordCount;
}

//print results to page elements
function displayResults(){
display.innerHTML = "Character Count: " + "<strong>"+ charLength + "</strong>" + "<br>";

display.innerHTML += "Word Count: " + "<strong>"+ wordCount +"</strong>";
}
// 	if (charClick){
// 		display.textContent = "Character Count: " + value;
// 	} else{
// 		display.textContent = "Word Count: " + value;
// 	}
// }

// split(/[s,:;/\]/)