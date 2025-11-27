import { Vector3, Camera } from 'three';

export function worldToScreen(
  worldPosition: [number, number, number],
  camera: Camera,
  width: number,
  height: number
): { x: number; y: number } {
  const vector = new Vector3(worldPosition[0], worldPosition[1], worldPosition[2]);
  vector.project(camera);

  const x = (vector.x * 0.5 + 0.5) * width;
  const y = (-(vector.y * 0.5) + 0.5) * height;

  return { x, y };
}
