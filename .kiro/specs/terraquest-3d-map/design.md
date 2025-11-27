# Design Document

## Overview

TerraQuest is built as a Next.js 16 application using React Three Fiber for 3D rendering, GSAP for camera animations, Zustand for state management, and Tailwind CSS for 2D UI overlays. The architecture follows a component-based design with clear separation between 3D scene logic, state management, and UI presentation. The system prioritizes performance through instanced rendering, lazy loading, and responsive optimizations while maintaining WCAG 2.1 AA accessibility standards.

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Next.js App Router                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  app/page.tsx (Journey Map Page)                       │ │
│  │  ┌──────────────────────────────────────────────────┐  │ │
│  │  │  <JourneyMap3D />                                 │  │ │
│  │  │  ┌────────────────────────────────────────────┐   │  │ │
│  │  │  │  React Three Fiber Canvas                  │   │  │ │
│  │  │  │  ├─ <Scene />                              │   │  │ │
│  │  │  │  ├─ <RegionMeshes />                       │   │  │ │
│  │  │  │  ├─ <FloatingIcons />                      │   │  │ │
│  │  │  │  ├─ <PathLines />                          │   │  │ │
│  │  │  │  ├─ <CameraController />                   │   │  │ │
│  │  │  │  └─ <OrbitControls />                      │   │  │ │
│  │  │  └────────────────────────────────────────────┘   │  │ │
│  │  │  <UIOverlay />                                     │  │ │
│  │  │  ├─ <ProgressBar />                                │  │ │
│  │  │  ├─ <Breadcrumb />                                 │  │ │
│  │  │  ├─ <GlassmorphismCard />                          │  │ │
│  │  │  └─ <AchievementBadges />                          │  │ │
│  │  └──────────────────────────────────────────────────┘  │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            │
                            ├─── Zustand Store (Progress Manager)
                            │    ├─ completedModules: string[]
                            │    ├─ currentModule: string
                            │    ├─ progress: number
                            │    └─ achievements: string[]
                            │
                            ├─── GSAP Timeline (Camera Animations)
                            │
                            └─── lib/modules.ts (Module Data)
```

### Technology Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5.6
- **3D Rendering**: React Three Fiber (@react-three/fiber) + Three.js
- **3D Helpers**: @react-three/drei (OrbitControls, Float, Environment, Stars, Text3D, Billboard, Line)
- **Animation**: GSAP (GreenSock Animation Platform)
- **State Management**: Zustand
- **Styling**: Tailwind CSS v4
- **Routing**: Next.js App Router with dynamic routes

### File Structure

```
app/
├── page.tsx                          # Journey Map homepage
├── layout.tsx                        # Root layout with providers
├── module/[id]/page.tsx              # Dynamic module pages
└── globals.css                       # Tailwind + custom styles

components/
├── JourneyMap3D.tsx                  # Main 3D scene wrapper
├── Scene.tsx                         # Three.js scene setup
├── RegionMesh.tsx                    # Individual 3D region component
├── FloatingIcon.tsx                  # Animated infrastructure icons
├── PathLine.tsx                      # Dashed path between regions
├── CameraController.tsx              # GSAP camera animation logic
├── UIOverlay.tsx                     # 2D UI container
├── ProgressBar.tsx                   # Progress indicator
├── Breadcrumb.tsx                    # Navigation breadcrumb
├── GlassmorphismCard.tsx             # Hover info card
├── AchievementBadges.tsx             # Achievement display
└── ErrorBoundary.tsx                 # Error handling wrapper

lib/
├── modules.ts                        # Module data and helpers
├── store.ts                          # Zustand progress store
├── camera-animations.ts              # GSAP animation utilities
├── responsive.ts                     # Responsive breakpoint hooks
└── accessibility.ts                  # A11y helper functions

types/
└── index.ts                          # TypeScript interfaces
```

## Components and Interfaces

### Core TypeScript Interfaces

```typescript
// types/index.ts

export interface Module {
  id: string;                         // e.g., "01-foundation"
  name: string;                       // e.g., "Foundation Island"
  icon: string;                       // e.g., "🌍"
  description: string;
  position: [number, number, number]; // [x, y, z] coordinates
  type: 'island' | 'peak' | 'forest' | 'valley' | 'realm' | 'metropolis' | 'archipelago' | 'laboratory' | 'summit';
  prerequisites: string[];            // Array of module IDs
  content: {
    title: string;
    lessons: string[];
    challenges: string[];
  };
}

