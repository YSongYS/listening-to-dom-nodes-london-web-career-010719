// using this file is optional
// you can also load the code snippets in using your browser's console


const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});



const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.key);
});




function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}





function bubble(e) {
  // stop! that! propagation!
  e.stopPropagation(); // take out to propergate 

  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}
