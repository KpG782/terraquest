'use client';

import { Suspense, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { ErrorBoundary } from './ErrorBoundary';
import { Scene } from './Scene';
import { RegionMesh } from './RegionMesh';
import { PathLine } from './PathLine';
import { FloatingIcon } from './FloatingIcon';
import { CameraController } from './CameraController';
import { GlassmorphismCard } from './GlassmorphismCard';
import { ProgressBar } from './ProgressBar';
import { AchievementBadges } from './AchievementBadges';
import { MODULES, getUnlockedModules, getModuleById } from '@/lib/modules';
import { useProgressStore } from '@/lib/store';
import { worldToScreen } from '@/lib/coordinate-transform';
import { useResponsive, getResponsiveConfig } from '@/lib/responsive';
import { useKeyboardNavigation } from '@/lib/keyboard-navigation';
import { Module } from '@/types';

interface JourneyMap3DProps {
  initialModule?: string;
}

export default function JourneyMap3D({ initialModule }: JourneyMap3DProps) {
  const { completedModules } = useProgressStore();
  const [targetModule, setTargetModule] = useState<Module | null>(null);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [controlsEnabled, setControlsEnabled] = useState(true);
  
  const breakpoint = useResponsive();
  const config = getResponsiveConfig(breakpoint);

  const unlockedModules = getUnlockedModules(completedModules);
  const unlockedIds = unlockedModules.map(m => m.id);

  const { focusedIndex } = useKeyboardNavigation(
    MODULES.length,
    (index) => handleRegionClick(MODULES[index].id),
    controlsEnabled
  );

  const handleRegionClick = (moduleId: string) => {
    const module = MODULES.find(m => m.id === moduleId);
    if (module && unlockedIds.includes(moduleId)) {
      setTargetModule(module);
    }
  };

  const handleAnimationStart = () => {
    setControlsEnabled(false);
  };

  const handleAnimationComplete = () => {
    setControlsEnabled(true);
    setTargetModule(null);
  };

  return (
    <div className="w-full h-screen bg-bg-dark relative">
      <ProgressBar />
      <AchievementBadges />
      
      {/* Glassmorphism card overlay - rendered outside Canvas */}
      {hoveredModule && (() => {
        const module = getModuleById(hoveredModule);
        if (!module) return null;
        
        const isUnlocked = unlockedIds.includes(hoveredModule);
        const isCompleted = completedModules.includes(hoveredModule);
        const status = isCompleted ? 'completed' : isUnlocked ? 'unlocked' : 'locked';
        
        return (
          <GlassmorphismCard
            module={module}
            position={{ x: 0, y: 0 }}
            isVisible={true}
            status={status}
          />
        );
      })()}
      
      <ErrorBoundary>
        <Canvas
          camera={{
            position: [0, 15, config.cameraDistance],
            fov: 50
          }}
          gl={{ antialias: true }}
          shadows={config.enableShadows}
        >
          <Suspense fallback={null}>
            <Scene particleCount={config.particleCount} />
            
            {/* Render all region meshes */}
            {MODULES.map((module, index) => (
              <RegionMesh
                key={module.id}
                module={module}
                isLocked={!unlockedIds.includes(module.id)}
                isCompleted={completedModules.includes(module.id)}
                onClick={handleRegionClick}
                onHover={setHoveredModule}
                isFocused={index === focusedIndex}
              />
            ))}

            {/* Render path lines between sequential modules */}
            {MODULES.map((module, index) => {
              if (index < MODULES.length - 1) {
                return (
                  <PathLine
                    key={`path-${module.id}`}
                    start={module}
                    end={MODULES[index + 1]}
                  />
                );
              }
              return null;
            })}

            {/* Render floating icons near each region (limited on mobile) */}
            {MODULES.slice(0, config.iconCount).map((module, index) => {
              const iconType = index % 3 === 0 ? 'server' : index % 3 === 1 ? 'database' : 'network';
              return (
                <FloatingIcon
                  key={`icon-${module.id}`}
                  position={[
                    module.position[0] + 1.5,
                    module.position[1] + 2,
                    module.position[2]
                  ]}
                  type={iconType}
                />
              );
            })}

            {/* Camera controller for animations */}
            <CameraController
              targetModule={targetModule}
              onAnimationStart={handleAnimationStart}
              onAnimationComplete={handleAnimationComplete}
            />

            {/* Orbit controls */}
            <OrbitControls
              enabled={controlsEnabled}
              target={[0, 0, 0]}
              minDistance={10}
              maxDistance={50}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 2}
              enablePan={breakpoint !== 'mobile'}
              panSpeed={0.5}
              enableDamping={breakpoint === 'desktop'}
              dampingFactor={0.05}
              touches={{
                ONE: breakpoint === 'mobile' ? 2 : 0,
                TWO: breakpoint === 'mobile' ? 1 : 2
              }}
            />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
