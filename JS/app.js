//Declare Global Variables
var allProducts = [];
var totalClicks = 0;
var imageNodeOne = document.getElementById('image-one');
var imageNodeTwo = document.getElementById('image-two');
var imageNodeThree = document.getElementById('image-three');
var parentEl = document.getElementById('image-container');
var myChart = document.getElementById('my-chart').getContext('2d');
var threeDiffRands = [];

//Object constructor to make Image objects
function Image(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.numShown = 0;
  this.numClicked = 0;
  allProducts.push(this);
};

//Instantiate new instances of Image
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

//Function Declarations
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
  return threeDiffRands;
}

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

function handleClicks (event) {
  imageNodeOne.addEventListener('click', handleClicks);
  imageNodeTwo.addEventListener('click', handleClicks);
  imageNodeThree.addEventListener('click', handleClicks);
  document.getElementById('moretrials').style.display = 'none';
  document.getElementById('showchart').style.display = 'none';
  makeRandomNumberArray();
  totalClicks += 1;
  if (totalClicks < 26) {

    var clickedObject = event.target.src;
    console.log(clickedObject);
    console.log('This is the event.target.src of the object clicked' + clickedObject);
    displayPics();

    for (var i = 0; i < allProducts.length; i++) {
      if (clickedObject === allProducts[i].filepath) {
        console.log('This is allProducts at i filepath' + allProducts[i].filepath);
        allProducts[i].numClicked += 1;
        localStorage.setItem('productsData', JSON.stringify(allProducts));
      }
    }
  } else {
    imageNodeOne.removeEventListener('click', handleClicks);
    imageNodeTwo.removeEventListener('click', handleClicks);
    imageNodeThree.removeEventListener('click', handleClicks);
    document.getElementById('moretrials').style.display = 'inline';
    document.getElementById('showchart').style.display = 'inline';
    totalClicks = 14;
  }
}

function drawChart () {
  var chartLabels = [];
  for (var i = 0; i < allProducts.length; i++) {
    chartLabels.push(allProducts[i].name);
  }

  var clicked = [];
  for (var i = 0; i < allProducts.length; i++) {
    clicked.push(allProducts[i].numClicked);
    // console.log(clicked);
  }

  var shown = [];
  for (var i = 0; i < allProducts.length; i++) {
    shown.push(allProducts[i].numShown);
    // console.log(shown);
  }

  var data = {
    labels: chartLabels,
    datasets: [
      {
        label: 'Number Shown',

        backgroundColor: 'rgba(32, 134, 19, 0.36)',
        borderColor: 'rgba(19, 94, 18, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(32, 134, 19, 0.36)',
        hoverBorderColor: 'rgba(19, 94, 18, 1)',
        // The actual data
        data: shown,

        yAxisID: 'y-axis-0',
      },
      {
        label: 'Number clicked',
        backgroundColor: 'rgba(18, 21, 23, 0.5)',
        borderColor: 'rgba(59, 76, 87, 1))',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(18, 21, 23, 0.5)',
        hoverBorderColor: 'rgba(59, 76, 87, 1)',
        data: clicked,
      }
    ]
  };

  var myBarChart = new Chart(myChart, {
    type: 'bar',
    data: data,
    options: {
      responsive: true
    }
  });
}
//
imageNodeOne.addEventListener('click', handleClicks);
imageNodeTwo.addEventListener('click', handleClicks);
imageNodeThree.addEventListener('click', handleClicks);
moretrials.addEventListener('click', handleClicks);
showchart.addEventListener('click', drawChart);

//IIFY to handle local storage
(function checkLocal() {
  if (localStorage.productsData) {
    console.log('Local storage exists');
    var parsedProductsData = JSON.parse(localStorage.productsData);
    allProducts = parsedProductsData;
  } else {
    console.log('Local storage does not exist');
  }
  displayPics();
})();
