const $ = (id) => document.querySelector(id);

const title = $('h1');
const parrafito = $('.parrafito');
const pid = $('#pid');
const input = $('input');

console.log(input.value);

console.log({
  title,
  parrafito,
  pid,
  input,
});

title.innerText = 'Manipulando el DOM <br> con JS';
// console.log(title.getAttribute('pantalla'));
// title.setAttribute('pantalla', 'grande');

title.classList.add('grande');
title.classList.remove('grande');
input.value = '2112';

const image = document.createElement('img');
image.setAttribute('src', 'https://picsum.photos/200/300');
console.log(image);

pid.innerHTML = '';
pid.appendChild(image);