export interface ProgressState {
  completedModules: string[];
  currentModule: string | null;
  progress: number;                   // 0-100
  achievements: string[];
  unlockModule: (id: string) => void;
  completeModule: (id: string) => void;
  addAchievement: (id: string) => void;
  reset: () => void;
}

export interface CameraPosition {
  position: [number, number, number];
  target: [number, number, number];
  duration: number;
  easing: string;
}

export interface RegionState {
  isLocked: boolean;
  isCompleted: boolean;
  isHovered: boolean;
  isFocused: boolean;
}
```

### Component Interfaces

#### JourneyMap3D Component

```typescript
// components/JourneyMap3D.tsx
interface JourneyMap3DProps {
  initialModule?: string;
}

export default function JourneyMap3D({ initialModule }: JourneyMap3DProps) {
  // Wraps Canvas with Suspense
  // Manages responsive breakpoints
  // Handles WebGL detection
}
```

#### RegionMesh Component

```typescript
// components/RegionMesh.tsx
interface RegionMeshProps {
  module: Module;
  isLocked: boolean;
  isCompleted: boolean;
  onClick: (id: string) => void;
  onHover: (id: string | null) => void;
}

export function RegionMesh({ module, isLocked, isCompleted, onClick, onHover }: RegionMeshProps) {
  // Renders 3D geometry based on module.type
  // Applies emissive materials for unlocked regions
  // Handles click and hover events
  // Manages focus state for keyboard navigation
}
```

#### CameraController Component

```typescript
// components/CameraController.tsx
interface CameraControllerProps {
  targetModule: string | null;
  onAnimationComplete: () => void;
}

export function CameraController({ targetModule, onAnimationComplete }: CameraControllerProps) {
  // Uses useThree() to access camera
  // Creates GSAP timeline for camera animation
  // Disables OrbitControls during animation
}
```

#### GlassmorphismCard Component

```typescript
// components/GlassmorphismCard.tsx
interface GlassmorphismCardProps {
  module: Module;
  position: { x: number; y: number }; // Screen coordinates
  isVisible: boolean;
}

export function GlassmorphismCard({ module, position, isVisible }: GlassmorphismCardProps) {
  // Positioned absolutely using screen coordinates
  // Tailwind: backdrop-blur-md bg-white/10
  // Displays module name, description, status
}
```

## Data Models

### Module Data Structure

```typescript
// lib/modules.ts

export const MODULES: Module[] = [
  {
    id: '01-foundation',
    name: 'Foundation Island',
    icon: '🌍',
    description: 'Learn the fundamentals of Infrastructure as Code',
    position: [-8, 0, 4],
    type: 'island',
    prerequisites: [],
    content: {
      title: 'Terraform Foundations',
      lessons: ['What is IaC?', 'Why Terraform?', 'Core Concepts'],
      challenges: ['Install Terraform', 'First Configuration']
    }
  },
  {
    id: '02-overview',
    name: 'Overview Peak',
    icon: '🏔️',
    description: 'Get a high-level view of Terraform architecture',
    position: [-4, 2, 2],
    type: 'peak',
    prerequisites: ['01-foundation'],
    content: {
      title: 'Terraform Overview',
      lessons: ['Architecture', 'Providers', 'State Management'],
      challenges: ['Configure Provider', 'Understand State']
    }
  },
  // ... 7 more modules
];

export function getModuleById(id: string): Module | undefined {
  return MODULES.find(m => m.id === id);
}

export function getUnlockedModules(completedIds: string[]): Module[] {
  return MODULES.filter(module => 
    module.prerequisites.every(prereq => completedIds.includes(prereq))
  );
}

