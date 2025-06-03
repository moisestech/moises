import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { Brain, Users, Code, Network, Heart, Sparkles } from 'lucide-react';

const WORDS = [
  { word: 'AI', icon: Brain, color: '#A4FF4E', def: 'Artificial Intelligence: Tech that learns and adapts.' },
  { word: 'ETHICS', icon: Heart, color: '#3B82F6', def: 'Ethics: Doing the right thing, even with code.' },
  { word: 'COMMUNITY', icon: Users, color: '#EC4899', def: 'Community: Built for and by people.' },
  { word: 'OPEN SOURCE', icon: Code, color: '#A4FF4E', def: 'Open Source: Transparent, remixable, for all.' },
  { word: 'NETWORK', icon: Network, color: '#F59E42', def: 'Network: Many nodes, one mission.' },
  { word: 'IMPACT', icon: Sparkles, color: '#A4FF4E', def: 'Impact: Real-world change, not just hype.' },
];

function FloatingWord({ word, icon: Icon, color, position, def }: any) {
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.4;
      ref.current.rotation.y = Math.sin(t / 2 + position[0]) * 0.2;
    }
  });
  return (
    <group ref={ref} position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <Html center style={{ pointerEvents: 'auto' }}>
          <div
            className="flex flex-col items-center group select-none"
            style={{ filter: hovered ? `drop-shadow(0 0 16px ${color})` : undefined, cursor: 'pointer' }}
          >
            <Icon className="w-10 h-10 mb-2" style={{ color }} />
            <span
              className="font-extrabold text-2xl md:text-3xl uppercase tracking-widest"
              style={{ color, textShadow: `0 0 16px ${color}` }}
            >
              {word}
            </span>
            {hovered && (
              <div className="mt-2 px-4 py-2 rounded-lg bg-black/90 text-white text-xs border border-[#A4FF4E] shadow-xl animate-fade-in z-50" style={{ minWidth: 180 }}>
                {def}
              </div>
            )}
          </div>
        </Html>
      </mesh>
    </group>
  );
}

const positions = [
  [-3, 1.5, -2],
  [2.5, 2, 0],
  [0, -1.5, 2],
  [-2, -2, 1.5],
  [3, 0, -1.5],
  [0, 2.5, -2.5],
];

const AboveTheFoldAIWords3D = ({ className = '' }) => {
  // Memoize to avoid rerendering
  const wordProps = useMemo(() => WORDS.map((w, i) => ({ ...w, position: positions[i] })), []);
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ zIndex: 1 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={0.7} />
        {wordProps.map((props, i) => (
          <FloatingWord key={props.word} {...props} />
        ))}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
      <style jsx global>{`
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AboveTheFoldAIWords3D; 