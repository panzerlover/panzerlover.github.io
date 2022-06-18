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