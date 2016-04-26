var allProducts = [];

//create image objects, and push new objects into array that holds all products
function Image(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  var numShown = 0;
  var numClicked = 0;
  allProducts.push(this);
  console.log(allProducts);
};

var bag = new Image('bag', 'img/bag.jpg');
var banana = new Image('banana', 'img/banana.jpg');
var bathroom = new Image('bathroom', 'img/bathroom.jpg');
var boots = new Image('boots', 'img/boots.jpg');
var breakfast = new Image('breakfast', 'img/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'img/bubblegum.jpg');
var chair = new Image('chair', 'img/chair.jpg');
var cthulhu = new Image('cthulhu', 'img/cthulhu.jpg');
var dogduck = new Image('dogduck', 'img/dog-duck.jpg');
var dragon = new Image('dragon', 'img/dragon.jpg');
var pen = new Image('pen', 'img/pen.jpg');
var petsweep = new Image('petsweep', 'img/pet-sweep.jpg');
var scissors = new Image('scissors', 'img/scissors.jpg');
var shark = new Image('shark', 'img/shark.jpg');
var sweep = new Image('sweep', 'img/sweep.png');
var tauntaun = new Image('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Image('unicorn', 'img/unicorn.jpg');
var usb = new Image('usb', 'img/usb.jpg');
var watercan = new Image('watercan', 'img/water-can.jpg');
var wineglass = new Image('wineglass', 'img/wine-glass.jpg');

function handleClicks () {
  var parentNode = document.getElementById('image-container');
  while (parentNode.firstChild) {
    parentNode.removeChild(parentNode.firstChild);
  };
  var randomNumber = Math.floor(Math.random() * 20);
  var chosenProduct = allProducts[randomNumber].filepath;
  var parentEl = document.getElementById('image-container');
  var imgEl = document.createElement('img');
  imgEl.src = chosenProduct;
  parentEl.appendChild(imgEl);
  var randomNumberTwo = Math.floor(Math.random() * 20);
  while (randomNumberTwo == randomNumber) {
    var randomNumberTwo = Math.floor(Math.random() * 20);
  }
  var chosenProduct = allProducts[randomNumberTwo].filepath;
  var parentEl = document.getElementById('image-container');
  var imgEl = document.createElement('img');
  imgEl.src = chosenProduct;
  parentEl.appendChild(imgEl);
  var randomNumberThree = Math.floor(Math.random() * 20);
  while (randomNumberThree == randomNumberTwo || randomNumberThree == randomNumber) {
    var randomNumberThree = Math.floor(Math.random() * 20);
  }
  var chosenProduct = allProducts[randomNumberThree].filepath;
  var parentEl = document.getElementById('image-container');
  var imgEl = document.createElement('img');
  imgEl.src = chosenProduct;
  parentEl.appendChild(imgEl);
}

handleClicks();
var placetoclick = document.getElementById('image-container');
placetoclick.addEventListener('click', handleClicks);