export function getNextModule(currentId: string, completedIds: string[]): Module | null {
  const currentIndex = MODULES.findIndex(m => m.id === currentId);
  if (currentIndex === -1 || currentIndex === MODULES.length - 1) return null;
  
  const nextModule = MODULES[currentIndex + 1];
  const isUnlocked = nextModule.prerequisites.every(prereq => completedIds.includes(prereq));
  
  return isUnlocked ? nextModule : null;
}
```

### Zustand Store

```typescript
// lib/store.ts

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      completedModules: [],
      currentModule: null,
      progress: 0,
      achievements: [],
      
      unlockModule: (id: string) => {
        set({ currentModule: id });
      },
      
      completeModule: (id: string) => {
        const completed = [...get().completedModules, id];
        const progress = (completed.length / 9) * 100;
        set({ 
          completedModules: completed,
          progress,
          currentModule: null
        });
      },
      
      addAchievement: (id: string) => {
        set({ achievements: [...get().achievements, id] });
      },
      
      reset: () => {
        set({
          completedModules: [],
          currentModule: null,
          progress: 0,
          achievements: []
        });
      }
    }),
    {
      name: 'terraquest-progress',
      storage: typeof window !== 'undefined' ? localStorage : undefined
    }
  )
);
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Region Count Invariant

*For any* rendered Journey Map scene, the number of mesh objects with region identifiers should equal exactly 9.

**Validates: Requirements 1.1**

### Property 2: Geometry Type Mapping

*For any* module with type 'island', the rendered mesh should use BoxGeometry; for type 'peak', ConeGeometry; for type 'metropolis', CylinderGeometry.

**Validates: Requirements 1.3**

### Property 3: Camera Animation Triggers Navigation

*For any* unlocked Learning Region, clicking it and completing the camera animation should navigate to /module/[id] where id matches the region's identifier.

**Validates: Requirements 2.1, 2.2**

### Property 4: Locked Region Behavior

*For any* locked Learning Region, clicking it should display the tooltip "Complete previous modules to unlock" and should not trigger navigation.

**Validates: Requirements 2.3**

### Property 5: Hover Card Display

*For any* Learning Region, hovering over it should display a Glassmorphism Card containing the module's name, description, and completion status.

**Validates: Requirements 2.4**

### Property 6: 3D to 2D Coordinate Transformation

*For any* 3D world position of a Learning Region, the Glassmorphism Card should be positioned at screen coordinates correctly derived from that world position using projection matrix calculations.

**Validates: Requirements 2.5**

### Property 7: Progress State Persistence Round Trip

*For any* progress state (completedModules, currentModule, progress, achievements), saving to localStorage then loading should restore an equivalent state.

**Validates: Requirements 3.1, 3.2**

### Property 8: Progress Calculation Correctness

*For any* number of completed modules n where 0 ≤ n ≤ 9, the progress percentage should equal (n / 9) * 100.

**Validates: Requirements 3.3**

### Property 9: Prerequisite-Based Unlocking

*For any* module with prerequisites, that module should be unlocked if and only if all prerequisite module IDs exist in the completedModules array.

**Validates: Requirements 3.4, 11.4**

### Property 10: Achievement Addition

*For any* achievement identifier, calling addAchievement should result in that identifier being present in the achievements array.

**Validates: Requirements 3.5**

### Property 11: Unlocked Region Visual Properties

*For any* unlocked Learning Region, the mesh should have an emissive material with color #7B42BC and intensity 0.5, and should have an associated PointLight with color #7B42BC.

**Validates: Requirements 4.1**

### Property 12: Locked Region Opacity

*For any* locked Learning Region, the mesh opacity should be set to 0.3.

**Validates: Requirements 4.2**

### Property 13: Completed Region Animation

*For any* completed Learning Region, the mesh should be wrapped in a Float component with speed 2 and intensity 0.3.

**Validates: Requirements 4.3**

### Property 14: Path Rendering Between Regions

*For any* pair of sequentially connected regions, a Line component should exist with dashed material properties dashSize: 0.5 and gapSize: 0.3.

**Validates: Requirements 4.4**

### Property 15: Billboard Icon Presence

*For any* Learning Region, there should be at least one Billboard component positioned near that region's coordinates.

**Validates: Requirements 5.1**

### Property 16: Server Icon Geometry and Animation

*For any* server icon, it should use BoxGeometry and have a rotation animation incrementing at 0.01 radians per frame.

**Validates: Requirements 5.2**

### Property 17: Database Icon Geometry

*For any* database icon, it should use CylinderGeometry and be wrapped in a Float component.

**Validates: Requirements 5.3**

### Property 18: Network Icon Geometry

*For any* network icon, it should use SphereGeometry and have interconnected Line components representing connections.

**Validates: Requirements 5.4**

### Property 19: OrbitControls Disable During Animation

