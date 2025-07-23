precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
varying vec2 vUv;

// Improved noise function with better detail
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Fractal Brownian Motion for more realistic smoke
float fbm(vec2 st) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 0.0;
    
    for (int i = 0; i < 6; i++) {
        value += amplitude * noise(st);
        st *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

void main() {
    vec2 uv = vUv;
    
    // Slower time scale
    float time = u_time * 0.2;
    
    // Create multiple layers of FBM for more realistic smoke
    float n1 = fbm(uv * 2.0 + time * 0.1);
    float n2 = fbm(uv * 4.0 - time * 0.15);
    float n3 = fbm(uv * 8.0 + time * 0.05);
    
    // Combine noise layers with different weights
    float combinedNoise = (n1 * 0.5 + n2 * 0.3 + n3 * 0.2);
    
    // Create a radial gradient
    vec2 center = vec2(0.5, 0.5);
    float dist = length(uv - center);
    
    // Create the smoke effect with sharper edges
    float smoke = smoothstep(0.4, 0.6, combinedNoise);
    smoke *= smoothstep(0.0, 0.4, 1.0 - dist); // Sharper fade at edges
    
    // Base color with golden accents
    vec3 baseColor = mix(
        vec3(0.1, 0.15, 0.2),  // Dark blue
        vec3(0.3, 0.4, 0.5),   // Medium blue
        smoke
    );
    
    // Add golden highlights
    vec3 goldColor = vec3(0.8, 0.6, 0.2); // Golden color
    float goldMask = smoothstep(0.5, 0.7, combinedNoise);
    vec3 finalColor = mix(baseColor, goldColor, goldMask * 0.3);
    
    // Add subtle glow
    finalColor += vec3(0.1, 0.15, 0.2) * smoke * 0.3;
    
    // Add golden sparkles
    float sparkle = pow(noise(uv * 20.0 + time), 4.0);
    finalColor += goldColor * sparkle * 0.2;
    
    // Adjust opacity for more realistic smoke
    float alpha = smoke * 0.6;
    
    gl_FragColor = vec4(finalColor, alpha);
}
