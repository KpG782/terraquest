# Implementation Plan

- [x] 1. Project setup and dependencies


  - Install React Three Fiber, drei, GSAP, Zustand, and supporting libraries
  - Configure Next.js for 3D rendering (transpile packages, webpack externals)
  - Set up Tailwind with custom color scheme (Terraform purple, cloud provider colors)
  - Create base folder structure (components, lib, types)
  - _Requirements: 1.1, 1.4_

- [x] 2. Core data structures and type definitions


  - Define TypeScript interfaces (Module, ProgressState, CameraPosition, RegionState)
  - Create module data array with 9 regions (Foundation Island, Overview Peak, etc.)
  - Implement helper functions (getModuleById, getUnlockedModules, getNextModule)
  - _Requirements: 11.1, 11.2, 11.3_

- [ ]* 2.1 Write property test for module interface conformance
  - **Property 30: Module Interface Conformance**
  - **Validates: Requirements 11.1**

- [ ]* 2.2 Write property test for prerequisite validation
  - **Property 9: Prerequisite-Based Unlocking**
  - **Validates: Requirements 3.4, 11.4**

- [x] 3. Zustand progress store implementation


  - Create Zustand store with persist middleware
  - Implement state actions (unlockModule, completeModule, addAchievement, reset)
  - Add localStorage adapter with fallback for unavailable storage
  - Implement progress calculation logic
  - _Requirements: 3.1, 3.2, 3.3, 3.5, 12.3_

- [ ]* 3.1 Write property test for progress calculation
  - **Property 8: Progress Calculation Correctness**
  - **Validates: Requirements 3.3**

- [ ]* 3.2 Write property test for state persistence round trip
  - **Property 7: Progress State Persistence Round Trip**
  - **Validates: Requirements 3.1, 3.2**

- [ ]* 3.3 Write property test for achievement addition
  - **Property 10: Achievement Addition**
  - **Validates: Requirements 3.5**

- [x] 4. WebGL detection and error boundaries


  - Implement WebGL detection utility
  - Create WebGLFallback component with user-friendly message
  - Build ErrorBoundary component with retry functionality
  - Add error handling for Canvas failures
  - _Requirements: 12.1, 12.5_



- [ ] 5. Base 3D scene setup
  - Create JourneyMap3D component with Canvas wrapper
  - Add Suspense with loading fallback
  - Configure Scene component with Environment preset "city" and Stars
  - Set initial camera position (0, 15, 20)
  - Add ambient and directional lighting
  - _Requirements: 1.1, 1.2, 1.4, 9.1_

- [ ]* 5.1 Write unit test for initial camera position
  - **Validates: Requirements 1.2**

- [x]* 5.2 Write unit test for scene components presence


  - **Validates: Requirements 1.4**

- [ ] 6. RegionMesh component implementation
  - Create RegionMesh component with geometry selection based on module type
  - Implement click handlers for region interaction
  - Add hover state management
  - Apply visual styling (emissive materials, opacity, colors)
  - _Requirements: 1.3, 2.1, 2.3, 4.1, 4.2_

- [ ]* 6.1 Write property test for geometry type mapping
  - **Property 2: Geometry Type Mapping**
  - **Validates: Requirements 1.3**

- [ ]* 6.2 Write property test for locked region behavior
  - **Property 4: Locked Region Behavior**
  - **Validates: Requirements 2.3**

- [ ]* 6.3 Write property test for unlocked region visual properties
  - **Property 11: Unlocked Region Visual Properties**
  - **Validates: Requirements 4.1**

- [ ]* 6.4 Write property test for locked region opacity
  - **Property 12: Locked Region Opacity**
  - **Validates: Requirements 4.2**



- [ ]* 6.5 Write property test for region mesh positioning
  - **Property 31: Region Mesh Position Consistency**
  - **Validates: Requirements 11.5**

- [ ] 7. Completed region animations
  - Add Float component wrapper for completed regions
  - Configure pulsing animation (speed: 2, intensity: 0.3)
  - Integrate completion state from Zustand store


  - _Requirements: 4.3_

- [ ]* 7.1 Write property test for completed region animation
  - **Property 13: Completed Region Animation**
  - **Validates: Requirements 4.3**

- [ ] 8. Path lines between regions
  - Create PathLine component using drei Line

  - Implement dashed material (dashSize: 0.5, gapSize: 0.3)
  - Connect sequential regions based on module array order
  - _Requirements: 4.4_

- [ ]* 8.1 Write property test for path rendering
  - **Property 14: Path Rendering Between Regions**
  - **Validates: Requirements 4.4**

