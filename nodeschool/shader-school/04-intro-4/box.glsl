bool inBox(highp vec2 lo, highp vec2 hi, highp vec2 p) {
  bool gtLo = all(lessThan(lo, p));
  bool ltHi = all(greaterThan(hi, p));
  if (gtLo) {
    if (ltHi) {
      return true;
    }
  }
  return false;
}


//Do not change this line or the name of the above function
#pragma glslify: export(inBox)
