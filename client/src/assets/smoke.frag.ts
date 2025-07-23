// smoke.frag.ts
const frag = `
  precision highp float;
  varying vec2 vUv;
  uniform float u_time;
  uniform vec2 u_resolution;
  void main() {
    vec2 st = vUv;
    float color = 0.5 + 0.5 * sin(u_time + st.x * 10.0 + st.y * 10.0);
    gl_FragColor = vec4(vec3(color), 1.0);
  }
`;
export default frag;
