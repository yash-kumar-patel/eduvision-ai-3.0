"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 130;

    // 2. High performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // 3. Dynamic 3D Neural Constellation Network
    const particleCount = 180;
    const maxDistance = 34;
    const positions = new Float32Array(particleCount * 3);
    const velocities: THREE.Vector3[] = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 240;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 180;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 140 - 20; // Pushed deeper into background

      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.12,
          (Math.random() - 0.5) * 0.12,
          (Math.random() - 0.5) * 0.12
        )
      );
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.8,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);

    // Neural Connection Lines
    const linePositions = new Float32Array(particleCount * particleCount * 3);
    const lineColors = new Float32Array(particleCount * particleCount * 3);

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // 5. Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.08;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.08;
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    // 6. Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // 7. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Camera parallax lerp
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      camera.position.x = targetX * 0.3;
      camera.position.y = -targetY * 0.3;
      camera.lookAt(scene.position);

      // Update particle positions
      const pPositions = particleGeometry.attributes.position.array as Float32Array;
      let lineIndex = 0;
      let colorIndex = 0;
      const lPositions = lineGeometry.attributes.position.array as Float32Array;
      const lColors = lineGeometry.attributes.color.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        pPositions[i * 3] += velocities[i].x;
        pPositions[i * 3 + 1] += velocities[i].y;
        pPositions[i * 3 + 2] += velocities[i].z;

        // Bounce bounds
        if (pPositions[i * 3] < -110 || pPositions[i * 3] > 110) velocities[i].x *= -1;
        if (pPositions[i * 3 + 1] < -80 || pPositions[i * 3 + 1] > 80) velocities[i].y *= -1;
        if (pPositions[i * 3 + 2] < -80 || pPositions[i * 3 + 2] > 80) velocities[i].z *= -1;

        // Find connections
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pPositions[i * 3] - pPositions[j * 3];
          const dy = pPositions[i * 3 + 1] - pPositions[j * 3 + 1];
          const dz = pPositions[i * 3 + 2] - pPositions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < maxDistance) {
            const alpha = 1.0 - dist / maxDistance;

            lPositions[lineIndex++] = pPositions[i * 3];
            lPositions[lineIndex++] = pPositions[i * 3 + 1];
            lPositions[lineIndex++] = pPositions[i * 3 + 2];

            lPositions[lineIndex++] = pPositions[j * 3];
            lPositions[lineIndex++] = pPositions[j * 3 + 1];
            lPositions[lineIndex++] = pPositions[j * 3 + 2];

            lColors[colorIndex++] = alpha;
            lColors[colorIndex++] = alpha;
            lColors[colorIndex++] = alpha;

            lColors[colorIndex++] = alpha;
            lColors[colorIndex++] = alpha;
            lColors[colorIndex++] = alpha;
          }
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none opacity-75"
    />
  );
}
