import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas({ activeBlock, setActiveBlock }) {
  const mountRef = useRef(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Test WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGlSupported(false);
        return;
      }
    } catch (e) {
      setWebGlSupported(false);
      return;
    }

    let animationFrameId;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 7, 12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.5);
    scene.add(ambientLight);

    const cyanPointLight = new THREE.PointLight(0x00f0ff, 4, 30);
    cyanPointLight.position.set(5, 8, 5);
    scene.add(cyanPointLight);

    const violetPointLight = new THREE.PointLight(0x8a2be2, 3.5, 30);
    violetPointLight.position.set(-6, 6, -4);
    scene.add(violetPointLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(10, 15, 10);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Main Chip Group
    const chipGroup = new THREE.Group();
    scene.add(chipGroup);

    // 1. IC Package Substrate (Outer green/black PCB carrier)
    const substrateGeo = new THREE.BoxGeometry(8, 0.4, 8);
    const substrateMat = new THREE.MeshStandardMaterial({
      color: 0x070b12,
      roughness: 0.3,
      metalness: 0.8,
    });
    const substrate = new THREE.Mesh(substrateGeo, substrateMat);
    substrate.position.y = -0.2;
    substrate.receiveShadow = true;
    chipGroup.add(substrate);

    // Gold/Silver I/O Pins around substrate edge
    const pinGeo = new THREE.BoxGeometry(0.15, 0.1, 0.4);
    const pinMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 });
    for (let i = -3.6; i <= 3.6; i += 0.4) {
      // North & South pins
      const pinN = new THREE.Mesh(pinGeo, pinMat);
      pinN.position.set(i, -0.2, 4.1);
      chipGroup.add(pinN);

      const pinS = new THREE.Mesh(pinGeo, pinMat);
      pinS.position.set(i, -0.2, -4.1);
      chipGroup.add(pinS);

      // East & West pins
      const pinE = new THREE.Mesh(pinGeo, pinMat);
      pinE.rotation.y = Math.PI / 2;
      pinE.position.set(4.1, -0.2, i);
      chipGroup.add(pinE);

      const pinW = new THREE.Mesh(pinGeo, pinMat);
      pinW.rotation.y = Math.PI / 2;
      pinW.position.set(-4.1, -0.2, i);
      chipGroup.add(pinW);
    }

    // 2. Silicon Die (Inner active chip surface)
    const dieGeo = new THREE.BoxGeometry(6, 0.25, 6);
    const dieMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.9,
    });
    const die = new THREE.Mesh(dieGeo, dieMat);
    die.position.y = 0.05;
    die.castShadow = true;
    die.receiveShadow = true;
    chipGroup.add(die);

    // Silicon Metallic Grid lines overlay on die
    const gridHelper = new THREE.GridHelper(5.8, 20, 0x00f0ff, 0x1e293b);
    gridHelper.position.y = 0.19;
    chipGroup.add(gridHelper);

    // 3. Logic Core Blocks on Die
    const logicBlocks = [
      { id: 'UVM', name: 'UVM Core', color: 0x00f0ff, pos: [-1.8, 0.3, -1.8], size: [2.2, 0.25, 2.2] },
      { id: 'AXI4', name: 'AXI4 Engine', color: 0x8a2be2, pos: [1.8, 0.3, -1.8], size: [2.2, 0.25, 2.2] },
      { id: 'PCIe', name: 'PCIe / DMA', color: 0x38bdf8, pos: [-1.8, 0.3, 1.8], size: [2.2, 0.25, 2.2] },
      { id: 'COVERAGE', name: 'Coverage Mon', color: 0x10b981, pos: [1.8, 0.3, 1.8], size: [2.2, 0.25, 2.2] },
      { id: 'SVA', name: 'SVA Checker', color: 0xf59e0b, pos: [0, 0.4, 0], size: [1.6, 0.35, 1.6] },
    ];

    const blockMeshes = [];
    logicBlocks.forEach((block) => {
      const blockGeo = new THREE.BoxGeometry(...block.size);
      const blockMat = new THREE.MeshStandardMaterial({
        color: block.color,
        roughness: 0.2,
        metalness: 0.7,
        emissive: block.color,
        emissiveIntensity: 0.25,
      });
      const mesh = new THREE.Mesh(blockGeo, blockMat);
      mesh.position.set(...block.pos);
      mesh.castShadow = true;
      mesh.userData = block;
      chipGroup.add(mesh);
      blockMeshes.push(mesh);

      // Glowing top border wireframe
      const edges = new THREE.EdgesGeometry(blockGeo);
      const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 });
      const wireframe = new THREE.LineSegments(edges, lineMat);
      mesh.add(wireframe);
    });

    // 4. Glowing Interconnect Circuit Tracks (SVG/Line paths between blocks)
    const trackPoints = [
      new THREE.Vector3(-1.8, 0.22, -1.8),
      new THREE.Vector3(0, 0.22, -1.8),
      new THREE.Vector3(1.8, 0.22, -1.8),
      new THREE.Vector3(1.8, 0.22, 0),
      new THREE.Vector3(1.8, 0.22, 1.8),
      new THREE.Vector3(0, 0.22, 1.8),
      new THREE.Vector3(-1.8, 0.22, 1.8),
      new THREE.Vector3(-1.8, 0.22, 0),
      new THREE.Vector3(-1.8, 0.22, -1.8),
    ];

    const curve = new THREE.CatmullRomCurve3(trackPoints, true);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.05, 8, true);
    const tubeMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.4, wireframe: true });
    const trackMesh = new THREE.Mesh(tubeGeo, tubeMat);
    chipGroup.add(trackMesh);

    // 5. Animated Data Transactions (Glowing spheres traveling along circuit curve)
    const packetCount = 6;
    const packetSpheres = [];
    const packetGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

    for (let i = 0; i < packetCount; i++) {
      const pMesh = new THREE.Mesh(packetGeo, packetMat);
      pMesh.userData = { offset: i / packetCount };
      chipGroup.add(pMesh);
      packetSpheres.push(pMesh);
    }

    // Floating Particles around the silicon chip
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 150;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 20;
      posArray[i + 1] = Math.random() * 8 - 2;
      posArray[i + 2] = (Math.random() - 0.5) * 20;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      mouseX = (x / (rect.width / 2)) * 0.5;
      mouseY = (y / (rect.height / 2)) * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Chip Tilt & Rotation
      targetRotationY += (mouseX - targetRotationY) * 0.05;
      targetRotationX += (mouseY - targetRotationX) * 0.05;

      chipGroup.rotation.y = Math.sin(elapsedTime * 0.4) * 0.15 + targetRotationY * 0.8;
      chipGroup.rotation.x = Math.cos(elapsedTime * 0.3) * 0.08 + targetRotationX * 0.5;
      chipGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.15;

      // Animate Data Packets traveling along the path
      packetSpheres.forEach((p) => {
        let t = (elapsedTime * 0.2 + p.userData.offset) % 1;
        const pt = curve.getPoint(t);
        p.position.copy(pt);
        p.position.y += 0.1; // hover slightly above track
      });

      // Animate Particles
      particles.rotation.y = elapsedTime * 0.03;

      // Highlight active block if selected
      blockMeshes.forEach((mesh) => {
        if (activeBlock && mesh.userData.id === activeBlock) {
          mesh.material.emissiveIntensity = 0.8 + Math.sin(elapsedTime * 8) * 0.3;
          mesh.scale.set(1.1, 1.2, 1.1);
        } else {
          mesh.material.emissiveIntensity = 0.25;
          mesh.scale.set(1, 1, 1);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [activeBlock]);

  if (!webGlSupported) {
    return (
      <div className="w-full h-full min-h-[420px] flex items-center justify-center relative p-6">
        {/* 2.5D CSS Silicon Chip Fallback */}
        <div className="relative w-72 h-72 rounded-2xl bg-[#0a0d14] border-2 border-[#00f0ff]/40 p-4 shadow-[0_0_40px_rgba(0,240,255,0.2)] flex flex-col items-center justify-between transform rotate-12 hover:rotate-0 transition-transform duration-500">
          <div className="absolute inset-0 silicon-grid rounded-2xl opacity-40 pointer-events-none" />
          <div className="w-full text-center pb-2 border-b border-[#00f0ff]/30">
            <span className="font-mono text-xs text-[#00f0ff] font-bold">SILICON DIE VERIFICATION CORE</span>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full my-auto">
            {['UVM', 'AXI4', 'PCIe', 'SVA'].map((item) => (
              <div
                key={item}
                onClick={() => setActiveBlock(item)}
                className={`p-3 rounded-lg border text-center cursor-pointer transition-all ${
                  activeBlock === item
                    ? 'bg-[#00f0ff]/20 border-[#00f0ff] text-white shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'bg-[#101420] border-slate-700 text-slate-300 hover:border-[#00f0ff]/50'
                }`}
              >
                <span className="font-mono text-xs font-bold block">{item}</span>
                <span className="text-[10px] text-slate-400">ACTIVE IP</span>
              </div>
            ))}
          </div>
          <div className="w-full text-center pt-2 border-t border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>FUNCTIONAL COVERAGE: ACTIVE</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[440px] flex items-center justify-center">
      <div ref={mountRef} className="w-full h-full absolute inset-0 cursor-grab active:cursor-grabbing" />

      {/* Floating 3D Die Block Labels Overlay */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-2 pointer-events-auto z-10">
        {[
          { id: 'UVM', label: 'UVM' },
          { id: 'SYSTEMVERILOG', label: 'SYSTEMVERILOG' },
          { id: 'AXI4', label: 'AXI4' },
          { id: 'PCIe', label: 'PCIe / DMA' },
          { id: 'SVA', label: 'SVA' },
          { id: 'COVERAGE', label: 'COVERAGE' },
          { id: 'DEBUG', label: 'DEBUG' },
        ].map((block) => (
          <button
            key={block.id}
            onClick={() => setActiveBlock(block.id)}
            className={`px-2.5 py-1 rounded text-[11px] font-mono transition-all duration-200 ${
              activeBlock === block.id
                ? 'bg-[#00f0ff] text-black font-bold shadow-[0_0_15px_rgba(0,240,255,0.7)] scale-105'
                : 'bg-[#0a0d14]/80 text-slate-300 border border-[#00f0ff]/30 hover:border-[#00f0ff] hover:text-[#00f0ff]'
            }`}
          >
            {block.label}
          </button>
        ))}
      </div>
    </div>
  );
}
