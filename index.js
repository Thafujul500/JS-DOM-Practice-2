var ID1 = document.getElementById("ID1");

ID1.innerHTML = "Helow"

document.getElementsByClassName("class1")[0].innerHTML = "I love You."

document.getElementsByName("h5")[0].innerHTML = "I hate you."

document.getElementsByTagName("h2")[0].innerHTML = "I like you."

document.querySelectorAll("h4")[0].innerHTML = " i dislike you."


// Onclick event

function zi(){
    alert("Assalamualicum")
}

function ni(){
    document.getElementsByClassName("ni")[0].innerHTML = "Your full name is Thafujul Islam"
}

function date(){
    document.getElementById("todayDate").innerHTML = Date();
}

//          Taversing 


var child = document.querySelector(".main");

console.log(child.childNodes);


var ri = document.getElementsByClassName("zihad")[0];

console.log(ri.parentNode);

var par = document.querySelector(".parent");

console.log(par.firstElementChild);
console.log(par.lastElementChild);
console.log(par.childNodes);
console.log(par.children);

var middle = document.getElementsByClassName("middleChild")[0];

console.log(middle.nextElementSibling);


console.log(middle.previousElementSibling);

//         Manipulating

var create = document.createElement("div")

create.innerHTML = "<p>This is a paragraph tag</p>"

document.body.appendChild(div)

var create = document.createElement("h1");


var createEle = document.createTextNode("I am Zihad")

create.appendChild(createEle)

let div = document.createElement("div")

div.innerHTML = "<p> This is a paragraph</p>"

document.body.appendChild(div)

let amar = document.createElement("h2");

amar.innerHTML = "<h1> This is Thafujul Isalm </h1>"
document.body.appendChild(amar)

amar.id = "amarId"
amar.className = "amarClass"

var tomer = document.createElement("h3")

tomer.innerHTML = " I lover you!"

document.body.appendChild(tomer)
tomer.className = "tomerCalss"

var h1 = document.createElement("h1")

var text = document.createTextNode("I am thafujul")

h1.textContent(" i am a text")

tar.appendChild(text)

//  Anisul Islam  Dom Manupulating Start

// Creating H2 tag

var createH1 = document.createElement("h1");
var text = document.createTextNode("This is a new text.")

createH1.appendChild(text)

let my_div = document.getElementById("my_div");

my_div.appendChild(createH1)

var text0 = document.createTextNode("I am First p")


var p0 = document.createElement("p")

p0.appendChild(text0)


var hfirst = document.getElementsByClassName("h_first")[0];


my_div.insertBefore(p0,hfirst)


//     Anisul Islam  Dom Manupulating End

var div = document.createElement("div")
var text = document.createElement("h1")
text.innerHTML = "This is a text."

div.appendChild(text)

div.innerHTML = " <p> paragraph </p> ";

document.body.appendChild(div)

div.id = "ID"
div.className = "Class"

var parent = document.querySelector("#parent");

var child0 = document.createElement("h1")
 
var text0 = document.createTextNode("I Love you.")


child0.appendChild(text0);


parent.appendChild(child0)

var last = document.createElement("P");

var lastText = document.createTextNode("I love you too.")

last.appendChild(lastText)

var first = getElementById("first")

parent.appendChild(last)

let div = document.createElement("div")

let h1 = document.createElement("h1")

h1.textContent = "I am zihad"

div.appendChild(h1);

document.body.appendChild(div)

// Other Practice

var parent = document.getElementById("parent");

var h1 = document.createElement("h1");

var text = document.createTextNode("Nisahd Rahman")

h1.appendChild(text)

parent.appendChild(h1)


var h2 = document.createElement("h2");
var text2 = document.createTextNode("I am Nishad");

h2.appendChild(text2);

var zihad = getElementById("zihad")

var ul = document.createElement("ul")

ul.id = "menu";

let li1 = document.createElement("li");

li1.textContent = "Home"

var home = document.createTextNode("Home");

li1.appendChild(home);

ul.appendChild(li1);
document.body.appendChild(ul);


var li2 = document.createElement("li");

li2.textContent = "About";

ul.appendChild(li2);

var li3 = document.createElement("li")

var Li3 = document.createTextNode("Contract");

li3.appendChild(Li3);

ul.appendChild(li3);

let div1 = document.createElement("div")

div1.id = "Menu"

var p = document.createElement("p");

p.innerHTML = "p Tag"

div1.appendChild(p)

document.body.appendChild(div1)

let menu = document.querySelector("#menu");

function CreateMenu(name){
    let li = document.createElement("li")
    li.textContent = name;
    return li; 
}

manu.appendChild(CreateMenu("Zihad"))
manu.appendChild(CreateMenu("Thafujul"))
manu.appendChild(CreateMenu("Nishad"))




















