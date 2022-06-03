
let tank = {
  y:0,
  x:0,
  z:0,

}

function addSliders(){
  HeightsNames = createDiv([
    "Glacis",
    "Bumper",
    "Bumper Pike",
    "Bottom Plate",
    "Step",
    "Step Bottom",
  ]
  .join("<br>"))
  .position(10, 27)
  .style('font-family', "Ubuntu-Light")
  .style('font-size:16px')
  .style('line-height:112%');

  Heights = createDiv("Height");
  Heights.position(150, 10);
  Heights.size(120);
  Heights.style('font-family', "Ubuntu-Light")
  glacisHeight = createSlider(0, 250, 50, 5);
  glacisHeight.parent(Heights);
  bumperHeight = createSlider(0, 250, 20, 1);
  bumperHeight.parent(Heights);
  bumperPikeHeight = createSlider(0, glacisHeight.value(), 5, 1);
  bumperPikeHeight.parent(Heights);
  bottomPlateHeight = createSlider(0, 250, 30, 5);
  bottomPlateHeight.parent(Heights);
  stepHeight = createSlider(0, 250, 30, 5);
  stepHeight.parent(Heights);
  stepBottomHeight = createSlider(0, 250, 0, 5);
  stepBottomHeight.parent(Heights);

  WidthsNames = createDiv([
    "Glacis Top",
    "Mid Glacis",
    "Waist",
    "Bumper",
    "Bottom Plate",
    "Wing Top",
    "Wing Bottom",
    "Step",
    "Step Center",
    "Step Outer",
  ]
  .join("<br>"))
  .position(10, Heights.size().height + 30)
  .style('font-family', "Ubuntu-Light")
  .style('font-size:16px')
  .style('line-height:112%');

  Widths = createDiv("Width");
  Widths.position(150, Heights.size().height + 10);
  Widths.size(120);
  Widths.style('font-family', "Ubuntu-Light")
  glacisTopWidth = createSlider(0, 250, 50, 5);
  glacisTopWidth.parent(Widths);
  midGlacisWidth = createSlider(0,250,0);
  midGlacisWidth.parent(Widths);
  waistWidth = createSlider(0, 250, 0, 5);
  waistWidth.parent(Widths);
  bumperWidth = createSlider(0, 250, 50, 5);
  bumperWidth.parent(Widths);
  bottomPlateWidth = createSlider(0, 250, 50, 5);
  bottomPlateWidth.parent(Widths);
  wingTopWidth = createSlider(0, 250, 30, 5);
  wingTopWidth.parent(Widths);
  wingBottomWidth = createSlider(0, 250, 30, 5);
  wingBottomWidth.parent(Widths);
  stepWidth = createSlider(0, 250, 30, 5);
  stepWidth.parent(Widths);
  stepCenterWidth = createSlider(0, 250, 20);
  stepCenterWidth.parent(Widths);
  stepOuterWingWidth = createSlider(0, 250, 30);
  stepOuterWingWidth.parent(Widths);

  DepthsNames = createDiv([
    "Bumper Top",
    "Bumper Slope",
    "Bottom Plate",
    "Overall",
    "Step",
    "Wing Outer",
    "Step Outer",
    "Step Inner",
    "Step Top",
    "Wing %"
  ].join("<br>"))
  .position(10, Heights.size().height + Widths.size().height + 30)
  .size(120)
  .style('font-family', "Ubuntu-Light")
  .style('font-size:16px')
  .style('line-height:112%');

  Depths = createDiv("Depths");
  Depths.position(150, Heights.size().height + Widths.size().height + 10);
  Depths.size(100);
  Depths.style('font-family', "Ubuntu-Light")
  bumperTopDepth = createSlider(0, 250, 80, 5);
  bumperTopDepth.parent(Depths);
  bumperBottomDepth = createSlider(-250, 250, 0, 5);
  bumperBottomDepth.parent(Depths);
  bottomPlateDepth = createSlider(-250, 250, 80, 5);
  bottomPlateDepth.parent(Depths);
  overallDepth = createSlider(0, 500, 200, 5);
  overallDepth.parent(Depths);
  stepDepth = createSlider(0, 250, 50, 5);
  stepDepth.parent(Depths);
  wingOuterEdgeDepth = createSlider(0, 250, 20);
  wingOuterEdgeDepth.parent(Depths);
  stepOuterEdgeDepth = createSlider(0, 250, 20);
  stepOuterEdgeDepth.parent(Depths);
  stepInnerEdgeDepth = createSlider(0, 250, 40);
  stepInnerEdgeDepth.parent(Depths);
  
  stepTopDepth = createSlider(0, 250, 30);
  stepTopDepth.parent(Depths);
  wingGlacisPercent = createSlider(0, 1, 0.5, 0.01);
  wingGlacisPercent.parent(Depths);
 

}
const drawFront = {
  Glacis : (points)=>{
    //top glacis
    //left top left
    beginShape()
      vertex(points.glacisTopMiddleLeft[0], points.glacisTopMiddleLeft[1], points.glacisTopMiddleLeft[2]);
      vertex(points.glacisTopLeft[0], points.glacisTopLeft[1], points.glacisTopLeft[2]);
      vertex(points.glacisWingLeftPit[0], points.glacisWingLeftPit[1], points.glacisWingLeftPit[2]);
      vertex(points.glacisTopMiddleLeft[0], points.glacisTopMiddleLeft[1],points.glacisTopMiddleLeft[2]);
    endShape();
    //left middle
    beginShape();
      vertex(points.glacisTopMiddleLeft[0], points.glacisTopMiddleLeft[1], points.glacisTopMiddleLeft[2]);
      vertex(points.glacisBottomMiddleLeft[0], points.glacisBottomMiddleLeft[1], points.glacisBottomMiddleLeft[2]);
      vertex(points.glacisWingLeftPit[0], points.glacisWingLeftPit[1], points.glacisWingLeftPit[2]);
      vertex(points.glacisTopMiddleLeft[0], points.glacisTopMiddleLeft[1], points.glacisTopMiddleLeft[2])
    endShape();
    //left bottom left
    beginShape();
      vertex(points.glacisBottomMiddleLeft[0], points.glacisBottomMiddleLeft[1], points.glacisBottomMiddleLeft[2]);
      vertex(points.glacisWingLeftPit[0], points.glacisWingLeftPit[1], points.glacisWingLeftPit[2]);
      vertex(points.glacisBottomLeft[0], points.glacisBottomLeft[1], points.glacisBottomLeft[2]);
    endShape();
    //right top
    beginShape()
      vertex(points.glacisTopMiddleRight[0], points.glacisTopMiddleRight[1], points.glacisTopMiddleRight[2]);
      vertex(points.glacisTopRight[0], points.glacisTopRight[1], points.glacisTopRight[2]);
      vertex(points.glacisWingRightPit[0], points.glacisWingRightPit[1], points.glacisWingRightPit[2]);
      vertex(points.glacisTopMiddleRight[0], points.glacisTopMiddleRight[1],points.glacisTopMiddleRight[2]);
    endShape();
    //right middle
    beginShape();
      vertex(points.glacisTopMiddleRight[0], points.glacisTopMiddleRight[1], points.glacisTopMiddleRight[2]);
      vertex(points.glacisBottomMiddleRight[0], points.glacisBottomMiddleRight[1], points.glacisBottomMiddleRight[2]);
      vertex(points.glacisWingRightPit[0], points.glacisWingRightPit[1], points.glacisWingRightPit[2]);
      vertex(points.glacisTopMiddleRight[0], points.glacisTopMiddleRight[1], points.glacisTopMiddleRight[2])
    endShape();
  //right bottom right
    beginShape();
      vertex(points.glacisBottomMiddleRight[0], points.glacisBottomMiddleRight[1], points.glacisBottomMiddleRight[2]);
      vertex(points.glacisWingRightPit[0], points.glacisWingRightPit[1], points.glacisWingRightPit[2]);
      vertex(points.glacisBottomRight[0], points.glacisBottomRight[1], points.glacisBottomRight[2]);
    endShape();
    //middle
    beginShape();
      vertex(points.glacisTopMiddleLeft[0], points.glacisTopMiddleLeft[1], points.glacisTopMiddleLeft[2]);
      vertex(points.glacisBottomMiddleLeft[0], points.glacisBottomMiddleLeft[1], points.glacisBottomMiddleLeft[2]);
      vertex(points.glacisBottomMiddleRight[0], points.glacisBottomMiddleRight[1], points.glacisBottomMiddleRight[2]);
      vertex(points.glacisTopMiddleRight[0], points.glacisTopMiddleRight[1], points.glacisTopMiddleRight[2]);
      vertex(points.glacisTopMiddleLeft[0], points.glacisTopMiddleLeft[1], points.glacisTopMiddleLeft[2]);
    endShape();
  },
  Wings: (points) => { 
    // left wing front
    beginShape();
      vertex(points.glacisTopLeft[0],             points.glacisTopLeft[1],            points.glacisTopLeft[2]);
      vertex(points.glacisWingLeftShoulder[0],    points.glacisWingLeftShoulder[1],   points.glacisWingLeftShoulder[2]);
      vertex(points.glacisWingLeftBottom[0],      points.glacisWingLeftBottom[1],     points.glacisWingLeftBottom[2]);
      vertex(points.glacisTopLeft[0], points.glacisTopLeft[1], points.glacisTopLeft[2]);
      vertex(points.glacisWingLeftPit[0],         points.glacisWingLeftPit[1],        points.glacisWingLeftPit[2]);
      vertex(points.glacisWingLeftBottom[0], points.glacisWingLeftBottom[1], points.glacisWingLeftBottom[2]);
      vertex(points.glacisTopLeft[0],             points.glacisTopLeft[1],            points.glacisTopLeft[2]);
    endShape();
    // left wing bottom
    beginShape();
      vertex(points.glacisWingLeftPitFlank[0], points.glacisWingLeftPitFlank[1], points.glacisWingLeftPitFlank[2]);
      vertex(points.glacisWingLeftPit[0], points.glacisWingLeftPit[1], points.glacisWingLeftPit[2]);
      vertex(points.glacisWingLeftBottom[0], points.glacisWingLeftBottom[1], points.glacisWingLeftBottom[2]);
      vertex(points.glacisWingLeftBottomFlank[0], points.glacisWingLeftBottomFlank[1], points.glacisWingLeftBottomFlank[2]);
    endShape();
    // left wing side
    beginShape();
      vertex(points.glacisWingLeftShoulder[0], points.glacisWingLeftShoulder[1], points.glacisWingLeftShoulder[2]);
      vertex(points.glacisWingLeftBottom[0], points.glacisWingLeftBottom[1], points.glacisWingLeftBottom[2]);
      vertex(points.glacisWingLeftBottomFlank[0], points.glacisWingLeftBottomFlank[1], points.glacisWingLeftBottomFlank[2]);
    endShape();
  
  
    // right wing
    beginShape();
      vertex(points.glacisTopRight[0],            points.glacisTopRight[1],           points.glacisTopRight[2]);
      vertex(points.glacisWingRightShoulder[0],   points.glacisWingRightShoulder[1],  points.glacisWingRightShoulder[2]);
      vertex(points.glacisWingRightBottom[0],     points.glacisWingRightBottom[1],    points.glacisWingRightBottom[2]);
      vertex(points.glacisTopRight[0], points.glacisTopRight[1], points.glacisTopRight[2]);
      vertex(points.glacisWingRightPit[0],        points.glacisWingRightPit[1],       points.glacisWingRightPit[2]);
      vertex(points.glacisWingRightBottom[0], points.glacisWingRightBottom[1], points.glacisWingRightBottom[2]);
      vertex(points.glacisTopRight[0],            points.glacisTopRight[1],           points.glacisTopRight[2]);
    endShape();
    // right wing bottom
    beginShape();
      vertex(points.glacisWingRightPitFlank[0], points.glacisWingRightPitFlank[1], points.glacisWingRightPitFlank[2]);
      vertex(points.glacisWingRightPit[0], points.glacisWingRightPit[1], points.glacisWingRightPit[2]);
      vertex(points.glacisWingRightBottom[0], points.glacisWingRightBottom[1], points.glacisWingRightBottom[2]);
      vertex(points.glacisWingRightBottomFlank[0], points.glacisWingRightBottomFlank[1], points.glacisWingRightBottomFlank[2]);
    endShape();
    // right wing side
    beginShape();
      vertex(points.glacisWingRightShoulder[0], points.glacisWingRightShoulder[1], points.glacisWingRightShoulder[2]);
      vertex(points.glacisWingRightBottom[0], points.glacisWingRightBottom[1], points.glacisWingRightBottom[2]);
      vertex(points.glacisWingRightBottomFlank[0], points.glacisWingRightBottomFlank[1], points.glacisWingRightBottomFlank[2]);
    endShape();
    
  },
  Bumper: (points)=>{
    //bumper
    //left
      beginShape();
        vertex(points.glacisBottomLeft[0], points.glacisBottomLeft[1], points.glacisBottomLeft[2]);
        vertex(points.bumperBottomLeft[0], points.bumperBottomLeft[1], points.bumperBottomLeft[2]);
        vertex(points.glacisBottomMiddleLeft[0], points.glacisBottomMiddleLeft[1], points.glacisBottomMiddleLeft[2]);
        vertex(points.glacisBottomLeft[0], points.glacisBottomLeft[1], points.glacisBottomLeft[2]);
      endShape();
    //right
      beginShape();
        vertex(points.glacisBottomRight[0], points.glacisBottomRight[1], points.glacisBottomRight[2]);
        vertex(points.bumperBottomRight[0], points.bumperBottomRight[1], points.bumperBottomRight[2]);
        vertex(points.glacisBottomMiddleRight[0], points.glacisBottomMiddleRight[1], points.glacisBottomMiddleRight[2]);
        vertex(points.glacisBottomRight[0], points.glacisBottomRight[1], points.glacisBottomRight[2]);
      endShape();
    //bottom
      beginShape();
        vertex(points.glacisBottomMiddleLeft[0], points.glacisBottomMiddleLeft[1], points.glacisBottomMiddleLeft[2]);
        vertex(points.bumperBottomLeft[0], points.bumperBottomLeft[1], points.bumperBottomLeft[2]);
        vertex(points.bumperBottomRight[0], points.bumperBottomRight[1], points.bumperBottomRight[2]);
        vertex(points.glacisBottomMiddleRight[0], points.glacisBottomMiddleRight[1], points.glacisBottomMiddleRight[2]);
      endShape();
  },
  BottomPlate: (points) => {

    beginShape();
    vertex(points.bumperBottomLeft[0], points.bumperBottomLeft[1], points.bumperBottomLeft[2]); 
    vertex(points.bottomPlateLeft[0], points.bottomPlateLeft[1], points.bottomPlateLeft[2]);
    vertex(points.bottomPlateRight[0], points.bottomPlateRight[1], points.bottomPlateRight[2]);
    vertex(points.bumperBottomRight[0], points.bumperBottomRight[1], points.bumperBottomRight[2]);
    vertex(points.bumperBottomLeft[0], points.bumperBottomLeft[1], points.bumperBottomLeft[2]);
    endShape();
  
  },
  GlacisSides: (points)=>{

    //right
    //mid
    beginShape();
    vertex(points.glacisBottomRight[0], points.glacisBottomRight[1], points.glacisBottomRight[2]);
    vertex(points.glacisWingRightPit[0], points.glacisWingRightPit[1], points.glacisWingRightPit[2])
    vertex(points.bumperBottomRightFlank[0], points.bumperBottomRightFlank[1], points.bumperBottomRightFlank[2]);
    vertex(points.bumperBottomRight[0], points.bumperBottomRight[1], points.bumperBottomRight[2]);
    endShape();
    //bottom
    beginShape();
    vertex(points.bumperBottomRight[0], points.bumperBottomRight[1], points.bumperBottomRight[2]);
    vertex(points.bottomPlateRight[0], points.bottomPlateRight[1], points.bottomPlateRight[2]);
    vertex(points.bumperBottomRightFlank[0], points.bumperBottomRightFlank[1], points.bumperBottomRightFlank[2]);
    vertex(points.bumperBottomRight[0], points.bumperBottomRight[1], points.bumperBottomRight[2]);
    endShape();
  
    //left
    beginShape();
    vertex(points.glacisBottomLeft[0], points.glacisBottomLeft[1], points.glacisBottomLeft[2]);
    vertex(points.glacisWingLeftPit[0], points.glacisWingLeftPit[1], points.glacisWingLeftPit[2])
    vertex(points.bumperBottomLeftFlank[0], points.bumperBottomLeftFlank[1], points.bumperBottomLeftFlank[2]);
    vertex(points.bumperBottomLeft[0], points.bumperBottomLeft[1], points.bumperBottomLeft[2]);
    endShape();
    beginShape();
    vertex(points.bumperBottomLeft[0], points.bumperBottomLeft[1], points.bumperBottomLeft[2]);
    vertex(points.bottomPlateLeft[0], points.bottomPlateLeft[1], points.bottomPlateLeft[2]);
    vertex(points.bumperBottomLeftFlank[0], points.bumperBottomLeftFlank[1], points.bumperBottomLeftFlank[2]);
    vertex(points.bumperBottomLeft[0], points.bumperBottomLeft[1], points.bumperBottomLeft[2]);
    endShape();
  },
  Flanks: (points)=>{

    //right flank
    //bottom
    beginShape();
    vertex(points.bottomPlateRight[0], points.bottomPlateRight[1], points.bottomPlateRight[2]);
    vertex(points.flankBottomPlateRight[0], points.flankBottomPlateRight[1], points.flankBottomPlateRight[2]);
    vertex(points.flankBumperBottomRightFlank[0], points.flankBumperBottomRightFlank[1], points.flankBumperBottomRightFlank[2]);
    vertex(points.bumperBottomRightFlank[0], points.bumperBottomRightFlank[1], points.bumperBottomRightFlank[2]);
    vertex(points.bottomPlateRight[0], points.bottomPlateRight[1], points.bottomPlateRight[2]);
    endShape();
    //middle vert
    beginShape();
    vertex(points.bumperBottomRightFlank[0], points.bumperBottomRightFlank[1], points.bumperBottomRightFlank[2]);
    vertex(points.flankBumperBottomRightFlank[0], points.flankBumperBottomRightFlank[1], points.flankBumperBottomRightFlank[2]);
    vertex(points.flankGlacisWingRightPitFlank[0], points.flankGlacisWingRightPitFlank[1], points.flankGlacisWingRightPitFlank[2]);
    vertex(points.glacisWingRightPit[0], points.glacisWingRightPit[1], points.glacisWingRightPit[2]);
    vertex(points.bumperBottomRightFlank[0], points.bumperBottomRightFlank[1], points.bumperBottomRightFlank[2]);
    endShape();
    //wing bottom
    beginShape();
      vertex(points.glacisWingRightPitFlank[0], points.glacisWingRightPitFlank[1], points.glacisWingRightPitFlank[2]);
      vertex(points.flankGlacisWingRightPitFlank[0], points.flankGlacisWingRightPitFlank[1], points.flankGlacisWingRightPitFlank[2]);
      vertex(points.flankGlacisWingRightBottomFlank[0], points.flankGlacisWingRightBottomFlank[1], points.flankGlacisWingRightBottomFlank[2]);
      vertex(points.glacisWingRightBottomFlank[0], points.glacisWingRightBottomFlank[1], points.glacisWingRightBottomFlank[2]);
    endShape();
    //wing side
    beginShape();
      vertex(points.glacisWingRightBottomFlank[0], points.glacisWingRightBottomFlank[1], points.glacisWingRightBottomFlank[2]);
      vertex(points.flankGlacisWingRightBottomFlank[0], points.flankGlacisWingRightBottomFlank[1], points.flankGlacisWingRightBottomFlank[2]);
      vertex(points.flankGlacisWingRightShoulder[0], points.flankGlacisWingRightShoulder[1], points.flankGlacisWingRightShoulder[2]);
      vertex(points.glacisWingRightShoulder[0], points.glacisWingRightShoulder[1], points.glacisWingRightShoulder[2]);
    endShape();
    // //wing top
      //front bit
      beginShape();
      vertex(points.glacisWingRightShoulder[0], points.glacisWingRightShoulder[1], points.glacisWingRightShoulder[2]);
      vertex(points.glacisTopRight[0], points.glacisTopRight[1], points.glacisTopRight[2]);
      vertex(points.stepBottomRight[0], points.stepBottomRight[1], points.stepBottomRight[2]);
      vertex(points.glacisWingRightShoulder[0], points.glacisWingRightShoulder[1], points.glacisWingRightShoulder[2]);
      endShape();
      //side triangle bit
      beginShape();
        vertex(points.glacisWingRightShoulder[0], points.glacisWingRightShoulder[1], points.glacisWingRightShoulder[2]);
        vertex(points.flankGlacisWingRightShoulder[0], points.flankGlacisWingRightShoulder[1], points.flankGlacisWingRightShoulder[2]);
        vertex(points.stepBottomRight[0], points.stepBottomRight[1], points.stepBottomRight[2]);
      endShape();
      //back bit
      beginShape();
        vertex(points.stepBottomRight[0], points.stepBottomRight[1], points.stepBottomRight[2]);
        vertex(points.flankGlacisTopRight[0], points.flankGlacisTopRight[1], points.flankGlacisTopRight[2]);
        vertex(points.flankGlacisWingRightShoulder[0], points.flankGlacisWingRightShoulder[1], points.flankGlacisWingRightShoulder[2]);
      endShape();
   
  
    //Left
    //bottom
    beginShape();
    vertex(points.bottomPlateLeft[0], points.bottomPlateLeft[1], points.bottomPlateLeft[2]);
    vertex(points.flankBottomPlateLeft[0], points.flankBottomPlateLeft[1], points.flankBottomPlateLeft[2]);
    vertex(points.flankBumperBottomLeftFlank[0], points.flankBumperBottomLeftFlank[1], points.flankBumperBottomLeftFlank[2]);
    vertex(points.bumperBottomLeftFlank[0], points.bumperBottomLeftFlank[1], points.bumperBottomLeftFlank[2]);
    vertex(points.bottomPlateLeft[0], points.bottomPlateLeft[1], points.bottomPlateLeft[2]);
    endShape();
    //middle vert
    beginShape();
    vertex(points.bumperBottomLeftFlank[0], points.bumperBottomLeftFlank[1], points.bumperBottomLeftFlank[2]);
    vertex(points.flankBumperBottomLeftFlank[0], points.flankBumperBottomLeftFlank[1], points.flankBumperBottomLeftFlank[2]);
    vertex(points.flankGlacisWingLeftPitFlank[0], points.flankGlacisWingLeftPitFlank[1], points.flankGlacisWingLeftPitFlank[2]);
    vertex(points.glacisWingLeftPit[0], points.glacisWingLeftPit[1], points.glacisWingLeftPit[2]);
    vertex(points.bumperBottomLeftFlank[0], points.bumperBottomLeftFlank[1], points.bumperBottomLeftFlank[2]);
    endShape();
    //wing bottom
    beginShape();
      vertex(points.glacisWingLeftPitFlank[0], points.glacisWingLeftPitFlank[1], points.glacisWingLeftPitFlank[2]);
      vertex(points.flankGlacisWingLeftPitFlank[0], points.flankGlacisWingLeftPitFlank[1], points.flankGlacisWingLeftPitFlank[2]);
      vertex(points.flankGlacisWingLeftBottomFlank[0], points.flankGlacisWingLeftBottomFlank[1], points.flankGlacisWingLeftBottomFlank[2]);
      vertex(points.glacisWingLeftBottomFlank[0], points.glacisWingLeftBottomFlank[1], points.glacisWingLeftBottomFlank[2]);
    endShape();
    //wing side
    beginShape();
      vertex(points.glacisWingLeftBottomFlank[0], points.glacisWingLeftBottomFlank[1], points.glacisWingLeftBottomFlank[2]);
      vertex(points.flankGlacisWingLeftBottomFlank[0], points.flankGlacisWingLeftBottomFlank[1], points.flankGlacisWingLeftBottomFlank[2]);
      vertex(points.flankGlacisWingLeftShoulder[0], points.flankGlacisWingLeftShoulder[1], points.flankGlacisWingLeftShoulder[2]);
      vertex(points.glacisWingLeftShoulder[0], points.glacisWingLeftShoulder[1], points.glacisWingLeftShoulder[2]);
    endShape();
    // //wing top
      //front bit
      beginShape();
        vertex(points.glacisWingLeftShoulder[0], points.glacisWingLeftShoulder[1], points.glacisWingLeftShoulder[2]);
        vertex(points.glacisTopLeft[0], points.glacisTopLeft[1], points.glacisTopLeft[2]);
        vertex(points.stepBottomLeft[0], points.stepBottomLeft[1], points.stepBottomLeft[2]);
        vertex(points.glacisWingLeftShoulder[0], points.glacisWingLeftShoulder[1], points.glacisWingLeftShoulder[2]);
      endShape();
      //side triangle bit
      beginShape();
      vertex(points.glacisWingLeftShoulder[0], points.glacisWingLeftShoulder[1], points.glacisWingLeftShoulder[2]);
      vertex(points.flankGlacisWingLeftShoulder[0], points.flankGlacisWingLeftShoulder[1], points.flankGlacisWingLeftShoulder[2]);
      vertex(points.stepBottomLeft[0], points.stepBottomLeft[1], points.stepBottomLeft[2]);
      endShape();
      //back bit
      beginShape(); 
        vertex(points.stepBottomLeft[0], points.stepBottomLeft[1], points.stepBottomLeft[2]);
        vertex(points.flankGlacisTopLeft[0], points.flankGlacisTopLeft[1], points.flankGlacisTopLeft[2]);
        vertex(points.flankGlacisWingLeftShoulder[0], points.flankGlacisWingLeftShoulder[1], points.flankGlacisWingLeftShoulder[2]);
      endShape();
  
  
  },
  Step: (points) => {
  //front panel
  //left outer wing
  beginShape();
    vertex(points.stepBottomLeft[0], points.stepBottomLeft[1], points.stepBottomLeft[2]);
    vertex(points.stepTopLeft[0], points.stepTopLeft[1], points.stepTopLeft[2]);
    vertex(points.stepOuterWingTopLeft[0], points.stepOuterWingTopLeft[1], points.stepOuterWingTopLeft[2]);
    vertex(points.stepOuterWingBottomLeft[0], points.stepOuterWingBottomLeft[1], points.stepOuterWingBottomLeft[2]);
    vertex(points.stepBottomLeft[0], points.stepBottomLeft[1], points.stepBottomLeft[2]);
  endShape();
  // right outer wing
  beginShape();
    vertex(points.stepBottomRight[0], points.stepBottomRight[1], points.stepBottomRight[2]);
    vertex(points.stepTopRight[0], points.stepTopRight[1], points.stepTopRight[2]);
    vertex(points.stepOuterWingTopRight[0], points.stepOuterWingTopRight[1], points.stepOuterWingTopRight[2]);
    vertex(points.stepOuterWingBottomRight[0], points.stepOuterWingBottomRight[1], points.stepOuterWingBottomRight[2]);
    vertex(points.stepBottomRight[0], points.stepBottomRight[1], points.stepBottomRight[2]);
  endShape();
  //left inner wing
    beginShape();
      vertex(points.stepOuterWingBottomLeft[0], points.stepOuterWingBottomLeft[1], points.stepOuterWingBottomLeft[2]);
      vertex(points.stepOuterWingTopLeft[0], points.stepOuterWingTopLeft[1], points.stepOuterWingTopLeft[2]);
      vertex(points.stepInnerWingTopLeft[0], points.stepInnerWingTopLeft[1], points.stepInnerWingTopLeft[2]);
      vertex(points.stepInnerWingBottomLeft[0], points.stepInnerWingBottomLeft[1], points.stepInnerWingBottomLeft[2]);
      vertex(points.stepOuterWingBottomLeft[0], points.stepOuterWingBottomLeft[1], points.stepOuterWingBottomLeft[2]);
    endShape();
  // right inner wing
    beginShape();
      vertex(points.stepOuterWingBottomRight[0], points.stepOuterWingBottomRight[1], points.stepOuterWingBottomRight[2]);
      vertex(points.stepOuterWingTopRight[0], points.stepOuterWingTopRight[1], points.stepOuterWingTopRight[2]);
      vertex(points.stepInnerWingTopRight[0], points.stepInnerWingTopRight[1], points.stepInnerWingTopRight[2]);
      vertex(points.stepInnerWingBottomRight[0], points.stepInnerWingBottomRight[1], points.stepInnerWingBottomRight[2]);
      vertex(points.stepOuterWingBottomRight[0], points.stepOuterWingBottomRight[1], points.stepOuterWingBottomRight[2]);
    endShape();
  //step middle front
    beginShape();
      vertex(points.stepInnerWingTopLeft[0], points.stepInnerWingTopLeft[1], points.stepInnerWingTopLeft[2]);
      vertex(points.stepInnerWingBottomLeft[0], points.stepInnerWingBottomLeft[1], points.stepInnerWingBottomLeft[2]);
      vertex(points.stepInnerWingBottomRight[0], points.stepInnerWingBottomRight[1], points.stepInnerWingBottomRight[2]);
      vertex(points.stepInnerWingTopRight[0], points.stepInnerWingTopRight[1], points.stepInnerWingTopRight[2]);
      vertex(points.stepInnerWingTopLeft[0], points.stepInnerWingTopLeft[1], points.stepInnerWingTopLeft[2]);
    endShape();


  //top middle
  beginShape();
    vertex(points.stepInnerWingBottomLeft[0], points.stepInnerWingBottomLeft[1], points.stepInnerWingBottomLeft[2]);
    vertex(points.glacisTopMiddleLeft[0], points.glacisTopMiddleLeft[1], points.glacisTopMiddleLeft[2]);
    vertex(points.glacisTopMiddleRight[0], points.glacisTopMiddleRight[1], points.glacisTopMiddleRight[2]);
    vertex(points.stepInnerWingBottomRight[0], points.stepInnerWingBottomRight[1], points.stepInnerWingBottomRight[2]);
  endShape();
  //top middle left
  beginShape();
    vertex(points.glacisTopLeft[0], points.glacisTopLeft[1], points.glacisTopLeft[2]);
    vertex(points.stepInnerWingBottomLeft[0], points.stepInnerWingBottomLeft[1], points.stepInnerWingBottomLeft[2]);
    vertex(points.glacisTopMiddleLeft[0], points.glacisTopMiddleLeft[1], points.glacisTopMiddleLeft[2]);
  endShape();
  //top middle right
  beginShape();
    vertex(points.glacisTopRight[0], points.glacisTopRight[1], points.glacisTopRight[2]);
    vertex(points.stepInnerWingBottomRight[0], points.stepInnerWingBottomRight[1], points.stepInnerWingBottomRight[2]);
    vertex(points.glacisTopMiddleRight[0], points.glacisTopMiddleRight[1], points.glacisTopMiddleRight[2]);
  endShape();
  //top outer left
  beginShape();
    vertex(points.stepInnerWingBottomLeft[0], points.stepInnerWingBottomLeft[1], points.stepInnerWingBottomLeft[2]);
    vertex(points.glacisTopLeft[0], points.glacisTopLeft[1], points.glacisTopLeft[2]);
    vertex(points.stepOuterWingBottomLeft[0], points.stepOuterWingBottomLeft[1], points.stepOuterWingBottomLeft[2]);
  endShape();
  // top outer right
  beginShape();
    vertex(points.stepInnerWingBottomRight[0], points.stepInnerWingBottomRight[1], points.stepInnerWingBottomRight[2]);
    vertex(points.glacisTopRight[0], points.glacisTopRight[1], points.glacisTopRight[2]);
    vertex(points.stepOuterWingBottomRight[0], points.stepOuterWingBottomRight[1], points.stepOuterWingBottomRight[2]);
  endShape();
  // top outer left left
  beginShape();
    vertex(points.stepOuterWingBottomLeft[0], points.stepOuterWingBottomLeft[1], points.stepOuterWingBottomLeft[2]);
    vertex(points.glacisTopLeft[0], points.glacisTopLeft[1], points.glacisTopLeft[2]);
    vertex(points.stepBottomLeft[0], points.stepBottomLeft[1], points.stepBottomLeft[2]);
  endShape();
  // top outer right right
  beginShape();
    vertex(points.stepOuterWingBottomRight[0], points.stepOuterWingBottomRight[1], points.stepOuterWingBottomRight[2]);
    vertex(points.glacisTopRight[0], points.glacisTopRight[1], points.glacisTopRight[2]);
    vertex(points.stepBottomRight[0], points.stepBottomRight[1], points.stepBottomRight[2]);
  endShape();
  //side
    // side right
    beginShape();
      vertex(points.stepBottomRight[0], points.stepBottomRight[1], points.stepBottomRight[2]);
      vertex(points.flankGlacisTopRight[0], points.flankGlacisTopRight[1], points.flankGlacisTopRight[2]);
      vertex(points.stepTopRightFlank[0], points.stepTopRightFlank[1], points.stepTopRightFlank[2]);
      vertex(points.stepTopRight[0], points.stepTopRight[1], points.stepTopRight[2]);
      vertex(points.stepBottomRight[0], points.stepBottomRight[1], points.stepBottomRight[2]);
    endShape();
    // side left
    beginShape();
    vertex(points.stepBottomLeft[0], points.stepBottomLeft[1], points.stepBottomLeft[2]);
    vertex(points.flankGlacisTopLeft[0], points.flankGlacisTopLeft[1], points.flankGlacisTopLeft[2]);
    vertex(points.stepTopLeftFlank[0], points.stepTopLeftFlank[1], points.stepTopLeftFlank[2]);
    vertex(points.stepTopLeft[0], points.stepTopLeft[1], points.stepTopLeft[2]);
    vertex(points.stepBottomLeft[0], points.stepBottomLeft[1], points.stepBottomLeft[2]);
  endShape();
    

}
}

