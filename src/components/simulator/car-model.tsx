'use client';

import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useSimulatorStore } from '@/stores/simulator-store';
import { FINISH_PRESETS } from '@/data/colors';

/**
 * Real 3D car model loaded from GLTF
 * Applies paint material to car body parts
 */
export function CarModel() {
  const groupRef = useRef<THREE.Group>(null);
  const { selectedColor, selectedFinish } = useSimulatorStore();

  // Load the car model
  const { scene } = useGLTF('/models/car.glb');

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
      envMapIntensity: 2,
    });
  }, [selectedColor, finishPreset]);

  // Apply paint material to car body parts
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Apply paint to body parts (typically named 'body', 'car_body', etc.)
          const name = child.name.toLowerCase();
          if (
            name.includes('body') ||
            name.includes('paint') ||
            name.includes('hood') ||
            name.includes('door') ||
            name.includes('fender') ||
            name.includes('roof') ||
            name.includes('trunk') ||
            name.includes('bumper')
          ) {
            child.material = paintMaterial;
          }

          // Enable shadows
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene, paintMaterial]);

  // Subtle hover animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.01;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} scale={0.5}>
      <primitive object={scene} />
    </group>
  );
}

// Preload the model
useGLTF.preload('/models/car.glb');
