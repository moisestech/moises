'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { useEffect, useMemo } from 'react';
import * as THREE from 'three';

function EquirectSphere({ src }: { src: string }) {
  const { gl } = useThree();
  const texture = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const tex = loader.load(src);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.mapping = THREE.EquirectangularReflectionMapping;
    return tex;
  }, [src]);

  useEffect(() => {
    return () => {
      texture.dispose();
    };
  }, [texture]);

  useEffect(() => {
    gl.domElement.style.touchAction = 'none';
  }, [gl]);

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

/**
 * Lightweight equirectangular panorama — drag to look (OrbitControls via drei would add deps surface;
 * pointer drag implemented with three Fiber camera).
 */
export function GrantEquirectCanvas({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="absolute inset-0" role="img" aria-label={alt}>
      <Canvas
        camera={{ position: [0, 0, 0.1], fov: 75, near: 0.1, far: 1000 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true }}
      >
        <EquirectSphere src={src} />
        <DragLookControls />
      </Canvas>
      <p className="pointer-events-none absolute bottom-3 left-3 text-[10px] uppercase tracking-wide text-white/80">
        Drag to look · Esc via Exit 360
      </p>
    </div>
  );
}

function DragLookControls() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const el = gl.domElement;
    let dragging = false;
    let lon = 0;
    let lat = 0;
    let lastX = 0;
    let lastY = 0;

    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      el.setPointerCapture(e.pointerId);
    };
    const onUp = (e: PointerEvent) => {
      dragging = false;
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        /* ignore */
      }
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      lon -= dx * 0.15;
      lat = Math.max(-85, Math.min(85, lat + dy * 0.15));
      const phi = THREE.MathUtils.degToRad(90 - lat);
      const theta = THREE.MathUtils.degToRad(lon);
      camera.lookAt(
        500 * Math.sin(phi) * Math.cos(theta),
        500 * Math.cos(phi),
        500 * Math.sin(phi) * Math.sin(theta),
      );
    };

    el.addEventListener('pointerdown', onDown);
    el.addEventListener('pointerup', onUp);
    el.addEventListener('pointercancel', onUp);
    el.addEventListener('pointermove', onMove);
    return () => {
      el.removeEventListener('pointerdown', onDown);
      el.removeEventListener('pointerup', onUp);
      el.removeEventListener('pointercancel', onUp);
      el.removeEventListener('pointermove', onMove);
    };
  }, [camera, gl]);

  return null;
}
