var allProducts = [];
var totalClicks = 0;
//Accessing DOM shit
var imageNodeOne = document.getElementById('image-one');
var imageNodeTwo = document.getElementById('image-two');
var imageNodeThree = document.getElementById('image-three');
var parentEl = document.getElementById('image-container');

//create image objects, and push new objects into array that holds all products
function Image(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.numShown = 0;
  this.numClicked = 0;
  allProducts.push(this);
};

var bag = new Image('bag', 'file:///Users/sarahdebey/CF/201/bus-mall/img/bag.jpg');
var banana = new Image('banana', 'file:///Users/sarahdebey/CF/201/bus-mall/img/banana.jpg');
var bathroom = new Image('bathroom', 'file:///Users/sarahdebey/CF/201/bus-mall/img/bathroom.jpg');
var boots = new Image('boots', 'file:///Users/sarahdebey/CF/201/bus-mall/img/boots.jpg');
var breakfast = new Image('breakfast', 'file:///Users/sarahdebey/CF/201/bus-mall/img/breakfast.jpg');
var bubblegum = new Image('bubblegum', 'file:///Users/sarahdebey/CF/201/bus-mall/img/bubblegum.jpg');
var chair = new Image('chair', 'file:///Users/sarahdebey/CF/201/bus-mall/img/chair.jpg');
var cthulhu = new Image('cthulhu', 'file:///Users/sarahdebey/CF/201/bus-mall/img/cthulhu.jpg');
var dogduck = new Image('dogduck', 'file:///Users/sarahdebey/CF/201/bus-mall/img/dog-duck.jpg');
var dragon = new Image('dragon', 'file:///Users/sarahdebey/CF/201/bus-mall/img/dragon.jpg');
var pen = new Image('pen', 'file:///Users/sarahdebey/CF/201/bus-mall/img/pen.jpg');
var petsweep = new Image('petsweep', 'file:///Users/sarahdebey/CF/201/bus-mall/img/pet-sweep.jpg');
var scissors = new Image('scissors', 'file:///Users/sarahdebey/CF/201/bus-mall/img/scissors.jpg');
var shark = new Image('shark', 'file:///Users/sarahdebey/CF/201/bus-mall/img/shark.jpg');
var sweep = new Image('sweep', 'file:///Users/sarahdebey/CF/201/bus-mall/img/sweep.png');
var tauntaun = new Image('tauntaun', 'file:///Users/sarahdebey/CF/201/bus-mall/img/tauntaun.jpg');
var unicorn = new Image('unicorn', 'file:///Users/sarahdebey/CF/201/bus-mall/img/unicorn.jpg');
var usb = new Image('usb', 'file:///Users/sarahdebey/CF/201/bus-mall/img/usb.jpg');
var watercan = new Image('watercan', 'file:///Users/sarahdebey/CF/201/bus-mall/img/water-can.jpg');
var wineglass = new Image('wineglass', 'file:///Users/sarahdebey/CF/201/bus-mall/img/wine-glass.jpg');

//generates three random numbers and pushes to threeDiffRands array
var threeDiffRands = [];

function makeRandom() {
  var randomNumber = Math.floor(Math.random() * 20);
  return randomNumber;
}

function makeRandomNumberArray () {
  threeDiffRands = [];
  for (var i = 0; i < 3; i++) {
    threeDiffRands.push(makeRandom());
  };

  while (threeDiffRands[0] == threeDiffRands[1]) {
    threeDiffRands[1] = makeRandom();
  };

  while (threeDiffRands[0] == threeDiffRands[2] || threeDiffRands[1] == threeDiffRands[2]) {
    threeDiffRands[2] = makeRandom();

  };
  console.log(threeDiffRands);
  return threeDiffRands;
} //end of make random function

	//write displayPics function that displays pics and increments times shown
function displayPics () {
  makeRandomNumberArray();
  var chosenProduct1 = allProducts[threeDiffRands[0]].filepath;
  imageNodeOne.src = chosenProduct1;
  allProducts[threeDiffRands[0]].numShown += 1;

  var chosenProduct2 = allProducts[threeDiffRands[1]].filepath;
  imageNodeTwo.src = chosenProduct2;
  allProducts[threeDiffRands[1]].numShown += 1;

  var chosenProduct3 = allProducts[threeDiffRands[2]].filepath;
  imageNodeThree.src = chosenProduct3;
  allProducts[threeDiffRands[2]].numShown += 1;
}

displayPics();

//runs when the user clicks, will increment total clicks, track what was clicked and increment, call displayPics
function handleClicks (event) {
  makeRandomNumberArray();
  totalClicks += 1;
  if (totalClicks < 26) {
    var clickedObject = event.target.src;
    console.log('This is the event.target.src of the object clicked' + clickedObject);
    displayPics();

    //iterate through the allProducts array, and see if the src of the event target matches, if it does, increment
    for (var i = 0; i < allProducts.length; i++) {
      if (clickedObject === allProducts[i].filepath) {
        allProducts[i].numClicked += 1;
      }
    }
  } else {
    drawChart();
  }
}

imageNodeOne.addEventListener('click', handleClicks);
imageNodeTwo.addEventListener('click', handleClicks);
imageNodeThree.addEventListener('click', handleClicks);

//Draw Chart

function drawChart () {
  var chartLabels = [];
  for (var i = 0; i < allProducts.length; i++) {
    chartLabels.push(allProducts[i].name);
  }

  var clicked = [];
  for (var i = 0; i < allProducts.length; i++) {
    clicked.push(allProducts[i].numClicked);
    console.log(clicked);
  }

  var shown = [];
  for (var i = 0; i < allProducts.length; i++) {
    shown.push(allProducts[i].numShown);
    console.log(shown);
  }

  var data = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Number Shown',

        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        // The actual data
        data: shown,

        yAxisID: 'y-axis-0',
      },
      {
        label: 'Number clicked',
        backgroundColor: 'rgba(54,162,235,0.2)',
        borderColor: 'rgba(54,162,235,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54,162,235,0.4)',
        hoverBorderColor: 'rgba(54,162,235,1)',
        data: clicked,
      }
    ]
  };

  var myChart = document.getElementById('my-chart').getContext('2d');

  var myBarChart = new Chart(myChart, {
    type: 'bar',
    data: data,
    options: {
      responsive: true
    }
  });
}
