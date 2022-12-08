import { OrbitControls } from '@react-three/drei'

import PlaneWithShader from './PlaneWithShader'

export default function Experience()
{

    return <>   

            <PlaneWithShader />
            <axesHelper />
            <OrbitControls />

    </>

}