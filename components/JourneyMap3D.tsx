'use client';

import { Suspense, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { ErrorBoundary } from './ErrorBoundary';
import { BoundedOrbitControls } from './BoundedOrbitControls';
import { Scene } from './Scene';
import { RegionMesh } from './RegionMesh';
import { PathLine } from './PathLine';
import { FloatingIcon } from './FloatingIcon';
import { CameraController } from './CameraController';
import { GlassmorphismCard } from './GlassmorphismCard';
import { ProgressBar } from './ProgressBar';
import { AchievementBadges } from './AchievementBadges';
import { ControlsHint } from './ControlsHint';
import { MiniMap } from './MiniMap';
import { BoundaryIndicator } from './BoundaryIndicator';
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
  const [boundaryDirection, setBoundaryDirection] = useState<'north' | 'south' | 'east' | 'west' | null>(null);
  
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
      // Navigate to module detail page
      window.location.href = `/module/${moduleId}`;
    }
  };

  const handleAnimationStart = () => {
    setControlsEnabled(false);
  };

  const handleAnimationComplete = () => {
    setControlsEnabled(true);
    setTargetModule(null);
  };

  const handleBoundaryHit = (direction: 'north' | 'south' | 'east' | 'west') => {
    setBoundaryDirection(direction);
    setTimeout(() => setBoundaryDirection(null), 2000);
  };

  return (
    <div className="w-full h-screen bg-bg-dark relative">
      <ProgressBar />
      <AchievementBadges />
      <ControlsHint />
      <MiniMap />
      <BoundaryIndicator direction={boundaryDirection} />
      
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
            position: [0, 35, 45],
            fov: 60
          }}
          gl={{ antialias: true }}
          shadows={config.enableShadows}
          style={{ background: '#0d1117' }}
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
                const nextModule = MODULES[index + 1];
                const isPathUnlocked = unlockedIds.includes(module.id) && unlockedIds.includes(nextModule.id);
                return (
                  <PathLine
                    key={`path-${module.id}`}
                    start={module}
                    end={nextModule}
                    isUnlocked={isPathUnlocked}
                  />
                );
              }
              return null;
            })}

            {/* Render floating icons near each region (limited on mobile) */}
            {MODULES.slice(0, config.iconCount).map((module, index) => {
              const iconTypes: Array<'cloud' | 'code' | 'infrastructure' | 'security'> = ['cloud', 'code', 'infrastructure', 'security'];
              const iconType = iconTypes[index % iconTypes.length];
              return (
                <FloatingIcon
                  key={`icon-${module.id}`}
                  position={[
                    module.position[0] + 2,
                    module.position[1] + 3,
                    module.position[2] + 1
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

            {/* Orbit controls with panning boundaries */}
            <BoundedOrbitControls
              enabled={controlsEnabled}
              target={[0, 0, -5]}
              minDistance={20}
              maxDistance={80}
              minPolarAngle={Math.PI / 6}
              maxPolarAngle={Math.PI / 2.2}
              enablePan={true}
              panSpeed={1}
              enableDamping={true}
              dampingFactor={0.08}
              rotateSpeed={0.6}
              zoomSpeed={0.8}
              maxPanX={35}
              maxPanZ={35}
              onBoundaryHit={handleBoundaryHit}
              mouseButtons={{
                LEFT: 0,   // Rotate with left click
                MIDDLE: 1, // Zoom with middle click
                RIGHT: 2   // Pan with right click
              }}
              touches={{
                ONE: 2,    // Rotate with one finger
                TWO: 1     // Zoom/pan with two fingers
              }}
            />
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
