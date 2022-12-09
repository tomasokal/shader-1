const fragmentShader = `

    varying vec2 vUvs;
    varying vec3 vColor;

    uniform vec4 color1;
    uniform vec4 color2;
  
    void main() {

        // Homework for Section 1.1
        // gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
        // gl_FragColor = vec4(0.5, 0.5, 0.5, 1.0);
        // gl_FragColor = vec4(0.75, 0.75, 1.0, 1.0);

        // Homework for Section 1.2
        // gl_FragColor = vec4(abs(vUvs.x - 1.0), abs(vUvs.x - 1.0), abs(vUvs.x - 1.0), 1.0);
        // gl_FragColor = vec4(abs(vUvs.x - 1.0), 0.0, abs(vUvs.y - 1.0), 1.0);

        // Section 1.3
        // gl_FragColor = mix(
        //     color1,
        //     color2,
        //     vUvs.x
        // );

        // Section 1.4
        gl_FragColor = vec4(vColor, 1.0);
        
    }
  
`

export default fragmentShader