precision highp float;

void sideLengths(
  float hypotenuse, 
  float angleInDegrees, 
  out float opposite, 
  out float adjacent) {
  float rads = radians(angleInDegrees);
  opposite = sin(rads) * hypotenuse;
  adjacent = cos(rads) * hypotenuse;
}

//Do not change this line
#pragma glslify: export(sideLengths)
