const frontContainer = {
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

export { frontContainer };