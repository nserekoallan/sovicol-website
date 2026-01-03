'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useSimulatorStore } from '@/stores/simulator-store';
import { FINISH_PRESETS } from '@/data/colors';

/**
 * Placeholder car model using basic geometry
 * This will be replaced with actual GLTF car models
 */
export function CarModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { selectedColor, selectedFinish } = useSimulatorStore();

  // Get finish preset properties
  const finishPreset = FINISH_PRESETS[selectedFinish];

  // Create paint material based on selected color and finish
  const paintMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(selectedColor),
      metalness: finishPreset.metalness,
      roughness: finishPreset.roughness,
      clearcoat: finishPreset.clearcoat,
      clearcoatRoughness: finishPreset.clearcoatRoughness,
      envMapIntensity: 1.5,
    });
  }, [selectedColor, finishPreset]);

  // Glass material for windows
  const glassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#111111'),
      metalness: 0,
      roughness: 0,
      transmission: 0.9,
      transparent: true,
      opacity: 0.3,
    });
  }, []);

  // Chrome material for accents
  const chromeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#cccccc'),
      metalness: 1,
      roughness: 0.1,
    });
  }, []);

  // Tire material
  const tireMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1a1a1a'),
      metalness: 0,
      roughness: 0.9,
    });
  }, []);

  // Subtle hover animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Car Body - Main shape */}
      <mesh position={[0, 0.4, 0]} material={paintMaterial} castShadow>
        <boxGeometry args={[2.5, 0.5, 1.2]} />
      </mesh>

      {/* Car Body - Hood section */}
      <mesh position={[0.8, 0.35, 0]} material={paintMaterial} castShadow>
        <boxGeometry args={[0.9, 0.4, 1.1]} />
      </mesh>

      {/* Car Body - Trunk section */}
      <mesh position={[-0.7, 0.35, 0]} material={paintMaterial} castShadow>
        <boxGeometry args={[0.7, 0.4, 1.1]} />
      </mesh>

      {/* Cabin/Roof */}
      <mesh position={[0, 0.85, 0]} material={paintMaterial} castShadow>
        <boxGeometry args={[1.4, 0.4, 1]} />
      </mesh>

      {/* Windshield */}
      <mesh
        position={[0.55, 0.75, 0]}
        rotation={[0, 0, -0.4]}
        material={glassMaterial}
      >
        <boxGeometry args={[0.5, 0.5, 0.95]} />
      </mesh>

      {/* Rear window */}
      <mesh
        position={[-0.55, 0.75, 0]}
        rotation={[0, 0, 0.4]}
        material={glassMaterial}
      >
        <boxGeometry args={[0.4, 0.45, 0.95]} />
      </mesh>

      {/* Side windows */}
      <mesh position={[0, 0.85, 0.5]} material={glassMaterial}>
        <boxGeometry args={[1.2, 0.35, 0.05]} />
      </mesh>
      <mesh position={[0, 0.85, -0.5]} material={glassMaterial}>
        <boxGeometry args={[1.2, 0.35, 0.05]} />
      </mesh>

      {/* Front grille */}
      <mesh position={[1.26, 0.35, 0]} material={chromeMaterial}>
        <boxGeometry args={[0.02, 0.25, 0.8]} />
      </mesh>

      {/* Headlights */}
      <mesh position={[1.26, 0.4, 0.35]}>
        <boxGeometry args={[0.02, 0.12, 0.2]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[1.26, 0.4, -0.35]}>
        <boxGeometry args={[0.02, 0.12, 0.2]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.3} />
      </mesh>

      {/* Tail lights */}
      <mesh position={[-1.08, 0.4, 0.45]}>
        <boxGeometry args={[0.02, 0.1, 0.15]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[-1.08, 0.4, -0.45]}>
        <boxGeometry args={[0.02, 0.1, 0.15]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.2} />
      </mesh>

      {/* Wheels */}
      {[
        [0.8, 0.15, 0.65],
        [0.8, 0.15, -0.65],
        [-0.7, 0.15, 0.65],
        [-0.7, 0.15, -0.65],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          {/* Tire */}
          <mesh rotation={[Math.PI / 2, 0, 0]} material={tireMaterial}>
            <cylinderGeometry args={[0.22, 0.22, 0.15, 32]} />
          </mesh>
          {/* Rim */}
          <mesh rotation={[Math.PI / 2, 0, 0]} material={chromeMaterial}>
            <cylinderGeometry args={[0.12, 0.12, 0.16, 16]} />
          </mesh>
        </group>
      ))}

      {/* Door handles (chrome accents) */}
      <mesh position={[0.2, 0.5, 0.61]} material={chromeMaterial}>
        <boxGeometry args={[0.15, 0.03, 0.02]} />
      </mesh>
      <mesh position={[0.2, 0.5, -0.61]} material={chromeMaterial}>
        <boxGeometry args={[0.15, 0.03, 0.02]} />
      </mesh>
    </group>
  );
}
