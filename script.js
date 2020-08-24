// TO DO:
// 1. Read the input colours, and write the CSS syntax
// to create the background between those two input colors
// and display that CSS synatx on the screen
// 2. actually change the backgroud of
// our page to the generated gradient using the input values

//This varaible will be used to show the CSS syntax of
// the gradient in the h3 tag.
var css = document.querySelector("h3");
// selecting the class color1 and color 2
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// Note that use console to keep on checking whether
// functionality till now is correctly working or not

// Now we need to check the backgroud.
// Inspect element in chrome to see that the background
// is part of the body tag. So we know that we 
// need to manipulate the body

function setGradient(){
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	// modofy h3 (css) to display the syntax.
	// confusing way to add text. Did something else earlier
	// That's why we'll switch to reach later.
	css.textContent = body.style.background + ";";
}

//manipulate body whenever input changes
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