*For any* region click that triggers camera animation, the OrbitControls should be disabled during the animation and re-enabled after completion.

**Validates: Requirements 6.4**

### Property 20: Orientation Change Handling

*For any* device orientation change event, the canvas dimensions should recalculate and the camera aspect ratio should update to match the new viewport dimensions.

**Validates: Requirements 7.4**

### Property 21: Keyboard Navigation Sequence

*For any* focused Learning Region, pressing Tab should move focus to the next region in sequential order based on module array index.

**Validates: Requirements 8.1**

### Property 22: Focus Indicator Styling

*For any* Learning Region with focus state, a visible focus indicator should be displayed with a 3px solid border in color #7B42BC.

**Validates: Requirements 8.2**

### Property 23: Keyboard Activation Equivalence

*For any* focused Learning Region, pressing Enter or Space should trigger the same click handler as mouse click interaction.

**Validates: Requirements 8.3**

### Property 24: ARIA Label Format

*For any* interactive Learning Region, the ARIA label should match the format "Module [number]: [name], Status: [locked/unlocked/completed]" where values are derived from the module data.

**Validates: Requirements 8.4**

### Property 25: Color Contrast Compliance

*For any* color combination used for text or UI components, the contrast ratio should meet WCAG 2.1 AA standards (4.5:1 for text, 3:1 for UI components).

**Validates: Requirements 8.5**

### Property 26: Instanced Mesh Optimization

*For any* group of similar 3D objects (same geometry and material), the system should use InstancedMesh to reduce draw calls.

**Validates: Requirements 9.3**

### Property 27: Animation Pause on Visibility Change

*For any* document visibility change to hidden state, all animations using useFrame should pause; when visible again, animations should resume.

**Validates: Requirements 9.4**

### Property 28: Breadcrumb Update on Navigation

*For any* region navigation, the breadcrumb component should update to display "Home > [Region Name]" where Region Name matches the navigated module's name.

**Validates: Requirements 10.2**

### Property 29: Achievement Badge Display

*For any* achievement in the achievements array, a corresponding badge should be displayed in the bottom-right panel.

**Validates: Requirements 10.3**

### Property 30: Module Interface Conformance

*For any* module in the MODULES array, it should conform to the Module TypeScript interface with all required fields: id, name, icon, description, position, type, prerequisites, content.

**Validates: Requirements 11.1**

### Property 31: Region Mesh Position Consistency

*For any* module in the MODULES array, the rendered 3D mesh should be positioned at the exact coordinates specified in the module's position field [x, y, z].

**Validates: Requirements 11.5**

### Property 32: Model Load Error Recovery

*For any* 3D model that fails to load, the system should render a placeholder BoxGeometry with an error texture instead of crashing.

**Validates: Requirements 12.2**

### Property 33: GSAP Animation Fallback

*For any* GSAP animation failure, the Camera Controller should fall back to instant camera position updates without animation, ensuring the camera still reaches the target position.

**Validates: Requirements 12.4**

## Error Handling

### WebGL Detection

```typescript
// lib/webgl-detection.ts

export function detectWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

export function WebGLFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0d1117] text-white">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold mb-4">3D Graphics Not Supported</h1>
        <p className="text-gray-400">
          Your browser does not support 3D graphics. Please use a modern browser like Chrome, Firefox, or Edge.
        </p>
      </div>
    </div>
  );
}
```

### Error Boundary

```typescript
// components/ErrorBoundary.tsx

'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Canvas Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-[#0d1117] text-white">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-6">
              {this.state.error?.message || 'An error occurred while rendering the 3D scene'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#7B42BC] hover:bg-[#6a3aa8] rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### LocalStorage Fallback

```typescript
// lib/storage.ts

