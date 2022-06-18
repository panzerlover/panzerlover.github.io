    //top glacis
    //left top left
    // beginShape()
    //   vertex(points.glacisTopMiddleLeft[0], points.glacisTopMiddleLeft[1], points.glacisTopMiddleLeft[2]);
    //   vertex(points.glacisTopLeft[0], points.glacisTopLeft[1], points.glacisTopLeft[2]);
    //   vertex(points.glacisWingLeftPit[0], points.glacisWingLeftPit[1], points.glacisWingLeftPit[2]);
    // endShape(CLOSE);
    // //left middle
    // beginShape();
    //   vertex(points.glacisTopMiddleLeft[0], points.glacisTopMiddleLeft[1], points.glacisTopMiddleLeft[2]);
    //   vertex(points.glacisBottomMiddleLeft[0], points.glacisBottomMiddleLeft[1], points.glacisBottomMiddleLeft[2]);
    //   vertex(points.glacisWingLeftPit[0], points.glacisWingLeftPit[1], points.glacisWingLeftPit[2]);
    // endShape(CLOSE);
    // //left bottom left
    // beginShape();
    //   vertex(points.glacisBottomMiddleLeft[0], points.glacisBottomMiddleLeft[1], points.glacisBottomMiddleLeft[2]);
    //   vertex(points.glacisWingLeftPit[0], points.glacisWingLeftPit[1], points.glacisWingLeftPit[2]);
    //   vertex(points.glacisBottomLeft[0], points.glacisBottomLeft[1], points.glacisBottomLeft[2]);
    // endShape();

        //right top
  //   beginShape()
  //     vertex(points.glacisTopMiddleRight[0], points.glacisTopMiddleRight[1], points.glacisTopMiddleRight[2]);
  //     vertex(points.glacisTopRight[0], points.glacisTopRight[1], points.glacisTopRight[2]);
  //     vertex(points.glacisWingRightPit[0], points.glacisWingRightPit[1], points.glacisWingRightPit[2]);
  //     vertex(points.glacisTopMiddleRight[0], points.glacisTopMiddleRight[1],points.glacisTopMiddleRight[2]);
  //   endShape();
  //   //right middle
  //   beginShape();
  //     vertex(points.glacisTopMiddleRight[0], points.glacisTopMiddleRight[1], points.glacisTopMiddleRight[2]);
  //     vertex(points.glacisBottomMiddleRight[0], points.glacisBottomMiddleRight[1], points.glacisBottomMiddleRight[2]);
  //     vertex(points.glacisWingRightPit[0], points.glacisWingRightPit[1], points.glacisWingRightPit[2]);
  //     vertex(points.glacisTopMiddleRight[0], points.glacisTopMiddleRight[1], points.glacisTopMiddleRight[2])
  //   endShape();
  // //right bottom right
  //   beginShape();
  //     vertex(points.glacisBottomMiddleRight[0], points.glacisBottomMiddleRight[1], points.glacisBottomMiddleRight[2]);
  //     vertex(points.glacisWingRightPit[0], points.glacisWingRightPit[1], points.glacisWingRightPit[2]);
  //     vertex(points.glacisBottomRight[0], points.glacisBottomRight[1], points.glacisBottomRight[2]);

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

//********


