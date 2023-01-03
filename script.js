// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("mouseleave", function() {
// 	console.log("CLICK!!!");
// })


var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength () {
	return input.value.length;
}

function createListElement () {
	var li = document.createElement("li");
	var btn = document.createElement("button");
	btn.innerHTML = "DELETE";
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.classList.add("item");
	li.appendChild(btn);
	btn.classList.add("del");
	input.value = "";

	li.onclick = function() {
		this.classList.toggle("done");
	}
	btn.onclick = function() {
		this.parentElement.remove();
	}
}

function addListAfterClick () {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function crossOff(event) {
	this.classList.toggle("done")
}

button.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)