// FIX: Removed the triple-slash directive as it was pointing to a non-existent type definition file, causing a build error.
// The JSX elements for react-three-fiber are expected to be resolved by the project's tsconfig.

'use client';

// FIX: Replaced the incorrect 'globals' import with direct module augmentation. This explicitly adds react-three-fiber's custom elements (like <mesh>, <group>) to TypeScript's JSX namespace, resolving the "does not exist on type 'JSX.IntrinsicElements'" errors that occur when the build environment prevents automatic type discovery.
import React, { useRef } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { Shape, ExtrudeGeometry, Group } from 'three';

declare global {
    namespace JSX {
        interface IntrinsicElements extends ThreeElements {}
    }
}


// FIX: Changed to use React.FC to make its component type explicit, resolving a type error
// where TypeScript incorrectly flagged the special 'key' prop as an invalid property.
const Box: React.FC<{ position: [number, number, number], rotation: [number, number, number] }> = ({ position, rotation }) => {
    const shape = new Shape();
    const angleStep = Math.PI * 0.5;
    const radius = 1;

    shape.absarc(2, 2, radius, angleStep * 0, angleStep * 1);
    shape.absarc(-2, 2, radius, angleStep * 1, angleStep * 2);
    shape.absarc(-2, -2, radius, angleStep * 2, angleStep * 3);
    shape.absarc(2, -2, radius, angleStep * 3, angleStep * 4);

    const extrudeSettings = {
        depth: 0.3,
        bevelEnabled: true,
        bevelThickness: 0.05,
        bevelSize: 0.05,
        bevelSegments: 20,
        curveSegments: 20
    };

    const geometry = new ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    return (
        <mesh
            geometry={geometry}
            position={position}
            rotation={rotation}
        >
            <meshPhysicalMaterial 
                color="#232323"
                metalness={1}
                roughness={0.3}
                reflectivity={0.5}
                ior={1.5}
                emissive="#000000"
                emissiveIntensity={0}
                transparent={false}
                opacity={1.0}
                transmission={0.0}
                thickness={0.5}
                clearcoat={0.0}
                clearcoatRoughness={0.0}
                sheen={0}
                sheenRoughness={1.0}
                sheenColor="#ffffff"
                specularIntensity={1.0}
                specularColor="#ffffff"
                iridescence={1}
                iridescenceIOR={1.3}
                iridescenceThicknessRange={[100, 400]}
                flatShading={false}
                side={0}
                alphaTest={0}
                depthWrite={true}
                depthTest={true}
            />
        </mesh>
    );
};

const AnimatedBoxes = () => {
    const groupRef = useRef<Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.x += delta * 0.05;
        }
    });

    const boxes = Array.from({ length: 50 }, (_, index) => ({
        position: [(index - 25) * 0.75, 0, 0],
        rotation: [
            (index - 10) * 0.1,
            Math.PI / 2,
            0
        ],
        id: index
    }));

    return (
        <group ref={groupRef}>
            {boxes.map((box) => (
                <Box
                    key={box.id}
                    position={box.position as [number, number, number]}
                    rotation={box.rotation as [number, number, number]}
                />
            ))}
        </group>
    );
};

export const Scene = () => {
    // FIX: Explicitly typed the useState hook with a tuple `[number, number, number]` to ensure `cameraPosition`
    // is not inferred as a generic `number[]`, which is incompatible with the `camera.position` prop.
    const [cameraPosition, setCameraPosition] = React.useState<[number, number, number]>([5, 5, 20]);

    return (
        <div className="w-full h-full z-0">
            <Canvas camera={{ position: cameraPosition, fov: 40 }}>
                <ambientLight intensity={15} />
                <directionalLight position={[10, 10, 5]} intensity={15} />
                <AnimatedBoxes />
            </Canvas>
        </div>
    );
};
