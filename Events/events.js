
let myButton = document.getElementById("my_btn");
myButton.style.float = "right";
myButton.addEventListener("click", () => {
	
	alert("This was shown by the button");

}, false);

let myDiv = document.getElementById("my_div");
myDiv.addEventListener("click", () => {

	alert("This was shown by the div")

}, true);