export function isLocalStorageAvailable(): boolean {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

export function createStorageAdapter() {
  if (isLocalStorageAvailable()) {
    return {
      getItem: (key: string) => localStorage.getItem(key),
      setItem: (key: string, value: string) => localStorage.setItem(key, value),
      removeItem: (key: string) => localStorage.removeItem(key),
      warning: null
    };
  }
  
  // In-memory fallback
  const memoryStorage = new Map<string, string>();
  return {
    getItem: (key: string) => memoryStorage.get(key) || null,
    setItem: (key: string, value: string) => memoryStorage.set(key, value),
    removeItem: (key: string) => memoryStorage.delete(key),
    warning: 'Progress will not be saved'
  };
}
```

## Testing Strategy

### Unit Testing

The system will use **Vitest** as the testing framework with **React Testing Library** for component testing and **@testing-library/react-three-fiber** for 3D component testing.

**Unit tests will cover:**

- Module data helper functions (getModuleById, getUnlockedModules, getNextModule)
- Progress calculation logic
- Prerequisite validation
- Coordinate transformation utilities
- ARIA label formatting
- Color contrast validation
- WebGL detection
- LocalStorage availability checks

**Example unit test:**

```typescript
// lib/modules.test.ts
import { describe, it, expect } from 'vitest';
import { getUnlockedModules, MODULES } from './modules';

describe('getUnlockedModules', () => {
  it('should return only modules with met prerequisites', () => {
    const completed = ['01-foundation'];
    const unlocked = getUnlockedModules(completed);
    
    expect(unlocked).toContainEqual(
      expect.objectContaining({ id: '02-overview' })
    );
    expect(unlocked).not.toContainEqual(
      expect.objectContaining({ id: '03-basics' })
    );
  });
});
```

### Property-Based Testing

The system will use **fast-check** for property-based testing in TypeScript/JavaScript.

**Configuration:**
- Each property test will run a minimum of 100 iterations
- Tests will use custom generators for Module, ProgressState, and CameraPosition types
- Each property test will be tagged with a comment referencing the design document property

**Property tests will cover:**

- Progress calculation correctness across all possible completion counts (0-9)
- Prerequisite unlocking logic with arbitrary prerequisite combinations
- State persistence round-trip with random state values
- Coordinate transformation accuracy with arbitrary 3D positions
- ARIA label format consistency with random module data
- Module interface conformance for all modules
- Region mesh positioning with arbitrary coordinates

**Example property test:**

```typescript
// lib/store.test.ts
import { describe, it } from 'vitest';
import { fc } from 'fast-check';
import { useProgressStore } from './store';

/**
 * Feature: terraquest-3d-map, Property 8: Progress Calculation Correctness
 */
describe('Property 8: Progress Calculation Correctness', () => {
  it('should calculate progress as (n / 9) * 100 for any n completed modules', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: 9 }),
        (completedCount) => {
          const store = useProgressStore.getState();
          store.reset();
          
          // Complete n modules
          for (let i = 0; i < completedCount; i++) {
            store.completeModule(`0${i + 1}-module`);
          }
          
          const expectedProgress = (completedCount / 9) * 100;
          expect(store.progress).toBe(expectedProgress);
        }
      ),
      { numRuns: 100 }
    );
  });
});
```

**Custom Generators:**

```typescript
// lib/generators.ts
import { fc } from 'fast-check';
import { Module } from '@/types';

export const moduleArbitrary = fc.record({
  id: fc.string({ minLength: 1 }),
  name: fc.string({ minLength: 1 }),
  icon: fc.constantFrom('🌍', '🏔️', '🌲', '🎯', '🔮', '🏛️', '🌐', '🧪', '🚀'),
  description: fc.string(),
  position: fc.tuple(
    fc.float({ min: -20, max: 20 }),
    fc.float({ min: 0, max: 10 }),
    fc.float({ min: -20, max: 20 })
  ),
  type: fc.constantFrom('island', 'peak', 'forest', 'valley', 'realm', 'metropolis', 'archipelago', 'laboratory', 'summit'),
  prerequisites: fc.array(fc.string()),
  content: fc.record({
    title: fc.string(),
    lessons: fc.array(fc.string()),
    challenges: fc.array(fc.string())
  })
}) as fc.Arbitrary<Module>;

export const progressStateArbitrary = fc.record({
  completedModules: fc.array(fc.string(), { maxLength: 9 }),
  currentModule: fc.option(fc.string(), { nil: null }),
  progress: fc.float({ min: 0, max: 100 }),
  achievements: fc.array(fc.string())
});
```

### Integration Testing

Integration tests will verify:
- Camera animation triggering navigation
- Hover interactions displaying cards
- Keyboard navigation flow
- Responsive breakpoint behavior
- Error boundary catching Canvas errors

### Accessibility Testing

Accessibility tests will use **axe-core** via **@axe-core/react** to automatically detect WCAG violations:

```typescript
// app/page.test.tsx
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import JourneyMap from './page';

