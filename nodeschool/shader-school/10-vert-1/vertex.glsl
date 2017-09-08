precision highp float;

uniform float theta;
attribute vec2 position;

void main() {
  mat2 r = mat2(cos(theta), -sin(theta),
                sin(theta), cos(theta));
  gl_Position = vec4(position * r, 0, 1.0);
}