- [x] 9. Floating infrastructure icons

  - Create FloatingIcon component with Billboard
  - Implement icon type variants (server: BoxGeometry, database: CylinderGeometry, network: SphereGeometry)
  - Add rotation animations using useFrame for servers
  - Add Float component for databases
  - Add interconnected lines for network icons
  - Position icons near each region
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [ ]* 9.1 Write property test for billboard icon presence
  - **Property 15: Billboard Icon Presence**
  - **Validates: Requirements 5.1**

- [ ]* 9.2 Write property test for server icon geometry
  - **Property 16: Server Icon Geometry and Animation**
  - **Validates: Requirements 5.2**

- [ ]* 9.3 Write property test for database icon geometry
  - **Property 17: Database Icon Geometry**
  - **Validates: Requirements 5.3**

- [ ]* 9.4 Write property test for network icon geometry
  - **Property 18: Network Icon Geometry**
  - **Validates: Requirements 5.4**

- [x] 10. GSAP camera animation system



  - Create CameraController component
  - Implement GSAP timeline for camera dolly and pan
  - Use Power2.easeInOut easing with 1.5s duration
  - Disable OrbitControls during animation
  - Trigger navigation on animation complete
  - Add fallback for GSAP failures
  - _Requirements: 2.1, 2.2, 6.4, 12.4_

- [ ]* 10.1 Write property test for camera animation navigation
  - **Property 3: Camera Animation Triggers Navigation**
  - **Validates: Requirements 2.1, 2.2**

- [ ]* 10.2 Write property test for OrbitControls disable during animation
  - **Property 19: OrbitControls Disable During Animation**
  - **Validates: Requirements 6.4**

- [ ]* 10.3 Write property test for GSAP animation fallback
  - **Property 33: GSAP Animation Fallback**
  - **Validates: Requirements 12.4**

- [x] 11. OrbitControls configuration


  - Add OrbitControls from drei
  - Set target to (0, 0, 0)
  - Configure zoom limits (minDistance: 10, maxDistance: 50)
  - Set pan limits (x: [-20, 20], z: [-20, 20])
  - _Requirements: 6.1, 6.2, 6.3_

- [ ]* 11.1 Write unit tests for OrbitControls configuration
  - **Validates: Requirements 6.1, 6.2, 6.3**

- [x] 12. GlassmorphismCard component


  - Create card component with Tailwind glassmorphism styling
  - Implement 3D to 2D coordinate transformation
  - Display module name, description, and status
  - Position card based on hovered region
  - Add visibility toggle based on hover state
  - _Requirements: 2.4, 2.5, 4.5_

- [ ]* 12.1 Write property test for hover card display
  - **Property 5: Hover Card Display**
  - **Validates: Requirements 2.4**

- [ ]* 12.2 Write property test for coordinate transformation
  - **Property 6: 3D to 2D Coordinate Transformation**
  - **Validates: Requirements 2.5**

- [ ]* 12.3 Write unit test for glassmorphism classes
  - **Validates: Requirements 4.5**

- [x] 13. ProgressBar component


  - Create progress bar UI component
  - Connect to Zustand store progress value
  - Display percentage (0-100%)
  - Position at top of viewport with fixed positioning
  - Style with Tailwind and Terraform purple
  - _Requirements: 10.1_

- [ ]* 13.1 Write unit test for progress bar display
  - **Validates: Requirements 10.1**

- [x] 14. Breadcrumb component



  - Create breadcrumb navigation component
  - Update on region navigation
  - Display format: "Home > [Region Name]"
  - Style with Tailwind
  - _Requirements: 10.2_

- [ ]* 14.1 Write property test for breadcrumb updates
  - **Property 28: Breadcrumb Update on Navigation**
  - **Validates: Requirements 10.2**

- [x] 15. AchievementBadges component


  - Create achievement display panel
  - Position in bottom-right corner (fixed)
  - Map achievements array to badge elements
  - Add transition animations
  - _Requirements: 10.3, 10.5_

- [ ]* 15.1 Write property test for achievement badge display
  - **Property 29: Achievement Badge Display**
  - **Validates: Requirements 10.3**

- [ ]* 15.2 Write unit test for overlay UI layering
  - **Validates: Requirements 10.4**

- [ ]* 15.3 Write unit test for transition classes
  - **Validates: Requirements 10.5**

- [x] 16. UIOverlay container component


  - Create container for all 2D UI elements
  - Ensure proper z-index layering above Canvas
  - Integrate ProgressBar, Breadcrumb, GlassmorphismCard, AchievementBadges
  - _Requirements: 10.4_

