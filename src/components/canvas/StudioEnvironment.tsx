import { Environment, Lightformer } from '@react-three/drei';

const KEY_LIGHT_POSITION = [0, 3, 0] as const;
const KEY_LIGHT_SCALE: [number, number] = [6, 6];
const KEY_LIGHT_INTENSITY = 4;
const FRONT_LIGHT_POSITION = [0, 0.5, 5] as const;
const FRONT_LIGHT_SCALE: [number, number] = [8, 2];
const FRONT_LIGHT_INTENSITY = 1;
const SURROUND_COLOR = '#5a5a5a';
const LEFT_LIGHT_POSITION = [-4, 1, 1] as const;
const LEFT_LIGHT_SCALE: [number, number] = [1.5, 6];
const LEFT_LIGHT_INTENSITY = 3;

export function StudioEnvironment() {
    return (
        <Environment>
            <color args={[SURROUND_COLOR]} attach="background" />
            <Lightformer
                position={KEY_LIGHT_POSITION}
                scale={KEY_LIGHT_SCALE}
                intensity={KEY_LIGHT_INTENSITY}
            />
            <Lightformer
                position={FRONT_LIGHT_POSITION}
                scale={FRONT_LIGHT_SCALE}
                intensity={FRONT_LIGHT_INTENSITY}
            />
            <Lightformer
                position={LEFT_LIGHT_POSITION}
                scale={LEFT_LIGHT_SCALE}
                intensity={LEFT_LIGHT_INTENSITY}
            />
        </Environment>
    );
}
