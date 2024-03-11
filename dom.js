// DOM => Document Object Model => To Change The Content Of HTML Page Dynamically

// DOM Manipulation

// let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName('container');

// console.log(elemClass);

// elemClass[0].style.background = 'yellow';

elemClass[0].classList.add('bg-primary');

elemClass[0].classList.add('text-success');

// Remove Class From The Tag
// elemClass[0].classList.remove('text-success');

// Extract HTML Content Of The Tag
// console.log(elemClass[1].innerHTML);

// Extract Text Content Of The Tag
// console.log(elemClass[1].innerText);

// console.log(document.getElementsByTagName('button'));
tagName = document.getElementsByTagName('div');
// console.log(tagName);

// Created a tag explicitly with content
createdElement = document.createElement('p');
createdElement.innerText = "This is a created Paragraph.";
tagName[0].appendChild(createdElement);


// createdElement2 = document.createElement('b');
// createdElement2.innerText = "\n This is a replaced Paragraph.";
// tagName[0].replaceChild(createdElement2, createdElement);

// tagName[0].removeChild(createdElement);    // Removes An Element

// console.log(document.location)
// console.log(document.title)
// console.log(document.scripts)
// console.log(document.URL)
// console.log(document.links)
// console.log(document.forms)
// console.log(document.images)
// console.log(document.domain)


// Returns the element with the class name ".container"
// selec = document.querySelector('.container')
// console.log(selec);

selecAll = document.querySelectorAll('.container')
console.log(selecAll);