- [x] 17. Responsive design implementation


  - Create useResponsive hook with breakpoint detection
  - Implement responsive configuration (camera distance, particle count, effects)
  - Add viewport width detection (desktop: ≥1024px, tablet: 768-1023px, mobile: <768px)
  - Adjust scene complexity based on breakpoint
  - Handle orientation change events
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ]* 17.1 Write unit tests for responsive breakpoints
  - **Validates: Requirements 7.1, 7.2, 7.3, 7.5**

- [ ]* 17.2 Write property test for orientation change handling
  - **Property 20: Orientation Change Handling**
  - **Validates: Requirements 7.4**

- [x] 18. Keyboard navigation implementation


  - Add tabIndex to RegionMesh components
  - Implement Tab key navigation through regions
  - Add Enter/Space key handlers for activation
  - Create visible focus indicators (3px border, #7B42BC)
  - _Requirements: 8.1, 8.2, 8.3_

- [ ]* 18.1 Write property test for keyboard navigation sequence
  - **Property 21: Keyboard Navigation Sequence**
  - **Validates: Requirements 8.1**

- [ ]* 18.2 Write property test for focus indicator styling
  - **Property 22: Focus Indicator Styling**
  - **Validates: Requirements 8.2**

- [ ]* 18.3 Write property test for keyboard activation equivalence
  - **Property 23: Keyboard Activation Equivalence**
  - **Validates: Requirements 8.3**

- [x] 19. ARIA labels and screen reader support


  - Add ARIA labels to all interactive regions
  - Format labels: "Module [number]: [name], Status: [locked/unlocked/completed]"
  - Add role attributes where appropriate
  - Implement live regions for dynamic updates
  - _Requirements: 8.4_

- [ ]* 19.1 Write property test for ARIA label format
  - **Property 24: ARIA Label Format**
  - **Validates: Requirements 8.4**

- [x] 20. Color contrast validation

  - Implement contrast ratio calculation utility
  - Validate all color combinations meet WCAG 2.1 AA (4.5:1 text, 3:1 UI)
  - Test Terraform purple against backgrounds
  - Test cloud provider colors
  - _Requirements: 8.5_

- [ ]* 20.1 Write property test for color contrast compliance
  - **Property 25: Color Contrast Compliance**
  - **Validates: Requirements 8.5**

- [x] 21. Performance optimizations



  - Implement instanced meshes for similar objects
  - Add visibility-based animation pausing
  - Implement geometry and material disposal on unmount
  - Add preloading for external models (if any)
  - _Requirements: 9.2, 9.3, 9.4, 9.5_

- [ ]* 21.1 Write property test for instanced mesh optimization
  - **Property 26: Instanced Mesh Optimization**
  - **Validates: Requirements 9.3**

- [ ]* 21.2 Write property test for animation pause on visibility change
  - **Property 27: Animation Pause on Visibility Change**
  - **Validates: Requirements 9.4**

- [ ]* 21.3 Write unit test for Suspense wrapper
  - **Validates: Requirements 9.1**

- [ ]* 21.4 Write unit test for model preloading
  - **Validates: Requirements 9.2**

- [x] 22. Error recovery and fallbacks


  - Implement model load error recovery with placeholder geometry
  - Test localStorage fallback with in-memory storage
  - Verify WebGL fallback message
  - Test error boundary retry functionality
  - _Requirements: 12.2, 12.3_

- [ ]* 22.1 Write property test for model load error recovery
  - **Property 32: Model Load Error Recovery**
  - **Validates: Requirements 12.2**

- [ ]* 22.2 Write unit test for localStorage fallback
  - **Validates: Requirements 12.3**

- [ ]* 22.3 Write unit test for WebGL fallback
  - **Validates: Requirements 12.1**

- [ ]* 22.4 Write unit test for error boundary
  - **Validates: Requirements 12.5**

- [x] 23. Module detail pages

  - Create dynamic route app/module/[id]/page.tsx
  - Fetch module data by ID
  - Display module content (title, lessons, challenges)
  - Add navigation back to Journey Map
  - _Requirements: 2.2_

- [x] 24. Integration and polish


  - Wire all components together in app/page.tsx
  - Test complete user flow (click region → animate → navigate)
  - Verify state persistence across page reloads
  - Test responsive behavior on different devices
  - Verify accessibility with keyboard-only navigation
  - _Requirements: All_

- [x] 25. Checkpoint - Ensure all tests pass


  - Ensure all tests pass, ask the user if questions arise.

- [ ]* 26. Property-based test generators
  - Create custom fast-check generators for Module, ProgressState types
  - Implement arbitrary generators for 3D coordinates
  - Create generators for color values and contrast testing
  - _Requirements: All property tests_

- [ ]* 27. Accessibility testing with axe-core
  - Install @axe-core/react
  - Create accessibility test suite
  - Run automated WCAG violation detection
  - Fix any detected violations
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5_
