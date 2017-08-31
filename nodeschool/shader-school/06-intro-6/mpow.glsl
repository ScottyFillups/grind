mat2 matrixPower(highp mat2 m, int n) {
  highp mat2 tmp = m;
  if (n == 0) {
    return mat2(1, 0,
                0, 1);
  }
  for (int i = 1; i <= 16; i++) {
    if (i == n) {
      break;
    }
    tmp *= m;
  }
  return tmp;
}

//Do not change this line or the name of the above function
#pragma glslify: export(matrixPower)
