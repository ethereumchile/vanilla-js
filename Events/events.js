let my_btn = document.getElementById("my_btn");
my_btn.addEventListener("click",clic,false);
my_btn.style.float="right";

let my_div = document.getElementById("my_div");
my_div.addEventListener("click",another_clic,true);


function clic(){
	alert("This was shown by the button");
	//my_div.innerHTML = "<p>Hello Dolly.</p>";
}

function another_clic(){
	alert("This was shown by the div")
}