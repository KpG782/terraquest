import { Module } from '@/types';

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
  {
    id: '03-basics',
    name: 'Basics Forest',
    icon: '🌲',
    description: 'Master the basic building blocks of Terraform',
    position: [0, 0, 0],
    type: 'forest',
    prerequisites: ['02-overview'],
    content: {
      title: 'Terraform Basics',
      lessons: ['Resources', 'Data Sources', 'Outputs'],
      challenges: ['Create Resources', 'Query Data Sources']
    }
  },
  {
    id: '04-variables',
    name: 'Variables Valley',
    icon: '🎯',
    description: 'Learn to parameterize your infrastructure',
    position: [4, -1, 2],
    type: 'valley',
    prerequisites: ['03-basics'],
    content: {
      title: 'Variables & Inputs',
      lessons: ['Input Variables', 'Local Values', 'Variable Types'],
      challenges: ['Parameterize Config', 'Use Complex Types']
    }
  },
  {
    id: '05-features',
    name: 'Features Realm',
    icon: '🔮',
    description: 'Explore advanced Terraform features',
    position: [8, 1, 0],
    type: 'realm',
    prerequisites: ['04-variables'],
    content: {
      title: 'Advanced Features',
      lessons: ['Functions', 'Expressions', 'Dynamic Blocks'],
      challenges: ['Use Built-in Functions', 'Create Dynamic Resources']
    }
  },
  {
    id: '06-modules',
    name: 'Module Metropolis',
    icon: '🏛️',
    description: 'Build reusable infrastructure components',
    position: [6, 0, -4],
    type: 'metropolis',
    prerequisites: ['05-features'],
    content: {
      title: 'Terraform Modules',
      lessons: ['Module Basics', 'Module Sources', 'Module Composition'],
      challenges: ['Create Module', 'Use Public Modules']
    }
  },
  {
    id: '07-multi-env',
    name: 'Multi-Env Archipelago',
    icon: '🌐',
    description: 'Manage multiple environments effectively',
    position: [2, 0, -6],
    type: 'archipelago',
    prerequisites: ['06-modules'],
    content: {
      title: 'Multi-Environment Management',
      lessons: ['Workspaces', 'Environment Strategies', 'Remote State'],
      challenges: ['Setup Workspaces', 'Configure Remote Backend']
    }
  },
  {
    id: '08-testing',
    name: 'Testing Laboratory',
    icon: '🧪',
    description: 'Test and validate your infrastructure code',
    position: [-2, 1, -8],
    type: 'laboratory',
    prerequisites: ['07-multi-env'],
    content: {
      title: 'Testing & Validation',
      lessons: ['Validation', 'Testing Strategies', 'Policy as Code'],
      challenges: ['Write Tests', 'Implement Policies']
    }
  },
  {
    id: '09-workflow',
    name: 'Workflow Summit',
    icon: '🚀',
    description: 'Master the complete Terraform workflow',
    position: [-6, 3, -6],
    type: 'summit',
    prerequisites: ['08-testing'],
    content: {
      title: 'Terraform Workflow',
      lessons: ['CI/CD Integration', 'Team Collaboration', 'Best Practices'],
      challenges: ['Setup Pipeline', 'Implement GitOps']
    }
  }
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
