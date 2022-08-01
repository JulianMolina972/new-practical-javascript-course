const $ = (id) => document.querySelector(id);


const form = $('#form');
const title = $('h1');
const input1 = $('#calculo1');
const input2 = $('#calculo2');
const btn = $('#btnCalcular');
const parrafo = $('#result');
const cuadrado = $('#cuadrado');
const red = $('#red');
const blue = $('#blue');
const gray = $('#gray');



// form.addEventListener('submit', sumarInputValue);

// function sumarInputValue(event) {
//   console.log({event});
//   event.preventDefault();
//   console.log(parseInt(input1.value) + parseInt(input2.value));
//   parrafo.innerText = parseInt(input1.value) + parseInt(input2.value);
// }


red.addEventListener('mouseover', event => {
  event.target.style.background = 'red';
})

form.addEventListener('click', sumarInputValue);

function sumarInputValue(event) {
  console.log(parseInt(input1.value) + parseInt(input2.value));
  parrafo.innerText = parseInt(input1.value) + parseInt(input2.value);
}