// glacisTopLeft: createVector(
//     0,
//     0-q.gTopY,
//     0-q.gTopCornZ, 
//   ),
//   glacisTopMiddleLeft: createVector(
//     0-q.gTopMidX,
//     0-q.gTopY,
//     0-q.gMidZ,
//   ),
//   glacisTopMiddleRight: createVector(
//     0-q.gTopMidX,
//     0-q.gTopY,
//     0+q.gMidZ,
//   ),
//   glacisTopRight: createVector(
//     0,
//     0-q.gTopY,
//     0+q.gTopCornZ,
//   ),
//   glacisWingRightShoulder: createVector(
//     0+q.wTopCornX,
//     0-q.gTopY,
//     0+q.wBotCornZ,
//   ),
//   glacisWingRightBottom: createVector(
//     0-q.wBotCornX,
//     0-q.gWaistY,
//     0+q.wBotCornZ,
//   ),
//   glacisWingRightPit: createVector(
//     0-q.gWaistX,
//     0-q.gWaistY,
//     0+q.gWaistZ,
//   ),
//   glacisWingRightPitFlank: createVector(
//     0,
//     0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
//     0+q.gWaistZ,
//   ),
//   glacisWingRightBottomFlank: createVector(
//     0+(wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
//     0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
//     0+(glacisTopWidth.value()  + waistWidth.value() + (((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value() + wingBottomWidth.value())*Math.ceil(wingGlacisPercent.value()) ),
//   ),
//   glacisWingLeftShoulder: createVector(
//     0+q.wTopCornX,
//     0-q.gTopY,
//     0-(glacisTopWidth.value() - (waistWidth.value()*Math.ceil(wingGlacisPercent.value()-1)) + wingTopWidth.value()*Math.ceil(wingGlacisPercent.value())),
//   ),
//   glacisWingLeftBottom: createVector(
//     0-(bumperTopDepth.value() * wingGlacisPercent.value()) + (wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
//     0-q.gWaistY,
//     0-(glacisTopWidth.value()  + (waistWidth.value() + ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value() + wingBottomWidth.value() )*Math.ceil(wingGlacisPercent.value())),
//   ),
//   glacisWingLeftPit: createVector(
//     0-q.gWaistX,
//     0-q.gWaistY,
//     0-(glacisTopWidth.value()  + waistWidth.value()+ ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value()),
//   ),
//   glacisWingLeftPitFlank: createVector(
//     0,
//     0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
//     0-(glacisTopWidth.value()  + waistWidth.value()+ ((bumperWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value()),
//   ),
//   glacisWingLeftBottomFlank: createVector(
//     0+(wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
//     0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
//     0-q.gWaistZ,
//   ),
//   glacisBottomLeft: createVector(
//     0-q.gBotCornX,
//     0-q.gBotCornY, 
//     0-q.gBotCornZ, 
//   ),
//   glacisBottomRight: createVector(
//     0-q.gBotCornX,
//     0-q.gBotCornY, 
//     0+q.gBotCornZ, 
//   ),
//   glacisBottomMiddleLeft: createVector(
//     0-bumperTopDepth.value(),
//     0-q.gBotMidY,
//     0-(midGlacisWidth.value()),
//   ),
//   glacisBottomMiddleRight: createVector(
//     0-bumperTopDepth.value(),
//     0-q.gBotMidY,
//     0+(midGlacisWidth.value()),
//   ),
  
//   bumperBottomRight: createVector(
//     0-q.bBotCornX,
//     0-q.bBotCornY, 
//     0+q.bBotCornZ,
//   ),
//   bumperBottomLeft: createVector(
//     0-q.bBotCornX, 
//     0-q.bBotCornY,
//     0-q.bBotCornZ
//   ),
//   bumperBottomRightFlank: createVector(
//     0-((bumperTopDepth.value() * wingGlacisPercent.value())+(((bumperTopDepth.value()*wingGlacisPercent.value())+bumperBottomDepth.value())*pointHelpers.bumperOverZero)),
//     0-(bottomPlateHeight.value()),
//     0+(bumperWidth.value()+waistWidth.value()),
//   ),
//   bumperBottomLeftFlank: createVector(
//     0-((bumperTopDepth.value() * wingGlacisPercent.value())+(((bumperTopDepth.value()*wingGlacisPercent.value())+bumperBottomDepth.value())*pointHelpers.bumperOverZero)),
//     0-(bottomPlateHeight.value()),
//     0-(bumperWidth.value()+waistWidth.value()),
//   ),
//   bottomPlateLeft: createVector(
//     0-q.bpBotCornX,
//     0,
//     0-q.bpBotCornZ,
//   ),
//   bottomPlateRight: createVector(
//     0-q.bpBotCornX,
//     0,
//     0+q.bpBotCornZ,
//   ),
//   flankBottomPlateRight: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0,
//     0+bottomPlateWidth.value(),
//   ),
//   flankBumperBottomRightFlank: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0-(bottomPlateHeight.value()),
//     0+(bumperWidth.value()+waistWidth.value()),
//   ),
//   flankGlacisWingRightPitFlank: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
//     0+q.gWaistZ,
//   ),
//   flankGlacisWingRightBottomFlank: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
//     0+(glacisTopWidth.value()  + waistWidth.value()) + ((bumperWidth.value() - glacisTopWidth.value())  * wingGlacisPercent.value() + wingBottomWidth.value() )*Math.ceil(wingGlacisPercent.value()),
//   ),
//   flankGlacisWingLeftBottomFlank: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
//     0-((glacisTopWidth.value()  + waistWidth.value()) + ((bumperWidth.value() - glacisTopWidth.value()) * wingGlacisPercent.value() + wingBottomWidth.value() )*Math.ceil(wingGlacisPercent.value())),
//   ),
//   flankGlacisWingRightShoulder: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0-q.gTopY,
//     0+(glacisTopWidth.value()) -(waistWidth.value()*(Math.ceil(wingGlacisPercent.value()-1))) + wingTopWidth.value()*Math.ceil(wingGlacisPercent.value()),
//   ),
  
