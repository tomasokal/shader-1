const vertexShader = `

  attribute vec3 tomColors;

  varying vec2 vUvs;
  varying vec3 vColor;

  void main() {
    vec4 localPosition = vec4(position, 1.0);
    
    gl_Position = projectionMatrix * modelViewMatrix * localPosition;
    vUvs = uv;
    vColor = tomColors;
  }

  // void main() {
  //   vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  //   modelPosition.y += sin(modelPosition.x * 4.0) * 0.2;

  //   vec4 viewPosition = viewMatrix * modelPosition;
  //   vec4 projectedPosition = projectionMatrix * viewPosition;

  //   gl_Position = projectedPosition;
  // }

`

export default vertexShader