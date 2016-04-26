var allProducts = [];

//create image objects, and push new objects into array that holds all products
function Image(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.numShown = 0;
  this.numClicked = 0;
  allProducts.push(this);
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

var imageNodeOne = document.getElementById('image-one');
var imageNodeTwo = document.getElementById('image-two');
var imageNodeThree = document.getElementById('image-three');
var parentEl = document.getElementById('image-container');

function makeOnePic () {
  var randomNumber = Math.floor(Math.random() * 20);
  var chosenProduct = allProducts[randomNumber].filepath;
  allProducts[randomNumber].numShown += 1;
  imageNodeOne.src = chosenProduct;

}

function displayPics () {

  imageNodeOne.src = '';
  imageNodeTwo.src = '';
  imageNodeThree.src = '';
  makeOnePic();
  // var randomNumber = Math.floor(Math.random() * 20);
  // var chosenProduct = allProducts[randomNumber].filepath;
  //
  // allProducts[randomNumber].numShown += 1;
  // console.log(allProducts[randomNumber].name + (allProducts[randomNumber].numShown));

  // var imgEl = document.createElement('img');
  // imageNodeOne = document.getElementById('image-one');
  // imageNodeOne.src = chosenProduct;
  // parentEl.appendChild(imgEl);
  var randomNumberTwo = Math.floor(Math.random() * 20);
  while (randomNumberTwo == randomNumber) {
    var randomNumberTwo = Math.floor(Math.random() * 20);
  }
  var chosenProduct = allProducts[randomNumberTwo].filepath; //at the same time, increment here the number of times shown for each chosenProduct

  allProducts[randomNumberTwo].numShown += 1;
  // console.log(allProducts[randomNumberTwo].name + allProducts[randomNumberTwo].numShown);

  // var parentEl = document.getElementById('image-container');
  // var imgEl = document.createElement('img');
  // var imageNodeTwo = document.getElementById('image-two');
  imageNodeTwo.src = chosenProduct;
  // parentEl.appendChild(imgEl);
  var randomNumberThree = Math.floor(Math.random() * 20);
  while (randomNumberThree == randomNumberTwo || randomNumberThree == randomNumber) {
    var randomNumberThree = Math.floor(Math.random() * 20);
  }
  var chosenProduct = allProducts[randomNumberThree].filepath;

  allProducts[randomNumberThree].numShown += 1;
  // console.log(allProducts[randomNumberThree].name + allProducts[randomNumberThree].numShown);

  // var parentEl = document.getElementById('image-container');
  // var imgEl = document.createElement('img');
  // var imageNodeThree = document.getElementById('image-three');
  imageNodeThree.src = chosenProduct;
  // parentEl.appendChild(imgEl);
}

function handleClicks (event) {
  console.log(event.target);
  displayPics();
}

// var clickFirstImage = document.getElementById('image-one');

displayPics();

imageNodeOne.addEventListener('click', handleClicks);

// var clickSecondImage = document.getElementById('image-two');
imageNodeTwo.addEventListener('click', handleClicks);

// var clickThirdImage = document.getElementById('image-three');
imageNodeThree.addEventListener('click', handleClicks);
