precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_offset;
uniform vec2 u_mouse;

varying vec2 vUv;
varying vec3 vPosition;

// Noise functions
float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1, 1));

    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

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
    float time = u_time * 0.1;
    
    // Mouse-driven glow effect
    float glow = 0.0;
    float halo = 0.0;
    vec3 palette[6];
    palette[0] = vec3(0.6, 0.47, 1.0);   // #9978ff
    palette[1] = vec3(1.0, 0.59, 0.86);  // #ff96dd
    palette[2] = vec3(1.0, 0.63, 0.52);  // #ffa184
    palette[3] = vec3(1.0, 1.0, 0.333);  // #ffff55
    palette[4] = vec3(0.443, 0.972, 0.0); // #71f800
    palette[5] = vec3(0.0, 0.733, 1.0);  // #00bbff
    vec3 animatedGlowColor = palette[0];

    // Hover 
    if (u_mouse.x >= 0.0 && u_mouse.y >= 0.0 && u_mouse.x <= 1.0 && u_mouse.y <= 1.0) {
        float dist = distance(uv, u_mouse);
        float glowRadius = 0.16;
        float haloRadius = 0.32;
        glow = smoothstep(glowRadius, 0.0, dist);
        halo = smoothstep(haloRadius, glowRadius, dist) * 0.4;
        // Animate glow color by cycling through palette
        float t = mod(u_time * 0.7 + dist * 2.0, 6.0);
        int idxA = int(floor(t));
        int idxB = (idxA + 1) % 6;
        float blend = fract(t);
        animatedGlowColor = mix(palette[idxA], palette[idxB], blend);
        // Subtle distortion: warp uv under the mouse
        float distortion = 0.03 * glow * sin(20.0 * dist + u_time * 2.0);
        uv += (uv - u_mouse) * distortion;
    }
    
    // Add offset to UV coordinates
    uv += u_offset * 0.001;
    
    // Create multiple layers of noise with different scales and speeds
    float n1 = fbm(uv * 3.0 + time);
    float n2 = fbm(uv * 5.0 - time * 0.75);
    float n3 = fbm(uv * 7.0 + time * 0.5);
    float n4 = fbm(uv * 9.0 + time * 0.25);
    
    // Add depth-based noise
    float depthNoise = fbm(uv * 4.0 + time * 0.3);
    float depthFactor = smoothstep(0.3, 0.7, depthNoise);
    
    // Combine noise layers with depth influence
    float combinedNoise = (n1 + n2 + n3 + n4) / 4.0;
    combinedNoise = mix(combinedNoise, depthNoise, 0.3);
    
    // Create nebula colors with more variation
    vec3 color1 = vec3(0.05, 0.1, 0.3);  // Deep blue
    vec3 color2 = vec3(1.0, 0.9, 0.6);   // Light golden
    vec3 color3 = vec3(1.0, 1.0, 1.0);   // Pure white
    
    // Mix colors based on noise with more dynamic blending
    vec3 finalColor = mix(color1, color2, n1 * 0.9);
    finalColor = mix(finalColor, color3, n2 * 0.4);
    
    // Add some brightness variation
    float brightness = smoothstep(0.3, 0.7, combinedNoise);
    finalColor += vec3(0.2, 0.18, 0.1) * brightness;
    
    // Add some glow with color variation
    float baseGlow = smoothstep(0.4, 0.6, combinedNoise);
    vec3 glowColor = mix(vec3(0.2, 0.3, 0.5), vec3(1.0, 0.9, 0.6), n3 * 1.2);
    finalColor += glowColor * baseGlow * 0.5;
    
    // Add mouse-driven glow
    finalColor += animatedGlowColor * glow * 0.7;
    // Add soft outer halo
    finalColor += animatedGlowColor * halo * 0.25;
    
    // Adjust alpha for transparency
    float alpha = smoothstep(0.2, 0.8, combinedNoise) * 0.85;
    gl_FragColor = vec4(finalColor, alpha);
} 