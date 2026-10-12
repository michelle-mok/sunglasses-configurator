import { useGLTF } from '@react-three/drei';
import SUNGLASSES_URL from '../../assets/SunglassesKhronos-nologo.glb?url';

export function Sunglasses() {
    const gltf = useGLTF(SUNGLASSES_URL);

    return <primitive object={gltf.scene} />;
}
