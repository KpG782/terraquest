import gsap from 'gsap';
import { Camera, Vector3 } from 'three';

export interface CameraAnimationConfig {
  camera: Camera;
  targetPosition: [number, number, number];
  targetLookAt: [number, number, number];
  duration?: number;
  onComplete?: () => void;
  onStart?: () => void;
}

export function animateCamera({
  camera,
  targetPosition,
  targetLookAt,
  duration = 1.5,
  onComplete,
  onStart
}: CameraAnimationConfig) {
  try {
    if (onStart) onStart();

    const timeline = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    // Animate camera position
    timeline.to(camera.position, {
      x: targetPosition[0],
      y: targetPosition[1],
      z: targetPosition[2],
      duration,
      ease: 'power2.inOut'
    }, 0);

    // Animate camera look-at by updating a temporary vector
    const lookAtVector = new Vector3(
      targetLookAt[0],
      targetLookAt[1],
      targetLookAt[2]
    );

    const currentLookAt = new Vector3();
    camera.getWorldDirection(currentLookAt);
    currentLookAt.add(camera.position);

    timeline.to(currentLookAt, {
      x: lookAtVector.x,
      y: lookAtVector.y,
      z: lookAtVector.z,
      duration,
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.lookAt(currentLookAt);
      }
    }, 0);

    return timeline;
  } catch (error) {
    console.error('GSAP animation failed, falling back to instant update:', error);
    
    // Fallback: instant camera update
    camera.position.set(targetPosition[0], targetPosition[1], targetPosition[2]);
    camera.lookAt(targetLookAt[0], targetLookAt[1], targetLookAt[2]);
    
    if (onComplete) onComplete();
    
    return null;
  }
}

export function resetCamera(camera: Camera) {
  animateCamera({
    camera,
    targetPosition: [0, 15, 20],
    targetLookAt: [0, 0, 0],
    duration: 1.5
  });
}
