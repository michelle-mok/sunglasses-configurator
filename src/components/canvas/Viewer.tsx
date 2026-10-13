import { Canvas } from '@react-three/fiber';
import { Sunglasses } from './Sunglasses';
import STUDIO_HDR_URL from '../../assets/studio_small_03_1k.hdr?url';
import { Environment } from '@react-three/drei';
import { Suspense } from 'react';
import { NeutralToneMapping } from 'three';

const FOV_DEGREES = 30;
const CAMERA_START_POSITION = [0.3, 0.18, 0.48] as const;
const CAMERA_NEAR = 0.01;
const CAMERA_FAR = 10;

export function Viewer() {
    return (
        <Canvas
            camera={{
                fov: FOV_DEGREES,
                position: CAMERA_START_POSITION,
                near: CAMERA_NEAR,
                far: CAMERA_FAR,
            }}
            frameloop="demand"
            gl={{ toneMapping: NeutralToneMapping }}
        >
            <Suspense fallback={null}>
                <Environment files={STUDIO_HDR_URL} />
                <Sunglasses />
            </Suspense>
        </Canvas>
    );
}