//   flankBottomPlateLeft: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0,
//     0-(bottomPlateWidth.value()),
//   ),
//   flankBumperBottomLeftFlank: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0-(bottomPlateHeight.value()),
//     0-(bumperWidth.value()+waistWidth.value()),
//   ),
//   flankGlacisWingLeftPitFlank: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0-((bottomPlateHeight.value()+bumperHeight.value())+glacisHeight.value()-(glacisHeight.value() * wingGlacisPercent.value())),
//     0-(glacisTopWidth.value() + waistWidth.value()) - (bumperWidth.value() - glacisTopWidth.value()) * wingGlacisPercent.value(),
//   ),

//   flankGlacisWingLeftShoulder: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0-q.gTopY,
//     0-(glacisTopWidth.value() -(waistWidth.value()*(Math.ceil(wingGlacisPercent.value()-1)))  + wingTopWidth.value()*Math.ceil(wingGlacisPercent.value()))
//   ),
//   flankGlacisTopLeft: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
//     0-((stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value())),
//   ),
//   flankGlacisTopRight: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value()) + stepBottomHeight.value()),
//     0+((stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value())),
//   ),

//   stepTopLeft: createVector(
//     0+((stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value()+stepTopDepth.value())*pointHelpers.stepHasHeight)+(wingOuterEdgeDepth.value()*pointHelpers.stepNotHasHeight),
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
//     0-(stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()),
//   ),
//   stepTopRight: createVector(
//     0+((stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value()+stepTopDepth.value())*pointHelpers.stepHasHeight)+(wingOuterEdgeDepth.value()*pointHelpers.stepNotHasHeight),
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
//     0+(stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()),
//   ),
//   stepTopRightFlank: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
//     0+(stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()),
//   ),
//   stepTopLeftFlank: createVector(
//     0+(overallDepth.value()+stepDepth.value()),
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
//     0-(stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()),
//   ),

//   stepBottomLeft: createVector(
//     0+((stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value())*pointHelpers.stepHasHeight)+(wingOuterEdgeDepth.value()*pointHelpers.stepNotHasHeight),
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
//     0-(stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()),
//   ),
//   stepBottomRight: createVector(
//     0+((stepDepth.value()+stepOuterEdgeDepth.value()+stepInnerEdgeDepth.value())*pointHelpers.stepHasHeight)+(wingOuterEdgeDepth.value()*pointHelpers.stepNotHasHeight),
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
//     0+(stepOuterPanelWidth.value()+stepCentralPanelWidth.value()+stepBetweenPanelWidth.value()),
//   ),
 
  
//   stepOuterWingTopLeft: createVector(
//     0+(stepDepth.value()+stepInnerEdgeDepth.value()+stepTopDepth.value())*pointHelpers.stepHasHeight,
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
//     0-(stepBetweenPanelWidth.value()+stepCentralPanelWidth.value()),
//   ),
//   stepOuterWingBottomLeft: createVector(
//     0+(stepDepth.value()+stepInnerEdgeDepth.value())*pointHelpers.stepHasHeight,
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
//     0-(stepBetweenPanelWidth.value()+stepCentralPanelWidth.value()),
//   ),


//   stepOuterWingTopRight: createVector(
//     0+(stepDepth.value()+stepInnerEdgeDepth.value()+stepTopDepth.value())*pointHelpers.stepHasHeight,
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
//     0+(stepBetweenPanelWidth.value()+stepCentralPanelWidth.value()),
//   ),
//   stepOuterWingBottomRight: createVector(
//     0+(stepDepth.value()+stepInnerEdgeDepth.value())*pointHelpers.stepHasHeight,
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
//     0+(stepBetweenPanelWidth.value()+stepCentralPanelWidth.value()),
//   ),
  
//   stepInnerWingTopLeft: createVector(
//     0+(stepDepth.value()+stepTopDepth.value())*pointHelpers.stepHasHeight,
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
//     0-(stepCentralPanelWidth.value()),
//   ),
//   stepInnerWingBottomLeft: createVector(
//     0+(stepDepth.value())*pointHelpers.stepHasHeight,
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
//     0-(stepCentralPanelWidth.value()),
//   ),

//   stepInnerWingTopRight: createVector(
//     0+(stepDepth.value()+stepTopDepth.value())*pointHelpers.stepHasHeight,
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepHeight.value()+stepBottomHeight.value()),
//     0+(stepCentralPanelWidth.value()),
//   ),
//   stepInnerWingBottomRight: createVector(
//     0+(stepDepth.value())*pointHelpers.stepHasHeight,
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
//     0+(stepCentralPanelWidth.value()),
//   ),
//   stepFlankHelperRight: createVector(
//     0+(stepDepth.value()+pointHelpers.stepEdgeCalc()),
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
//     0+(glacisTopWidth.value() + wingTopWidth.value()),
//   ),
//   stepFlankHelperLeft: createVector(
//     0+(stepDepth.value()+pointHelpers.stepEdgeCalc()),
//     0-((bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value())+stepBottomHeight.value()),
//     0-(glacisTopWidth.value() + wingTopWidth.value()),
//   ),