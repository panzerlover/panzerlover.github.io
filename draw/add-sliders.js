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
      "Bottom Glacis", 
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
    glacisBottomWidth = createSlider(0, 250, 50, 5);
    glacisBottomWidth.parent(Widths);
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