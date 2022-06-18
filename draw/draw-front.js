function drawFront (p) {
      //mirrore
    let mult = [1, -1];
    mult.forEach((num)=> {
        //glacis front panels
        beginShape(TRIANGLE_STRIP);
            vertex(p.fgTopCorn.x, p.fgTopCorn.y, num*p.fgTopCorn.z);
            vertex(p.fgTopMid.x, p.fgTopMid.y, num*p.fgTopMid.z);
            vertex(p.fgWaist.x, p.fgWaist.y, num*p.fgWaist.z);
            vertex(p.fgBotMid.x, p.fgBotMid.y, num*p.fgBotMid.z);
            vertex(p.fgBotCorn.x, p.fgBotCorn.y, num*p.fgBotCorn.z);
        endShape();
        //glacis wings
        beginShape(TRIANGLE_STRIP);
            vertex(p.fgTopCorn.x, p.fgTopCorn.y, num*p.fgTopCorn.z);
            vertex(p.fwTopCorn.x, p.fwTopCorn.y, num*p.fwTopCorn.z);
            vertex(p.fgWaist.x, p.fgWaist.y, num*p.fgWaist.z)
            vertex(p.fwBotCorn.x, p.fwBotCorn.y, num*p.fwBotCorn.z);
        endShape()
        //side - glacis in front of wing
        beginShape();
            vertex(p.fgWaist.x, p.fgWaist.y, num*p.fgWaist.z);
            vertex(p.fgBotCorn.x, p.fgBotCorn.y, num*p.fgBotCorn.z);
            vertex(p.sgBotCorn.x, p.sgBotCorn.y, num*p.sgBotCorn.z);
        endShape();
        //side - glacis below wing
        beginShape();
            vertex(p.fgWaist.x, p.fgWaist.y, num*p.fgWaist.z);
            vertex(p.sgTopCorn.x, p.sgTopCorn.y, num*p.sgTopCorn.z);
            vertex(p.sfgBotCorn.x, p.sfgBotCorn.y, num*p.sfgBotCorn.z);
            vertex(p.sgBotCorn.x, p.sgBotCorn.y, num*p.sgBotCorn.z);                                          
        endShape();


    });
    // glacis middle panel
    beginShape()
    vertex(p.fgTopMid.x, p.fgTopMid.y, -p.fgTopMid.z)
    vertex(p.fgTopMid.x, p.fgTopMid.y, p.fgTopMid.z)
    vertex(p.fgBotMid.x, p.fgBotMid.y, p.fgBotMid.z)
    vertex(p.fgBotMid.x, p.fgBotMid.y, -p.fgBotMid.z)
    endShape(CLOSE)
    // bumper top
    beginShape();
    vertex(p.fgBotCorn.x, p.fgBotCorn.y, p.fgBotCorn.z);
    vertex(p.fgBotMid.x, p.fgBotMid.y, p.fgBotMid.z);
    vertex(p.fgBotMid.x, p.fgBotMid.y, -p.fgBotMid.z);
    vertex(p.fgBotCorn.x, p.fgBotCorn.y, -p.fgBotCorn.z)
    endShape();
    beginShape();
    vertex(p.fgBotCorn.x, p.fgBotCorn.y, -p.fgBotCorn.z);
    vertex(p.fbBotCorn.x, p.fbBotCorn.y, -p.fbBotCorn.z);
    vertex(p.fbBotCorn.x, p.fbBotCorn.y, p.fbBotCorn.z);
    vertex(p.fgBotCorn.x, p.fgBotCorn.y, p.fgBotCorn.z);
    endShape();
    // bottom plate
    beginShape()
    vertex(p.fbBotCorn.x, p.fbBotCorn.y, p.fbBotCorn.z)
    vertex(p.fbpBotCorn.x, p.fbpBotCorn.y, p.fbpBotCorn.z)
    vertex(p.fbpBotCorn.x, p.fbpBotCorn.y, -p.fbpBotCorn.z)
    vertex(p.fbBotCorn.x, p.fbBotCorn.y, -p.fbBotCorn.z)
    endShape()

};