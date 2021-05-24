var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
//for list all li item
var listItems=document.getElementsByTagName("li"); 

//check length of input fild
function inputLength() {
	return input.value.length;
}
//remove parent tag 
function removeParent(evt){
	evt.target.parentNode.remove();
}

//create list and delete btn element
function createListElement() {
	//list element
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	//button element
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}
//create done funtion
function strikeThrough(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}



//add list new  item after click 
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
//add list new item after pass enter
function addListAfterKeypress(event){
	if (inputLength() > 0 && event.key === 'Enter') {
		createListElement();
	}
}
//button event
button.addEventListener("click", addListAfterClick);
//keypress event
input.addEventListener("keypress", addListAfterKeypress);
//create done event
ul.addEventListener("click", strikeThrough);