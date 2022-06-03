
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
  .style('line-height:130%');

  Heights = createDiv("Height");
  Heights.position(150, 10);
  Heights.size(100);
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
  .style('line-height:130%');

  Widths = createDiv("Width");
  Widths.position(150, Heights.size().height + 10);
  Widths.size(100);
  Widths.style('font-family', "Ubuntu-Light")
  glacisTopWidth = createSlider(0, 250, 50, 5);
  glacisTopWidth.parent(Widths);
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
    "Bumper",
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
  .size(100)
  .style('font-family', "Ubuntu-Light")
  .style('font-size:16px')
  .style('line-height:130%');

  Depths = createDiv("Depths");
  Depths.position(150, Heights.size().height + Widths.size().height + 10);
  Depths.size(100);
  Depths.style('font-family', "Ubuntu-Light")
  bumperDepth = createSlider(0, 250, 80, 5);
  bumperDepth.parent(Depths);
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
    beginShape()
      vertex(points.glacisTopMiddle[0], points.glacisTopMiddle[1], points.glacisTopMiddle[2]);
      vertex(points.glacisTopLeft[0], points.glacisTopLeft[1], points.glacisTopLeft[2]);
      vertex(points.glacisWingLeftPit[0], points.glacisWingLeftPit[1], points.glacisWingLeftPit[2]);
      vertex(points.glacisBottomLeft[0], points.glacisBottomLeft[1], points.glacisBottomLeft[2]);
      vertex(points.glacisBottomMiddle[0], points.glacisBottomMiddle[1], points.glacisBottomMiddle[2]);
      vertex(points.glacisTopMiddle[0], points.glacisTopMiddle[1], points.glacisTopMiddle[2]);
      vertex(points.glacisTopRight[0], points.glacisTopRight[1], points.glacisTopRight[2]);
      vertex(points.glacisWingRightPit[0], points.glacisWingRightPit[1], points.glacisWingRightPit[2]);
      vertex(points.glacisBottomRight[0], points.glacisBottomRight[1], points.glacisBottomRight[2]);
      vertex(points.glacisBottomMiddle[0], points.glacisBottomMiddle[1], points.glacisBottomMiddle[2]);
      vertex(points.glacisTopMiddle[0], points.glacisTopMiddle[1], points.glacisTopMiddle[2]);
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
    beginShape();
      vertex(points.bumperBottomLeft[0],        points.bumperBottomLeft[1],         points.bumperBottomLeft[2]);
      vertex(points.bumperBottomRight[0],       points.bumperBottomRight[1],        points.bumperBottomRight[2]);
      vertex(points.glacisBottomRight[0],       points.glacisBottomRight[1],        points.glacisBottomRight[2]);
      vertex(points.glacisBottomMiddle[0], points.glacisBottomMiddle[1], points.glacisBottomMiddle[2]);
      vertex(points.glacisBottomLeft[0],        points.glacisBottomLeft[1],         points.glacisBottomLeft[2]);
      vertex(points.bumperBottomLeft[0],        points.bumperBottomLeft[1],         points.bumperBottomLeft[2]);
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
    vertex(points.glacisTopMiddle[0], points.glacisTopMiddle[1], points.glacisTopMiddle[2]);
    vertex(points.stepInnerWingBottomRight[0], points.stepInnerWingBottomRight[1], points.stepInnerWingBottomRight[2]);
  endShape();
  //top middle left
  beginShape();
    vertex(points.glacisTopLeft[0], points.glacisTopLeft[1], points.glacisTopLeft[2]);
    vertex(points.stepInnerWingBottomLeft[0], points.stepInnerWingBottomLeft[1], points.stepInnerWingBottomLeft[2]);
    vertex(points.glacisTopMiddle[0], points.glacisTopMiddle[1], points.glacisTopMiddle[2]);
  endShape();
  //top middle right
  beginShape();
    vertex(points.glacisTopRight[0], points.glacisTopRight[1], points.glacisTopRight[2]);
    vertex(points.stepInnerWingBottomRight[0], points.stepInnerWingBottomRight[1], points.stepInnerWingBottomRight[2]);
    vertex(points.glacisTopMiddle[0], points.glacisTopMiddle[1], points.glacisTopMiddle[2]);
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

  const points = {
    glacisTopLeft: [
      tank.x,
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()),
      tank.z-(glacisTopWidth.value()-(Math.ceil(wingGlacisPercent.value()-1)*waistWidth.value())), 
    ],
    glacisTopMiddle: [
      tank.x-(bumperPikeHeight.value())*(bumperDepth.value()/glacisHeight.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()),
      tank.z,
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
      tank.x-(bumperDepth.value() * wingGlacisPercent.value()) + (wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value() - (glacisHeight.value() * wingGlacisPercent.value())),
      tank.z+(glacisTopWidth.value() +waistWidth.value()) + (((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value() + wingBottomWidth.value())*Math.ceil(wingGlacisPercent.value()) ,
    ],
    glacisWingRightPit: [
      tank.x-bumperDepth.value() * wingGlacisPercent.value(),
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
      tank.x-(bumperDepth.value() * wingGlacisPercent.value()) + (wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value() - (glacisHeight.value() * wingGlacisPercent.value())),
      tank.z-(glacisTopWidth.value()  + (waistWidth.value() + ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value() + wingBottomWidth.value() )*Math.ceil(wingGlacisPercent.value())),
    ],
    glacisWingLeftPit: [
      tank.x-bumperDepth.value() * wingGlacisPercent.value(),
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
      tank.x-bumperDepth.value(),
      tank.y-(bottomPlateHeight.value()+bumperHeight.value()), 
      tank.z-bumperWidth.value() 
    ],
    glacisBottomMiddle: [
      tank.x-bumperDepth.value(),
      tank.y-(bottomPlateHeight.value()+bumperHeight.value()+bumperPikeHeight.value()),
      tank.z,
    ],
    glacisBottomRight: [
      tank.x-bumperDepth.value(),
      tank.y-(bottomPlateHeight.value()+bumperHeight.value()), 
      tank.z+bumperWidth.value() 
    ],
    bumperBottomRight:[
      tank.x-bumperDepth.value(),
      tank.y-bottomPlateHeight.value(), 
      tank.z+bumperWidth.value()
    ],
    bumperBottomRightFlank:[
      tank.x-(bumperDepth.value() * wingGlacisPercent.value()),
      tank.y-(bottomPlateHeight.value()),
      tank.z+(bumperWidth.value()+waistWidth.value()),
    ],

    bumperBottomLeft:[
      tank.x-bumperDepth.value(), 
      tank.y-bottomPlateHeight.value(),
      tank.z-bumperWidth.value()
    ],
    bumperBottomLeftFlank:[
      tank.x-(bumperDepth.value() * wingGlacisPercent.value()),
      tank.y-(bottomPlateHeight.value()),
      tank.z-(bumperWidth.value()+waistWidth.value()),
    ],
    bottomPlateLeft:[
      tank.x-bumperDepth.value()+(bottomPlateDepth.value()),
      tank.y,
      tank.z-bottomPlateWidth.value()
    ],
    bottomPlateRight:[
      tank.x-bumperDepth.value()+(bottomPlateDepth.value()),
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
      tank.x+(stepDepth.value()+stepTopDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z-(stepWidth.value()+stepCenterWidth.value()+stepOuterWingWidth.value()),
    ],
    stepTopRight:[
      tank.x+(stepDepth.value()+stepTopDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value()),
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
      tank.x+(stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z-(stepWidth.value()+stepCenterWidth.value()+stepOuterWingWidth.value()),
    ],
    stepBottomRight:[
      tank.x+(stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z+(stepWidth.value()+stepCenterWidth.value()+stepOuterWingWidth.value()),
    ],
   
    
    stepOuterWingTopLeft:[
      tank.x+(stepDepth.value()+stepTopDepth.value()+stepInnerEdgeDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z-(stepOuterWingWidth.value()+stepCenterWidth.value()),
    ],
    stepOuterWingBottomLeft:[
      tank.x+(stepDepth.value()+stepInnerEdgeDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z-(stepOuterWingWidth.value()+stepCenterWidth.value()),
    ],


    stepOuterWingTopRight:[
      tank.x+(stepDepth.value()+stepTopDepth.value()+stepInnerEdgeDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z+(stepOuterWingWidth.value()+stepCenterWidth.value()),
    ],
    stepOuterWingBottomRight:[
      tank.x+(stepDepth.value()+stepInnerEdgeDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z+(stepOuterWingWidth.value()+stepCenterWidth.value()),
    ],
    
    stepInnerWingTopLeft:[
      tank.x+(stepDepth.value()+stepTopDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z-(stepCenterWidth.value()),
    ],
    stepInnerWingBottomLeft:[
      tank.x+(stepDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z-(stepCenterWidth.value()),
    ],

    stepInnerWingTopRight:[
      tank.x+(stepDepth.value()+stepTopDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      tank.z+(stepCenterWidth.value()),
    ],
    stepInnerWingBottomRight:[
      tank.x+(stepDepth.value()),
      tank.y-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      tank.z+(stepCenterWidth.value()),
    ],
    




  };

  background(200);

  lights();
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