expect.extend(toHaveNoViolations);

describe('Accessibility', () => {
  it('should have no WCAG violations', async () => {
    const { container } = render(<JourneyMap />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

## Performance Considerations

### Optimization Strategies

1. **Instanced Rendering**: Use `InstancedMesh` for repeated geometries (floating icons, particles)
2. **Lazy Loading**: Wrap Canvas in `Suspense` with loading fallback
3. **Responsive Degradation**: Reduce visual complexity on mobile devices
4. **Animation Pausing**: Pause animations when tab is not visible
5. **Memory Management**: Dispose geometries and materials on unmount
6. **Texture Optimization**: Use compressed textures and mipmaps
7. **Draw Call Reduction**: Batch similar materials and geometries

### Responsive Breakpoints

```typescript
// lib/responsive.ts

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440
} as const;

export function useResponsive() {
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.mobile) setBreakpoint('mobile');
      else if (width < BREAKPOINTS.tablet) setBreakpoint('tablet');
      else setBreakpoint('desktop');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return breakpoint;
}

export function getResponsiveConfig(breakpoint: 'mobile' | 'tablet' | 'desktop') {
  return {
    mobile: {
      cameraDistance: 30,
      particleCount: 50,
      enableShadows: false,
      enablePostProcessing: false,
      simplifiedModels: true
    },
    tablet: {
      cameraDistance: 25,
      particleCount: 100,
      enableShadows: false,
      enablePostProcessing: false,
      simplifiedModels: false
    },
    desktop: {
      cameraDistance: 20,
      particleCount: 200,
      enableShadows: true,
      enablePostProcessing: true,
      simplifiedModels: false
    }
  }[breakpoint];
}
```

## Accessibility Implementation

### Keyboard Navigation

```typescript
// components/RegionMesh.tsx

export function RegionMesh({ module, isLocked, onClick }: RegionMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isFocused, setIsFocused] = useState(false);
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (isFocused && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick(module.id);
    }
  };
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFocused]);
  
  return (
    <mesh
      ref={meshRef}
      position={module.position}
      onClick={() => onClick(module.id)}
      onPointerEnter={() => setIsFocused(true)}
      onPointerLeave={() => setIsFocused(false)}
      tabIndex={0}
      aria-label={`Module ${module.id}: ${module.name}, Status: ${isLocked ? 'locked' : 'unlocked'}`}
    >
      {/* Geometry and materials */}
      {isFocused && (
        <lineSegments>
          <edgesGeometry attach="geometry" args={[geometry]} />
          <lineBasicMaterial attach="material" color="#7B42BC" linewidth={3} />
        </lineSegments>
      )}
    </mesh>
  );
}
```

### Screen Reader Support

All interactive elements will include:
- Descriptive ARIA labels
- Role attributes where appropriate
- Live regions for dynamic updates
- Skip links for navigation

### Color Contrast Validation

```typescript
// lib/accessibility.ts

export function getContrastRatio(color1: string, color2: string): number {
  const getLuminance = (hex: string) => {
    const rgb = parseInt(hex.slice(1), 16);
    const r = ((rgb >> 16) & 0xff) / 255;
    const g = ((rgb >> 8) & 0xff) / 255;
    const b = (rgb & 0xff) / 255;
    
    const [rs, gs, bs] = [r, g, b].map(c =>
      c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
    );
    
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  
  const l1 = getLuminance(color1);
  const l2 = getLuminance(color2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  
  return (lighter + 0.05) / (darker + 0.05);
}

export function meetsWCAG_AA(textColor: string, bgColor: string, isLargeText = false): boolean {
  const ratio = getContrastRatio(textColor, bgColor);
  return isLargeText ? ratio >= 3 : ratio >= 4.5;
}
```

## Deployment Considerations

### Build Configuration

```typescript
// next.config.ts

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    return config;
  },
};

export default nextConfig;
```

### Environment Variables

```env
# .env.local
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_DEBUG_MODE=false
```

### Performance Monitoring

Consider integrating performance monitoring to track:
- FPS (frames per second)
- Memory usage
- Load times
- User interactions

This design provides a comprehensive foundation for building the TerraQuest 3D Interactive Map with full accessibility, responsive design, and robust error handling.
