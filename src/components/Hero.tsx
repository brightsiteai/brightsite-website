import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { motion, useScroll, useTransform } from 'framer-motion';

const DistortedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  const responsiveScale = Math.min(viewport.width * 0.45, 3.2);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} ref={meshRef} scale={responsiveScale}>
      <MeshDistortMaterial
        color="#00D4AA"
        attach="material"
        distort={0.4}
        speed={1.5}
        roughness={0.1}
        metalness={0.9}
        emissive="#14B8A6"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <section className="relative h-[120vh] flex items-center justify-center overflow-hidden" id="home">
      {/* 3D Environment */}
      <div className="absolute inset-0 z-0 bg-background">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
          <ambientLight intensity={0.2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#00D4AA" castShadow />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#F59E0B" />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
            <DistortedSphere />
          </Float>
        </Canvas>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none" />

      {/* Content */}
      <motion.div 
        style={{ y: y1, opacity, scale }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-[0.3em] mb-8 border border-primary/20 backdrop-blur-md">
            The Future of Web Engineering
          </span>
          
          <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.9] text-text-primary">
            CRAFTING <br />
            <span className="gradient-text">IMMERSIVE</span> <br />
            REALITIES
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            We bridge the gap between imagination and digital excellence using advanced 3D technology and autonomous AI agents.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-cta text-lg px-10 py-5 w-full sm:w-auto"
            >
              Start Project
            </button>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-5 rounded-xl bg-surface/50 border border-primary/10 text-text-primary font-bold text-lg hover:bg-surface transition-all backdrop-blur-md w-full sm:w-auto"
            >
              Our Solutions
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Narrative Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
      >
        <span className="text-text-secondary/40 text-[10px] font-black uppercase tracking-[0.4em]">Scroll to Begin</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
