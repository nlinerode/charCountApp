//get selectors

var textarea = document.querySelector("textarea");
//var submit = document.querySelector(".submitBtn");
var display = document.querySelector(".resultDisplay");
var resetBtn = document.querySelector(".resetBtn");
var countBtn = document.querySelector(".submitBtn");
var charLength;
var wordCount;

var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

//return val of text area
function textValue() {
    var value = textarea.value;
    return value;
}

//click listeners for each button
var buttonCount = countBtn.addEventListener("click", getCountEvent);
//keypress listener updates each keypress
var enterCount = document.addEventListener("keyup", getCountEvent);
//touch listener for mobile
if(isTouchDevice){
    var touchCount = document.addEventListener("touchend", getCountEvent);
}
// reset button click event
resetBtn.addEventListener("click", reset);

// deteremine if device is touch capable by finding touchpoints in IE10 or touchstart on other devices
function isTouchDevice(){
    return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
}

// general count event to find char and word length
function getCountEvent() {
    charLength = clickEventChar();
    wordCount = clickEventWord();
    displayResults();
}

//take val from event, and find length of string
function clickEventChar() {
    var charValue = textValue().trim();
    var charLength = charValue.length;
    //return length of string for chars
    return charLength;
}

//return word count based on array lenght of indices (array indicies + 1) (last index of array plus one)
function clickEventWord() {
    //take value from text area
    var wordValue = textValue();
    var wordCount;
    //create array using split to separate words by spaces
    // var arr = value.split(" ");
    if (wordValue === "") {
        wordCount = 0;
    } else {
        var arr = wordValue.trim().replace(/  +/g, " ").split(/[\s\r\n:\/\\]/gi);
        wordCount = arr.length;
    }
    return wordCount;
}

//print results to page elements
function displayResults() {
    display.innerHTML = "Character Count: " + "<strong>" + charLength + "</strong>" + "<br>" + "Word Count: " + "<strong>" + wordCount + "</strong>";
}

// reset button function to reset value in textarea
function reset() {
    textarea.value = "";
    display.innerHTML = "Character Count: <strong>0</strong>" + "<br>" + "Word Count: <strong>0</strong>";
}

// split(/[s,:;/\]/)

// keypress updates on enter key
//var enterKeyCount = document.addEventListener("keypress", function (e) {
//    if (e.keyCode === 13) {
//        getCountEvent();
//    }
//});