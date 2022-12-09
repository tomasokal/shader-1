import { useMemo, useRef } from 'react'
import * as THREE from 'three'

import fragmentShader from './shaders/fragmentShader'
import vertexShader from './shaders/vertexShader'

export default function PlaneWithShader()
{

    const mesh = useRef()
    const uniforms = useMemo(
        () => ({
            color1: { value: new THREE.Vector4(1, 1, 0, 1) },
            color2: { value: new THREE.Vector4(0, 1, 1, 1) },
        })
    )

    const colors = [
        new THREE.Color(0x7F58AF),
        new THREE.Color(0x64C5EB),
        new THREE.Color(0xE84D8A),
        new THREE.Color(0xFEB326)
    ]
    const colorFloats = colors.map(c => c.toArray()).flat()
    const geometry = new THREE.PlaneGeometry(1, 1)
    geometry.setAttribute(
        'tomColors',
        new THREE.Float32BufferAttribute(colorFloats, 3)
    )

    return <>   

        <mesh ref={mesh} position={ [0, 0, 0] } rotation={ [-Math.PI / 2, 0, 0] } scale={ 1.5 }>
            <primitive attach="geometry" object={geometry} />
            <shaderMaterial
                fragmentShader={ fragmentShader }
                vertexShader={ vertexShader }
                uniforms={ uniforms }
                // wireframe
            />
        </mesh>

    </>

}