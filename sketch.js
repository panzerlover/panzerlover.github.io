let tank = {
  y:0,
  x:0,
  z:0,
}

function preload(){
font = loadFont("Ubuntu-Light.ttf");
};

function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  addSliders();
  addChecks();
  
}

function draw() {

  const p = points();
  ambientLight(255)
  directionalLight(255, 255, 255, 0, 1, 0);
  background(200);

  rotateY(60);
  // lights();
  // for (let key in p){
  //   point(p[key].x, p[key].y, p[key].z);
  //   // text(key, p[key][0], p[key][1], 20, 20);
  // }
  // ambientMaterial(100, 100, 100);
  // fill(0,0,0,63);
  drawFront(p);
  if (showTreads.checked()){
  Object.keys(drawTreads).forEach(shape => drawTreads[shape](p))};
  orbitControlEvent();
}

function orbitControlEvent(){ 
  if(orbitControlCheck.checked()) {
  orbitControl();
  } else {}};

function noFillEvent(){
  if(noFillCheck.checked()){
    noFill();
  } else {
    fill();
  }
};