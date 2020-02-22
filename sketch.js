dropsA=[];
var dropCount=5000;

function setup() {
  var canvas = createCanvas(800,600); 
    for (let  i = 0; i < dropCount; i++) { 
  var drop = new Raindrop();
    drop.reset();
    dropsA.push(drop);
  }
}

function draw() {
  background(230, 230, 250);
  for (let  i = 0; i < dropCount; i++) {
    var drop = dropsA[i];
    drop.fall(); 
    drop.show();
  }
}