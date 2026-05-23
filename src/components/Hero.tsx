import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const DistortedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  // Responsive scale based on viewport width — works on all screen sizes
  const responsiveScale = Math.min(viewport.width * 0.4, 2.5);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} ref={meshRef} scale={responsiveScale}>
      <MeshDistortMaterial
        color="#00D1FF"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#A855F7" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#00D1FF" />
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <DistortedSphere />
          </Float>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
            FUTURE OF THE <br />
            <span className="gradient-text">WEB IS 3D.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Elevate your digital presence with immersive, interactive 3D experiences powered by AI agents.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#00D1FF] to-[#A855F7] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] transition-all"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              View Solutions
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs uppercase tracking-widest">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#00D1FF] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;