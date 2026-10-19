import { Canvas } from '@react-three/fiber';
import { Sunglasses } from './Sunglasses';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { NeutralToneMapping } from 'three';
import { StudioEnvironment } from './StudioEnvironment';

const FOV_DEGREES = 30;
const CAMERA_START_POSITION = [0.3, 0.18, 0.48] as const;
const CAMERA_NEAR = 0.01;
const CAMERA_FAR = 10;
const MODEL_BOUNDING_SPHERE_RADIUS = 0.1064;
const MIN_ORBIT_DISTANCE =
    MODEL_BOUNDING_SPHERE_RADIUS / Math.sin(FOV_DEGREES * 0.5 * (Math.PI / 180));
const MAX_ORBIT_DISTANCE = 1.0;
const MIN_POLAR_ANGLE = 20 * (Math.PI / 180);
const MAX_POLAR_ANGLE = 100 * (Math.PI / 180);

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
            onWheelCapture={(event) => {
                if (!event.ctrlKey && !event.metaKey) {
                    event.stopPropagation();
                }
            }}
        >
            <Suspense fallback={null}>
                <StudioEnvironment />
                <Sunglasses />
            </Suspense>
            <OrbitControls
                enablePan={false}
                minDistance={MIN_ORBIT_DISTANCE}
                maxDistance={MAX_ORBIT_DISTANCE}
                minPolarAngle={MIN_POLAR_ANGLE}
                maxPolarAngle={MAX_POLAR_ANGLE}
            />
        </Canvas>
    );
}
