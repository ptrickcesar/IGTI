const magic = document.querySelector('.magic');

const body = document.querySelector('body');

const redValue = document.querySelector('#redValue');
const redRange = document.querySelector('#redRange');

const greenValue = document.querySelector('#greenValue');
const greenRange = document.querySelector('#greenRange');

const blueValue = document.querySelector('#blueValue');
const blueRange = document.querySelector('#blueRange');

magic.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;

function changeColor(event) {
  if (event.target.id === 'redRange') {
    redValue.value = redRange.value;
  }
  if (event.target.id === 'greenRange') {
    greenValue.value = greenRange.value;
  }
  if (event.target.id === 'blueRange') {
    blueValue.value = blueRange.value;
  }

  magic.style.backgroundColor = `rgb(${redRange.value}, ${greenRange.value}, ${blueRange.value})`;
}

body.addEventListener('change', changeColor);
