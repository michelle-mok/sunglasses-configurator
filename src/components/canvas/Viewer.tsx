import { Canvas } from '@react-three/fiber';

const BOX_DIMENSIONS = [0.1505, 0.0576, 0.1615] as const;
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
        >
            <mesh>
                <boxGeometry args={BOX_DIMENSIONS} />
                <meshNormalMaterial />
            </mesh>
        </Canvas>
    );
}
