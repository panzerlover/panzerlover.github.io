const drawTreads = {
    frontSprocket: (p) => {
      let thickness = 30;
      translate(p.bumperBottomLeft.x, p.bumperBottomLeft.y, p.glacisWingLeftPit.z-(thickness/2));
      rotateX(90);
      cylinder(20, thickness);
    },
  };
  