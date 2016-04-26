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

// function getFirstImage () {
//   var randomNumber = Math.floor(Math.random() * 20);
//   var firstChosenImage = allProducts[randomNumer].filepath;
//   var parentEl = document.getElementById('image-container');
//   var imageEL = document.createElement('img');
//   imageEl.src = chosenImage;
//   parentEl.appendChild(imageEl);
//   return firstChosenImage;
// }
//
// function getSecondImage(firstChosenImage) {
//   var randomNumber = Math.floor(Math.random() * 20);
//
// }
//
// function getRandomImage () {
//   var randomNumber = Math.floor(Math.random() * 20);
//   var chosenImage = allProducts[randomNumber].filepath;
//   return chosenImage;
// }
//
// function appendToPage (chosenImage) {
//   var parentEl = document.getElementByd('image-container');
//   var imageEl = document.createElement('img');
//   imageEl.src = chosenImage;
//   parentEl.appendChild(imageEl);
// }



function renderFirstImageToPage() {
  var firstRandomNumber = Math.floor(Math.random() * 20);
  var chosenImage = allProducts[firstRandomNumber].filepath;
  var parentEl = document.getElementById('image-container');
  var imageEl = document.createElement('img');
  imageEl.src = chosenImage;
  parentEl.appendChild(imageEl);
  return firstRandomNumber;
}

function renderSecondImageToPage(firstRandomNumber) {
  var secondRandomNumber = Math.floor(Math.random() * 20);
  if (secondRandomNumber == firstRandomNumber) {
    var secondRandomNumber = Math.floor(Math.random() * 20);
  } else {
    var chosenImage = allProducts[secondRandomNumber].filepath;
    var parentEl = document.getElementById('image-container');
    var imageEl = document.createElement('img');
    imageEl.src = chosenImage;
    parentEl.appendChild(imageEl);
  }
  return secondRandomNumber;
}

function renderThirdImageToPage(firstRandomNumber, secondRandomNumber) {
  var thirdRandomNumber = Math.floor(Math.random() * 20);
  if (thirdRandomNumber == firstRandomNumber || thirdRandomNumber == secondRandomNumber) {
    var thirdRandomNumber = Math.floor(Math.random() * 20);
  } else {
    var chosenImage = allProducts[thirdRandomNumber].filepath;
    var parentEl = document.getElementById('image-container');
    var imageEl = document.createElement('img');
    imageEl.src = chosenImage;
    parentEl.appendChild(imageEl);
  }
}

var poop = renderFirstImageToPage();
var poop2 = renderSecondImageToPage(poop);
renderThirdImageToPage(poop, poop2);
