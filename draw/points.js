function points () {

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
    },
};
    
const q = {
    gTopY: bottomPlateHeight.value() + bumperHeight.value() + glacisHeight.value(),
    gTopCornZ: midGlacisWidth.value()+glacisTopWidth.value()-(Math.ceil(wingGlacisPercent.value()-1)*waistWidth.value()),
    
    gTopMidX: (bumperPikeHeight.value())*(bumperTopDepth.value()/glacisHeight.value()),
    gMidZ: midGlacisWidth.value(),
    
    gWaistX: bumperTopDepth.value() * wingGlacisPercent.value(),
    gWaistY: bottomPlateHeight.value()+bumperHeight.value()+glacisHeight.value() - (glacisHeight.value() * wingGlacisPercent.value()),
    gWaistZ: midGlacisWidth.value() + glacisTopWidth.value() + waistWidth.value() + ((glacisBottomWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value(),

    gBotCornX: (bumperTopDepth.value()+((bumperBottomDepth.value()*bumperPikeHeight.value())/(bumperPikeHeight.value()+bumperHeight.value()))*pointHelpers.pikeAndSlope),
    gBotCornY: bottomPlateHeight.value()+bumperHeight.value(),
    gBotCornZ: midGlacisWidth.value() + glacisBottomWidth.value(),

    gBotMidX: bumperTopDepth.value(),
    gBotMidY: bottomPlateHeight.value()+bumperHeight.value()+bumperPikeHeight.value(),

    wTopCornX: (wingOuterEdgeDepth.value()*Math.ceil(wingGlacisPercent.value())),
    wTopCornZ: (midGlacisWidth.value() + glacisTopWidth.value() -(waistWidth.value()*Math.ceil(wingGlacisPercent.value()-1)) + wingTopWidth.value()*Math.ceil(wingGlacisPercent.value())),

    wBotCornX: (bumperTopDepth.value() * wingGlacisPercent.value()) - (wingOuterEdgeDepth.value() * Math.ceil(wingGlacisPercent.value())),
    wBotCornZ: (midGlacisWidth.value() + glacisTopWidth.value() +waistWidth.value()) + (((glacisBottomWidth.value() - glacisTopWidth.value()) ) * wingGlacisPercent.value() + wingBottomWidth.value())*Math.ceil(wingGlacisPercent.value()),

    bBotCornX: (bumperTopDepth.value()+(bumperBottomDepth.value()*pointHelpers.bumperHasHeight)),
    bBotCornY: bottomPlateHeight.value(),
    bBotCornZ: bumperWidth.value(),

    bpBotCornX: bottomPlateDepth.value(),
    bpBotCornZ: bottomPlateWidth.value(),

};
    
    return {
        fgTopCorn: createVector( 0, -q.gTopY, q.gTopCornZ ),
        fgTopMid: createVector(-q.gTopMidX, -q.gTopY, q.gMidZ ),
        fgWaist: createVector( -q.gWaistX, -q.gWaistY, q.gWaistZ ),
        fgBotCorn: createVector( -q.gBotCornX, -q.gBotCornY, q.gBotCornZ),
        fgBotMid: createVector(-q.gBotMidX, -q.gBotMidY, q.gMidZ),
        fwTopCorn: createVector( q.wTopCornX, -q.gTopY, q.wTopCornZ),
        fwBotCorn: createVector(-q.wBotCornX, -q.gWaistY, q.wBotCornZ),
        fbBotCorn: createVector( -q.bBotCornX, -q.bBotCornY, q.bBotCornZ),
        fbpBotCorn: createVector(-q.bpBotCornX, 0, q.bpBotCornZ),
        sgBotCorn: createVector(-q.gWaistX, -q.gBotCornY, q.gWaistZ),
        sgTopCorn: createVector(0, -q.gWaistY, q.gWaistZ),
        sfgBotCorn: createVector(0, -q.gBotCornY, q.gWaistZ),                                                                                                                                                          
    }
};