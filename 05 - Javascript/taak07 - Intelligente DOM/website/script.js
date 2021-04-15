document.title = "Dit zijn drie films";
console.log(window.document);

console.log(document.body.innerHTML);

document.querySelector("#posterimg1").src = "index.html";
var elem = document.querySelector('#posterimg1');
elem.style.backgroundColor = 'purple';

document.querySelector("#posterimg2").src = "index.html";
var elem = document.querySelector('#posterimg2');
elem.style.backgroundColor = 'green';

document.querySelector("#posterimg3").src = "index.html";
var elem = document.querySelector('#posterimg3');
elem.style.backgroundColor = 'orange';