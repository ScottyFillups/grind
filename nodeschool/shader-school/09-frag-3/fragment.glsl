precision highp float;

uniform sampler2D texture;
uniform vec2 screenSize;

void main() {
  vec2 coord = gl_FragCoord.xy / screenSize;
  
  vec4 temp = texture2D(texture, coord);
  
  gl_FragColor = temp.bgra;
}
