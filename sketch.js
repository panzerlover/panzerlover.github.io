// import { fromContainer } from "./draw/draw-front";

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
    "Step Outer",
    "Step Between",
    "Step Center",
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
  midGlacisWidth = createSlider(0,250,25);
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
  stepOuterPanelWidth = createSlider(0, 250, 30, 5);
  stepOuterPanelWidth.parent(Widths);
  stepBetweenPanelWidth = createSlider(0, 250, 30);
  stepBetweenPanelWidth.parent(Widths);
  stepCentralPanelWidth = createSlider(0, 250, 20);
  stepCentralPanelWidth.parent(Widths);

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
  bottomPlateDepth = createSlider(-250, 250, 0, 5);
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
function addChecks(){
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

  showTreads = createCheckbox(
    "Show Treads", false);
  showTreads.position(900, 50);
  showTreads.style("font-family", "Ubuntu-Light");
}
const drawFront = {
  Glacis: (p)=>{
    //mirrored
    let mult = [1, -1];
    mult.forEach((num)=> {
      //front panels
      beginShape(TRIANGLE_STRIP);
      vertex(p.gTopCorn.x, p.gTopCorn.y, num*p.gTopCorn.z);
      vertex(p.gTopMid.x, p.gTopMid.y, num*p.gTopMid.z);
      vertex(p.gWaist.x, p.gWaist.y, num*p.gWaist.z);
      vertex(p.gBotMid.x, p.gBotMid.y, num*p.gBotMid.z);
      vertex(p.gBotCorn.x, p.gBotCorn.y, num*p.gBotCorn.z);
      endShape();

      //wings
      beginShape(TRIANGLE_STRIP);
      vertex(p.gTopCorn.x, p.gTopCorn.y, num*p.gTopCorn.z);
      vertex(p.wTopCorn.x, p.wTopCorn.y, num*p.wTopCorn.z);
      vertex(p.gWaist.x, p.gWaist.y, num*p.gWaist.z)
      vertex(p.wBotCorn.x, p.wBotCorn.y, num*p.wBotCorn.z);
      endShape()


    })
    //middle panel
    beginShape()
    vertex(p.gTopMid.x, p.gTopMid.y, -p.gTopMid.z)
    vertex(p.gTopMid.x, p.gTopMid.y, p.gTopMid.z)
    vertex(p.gBotMid.x, p.gBotMid.y, p.gBotMid.z)
    vertex(p.gBotMid.x, p.gBotMid.y, -p.gBotMid.z)
    endShape(CLOSE)

  },
  Bumper: (p)=> {
    beginShape()
    vertex(p.gBotMid.x, p.gBotMid.y, p.gBotMid.z)
    vertex(p.gBotCorn.x, p.gBotCorn.y, p.gBotCorn.z)
    vertex(p.bBotCorn.x, p.bBotCorn.y, p.bBotCorn.z)
    vertex(p.bBotCorn.x, p.bBotCorn.y, -p.bBotCorn.z)
    vertex(p.gBotCorn.x, p.gBotCorn.y, -p.gBotCorn.z)
    vertex(p.gBotMid.x, p.gBotMid.y, -p.gBotMid.z)
    endShape()

  },
//   // Bumper: (p)=>{
//   //   //bumper
//   //   //left
//   //     beginShape();
//   //       vertex(p.glacisBottomLeft.x, p.glacisBottomLeft.y, p.glacisBottomLeft.z);
//   //       vertex(p.bumperBottomLeft.x, p.bumperBottomLeft.y, p.bumperBottomLeft.z);
//   //       vertex(p.glacisBottomMiddleLeft.x, p.glacisBottomMiddleLeft.y, p.glacisBottomMiddleLeft.z);
//   //       vertex(p.glacisBottomLeft.x, p.glacisBottomLeft.y, p.glacisBottomLeft.z);
//   //     endShape();
//   //   //right
//   //     beginShape();
//   //       vertex(p.glacisBottomRight.x, p.glacisBottomRight.y, p.glacisBottomRight.z);
//   //       vertex(p.bumperBottomRight.x, p.bumperBottomRight.y, p.bumperBottomRight.z);
//   //       vertex(p.glacisBottomMiddleRight.x, p.glacisBottomMiddleRight.y, p.glacisBottomMiddleRight.z);
//   //       vertex(p.glacisBottomRight.x, p.glacisBottomRight.y, p.glacisBottomRight.z);
//   //     endShape();
//   //   //bottom
//   //     beginShape();
//   //       vertex(p.glacisBottomMiddleLeft.x, p.glacisBottomMiddleLeft.y, p.glacisBottomMiddleLeft.z);
//   //       vertex(p.bumperBottomLeft.x, p.bumperBottomLeft.y, p.bumperBottomLeft.z);
//   //       vertex(p.bumperBottomRight.x, p.bumperBottomRight.y, p.bumperBottomRight.z);
//   //       vertex(p.glacisBottomMiddleRight.x, p.glacisBottomMiddleRight.y, p.glacisBottomMiddleRight.z);
//   //     endShape();
//   // },
//   BottomPlate: (p) => {

//     beginShape();
//     vertex(p.bumperBottomLeft.x, p.bumperBottomLeft.y, p.bumperBottomLeft.z); 
//     vertex(p.bottomPlateLeft.x, p.bottomPlateLeft.y, p.bottomPlateLeft.z);
//     vertex(p.bottomPlateRight.x, p.bottomPlateRight.y, p.bottomPlateRight.z);
//     vertex(p.bumperBottomRight.x, p.bumperBottomRight.y, p.bumperBottomRight.z);
//     vertex(p.bumperBottomLeft.x, p.bumperBottomLeft.y, p.bumperBottomLeft.z);
//     endShape();
  
//   },
//   GlacisSides: (p)=>{

//     //right
//     //mid
//     beginShape();
//     vertex(p.glacisBottomRight.x, p.glacisBottomRight.y, p.glacisBottomRight.z);
//     vertex(p.glacisWingRightPit.x, p.glacisWingRightPit.y, p.glacisWingRightPit.z)
//     vertex(p.bumperBottomRightFlank.x, p.bumperBottomRightFlank.y, p.bumperBottomRightFlank.z);
//     vertex(p.bumperBottomRight.x, p.bumperBottomRight.y, p.bumperBottomRight.z);
//     endShape();
//     //bottom
//     beginShape();
//     vertex(p.bumperBottomRight.x, p.bumperBottomRight.y, p.bumperBottomRight.z);
//     vertex(p.bottomPlateRight.x, p.bottomPlateRight.y, p.bottomPlateRight.z);
//     vertex(p.bumperBottomRightFlank.x, p.bumperBottomRightFlank.y, p.bumperBottomRightFlank.z);
//     vertex(p.bumperBottomRight.x, p.bumperBottomRight.y, p.bumperBottomRight.z);
//     endShape();
  
//     //left
//     beginShape();
//     vertex(p.glacisBottomLeft.x, p.glacisBottomLeft.y, p.glacisBottomLeft.z);
//     vertex(p.glacisWingLeftPit.x, p.glacisWingLeftPit.y, p.glacisWingLeftPit.z)
//     vertex(p.bumperBottomLeftFlank.x, p.bumperBottomLeftFlank.y, p.bumperBottomLeftFlank.z);
//     vertex(p.bumperBottomLeft.x, p.bumperBottomLeft.y, p.bumperBottomLeft.z);
//     endShape();
//     beginShape();
//     vertex(p.bumperBottomLeft.x, p.bumperBottomLeft.y, p.bumperBottomLeft.z);
//     vertex(p.bottomPlateLeft.x, p.bottomPlateLeft.y, p.bottomPlateLeft.z);
//     vertex(p.bumperBottomLeftFlank.x, p.bumperBottomLeftFlank.y, p.bumperBottomLeftFlank.z);
//     vertex(p.bumperBottomLeft.x, p.bumperBottomLeft.y, p.bumperBottomLeft.z);
//     endShape();
//   },
//   Flanks: (p)=>{

//     //right flank
//     //bottom
//     beginShape();
//     vertex(p.bottomPlateRight.x, p.bottomPlateRight.y, p.bottomPlateRight.z);
//     vertex(p.flankBottomPlateRight.x, p.flankBottomPlateRight.y, p.flankBottomPlateRight.z);
//     vertex(p.flankBumperBottomRightFlank.x, p.flankBumperBottomRightFlank.y, p.flankBumperBottomRightFlank.z);
//     vertex(p.bumperBottomRightFlank.x, p.bumperBottomRightFlank.y, p.bumperBottomRightFlank.z);
//     vertex(p.bottomPlateRight.x, p.bottomPlateRight.y, p.bottomPlateRight.z);
//     endShape();
//     //middle vert
//     beginShape();
//     vertex(p.bumperBottomRightFlank.x, p.bumperBottomRightFlank.y, p.bumperBottomRightFlank.z);
//     vertex(p.flankBumperBottomRightFlank.x, p.flankBumperBottomRightFlank.y, p.flankBumperBottomRightFlank.z);
//     vertex(p.flankGlacisWingRightPitFlank.x, p.flankGlacisWingRightPitFlank.y, p.flankGlacisWingRightPitFlank.z);
//     vertex(p.glacisWingRightPit.x, p.glacisWingRightPit.y, p.glacisWingRightPit.z);
//     vertex(p.bumperBottomRightFlank.x, p.bumperBottomRightFlank.y, p.bumperBottomRightFlank.z);
//     endShape();
//     //wing bottom
//     beginShape();
//       vertex(p.glacisWingRightPitFlank.x, p.glacisWingRightPitFlank.y, p.glacisWingRightPitFlank.z);
//       vertex(p.flankGlacisWingRightPitFlank.x, p.flankGlacisWingRightPitFlank.y, p.flankGlacisWingRightPitFlank.z);
//       vertex(p.flankGlacisWingRightBottomFlank.x, p.flankGlacisWingRightBottomFlank.y, p.flankGlacisWingRightBottomFlank.z);
//       vertex(p.glacisWingRightBottomFlank.x, p.glacisWingRightBottomFlank.y, p.glacisWingRightBottomFlank.z);
//     endShape();
//     //wing side
//     beginShape();
//       vertex(p.glacisWingRightBottomFlank.x, p.glacisWingRightBottomFlank.y, p.glacisWingRightBottomFlank.z);
//       vertex(p.flankGlacisWingRightBottomFlank.x, p.flankGlacisWingRightBottomFlank.y, p.flankGlacisWingRightBottomFlank.z);
//       vertex(p.flankGlacisWingRightShoulder.x, p.flankGlacisWingRightShoulder.y, p.flankGlacisWingRightShoulder.z);
//       vertex(p.glacisWingRightShoulder.x, p.glacisWingRightShoulder.y, p.glacisWingRightShoulder.z);
//     endShape();
//     // //wing top
//       //front bit
//       beginShape();
//       vertex(p.glacisWingRightShoulder.x, p.glacisWingRightShoulder.y, p.glacisWingRightShoulder.z);
//       vertex(p.glacisTopRight.x, p.glacisTopRight.y, p.glacisTopRight.z);
//       vertex(p.stepFlankHelperRight.x, p.stepFlankHelperRight.y, p.stepFlankHelperRight.z);
//       vertex(p.glacisWingRightShoulder.x, p.glacisWingRightShoulder.y, p.glacisWingRightShoulder.z);
//       endShape();
//       //side triangle bit
//       beginShape();
//         vertex(p.glacisWingRightShoulder.x, p.glacisWingRightShoulder.y, p.glacisWingRightShoulder.z);
//         vertex(p.flankGlacisWingRightShoulder.x, p.flankGlacisWingRightShoulder.y, p.flankGlacisWingRightShoulder.z);
//         vertex(p.stepBottomRight.x, p.stepBottomRight.y, p.stepBottomRight.z);
//       endShape();
//       //back bit
//       beginShape();
//         vertex(p.stepBottomRight.x, p.stepBottomRight.y, p.stepBottomRight.z);
//         vertex(p.flankGlacisTopRight.x, p.flankGlacisTopRight.y, p.flankGlacisTopRight.z);
//         vertex(p.flankGlacisWingRightShoulder.x, p.flankGlacisWingRightShoulder.y, p.flankGlacisWingRightShoulder.z);
//       endShape();
   
  
//     //Left
//     //bottom
//     beginShape();
//     vertex(p.bottomPlateLeft.x, p.bottomPlateLeft.y, p.bottomPlateLeft.z);
//     vertex(p.flankBottomPlateLeft.x, p.flankBottomPlateLeft.y, p.flankBottomPlateLeft.z);
//     vertex(p.flankBumperBottomLeftFlank.x, p.flankBumperBottomLeftFlank.y, p.flankBumperBottomLeftFlank.z);
//     vertex(p.bumperBottomLeftFlank.x, p.bumperBottomLeftFlank.y, p.bumperBottomLeftFlank.z);
//     vertex(p.bottomPlateLeft.x, p.bottomPlateLeft.y, p.bottomPlateLeft.z);
//     endShape();
//     //middle vert
//     beginShape();
//     vertex(p.bumperBottomLeftFlank.x, p.bumperBottomLeftFlank.y, p.bumperBottomLeftFlank.z);
//     vertex(p.flankBumperBottomLeftFlank.x, p.flankBumperBottomLeftFlank.y, p.flankBumperBottomLeftFlank.z);
//     vertex(p.flankGlacisWingLeftPitFlank.x, p.flankGlacisWingLeftPitFlank.y, p.flankGlacisWingLeftPitFlank.z);
//     vertex(p.glacisWingLeftPit.x, p.glacisWingLeftPit.y, p.glacisWingLeftPit.z);
//     vertex(p.bumperBottomLeftFlank.x, p.bumperBottomLeftFlank.y, p.bumperBottomLeftFlank.z);
//     endShape();
//     //wing bottom
//     beginShape();
//       vertex(p.glacisWingLeftPitFlank.x, p.glacisWingLeftPitFlank.y, p.glacisWingLeftPitFlank.z);
//       vertex(p.flankGlacisWingLeftPitFlank.x, p.flankGlacisWingLeftPitFlank.y, p.flankGlacisWingLeftPitFlank.z);
//       vertex(p.flankGlacisWingLeftBottomFlank.x, p.flankGlacisWingLeftBottomFlank.y, p.flankGlacisWingLeftBottomFlank.z);
//       vertex(p.glacisWingLeftBottomFlank.x, p.glacisWingLeftBottomFlank.y, p.glacisWingLeftBottomFlank.z);
//     endShape();
//     //wing side
//     beginShape();
//       vertex(p.glacisWingLeftBottomFlank.x, p.glacisWingLeftBottomFlank.y, p.glacisWingLeftBottomFlank.z);
//       vertex(p.flankGlacisWingLeftBottomFlank.x, p.flankGlacisWingLeftBottomFlank.y, p.flankGlacisWingLeftBottomFlank.z);
//       vertex(p.flankGlacisWingLeftShoulder.x, p.flankGlacisWingLeftShoulder.y, p.flankGlacisWingLeftShoulder.z);
//       vertex(p.glacisWingLeftShoulder.x, p.glacisWingLeftShoulder.y, p.glacisWingLeftShoulder.z);
//     endShape();
//     // //wing top
//       //front bit
//       beginShape();
//         vertex(p.glacisWingLeftShoulder.x, p.glacisWingLeftShoulder.y, p.glacisWingLeftShoulder.z);
//         vertex(p.glacisTopLeft.x, p.glacisTopLeft.y, p.glacisTopLeft.z);
//         vertex(p.stepBottomLeft.x, p.stepBottomLeft.y, p.stepBottomLeft.z);
//         vertex(p.glacisWingLeftShoulder.x, p.glacisWingLeftShoulder.y, p.glacisWingLeftShoulder.z);
//       endShape();
//       //side triangle bit
//       beginShape();
//       vertex(p.glacisWingLeftShoulder.x, p.glacisWingLeftShoulder.y, p.glacisWingLeftShoulder.z);
//       vertex(p.flankGlacisWingLeftShoulder.x, p.flankGlacisWingLeftShoulder.y, p.flankGlacisWingLeftShoulder.z);
//       vertex(p.stepBottomLeft.x, p.stepBottomLeft.y, p.stepBottomLeft.z);
//       endShape();
//       //back bit
//       beginShape(); 
//         vertex(p.stepBottomLeft.x, p.stepBottomLeft.y, p.stepBottomLeft.z);
//         vertex(p.flankGlacisTopLeft.x, p.flankGlacisTopLeft.y, p.flankGlacisTopLeft.z);
//         vertex(p.flankGlacisWingLeftShoulder.x, p.flankGlacisWingLeftShoulder.y, p.flankGlacisWingLeftShoulder.z);
//       endShape();
  
  
//   },
//   Step: (p) => {
//   //front panel
//   //left outer wing
//   beginShape();
//     vertex(p.stepBottomLeft.x, p.stepBottomLeft.y, p.stepBottomLeft.z);
//     vertex(p.stepTopLeft.x, p.stepTopLeft.y, p.stepTopLeft.z);
//     vertex(p.stepOuterWingTopLeft.x, p.stepOuterWingTopLeft.y, p.stepOuterWingTopLeft.z);
//     vertex(p.stepOuterWingBottomLeft.x, p.stepOuterWingBottomLeft.y, p.stepOuterWingBottomLeft.z);
//     vertex(p.stepBottomLeft.x, p.stepBottomLeft.y, p.stepBottomLeft.z);
//   endShape();
//   // right outer wing
//   beginShape();
//     vertex(p.stepBottomRight.x, p.stepBottomRight.y, p.stepBottomRight.z);
//     vertex(p.stepTopRight.x, p.stepTopRight.y, p.stepTopRight.z);
//     vertex(p.stepOuterWingTopRight.x, p.stepOuterWingTopRight.y, p.stepOuterWingTopRight.z);
//     vertex(p.stepOuterWingBottomRight.x, p.stepOuterWingBottomRight.y, p.stepOuterWingBottomRight.z);
//     vertex(p.stepBottomRight.x, p.stepBottomRight.y, p.stepBottomRight.z);
//   endShape();
//   //left inner wing
//     beginShape();
//       vertex(p.stepOuterWingBottomLeft.x, p.stepOuterWingBottomLeft.y, p.stepOuterWingBottomLeft.z);
//       vertex(p.stepOuterWingTopLeft.x, p.stepOuterWingTopLeft.y, p.stepOuterWingTopLeft.z);
//       vertex(p.stepInnerWingTopLeft.x, p.stepInnerWingTopLeft.y, p.stepInnerWingTopLeft.z);
//       vertex(p.stepInnerWingBottomLeft.x, p.stepInnerWingBottomLeft.y, p.stepInnerWingBottomLeft.z);
//       vertex(p.stepOuterWingBottomLeft.x, p.stepOuterWingBottomLeft.y, p.stepOuterWingBottomLeft.z);
//     endShape();
//   // right inner wing
//     beginShape();
//       vertex(p.stepOuterWingBottomRight.x, p.stepOuterWingBottomRight.y, p.stepOuterWingBottomRight.z);
//       vertex(p.stepOuterWingTopRight.x, p.stepOuterWingTopRight.y, p.stepOuterWingTopRight.z);
//       vertex(p.stepInnerWingTopRight.x, p.stepInnerWingTopRight.y, p.stepInnerWingTopRight.z);
//       vertex(p.stepInnerWingBottomRight.x, p.stepInnerWingBottomRight.y, p.stepInnerWingBottomRight.z);
//       vertex(p.stepOuterWingBottomRight.x, p.stepOuterWingBottomRight.y, p.stepOuterWingBottomRight.z);
//     endShape();
//   //step middle front
//     beginShape();
//       vertex(p.stepInnerWingTopLeft.x, p.stepInnerWingTopLeft.y, p.stepInnerWingTopLeft.z);
//       vertex(p.stepInnerWingBottomLeft.x, p.stepInnerWingBottomLeft.y, p.stepInnerWingBottomLeft.z);
//       vertex(p.stepInnerWingBottomRight.x, p.stepInnerWingBottomRight.y, p.stepInnerWingBottomRight.z);
//       vertex(p.stepInnerWingTopRight.x, p.stepInnerWingTopRight.y, p.stepInnerWingTopRight.z);
//       vertex(p.stepInnerWingTopLeft.x, p.stepInnerWingTopLeft.y, p.stepInnerWingTopLeft.z);
//     endShape();


//   //top middle
//   beginShape();
//     vertex(p.stepInnerWingBottomLeft.x, p.stepInnerWingBottomLeft.y, p.stepInnerWingBottomLeft.z);
//     vertex(p.glacisTopMiddleLeft.x, p.glacisTopMiddleLeft.y, p.glacisTopMiddleLeft.z);
//     vertex(p.glacisTopMiddleRight.x, p.glacisTopMiddleRight.y, p.glacisTopMiddleRight.z);
//     vertex(p.stepInnerWingBottomRight.x, p.stepInnerWingBottomRight.y, p.stepInnerWingBottomRight.z);
//   endShape();
//   //top middle left
//   beginShape();
//     vertex(p.glacisTopLeft.x, p.glacisTopLeft.y, p.glacisTopLeft.z);
//     vertex(p.stepInnerWingBottomLeft.x, p.stepInnerWingBottomLeft.y, p.stepInnerWingBottomLeft.z);
//     vertex(p.glacisTopMiddleLeft.x, p.glacisTopMiddleLeft.y, p.glacisTopMiddleLeft.z);
//   endShape();
//   //top middle right
//   beginShape();
//     vertex(p.glacisTopRight.x, p.glacisTopRight.y, p.glacisTopRight.z);
//     vertex(p.stepInnerWingBottomRight.x, p.stepInnerWingBottomRight.y, p.stepInnerWingBottomRight.z);
//     vertex(p.glacisTopMiddleRight.x, p.glacisTopMiddleRight.y, p.glacisTopMiddleRight.z);
//   endShape();
//   //top outer left
//   beginShape();
//     vertex(p.stepInnerWingBottomLeft.x, p.stepInnerWingBottomLeft.y, p.stepInnerWingBottomLeft.z);
//     vertex(p.glacisTopLeft.x, p.glacisTopLeft.y, p.glacisTopLeft.z);
//     vertex(p.stepOuterWingBottomLeft.x, p.stepOuterWingBottomLeft.y, p.stepOuterWingBottomLeft.z);
//   endShape();
//   // top outer right
//   beginShape();
//     vertex(p.stepInnerWingBottomRight.x, p.stepInnerWingBottomRight.y, p.stepInnerWingBottomRight.z);
//     vertex(p.glacisTopRight.x, p.glacisTopRight.y, p.glacisTopRight.z);
//     vertex(p.stepOuterWingBottomRight.x, p.stepOuterWingBottomRight.y, p.stepOuterWingBottomRight.z);
//   endShape();
//   // top outer left left
//   beginShape();
//     vertex(p.stepOuterWingBottomLeft.x, p.stepOuterWingBottomLeft.y, p.stepOuterWingBottomLeft.z);
//     vertex(p.glacisTopLeft.x, p.glacisTopLeft.y, p.glacisTopLeft.z);
//     vertex(p.stepBottomLeft.x, p.stepBottomLeft.y, p.stepBottomLeft.z);
//   endShape();
//   // top outer right right
//   beginShape();
//     vertex(p.stepOuterWingBottomRight.x, p.stepOuterWingBottomRight.y, p.stepOuterWingBottomRight.z);
//     vertex(p.glacisTopRight.x, p.glacisTopRight.y, p.glacisTopRight.z);
//     vertex(p.stepBottomRight.x, p.stepBottomRight.y, p.stepBottomRight.z);
//   endShape();
//   //side
//     // side right
//     beginShape();
//       vertex(p.stepBottomRight.x, p.stepBottomRight.y, p.stepBottomRight.z);
//       vertex(p.flankGlacisTopRight.x, p.flankGlacisTopRight.y, p.flankGlacisTopRight.z);
//       vertex(p.stepTopRightFlank.x, p.stepTopRightFlank.y, p.stepTopRightFlank.z);
//       vertex(p.stepTopRight.x, p.stepTopRight.y, p.stepTopRight.z);
//       vertex(p.stepBottomRight.x, p.stepBottomRight.y, p.stepBottomRight.z);
//     endShape();
//     // side left
//     beginShape();
//     vertex(p.stepBottomLeft.x, p.stepBottomLeft.y, p.stepBottomLeft.z);
//     vertex(p.flankGlacisTopLeft.x, p.flankGlacisTopLeft.y, p.flankGlacisTopLeft.z);
//     vertex(p.stepTopLeftFlank.x, p.stepTopLeftFlank.y, p.stepTopLeftFlank.z);
//     vertex(p.stepTopLeft.x, p.stepTopLeft.y, p.stepTopLeft.z);
//     vertex(p.stepBottomLeft.x, p.stepBottomLeft.y, p.stepBottomLeft.z);
//   endShape();
    

// }
};
const drawTreads = {
  frontSprocket: (p) => {
    let thickness = 30;
    translate(p.bumperBottomLeft.x, p.bumperBottomLeft.y, p.glacisWingLeftPit.z-(thickness/2));
    rotateX(90);
    cylinder(20, thickness);
  },
};

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

  const pointHelpers = {
    bumperHasHeight: bumperHeight.value() == 0 ? 0 : 1,
    stepHasHeight: (stepHeight.value()== 0) ? 0 : 1,
    stepNotHasHeight: (stepHeight.value()!= 0) ? 0 : 1,
    bumperOverZero: ((bumperTopDepth.value()*wingGlacisPercent.value()) > -bumperBottomDepth.value()) ? 0 : 1,
    pikeAndSlope: (bumperPikeHeight.value() != 0 && bumperBottomDepth.value() < 0) ? 1 : 0,
    stepEdgeCalc: () => {
      let GW = glacisTopWidth.value() + wingTopWidth.value();
      if (stepCentralPanelWidth.value() >= GW) {
        return 0;
      } else if (stepCentralPanelWidth.value() + stepBetweenPanelWidth.value() >= GW) {

        return stepInnerEdgeDepth.value() - 
        (stepInnerEdgeDepth.value())*
        ((stepCentralPanelWidth.value()+stepBetweenPanelWidth.value() - GW)/(stepBetweenPanelWidth.value()));

      } else if (stepCentralPanelWidth.value() + stepBetweenPanelWidth.value()+ stepOuterPanelWidth.value() >= GW){

        return stepInnerEdgeDepth.value() + stepOuterEdgeDepth.value() - 
        (stepOuterEdgeDepth.value())*
        ((stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()+stepOuterPanelWidth.value()- GW)/(stepOuterPanelWidth.value()));

      } else {
        return stepInnerEdgeDepth.value() + stepOuterEdgeDepth.value();
      }
    //   let stepMiddleOverhang = (stepCentralPanelWidth.value() + stepBetweenPanelWidth.value() >= GW);
    //   let stepWingOverhang = (stepCentralPanelWidth.value() + stepBetweenPanelWidth.value()+ stepOuterPanelWidth.value() >= GW);
    //   let p1X = (stepMiddleOverhang) ? stepDepth.value() + stepInnerEdgeDepth.value() : stepDepth.value() + stepInnerEdgeDepth.value() + stepBetweenPanelWidth.value();
    //   let p1Z = (stepMiddleOverhang) ? stepCentralPanelWidth.value() + stepBetweenPanelWidth.value() : stepCentralPanelWidth.value() + stepBetweenPanelWidth.value() + stepOuterPanelWidth.value();
    //   let p2X = (stepMiddleOverhang) ? stepDepth.value() : stepDepth.value() + stepInnerEdgeDepth.value();
    //   let p2Z = (stepMiddleOverhang) ? stepCentralPanelWidth.value() : stepCentralPanelWidth.value() + stepBetweenPanelWidth.value();
    //   return (p1X - p2X) * ((p1Z - GW)/(p1Z - p2Z));
    //  }
    },

  }
  const q = {
    gTopY: bottomPlateHeight.value() + bumperHeight.value() + glacisHeight.value(),
    gTopCornZ: midGlacisWidth.value()+glacisTopWidth.value()-(Math.ceil(wingGlacisPercent.value()-1)*waistWidth.value()),
    
    gTopMidX: (bumperPikeHeight.value())*(bumperTopDepth.value()/glacisHeight.value()),
    gMidZ: midGlacisWidth.value(),
    
    gWaistX: bumperTopDepth.value() * wingGlacisPercent.value(),
    gWaistY: bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value() - (glacisHeight.value() * wingGlacisPercent.value()),
    gWaistZ: midGlacisWidth.value() + glacisTopWidth.value() + waistWidth.value() + ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value(),

    gBotCornX: (bumperTopDepth.value()+((bumperBottomDepth.value()*bumperPikeHeight.value())/(bumperPikeHeight.value()+bumperHeight.value()))*pointHelpers.pikeAndSlope),
    gBotCornY: bottomPlateHeight.value()+bumperHeight.value(),
    gBotCornZ: midGlacisWidth.value() + bumperWidth.value(),

    gBotMidX: bumperTopDepth.value(),
    gBotMidY: bottomPlateHeight.value()+bumperHeight.value()+bumperPikeHeight.value(),

    wTopCornX: (wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
    wTopCornZ: (midGlacisWidth.value() + glacisTopWidth.value() -(waistWidth.value()*Math.ceil(wingGlacisPercent.value()-1)) + wingTopWidth.value()*Math.ceil(wingGlacisPercent.value())),

    wBotCornX: (bumperTopDepth.value() * wingGlacisPercent.value()) - (wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
    wBotCornZ: (midGlacisWidth.value() + glacisTopWidth.value() +waistWidth.value()) + (((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value() + wingBottomWidth.value())*Math.ceil(wingGlacisPercent.value()),

    bBotCornX: (bumperTopDepth.value()+(bumperBottomDepth.value()*pointHelpers.bumperHasHeight)),
    bBotCornY: bottomPlateHeight.value(),
    bBotCornZ: bumperWidth.value(),

  }
  const p = {
    gTopCorn: createVector( 0, -q.gTopY, q.gTopCornZ ),
    gTopMid: createVector(-q.gTopMidX, -q.gTopY, q.gMidZ ),
    gWaist: createVector( -q.gWaistX, -q.gWaistY, q.gWaistZ ),
    gBotCorn: createVector( -q.gBotCornX, -q.gBotCornY, q.gBotCornZ),
    gBotMid: createVector(-q.gBotMidX, -q.gBotMidY, q.gMidZ),
    wTopCorn: createVector( q.wTopCornX, -q.gTopY, q.wTopCornZ),
    wBotCorn: createVector(-q.wBotCornX, -q.gWaistY, q.wBotCornZ),
    bBotCorn: createVector( -q.bBotCornX, -q.bBotCornY, q.bBotCornZ),


    glacisTopLeft: createVector(
      0,
      0-q.gTopY,
      0-q.gTopCornZ, 
    ),
    glacisTopMiddleLeft: createVector(
      0-q.gTopMidX,
      0-q.gTopY,
      0-q.gMidZ,
    ),
    glacisTopMiddleRight: createVector(
      0-q.gTopMidX,
      0-q.gTopY,
      0+q.gMidZ,
    ),
    glacisTopRight: createVector(
      0,
      0-q.gTopY,
      0+q.gTopCornZ,
    ),
    glacisWingRightShoulder: createVector(
      0+q.wTopCornX,
      0-q.gTopY,
      0+q.wBotCornZ,
    ),
    glacisWingRightBottom: createVector(
      0-q.wBotCornX,
      0-q.gWaistY,
      0+q.wBotCornZ,
    ),
    glacisWingRightPit: createVector(
      0-q.gWaistX,
      0-q.gWaistY,
      0+q.gWaistZ,
    ),
    glacisWingRightPitFlank: createVector(
      0,
      0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      0+q.gWaistZ,
    ),
    glacisWingRightBottomFlank: createVector(
      0+(wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
      0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      0+(glacisTopWidth.value()  + waistWidth.value() + (((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value() + wingBottomWidth.value())*Math.ceil(wingGlacisPercent.value()) ),
    ),
    glacisWingLeftShoulder: createVector(
      0+q.wTopCornX,
      0-q.gTopY,
      0-(glacisTopWidth.value() - (waistWidth.value()*Math.ceil(wingGlacisPercent.value()-1)) + wingTopWidth.value()*Math.ceil(wingGlacisPercent.value())),
    ),
    glacisWingLeftBottom: createVector(
      0-(bumperTopDepth.value() * wingGlacisPercent.value()) + (wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
      0-q.gWaistY,
      0-(glacisTopWidth.value()  + (waistWidth.value() + ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value() + wingBottomWidth.value() )*Math.ceil(wingGlacisPercent.value())),
    ),
    glacisWingLeftPit: createVector(
      0-q.gWaistX,
      0-q.gWaistY,
      0-(glacisTopWidth.value()  + waistWidth.value()+ ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value()),
    ),
    glacisWingLeftPitFlank: createVector(
      0,
      0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      0-(glacisTopWidth.value()  + waistWidth.value()+ ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value()),
    ),
    glacisWingLeftBottomFlank: createVector(
      0+(wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
      0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      0-q.gWaistZ,
    ),
    glacisBottomLeft: createVector(
      0-q.gBotCornX,
      0-q.gBotCornY, 
      0-q.gBotCornZ, 
    ),
    glacisBottomRight: createVector(
      0-q.gBotCornX,
      0-q.gBotCornY, 
      0+q.gBotCornZ, 
    ),
    glacisBottomMiddleLeft: createVector(
      0-bumperTopDepth.value(),
      0-q.gBotMidY,
      0-(midGlacisWidth.value()),
    ),
    glacisBottomMiddleRight: createVector(
      0-bumperTopDepth.value(),
      0-q.gBotMidY,
      0+(midGlacisWidth.value()),
    ),
    
    bumperBottomRight: createVector(
      0-q.bBotCornX,
      0-q.bBotCornY, 
      0+q.bBotCornZ,
    ),
    bumperBottomLeft: createVector(
      0-q.bBotCornX, 
      0-q.bBotCornY,
      0-q.bBotCornZ
    ),
    bumperBottomRightFlank: createVector(
      0-((bumperTopDepth.value() * wingGlacisPercent.value())+(((bumperTopDepth.value()*wingGlacisPercent.value())+bumperBottomDepth.value())*pointHelpers.bumperOverZero)),
      0-(bottomPlateHeight.value()),
      0+(bumperWidth.value()+waistWidth.value()),
    ),
    bumperBottomLeftFlank: createVector(
      0-((bumperTopDepth.value() * wingGlacisPercent.value())+(((bumperTopDepth.value()*wingGlacisPercent.value())+bumperBottomDepth.value())*pointHelpers.bumperOverZero)),
      0-(bottomPlateHeight.value()),
      0-(bumperWidth.value()+waistWidth.value()),
    ),
    bottomPlateLeft: createVector(
      0-(bottomPlateDepth.value()),
      0,
      0-bottomPlateWidth.value()
    ),
    bottomPlateRight: createVector(
      0-(bottomPlateDepth.value()),
      0,
      0+bottomPlateWidth.value(),
    ),
    flankBottomPlateRight: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0,
      0+bottomPlateWidth.value(),
    ),
    flankBumperBottomRightFlank: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0-(bottomPlateHeight.value()),
      0+(bumperWidth.value()+waistWidth.value()),
    ),
    flankGlacisWingRightPitFlank: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      0+q.gWaistZ,
    ),
    flankGlacisWingRightBottomFlank: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      0+(glacisTopWidth.value()  + waistWidth.value()) + ((bumperWidth.value() - glacisTopWidth.value())  * wingGlacisPercent.value() + wingBottomWidth.value() )*Math.ceil(wingGlacisPercent.value()),
    ),
    flankGlacisWingLeftBottomFlank: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      0-((glacisTopWidth.value()  + waistWidth.value()) + ((bumperWidth.value() - glacisTopWidth.value()) * wingGlacisPercent.value() + wingBottomWidth.value() )*Math.ceil(wingGlacisPercent.value())),
    ),
    flankGlacisWingRightShoulder: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0-q.gTopY,
      0+(glacisTopWidth.value()) -(waistWidth.value()*(Math.ceil(wingGlacisPercent.value()-1))) + wingTopWidth.value()*Math.ceil(wingGlacisPercent.value()),
    ),
    
    flankBottomPlateLeft: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0,
      0-(bottomPlateWidth.value()),
    ),
    flankBumperBottomLeftFlank: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0-(bottomPlateHeight.value()),
      0-(bumperWidth.value()+waistWidth.value()),
    ),
    flankGlacisWingLeftPitFlank: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
      0-(glacisTopWidth.value() + waistWidth.value()) - (bumperWidth.value() - glacisTopWidth.value()) * wingGlacisPercent.value(),
    ),

    flankGlacisWingLeftShoulder: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0-q.gTopY,
      0-(glacisTopWidth.value() -(waistWidth.value()*(Math.ceil(wingGlacisPercent.value()-1)))  + wingTopWidth.value()*Math.ceil(wingGlacisPercent.value()))
    ),
    flankGlacisTopLeft: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      0-((stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value())),
    ),
    flankGlacisTopRight: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value()) + stepBottomHeight.value()),
      0+((stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value())),
    ),

    stepTopLeft: createVector(
      0+((stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value()+stepTopDepth.value())*pointHelpers.stepHasHeight)+(wingOuterEdgeDepth.value()*pointHelpers.stepNotHasHeight),
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      0-(stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()),
    ),
    stepTopRight: createVector(
      0+((stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value()+stepTopDepth.value())*pointHelpers.stepHasHeight)+(wingOuterEdgeDepth.value()*pointHelpers.stepNotHasHeight),
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      0+(stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()),
    ),
    stepTopRightFlank: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      0+(stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()),
    ),
    stepTopLeftFlank: createVector(
      0+(overallDepth.value()+stepDepth.value()),
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      0-(stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()),
    ),

    stepBottomLeft: createVector(
      0+((stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value())*pointHelpers.stepHasHeight)+(wingOuterEdgeDepth.value()*pointHelpers.stepNotHasHeight),
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      0-(stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()),
    ),
    stepBottomRight: createVector(
      0+((stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value())*pointHelpers.stepHasHeight)+(wingOuterEdgeDepth.value()*pointHelpers.stepNotHasHeight),
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      0+(stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()),
    ),
   
    
    stepOuterWingTopLeft: createVector(
      0+(stepDepth.value()+stepInnerEdgeDepth.value()+stepTopDepth.value())*pointHelpers.stepHasHeight,
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      0-(stepBetweenPanelWidth.value()+stepCentralPanelWidth.value()),
    ),
    stepOuterWingBottomLeft: createVector(
      0+(stepDepth.value()+stepInnerEdgeDepth.value())*pointHelpers.stepHasHeight,
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      0-(stepBetweenPanelWidth.value()+stepCentralPanelWidth.value()),
    ),


    stepOuterWingTopRight: createVector(
      0+(stepDepth.value()+stepInnerEdgeDepth.value()+stepTopDepth.value())*pointHelpers.stepHasHeight,
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      0+(stepBetweenPanelWidth.value()+stepCentralPanelWidth.value()),
    ),
    stepOuterWingBottomRight: createVector(
      0+(stepDepth.value()+stepInnerEdgeDepth.value())*pointHelpers.stepHasHeight,
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      0+(stepBetweenPanelWidth.value()+stepCentralPanelWidth.value()),
    ),
    
    stepInnerWingTopLeft: createVector(
      0+(stepDepth.value()+stepTopDepth.value())*pointHelpers.stepHasHeight,
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      0-(stepCentralPanelWidth.value()),
    ),
    stepInnerWingBottomLeft: createVector(
      0+(stepDepth.value())*pointHelpers.stepHasHeight,
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      0-(stepCentralPanelWidth.value()),
    ),

    stepInnerWingTopRight: createVector(
      0+(stepDepth.value()+stepTopDepth.value())*pointHelpers.stepHasHeight,
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
      0+(stepCentralPanelWidth.value()),
    ),
    stepInnerWingBottomRight: createVector(
      0+(stepDepth.value())*pointHelpers.stepHasHeight,
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      0+(stepCentralPanelWidth.value()),
    ),
    stepFlankHelperRight: createVector(
      0+(stepDepth.value()+pointHelpers.stepEdgeCalc()),
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      0+(glacisTopWidth.value() + wingTopWidth.value()),
    ),
    stepFlankHelperLeft: createVector(
      0+(stepDepth.value()+pointHelpers.stepEdgeCalc()),
      0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
      0-(glacisTopWidth.value() + wingTopWidth.value()),
    ),
  };
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
  Object.keys(drawFront).forEach(shape => drawFront[shape](p));
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