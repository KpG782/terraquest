# TerraQuest Journey Map Documentation

## Overview
TerraQuest is an interactive 3D learning journey through Terraform, organized into 9 modules across 4 regions. Each module builds upon previous knowledge, creating a progressive learning path from beginner to mastery.

## Region Structure

### 🌊 Starter Region (Southwest)
**Theme**: Foundation and Overview  
**Color**: Blue (#3B82F6)  
**Modules**: 2

#### 1. Foundation Island
- **ID**: `01-foundation`
- **Type**: Island
- **Position**: Southwest (-25, 0, 15)
- **Prerequisites**: None (Starting point)
- **Estimated Time**: 2 hours
- **Description**: Begin your journey into Infrastructure as Code
- **Topics**:
  - What is Infrastructure as Code?
  - Why Terraform?
  - Core Terraform Concepts
- **Resources**:
  - [Official Terraform Docs](https://developer.hashicorp.com/terraform/docs)
  - [HashiCorp Learn](https://developer.hashicorp.com/terraform/tutorials)
  - [Terraform Registry](https://registry.terraform.io/)

#### 2. Overview Peak
- **ID**: `02-overview`
- **Type**: Peak
- **Position**: Southwest (-18, 2, 12)
- **Prerequisites**: Foundation Island
- **Estimated Time**: 1.5 hours
- **Description**: Get a bird's eye view of Terraform architecture
- **Topics**:
  - Terraform Architecture
  - Understanding Providers
  - State Management Basics
- **Resources**:
  - [Provider Documentation](https://developer.hashicorp.com/terraform/language/providers)
  - [State Management Guide](https://developer.hashicorp.com/terraform/language/state)
  - [Architecture Diagrams](https://developer.hashicorp.com/terraform/internals/architecture)

---

### 🌲 Foundation Region (Center-West)
**Theme**: Core Building Blocks  
**Color**: Purple (#A855F7)  
**Modules**: 2

#### 3. Basics Forest
- **ID**: `03-basics`
- **Type**: Forest
- **Position**: Center-West (-8, 0, 0)
- **Prerequisites**: Overview Peak
- **Estimated Time**: 3 hours
- **Description**: Navigate through the essential Terraform building blocks
- **Topics**:
  - Working with Resources
  - Data Sources
  - Outputs and Values
- **Resources**:
  - [Resource Documentation](https://developer.hashicorp.com/terraform/language/resources)
  - [Data Source Examples](https://developer.hashicorp.com/terraform/language/data-sources)
  - [HCL Syntax Guide](https://developer.hashicorp.com/terraform/language/syntax)

#### 4. Variables Valley
- **ID**: `04-variables`
- **Type**: Valley
- **Position**: Center (0, -0.5, -3)
- **Prerequisites**: Basics Forest
- **Estimated Time**: 2.5 hours
- **Description**: Learn to parameterize and customize your infrastructure
- **Topics**:
  - Input Variables
  - Local Values
  - Complex Variable Types
- **Resources**:
  - [Variable Documentation](https://developer.hashicorp.com/terraform/language/values/variables)
  - [Type System Guide](https://developer.hashicorp.com/terraform/language/expressions/types)
  - [Validation Examples](https://developer.hashicorp.com/terraform/language/values/variables#custom-validation-rules)

---

### 🔥 Advanced Region (East)
**Theme**: Advanced Features and Modularity  
**Color**: Orange (#F97316)  
**Modules**: 2

#### 5. Features Realm
- **ID**: `05-features`
- **Type**: Realm
- **Position**: East (15, 0.5, -5)
- **Prerequisites**: Variables Valley
- **Estimated Time**: 3.5 hours
- **Description**: Unlock advanced Terraform capabilities
- **Topics**:
  - Built-in Functions
  - Expressions and Operators
  - Dynamic Blocks
- **Resources**:
  - [Function Reference](https://developer.hashicorp.com/terraform/language/functions)
  - [Expression Documentation](https://developer.hashicorp.com/terraform/language/expressions)
  - [Dynamic Block Examples](https://developer.hashicorp.com/terraform/language/expressions/dynamic-blocks)

#### 6. Module Metropolis
- **ID**: `06-modules`
- **Type**: Metropolis
- **Position**: Northeast (22, 0, -12)
- **Prerequisites**: Features Realm
- **Estimated Time**: 4 hours
- **Description**: Build reusable infrastructure components
- **Topics**:
  - Module Fundamentals
  - Module Sources
  - Module Composition
- **Resources**:
  - [Module Registry](https://registry.terraform.io/browse/modules)
  - [Module Development Guide](https://developer.hashicorp.com/terraform/language/modules/develop)
  - [Best Practices](https://developer.hashicorp.com/terraform/language/modules)

---

### 🏔️ Mastery Region (North)
**Theme**: Production-Ready Workflows  
**Color**: Red (#EF4444)  
**Modules**: 3

#### 7. Multi-Env Archipelago
- **ID**: `07-multi-env`
- **Type**: Archipelago
- **Position**: North (8, 0, -22)
- **Prerequisites**: Module Metropolis
- **Estimated Time**: 3.5 hours
- **Description**: Master multi-environment infrastructure management
- **Topics**:
  - Terraform Workspaces
  - Environment Strategies
  - Remote State & Backends
- **Resources**:
  - [Backend Documentation](https://developer.hashicorp.com/terraform/language/settings/backends/configuration)
  - [Workspace Guide](https://developer.hashicorp.com/terraform/language/state/workspaces)
  - [Environment Patterns](https://developer.hashicorp.com/terraform/tutorials/modules/organize-configuration)

#### 8. Testing Laboratory
- **ID**: `08-testing`
- **Type**: Laboratory
- **Position**: Northwest (-5, 1, -25)
- **Prerequisites**: Multi-Env Archipelago
- **Estimated Time**: 3 hours
- **Description**: Validate and test your infrastructure code
- **Topics**:
  - Terraform Validation
  - Testing Strategies
  - Policy as Code
- **Resources**:
  - [Terratest Documentation](https://terratest.gruntwork.io/)
  - [Sentinel Guide](https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement)
  - [Testing Best Practices](https://developer.hashicorp.com/terraform/tutorials/configuration-language/test)

#### 9. Workflow Summit
- **ID**: `09-workflow`
- **Type**: Summit
- **Position**: Far Northwest (-18, 3, -30)
- **Prerequisites**: Testing Laboratory
- **Estimated Time**: 4 hours
- **Description**: Reach the peak of Terraform mastery
- **Topics**:
  - CI/CD Integration
  - Team Collaboration
  - Best Practices & Patterns
- **Resources**:
  - [CI/CD Examples](https://developer.hashicorp.com/terraform/tutorials/automation)
  - [GitOps Guide](https://developer.hashicorp.com/terraform/tutorials/automation/automate-terraform)
  - [Enterprise Patterns](https://developer.hashicorp.com/terraform/enterprise)

---

## Learning Path

### Recommended Progression
```
Foundation Island (2h)
    ↓
Overview Peak (1.5h)
    ↓
Basics Forest (3h)
    ↓
Variables Valley (2.5h)
    ↓
Features Realm (3.5h)
    ↓
Module Metropolis (4h)
    ↓
Multi-Env Archipelago (3.5h)
    ↓
Testing Laboratory (3h)
    ↓
Workflow Summit (4h)
```

**Total Learning Time**: ~26.5 hours

### Difficulty Levels
- **Beginner** (Modules 1-2): Foundation Island, Overview Peak
- **Intermediate** (Modules 3-4): Basics Forest, Variables Valley
- **Advanced** (Modules 5-9): Features Realm through Workflow Summit

---

## Module Types & Visual Design

### Island 🏝️
- **Example**: Foundation Island
- **Geometry**: Cone with wide base
- **Symbolism**: Starting point, solid foundation

### Peak ⛰️
- **Example**: Overview Peak
- **Geometry**: Sharp cone
- **Symbolism**: High-level perspective, overview

### Forest 🌲
- **Example**: Basics Forest
- **Geometry**: Cylinder with texture
- **Symbolism**: Dense knowledge, exploration

### Valley 🏞️
- **Example**: Variables Valley
- **Geometry**: Inverted cone
- **Symbolism**: Deep dive, detailed learning

### Realm 🌟
- **Example**: Features Realm
- **Geometry**: Octahedron
- **Symbolism**: Magical capabilities, power

### Metropolis 🏙️
- **Example**: Module Metropolis
- **Geometry**: Box (building-like)
- **Symbolism**: Structure, organization, scale

### Archipelago 🗺️
- **Example**: Multi-Env Archipelago
- **Geometry**: Multiple small spheres
- **Symbolism**: Multiple environments, distribution

### Laboratory 🔬
- **Example**: Testing Laboratory
- **Geometry**: Torus
- **Symbolism**: Experimentation, testing cycles

### Summit 🏔️
- **Example**: Workflow Summit
- **Geometry**: Tall cone
- **Symbolism**: Peak achievement, mastery

---

## Interactive Features

### Navigation
- **Click**: Navigate to module detail page
- **Hover**: Display glassmorphism card with module info
- **Keyboard**: Tab through modules, Enter/Space to select

### Visual States
- **Locked** 🔒: Gray, low opacity (0.3), prerequisites not met
- **Unlocked** 🔓: Full color, interactive, prerequisites met
- **Completed** ✅: Green glow, pulsing animation, marked as done

### Camera Controls
- **Orbit**: Left-click drag or one-finger touch
- **Zoom**: Scroll or pinch
- **Pan**: Right-click drag or two-finger touch
- **Boundaries**: Limited to ±35 units in X and Z axes

---

## Progress Tracking

### Achievements
Unlock achievements by completing modules and challenges:
- **First Steps**: Complete Foundation Island
- **Architect**: Complete all Foundation Region modules
- **Advanced Practitioner**: Complete all Advanced Region modules
- **Terraform Master**: Complete all 9 modules

### Points System
Each challenge awards points based on difficulty:
- **Beginner**: 50-100 points
- **Intermediate**: 125-175 points
- **Advanced**: 200-400 points

**Total Available Points**: ~2,000+ points

---

## Technical Implementation

### Data Structure
All module data is defined in `lib/modules.ts` with the following structure:
```typescript
interface Module {
  id: string;
  name: string;
  icon: string;
  description: string;
  position: [number, number, number];
  region: 'starter' | 'foundation' | 'advanced' | 'mastery';
  type: 'island' | 'peak' | 'forest' | 'valley' | 'realm' | 'metropolis' | 'archipelago' | 'laboratory' | 'summit';
  prerequisites: string[];
  estimatedTime: string;
  content: {
    title: string;
    overview: string;
    lessons: Lesson[];
    challenges: Challenge[];
    resources: string[];
  };
}
```

### State Management
Progress is tracked using Zustand with localStorage persistence:
- Completed modules
- Current module
- Overall progress percentage
- Unlocked achievements

### Responsive Design
- **Desktop** (≥1024px): Full 3D experience with all effects
- **Tablet** (768-1023px): Reduced particle count, optimized rendering
- **Mobile** (<768px): Minimal effects, touch-optimized controls

---

## Accessibility

### WCAG 2.1 AA Compliance
- Color contrast ratios: 4.5:1 for text, 3:1 for UI components
- Keyboard navigation support
- ARIA labels on all interactive elements
- Screen reader friendly
- Focus indicators (3px border, #7B42BC)

### Keyboard Shortcuts
- **Tab**: Navigate between modules
- **Enter/Space**: Select focused module
- **Escape**: Return to map view (from module page)

---

## Getting Started

1. **Start at Foundation Island**: No prerequisites required
2. **Complete lessons**: Learn core concepts
3. **Take challenges**: Earn points and practice
4. **Unlock next module**: Complete prerequisites to progress
5. **Track progress**: Monitor your journey in the progress bar
6. **Earn achievements**: Complete milestones for badges

---

## Support & Resources

### Official Documentation
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [HashiCorp Learn](https://developer.hashicorp.com/terraform/tutorials)
- [Terraform Registry](https://registry.terraform.io/)

### Community
- [Terraform Community Forum](https://discuss.hashicorp.com/c/terraform-core)
- [GitHub Issues](https://github.com/hashicorp/terraform/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/terraform)

---

## License & Attribution
See [LICENSE](./LICENSE) and [ATTRIBUTION.md](./ATTRIBUTION.md) for details.