function preload(){
font = loadFont("Ubuntu-Light.ttf");
}

function setup() {
  angleMode(DEGREES);
  createCanvas(1600, 800, WEBGL);

  
  addSliders();
    orbitControlCheck = createCheckbox(
      "Enable Orbit Control", true);
    orbitControlCheck.position(900, 10);
    orbitControlCheck.changed(orbitControlEvent);
    orbitControlCheck.style('font-family', "Ubuntu-Light");
  
    noFillCheck = createCheckbox(
      "Wire Frame View", false);
    noFillCheck.position(900, 30);
    noFillCheck.changed(noFillEvent);
    noFillCheck.style('font-family', "Ubuntu-Light");
  
  

}

function draw() {
  let bumperHasHeight = (bumperHeight.value() == 0) ? 0 : 1;
  let stepHasHeight = (stepHeight.value()== 0) ? 0 : 1;
  let stepNotHasHeight = (stepHeight.value()!= 0) ? 0 : 1;
  let bumperOverZero = ((bumperTopDepth.value()*wingGlacisPercent.value()) > -bumperBottomDepth.value()) ? 0 : 1; 
  let pikeAndSlope = (bumperPikeHeight.value() != 0 && bumperBottomDepth.value() < 0) ? 1 : 0;
  let bumperVsBottomSlope = (bottomPlateDepth.value() - bumperBottomDepth.value() > bumperBottomDepth.value()) ? 1 : 0;

  const points = {
    glacisTopLeft: [
      tank.x,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()),
      tank.z-(glacisTopWidth.value()-(Math.ceil(wingGlacisPercent.value()-1)*waistWidth.value())), 
    ],
    glacisTopMiddleLeft: [
      tank.x-(bumperPikeHeight.value())*(bumperTopDepth.value()/glacisHeight.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()),
      tank.z-(midGlacisWidth.value()),
    ],
    glacisTopMiddleRight: [
      tank.x-(bumperPikeHeight.value())*(bumperTopDepth.value()/glacisHeight.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()),
      tank.z+(midGlacisWidth.value()),
    ],
    glacisTopRight: [
      tank.x,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()),
      tank.z+(glacisTopWidth.value()-(Math.ceil(wingGlacisPercent.value()-1)*waistWidth.value())),
    ],
    glacisWingRightShoulder: [
      tank.x+(wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()),
      tank.z+((glacisTopWidth.value()) -(waistWidth.value()*Math.ceil(wingGlacisPercent.value()-1)) + wingTopWidth.value()*Math.ceil(wingGlacisPercent.value())),
    ],
    glacisWingRightBottom: [
      tank.x-(bumperTopDepth.value() * wingGlacisPercent.value()) + (wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value() - (glacisHeight.value() * wingGlacisPercent.value())),
      tank.z+(glacisTopWidth.value() +waistWidth.value()) + (((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value() + wingBottomWidth.value())*Math.ceil(wingGlacisPercent.value()) ,
    ],
    glacisWingRightPit: [
      tank.x-bumperTopDepth.value() * wingGlacisPercent.value(),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value() - (glacisHeight.value() * wingGlacisPercent.value())),
      tank.z+(glacisTopWidth.value() + waistWidth.value()) + ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value(),
    ],
    glacisWingRightPitFlank:[
      tank.x,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      tank.z+(glacisTopWidth.value() + waistWidth.value()) + ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value(),
    ],
    glacisWingRightBottomFlank:[
      tank.x+(wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      tank.z+(glacisTopWidth.value()  + waistWidth.value() + (((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value() + wingBottomWidth.value())*Math.ceil(wingGlacisPercent.value()) ),
    ],
    glacisWingLeftShoulder: [
      tank.x+(wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()),
      tank.z-(glacisTopWidth.value() - (waistWidth.value()*Math.ceil(wingGlacisPercent.value()-1)) + wingTopWidth.value()*Math.ceil(wingGlacisPercent.value())),
    ],
    glacisWingLeftBottom: [
      tank.x-(bumperTopDepth.value() * wingGlacisPercent.value()) + (wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value() - (glacisHeight.value() * wingGlacisPercent.value())),
      tank.z-(glacisTopWidth.value()  + (waistWidth.value() + ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value() + wingBottomWidth.value() )*Math.ceil(wingGlacisPercent.value())),
    ],
    glacisWingLeftPit: [
      tank.x-bumperTopDepth.value() * wingGlacisPercent.value(),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value() - (glacisHeight.value() * wingGlacisPercent.value())),
      tank.z-(glacisTopWidth.value()  + waistWidth.value()+ ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value()),
    ],
    glacisWingLeftPitFlank:[
      tank.x,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      tank.z-(glacisTopWidth.value()  + waistWidth.value()+ ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value()),
    ],
    glacisWingLeftBottomFlank:[
      tank.x+(wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      tank.z-(glacisTopWidth.value()  + waistWidth.value() + (((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value() + wingBottomWidth.value())*Math.ceil(wingGlacisPercent.value()) ),
    ],
    glacisBottomLeft: [
      tank.x-(bumperTopDepth.value()+(((bumperBottomDepth.value()*bumperPikeHeight.value())/(bumperPikeHeight.value()+bumperHeight.value()))*pikeAndSlope)),
      tank.y-(bottomPlateHeight.value()+bumperHeight.value()), 
      tank.z-bumperWidth.value() 
    ],
    glacisBottomRight: [
      tank.x-(bumperTopDepth.value()+(((bumperBottomDepth.value()*bumperPikeHeight.value())/(bumperPikeHeight.value()+bumperHeight.value()))*pikeAndSlope)),
      tank.y-(bottomPlateHeight.value()+bumperHeight.value()), 
      tank.z+bumperWidth.value() 
    ],
    glacisBottomMiddleLeft: [
      tank.x-bumperTopDepth.value(),
      tank.y-(bottomPlateHeight.value()+bumperHeight.value()+bumperPikeHeight.value()),
      tank.z-(midGlacisWidth.value()),
    ],
    glacisBottomMiddleRight: [
      tank.x-bumperTopDepth.value(),
      tank.y-(bottomPlateHeight.value()+bumperHeight.value()+bumperPikeHeight.value()),
      tank.z+(midGlacisWidth.value()),
    ],
    
    bumperBottomRight:[
      tank.x-(bumperTopDepth.value()+(bumperBottomDepth.value()*bumperHasHeight)),
      tank.y-bottomPlateHeight.value(), 
      tank.z+bumperWidth.value()
    ],
    bumperBottomLeft:[
      tank.x-(bumperTopDepth.value()+(bumperBottomDepth.value()*bumperHasHeight)), 
      tank.y-bottomPlateHeight.value(),
      tank.z-bumperWidth.value()
    ],
    bumperBottomRightFlank:[
      tank.x-((bumperTopDepth.value() * wingGlacisPercent.value())+(((bumperTopDepth.value()*wingGlacisPercent.value())+bumperBottomDepth.value())*bumperOverZero)),
      tank.y-(bottomPlateHeight.value()),
      tank.z+(bumperWidth.value()+waistWidth.value()),
    ],
    bumperBottomLeftFlank:[
      tank.x-((bumperTopDepth.value() * wingGlacisPercent.value())+(((bumperTopDepth.value()*wingGlacisPercent.value())+bumperBottomDepth.value())*bumperOverZero)),
      tank.y-(bottomPlateHeight.value()),
      tank.z-(bumperWidth.value()+waistWidth.value()),
    ],
    bottomPlateLeft:[
      tank.x-(bottomPlateDepth.value()),
      tank.y,
      tank.z-bottomPlateWidth.value()
    ],
    bottomPlateRight:[
      tank.x-(bottomPlateDepth.value()),
      tank.y,
      tank.z+bottomPlateWidth.value(),
    ],
    flankBottomPlateRight:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y,
      tank.z+bottomPlateWidth.value(),
    ],
    flankBumperBottomRightFlank:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y-(bottomPlateHeight.value()),
      tank.z+(bumperWidth.value()+waistWidth.value()),
    ],
    flankGlacisWingRightPitFlank:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      tank.z+(glacisTopWidth.value() + waistWidth.value()) + ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value(),
    ],
    flankGlacisWingRightBottomFlank:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      tank.z+(glacisTopWidth.value()  + waistWidth.value()) + ((bumperWidth.value() - glacisTopWidth.value())  * wingGlacisPercent.value() + wingBottomWidth.value() )*Math.ceil(wingGlacisPercent.value()),
    ],
    flankGlacisWingLeftBottomFlank:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      tank.z-((glacisTopWidth.value()  + waistWidth.value()) + ((bumperWidth.value() - glacisTopWidth.value()) * wingGlacisPercent.value() + wingBottomWidth.value() )*Math.ceil(wingGlacisPercent.value())),
    ],
    flankGlacisWingRightShoulder:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()),
      tank.z+(glacisTopWidth.value()) -(waistWidth.value()*(Math.ceil(wingGlacisPercent.value()-1))) + wingTopWidth.value()*Math.ceil(wingGlacisPercent.value()),
    ],
    
    flankBottomPlateLeft:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y,
      tank.z-(bottomPlateWidth.value()),
    ],
    flankBumperBottomLeftFlank:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y-(bottomPlateHeight.value()),
      tank.z-(bumperWidth.value()+waistWidth.value()),
    ],
    flankGlacisWingLeftPitFlank:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      tank.z-(glacisTopWidth.value() + waistWidth.value()) - (bumperWidth.value() - glacisTopWidth.value()) * wingGlacisPercent.value(),
    ],

    flankGlacisWingLeftShoulder:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()),
      tank.z-(glacisTopWidth.value() -(waistWidth.value()*(Math.ceil(wingGlacisPercent.value()-1)))  + wingTopWidth.value()*Math.ceil(wingGlacisPercent.value()))
    ],
    flankGlacisTopLeft:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z-((stepWidth.value()+stepCenterWidth.value()+stepOuterWingWidth.value())),
    ],
    flankGlacisTopRight:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value()) + stepBottomHeight.value()),
      tank.z+((stepWidth.value()+stepCenterWidth.value()+stepOuterWingWidth.value())),
    ],

    stepTopLeft:[
      tank.x+((stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value()+stepTopDepth.value())*stepHasHeight)+(wingOuterEdgeDepth.value()*stepNotHasHeight),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z-(stepWidth.value()+stepCenterWidth.value()+stepOuterWingWidth.value()),
    ],
    stepTopRight:[
      tank.x+((stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value()+stepTopDepth.value())*stepHasHeight)+(wingOuterEdgeDepth.value()*stepNotHasHeight),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z+(stepWidth.value()+stepCenterWidth.value()+stepOuterWingWidth.value()),
    ],
    stepTopRightFlank: [
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z+(stepWidth.value()+stepCenterWidth.value()+stepOuterWingWidth.value()),
    ],
    stepTopLeftFlank:[
      tank.x+(overallDepth.value()+stepDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z-(stepWidth.value()+stepCenterWidth.value()+stepOuterWingWidth.value()),
    ],

    stepBottomLeft:[
      tank.x+((stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value())*stepHasHeight)+(wingOuterEdgeDepth.value()*stepNotHasHeight),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z-(stepWidth.value()+stepCenterWidth.value()+stepOuterWingWidth.value()),
    ],
    stepBottomRight:[
      tank.x+((stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value())*stepHasHeight)+(wingOuterEdgeDepth.value()*stepNotHasHeight),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z+(stepWidth.value()+stepCenterWidth.value()+stepOuterWingWidth.value()),
    ],
   
    
    stepOuterWingTopLeft:[
      tank.x+(stepDepth.value()+stepInnerEdgeDepth.value()+stepTopDepth.value())*stepHasHeight,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z-(stepOuterWingWidth.value()+stepCenterWidth.value()),
    ],
    stepOuterWingBottomLeft:[
      tank.x+(stepDepth.value()+stepInnerEdgeDepth.value())*stepHasHeight,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z-(stepOuterWingWidth.value()+stepCenterWidth.value()),
    ],


    stepOuterWingTopRight:[
      tank.x+(stepDepth.value()+stepInnerEdgeDepth.value()+stepTopDepth.value())*stepHasHeight,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z+(stepOuterWingWidth.value()+stepCenterWidth.value()),
    ],
    stepOuterWingBottomRight:[
      tank.x+(stepDepth.value()+stepInnerEdgeDepth.value())*stepHasHeight,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z+(stepOuterWingWidth.value()+stepCenterWidth.value()),
    ],
    
    stepInnerWingTopLeft:[
      tank.x+(stepDepth.value()+stepTopDepth.value())*stepHasHeight,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z-(stepCenterWidth.value()),
    ],
    stepInnerWingBottomLeft:[
      tank.x+(stepDepth.value())*stepHasHeight,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z-(stepCenterWidth.value()),
    ],

    stepInnerWingTopRight:[
      tank.x+(stepDepth.value()+stepTopDepth.value())*stepHasHeight,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z+(stepCenterWidth.value()),
    ],
    stepInnerWingBottomRight:[
      tank.x+(stepDepth.value())*stepHasHeight,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z+(stepCenterWidth.value()),
    ],
    




  };



  background(200);

  lights();
  for (let key in points){
    point(points[key][0], points[key][1], points[key][2]);
    // text(key, points[key][0], points[key][1], 20, 20);
  }
  
  Object.keys(drawFront).forEach(front => drawFront[front](points));
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