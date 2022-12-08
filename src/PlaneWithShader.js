import { useRef } from 'react'

import fragmentShader from './shaders/fragmentShader'
import vertexShader from './shaders/vertexShader'

export default function PlaneWithShader()
{

    const mesh = useRef()

    return <>   

        <mesh ref={mesh} position={ [0, 0, 0] } rotation={ [-Math.PI / 2, 0, 0] } scale={ 1.5 }>
            <planeGeometry args={ [1, 1, 32, 32] } />
            <shaderMaterial
                fragmentShader={ fragmentShader }
                vertexShader={ vertexShader }
                wireframe
            />
        </mesh>

    </>

}