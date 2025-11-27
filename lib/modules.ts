import { Module } from '@/types';

export const MODULES: Module[] = [
  // STARTER REGION - Foundation Island (Southwest)
  {
    id: '01-foundation',
    name: 'Foundation Island',
    icon: 'FaGlobeAmericas',
    description: 'Begin your journey into Infrastructure as Code',
    position: [-25, 0, 15],
    region: 'starter',
    type: 'island',
    prerequisites: [],
    estimatedTime: '2 hours',
    content: {
      title: 'Terraform Foundations',
      overview: 'Start your Infrastructure as Code journey by understanding the core concepts and benefits of Terraform. Learn why IaC matters and how Terraform fits into modern DevOps practices.',
      lessons: [
        {
          id: 'lesson-01-01',
          title: 'What is Infrastructure as Code?',
          duration: '20 min',
          description: 'Understand the principles of IaC and how it revolutionizes infrastructure management',
          topics: ['IaC Benefits', 'Declarative vs Imperative', 'Version Control', 'Reproducibility']
        },
        {
          id: 'lesson-01-02',
          title: 'Why Terraform?',
          duration: '25 min',
          description: 'Explore Terraform\'s unique advantages and ecosystem',
          topics: ['Multi-Cloud Support', 'Provider Ecosystem', 'State Management', 'Community']
        },
        {
          id: 'lesson-01-03',
          title: 'Core Terraform Concepts',
          duration: '30 min',
          description: 'Learn the fundamental building blocks of Terraform',
          topics: ['Resources', 'Providers', 'State', 'Configuration Language']
        }
      ],
      challenges: [
        {
          id: 'challenge-01-01',
          title: 'Install Terraform',
          difficulty: 'beginner',
          description: 'Set up Terraform on your local machine and verify the installation',
          points: 50
        },
        {
          id: 'challenge-01-02',
          title: 'Your First Configuration',
          difficulty: 'beginner',
          description: 'Write and apply your first Terraform configuration file',
          points: 100
        }
      ],
      resources: ['Official Terraform Docs', 'HashiCorp Learn', 'Terraform Registry']
    }
  },

  // STARTER REGION - Overview Peak (Southwest)
  {
    id: '02-overview',
    name: 'Overview Peak',
    icon: 'FaMountain',
    description: 'Get a bird\'s eye view of Terraform architecture',
    position: [-18, 2, 12],
    region: 'starter',
    type: 'peak',
    prerequisites: ['01-foundation'],
    estimatedTime: '1.5 hours',
    content: {
      title: 'Terraform Architecture Overview',
      overview: 'Climb to the peak and understand how Terraform works under the hood. Learn about the architecture, workflow, and key components that make Terraform powerful.',
      lessons: [
        {
          id: 'lesson-02-01',
          title: 'Terraform Architecture',
          duration: '25 min',
          description: 'Deep dive into Terraform\'s core architecture and workflow',
          topics: ['Core vs Plugins', 'Terraform Workflow', 'Graph Theory', 'Dependency Resolution']
        },
        {
          id: 'lesson-02-02',
          title: 'Understanding Providers',
          duration: '20 min',
          description: 'Learn how providers enable Terraform to manage any infrastructure',
          topics: ['Provider Types', 'Provider Configuration', 'Authentication', 'Version Constraints']
        },
        {
          id: 'lesson-02-03',
          title: 'State Management Basics',
          duration: '30 min',
          description: 'Understand how Terraform tracks your infrastructure',
          topics: ['State File Purpose', 'Local vs Remote State', 'State Locking', 'State Commands']
        }
      ],
      challenges: [
        {
          id: 'challenge-02-01',
          title: 'Configure Your First Provider',
          difficulty: 'beginner',
          description: 'Set up and configure a cloud provider in Terraform',
          points: 75
        },
        {
          id: 'challenge-02-02',
          title: 'Inspect Terraform State',
          difficulty: 'beginner',
          description: 'Use Terraform commands to inspect and understand state',
          points: 75
        }
      ],
      resources: ['Provider Documentation', 'State Management Guide', 'Architecture Diagrams']
    }
  },

  // FOUNDATION REGION - Basics Forest (Center-West)
  {
    id: '03-basics',
    name: 'Basics Forest',
    icon: 'FaTree',
    description: 'Navigate through the essential Terraform building blocks',
    position: [-8, 0, 0],
    region: 'foundation',
    type: 'forest',
    prerequisites: ['02-overview'],
    estimatedTime: '3 hours',
    content: {
      title: 'Terraform Basics',
      overview: 'Master the fundamental building blocks of Terraform. Learn to create resources, query data sources, and output values effectively.',
      lessons: [
        {
          id: 'lesson-03-01',
          title: 'Working with Resources',
          duration: '45 min',
          description: 'Learn to define and manage infrastructure resources',
          topics: ['Resource Syntax', 'Resource Arguments', 'Meta-Arguments', 'Resource Lifecycle']
        },
        {
          id: 'lesson-03-02',
          title: 'Data Sources',
          duration: '35 min',
          description: 'Query existing infrastructure and external data',
          topics: ['Data Source Types', 'Data vs Resources', 'Filtering Data', 'Dynamic Lookups']
        },
        {
          id: 'lesson-03-03',
          title: 'Outputs and Values',
          duration: '25 min',
          description: 'Export values from your Terraform configurations',
          topics: ['Output Syntax', 'Sensitive Outputs', 'Output Dependencies', 'Module Outputs']
        }
      ],
      challenges: [
        {
          id: 'challenge-03-01',
          title: 'Create Multi-Resource Infrastructure',
          difficulty: 'intermediate',
          description: 'Build infrastructure with multiple interconnected resources',
          points: 150
        },
        {
          id: 'challenge-03-02',
          title: 'Query and Use Data Sources',
          difficulty: 'intermediate',
          description: 'Use data sources to reference existing infrastructure',
          points: 125
        }
      ],
      resources: ['Resource Documentation', 'Data Source Examples', 'HCL Syntax Guide']
    }
  },

  // FOUNDATION REGION - Variables Valley (Center)
  {
    id: '04-variables',
    name: 'Variables Valley',
    icon: 'FaSlidersH',
    description: 'Learn to parameterize and customize your infrastructure',
    position: [0, -0.5, -3],
    region: 'foundation',
    type: 'valley',
    prerequisites: ['03-basics'],
    estimatedTime: '2.5 hours',
    content: {
      title: 'Variables & Configuration',
      overview: 'Make your infrastructure flexible and reusable with variables, locals, and input validation. Learn to handle different data types and create dynamic configurations.',
      lessons: [
        {
          id: 'lesson-04-01',
          title: 'Input Variables',
          duration: '40 min',
          description: 'Parameterize your Terraform configurations',
          topics: ['Variable Types', 'Default Values', 'Variable Files', 'Environment Variables']
        },
        {
          id: 'lesson-04-02',
          title: 'Local Values',
          duration: '25 min',
          description: 'Create computed values and reduce repetition',
          topics: ['Locals Syntax', 'Expressions', 'Computed Values', 'Best Practices']
        },
        {
          id: 'lesson-04-03',
          title: 'Complex Variable Types',
          duration: '35 min',
          description: 'Work with lists, maps, and objects',
          topics: ['Collections', 'Structural Types', 'Type Constraints', 'Validation Rules']
        }
      ],
      challenges: [
        {
          id: 'challenge-04-01',
          title: 'Parameterize Your Configuration',
          difficulty: 'intermediate',
          description: 'Convert hardcoded values to variables with validation',
          points: 150
        },
        {
          id: 'challenge-04-02',
          title: 'Work with Complex Types',
          difficulty: 'intermediate',
          description: 'Use maps and objects to manage complex infrastructure',
          points: 175
        }
      ],
      resources: ['Variable Documentation', 'Type System Guide', 'Validation Examples']
    }
  },

  // ADVANCED REGION - Features Realm (East)
  {
    id: '05-features',
    name: 'Features Realm',
    icon: 'FaMagic',
    description: 'Unlock advanced Terraform capabilities',
    position: [15, 0.5, -5],
    region: 'advanced',
    type: 'realm',
    prerequisites: ['04-variables'],
    estimatedTime: '3.5 hours',
    content: {
      title: 'Advanced Terraform Features',
      overview: 'Explore powerful Terraform features including built-in functions, expressions, and dynamic blocks. Learn to write more efficient and maintainable configurations.',
      lessons: [
        {
          id: 'lesson-05-01',
          title: 'Built-in Functions',
          duration: '50 min',
          description: 'Master Terraform\'s extensive function library',
          topics: ['String Functions', 'Collection Functions', 'Encoding Functions', 'Filesystem Functions']
        },
        {
          id: 'lesson-05-02',
          title: 'Expressions and Operators',
          duration: '40 min',
          description: 'Write complex logic in your configurations',
          topics: ['Conditional Expressions', 'For Expressions', 'Splat Expressions', 'Operators']
        },
        {
          id: 'lesson-05-03',
          title: 'Dynamic Blocks',
          duration: '45 min',
          description: 'Generate repeated nested blocks dynamically',
          topics: ['Dynamic Syntax', 'For_each in Blocks', 'Nested Dynamics', 'Use Cases']
        }
      ],
      challenges: [
        {
          id: 'challenge-05-01',
          title: 'Function Mastery',
          difficulty: 'advanced',
          description: 'Solve complex problems using Terraform functions',
          points: 200
        },
        {
          id: 'challenge-05-02',
          title: 'Build Dynamic Infrastructure',
          difficulty: 'advanced',
          description: 'Create resources dynamically based on input data',
          points: 225
        }
      ],
      resources: ['Function Reference', 'Expression Documentation', 'Dynamic Block Examples']
    }
  },

  // ADVANCED REGION - Module Metropolis (Northeast)
  {
    id: '06-modules',
    name: 'Module Metropolis',
    icon: 'FaCity',
    description: 'Build reusable infrastructure components',
    position: [22, 0, -12],
    region: 'advanced',
    type: 'metropolis',
    prerequisites: ['05-features'],
    estimatedTime: '4 hours',
    content: {
      title: 'Terraform Modules',
      overview: 'Learn to create, publish, and consume Terraform modules. Build a library of reusable infrastructure components and leverage the community ecosystem.',
      lessons: [
        {
          id: 'lesson-06-01',
          title: 'Module Fundamentals',
          duration: '45 min',
          description: 'Understand module structure and best practices',
          topics: ['Module Structure', 'Input/Output Variables', 'Module Calling', 'Root vs Child Modules']
        },
        {
          id: 'lesson-06-02',
          title: 'Module Sources',
          duration: '40 min',
          description: 'Use modules from various sources',
          topics: ['Local Modules', 'Registry Modules', 'Git Sources', 'HTTP Sources']
        },
        {
          id: 'lesson-06-03',
          title: 'Module Composition',
          duration: '50 min',
          description: 'Compose complex infrastructure from modules',
          topics: ['Module Dependencies', 'Module Versioning', 'Module Testing', 'Documentation']
        }
      ],
      challenges: [
        {
          id: 'challenge-06-01',
          title: 'Create Your First Module',
          difficulty: 'advanced',
          description: 'Build a reusable module with proper structure',
          points: 250
        },
        {
          id: 'challenge-06-02',
          title: 'Compose Infrastructure',
          difficulty: 'advanced',
          description: 'Build complex infrastructure using multiple modules',
          points: 275
        }
      ],
      resources: ['Module Registry', 'Module Development Guide', 'Best Practices']
    }
  },

  // MASTERY REGION - Multi-Env Archipelago (North)
  {
    id: '07-multi-env',
    name: 'Multi-Env Archipelago',
    icon: 'FaGlobe',
    description: 'Master multi-environment infrastructure management',
    position: [8, 0, -22],
    region: 'mastery',
    type: 'archipelago',
    prerequisites: ['06-modules'],
    estimatedTime: '3.5 hours',
    content: {
      title: 'Multi-Environment Management',
      overview: 'Learn strategies for managing infrastructure across multiple environments. Master workspaces, remote state, and environment-specific configurations.',
      lessons: [
        {
          id: 'lesson-07-01',
          title: 'Terraform Workspaces',
          duration: '40 min',
          description: 'Manage multiple environments with workspaces',
          topics: ['Workspace Basics', 'Workspace Commands', 'State Isolation', 'Limitations']
        },
        {
          id: 'lesson-07-02',
          title: 'Environment Strategies',
          duration: '50 min',
          description: 'Design effective multi-environment architectures',
          topics: ['Directory Structure', 'Variable Management', 'DRY Principles', 'Environment Promotion']
        },
        {
          id: 'lesson-07-03',
          title: 'Remote State & Backends',
          duration: '45 min',
          description: 'Configure remote state for team collaboration',
          topics: ['Backend Types', 'State Locking', 'Backend Configuration', 'Migration']
        }
      ],
      challenges: [
        {
          id: 'challenge-07-01',
          title: 'Setup Multi-Environment Infrastructure',
          difficulty: 'advanced',
          description: 'Deploy the same infrastructure to dev, staging, and prod',
          points: 300
        },
        {
          id: 'challenge-07-02',
          title: 'Configure Remote Backend',
          difficulty: 'advanced',
          description: 'Set up remote state with locking for team collaboration',
          points: 275
        }
      ],
      resources: ['Backend Documentation', 'Workspace Guide', 'Environment Patterns']
    }
  },

  // MASTERY REGION - Testing Laboratory (Northwest)
  {
    id: '08-testing',
    name: 'Testing Laboratory',
    icon: 'FaFlask',
    description: 'Validate and test your infrastructure code',
    position: [-5, 1, -25],
    region: 'mastery',
    type: 'laboratory',
    prerequisites: ['07-multi-env'],
    estimatedTime: '3 hours',
    content: {
      title: 'Testing & Validation',
      overview: 'Ensure infrastructure quality with testing and validation strategies. Learn to use terraform validate, plan, and external testing tools.',
      lessons: [
        {
          id: 'lesson-08-01',
          title: 'Terraform Validation',
          duration: '35 min',
          description: 'Use built-in validation tools',
          topics: ['Validate Command', 'Format Checking', 'Custom Validation', 'Pre-commit Hooks']
        },
        {
          id: 'lesson-08-02',
          title: 'Testing Strategies',
          duration: '50 min',
          description: 'Implement comprehensive testing approaches',
          topics: ['Unit Testing', 'Integration Testing', 'Terratest', 'Kitchen-Terraform']
        },
        {
          id: 'lesson-08-03',
          title: 'Policy as Code',
          duration: '40 min',
          description: 'Enforce compliance with policy frameworks',
          topics: ['Sentinel', 'OPA', 'Policy Enforcement', 'Compliance Scanning']
        }
      ],
      challenges: [
        {
          id: 'challenge-08-01',
          title: 'Write Infrastructure Tests',
          difficulty: 'advanced',
          description: 'Create automated tests for your Terraform modules',
          points: 325
        },
        {
          id: 'challenge-08-02',
          title: 'Implement Policy Checks',
          difficulty: 'advanced',
          description: 'Set up policy as code to enforce standards',
          points: 300
        }
      ],
      resources: ['Terratest Documentation', 'Sentinel Guide', 'Testing Best Practices']
    }
  },

  // MASTERY REGION - Workflow Summit (Far Northwest)
  {
    id: '09-workflow',
    name: 'Workflow Summit',
    icon: 'FaRocket',
    description: 'Reach the peak of Terraform mastery',
    position: [-18, 3, -30],
    region: 'mastery',
    type: 'summit',
    prerequisites: ['08-testing'],
    estimatedTime: '4 hours',
    content: {
      title: 'Complete Terraform Workflow',
      overview: 'Master the complete Terraform workflow from development to production. Learn CI/CD integration, team collaboration, and industry best practices.',
      lessons: [
        {
          id: 'lesson-09-01',
          title: 'CI/CD Integration',
          duration: '55 min',
          description: 'Automate Terraform with CI/CD pipelines',
          topics: ['Pipeline Design', 'Automated Testing', 'Approval Gates', 'Deployment Strategies']
        },
        {
          id: 'lesson-09-02',
          title: 'Team Collaboration',
          duration: '50 min',
          description: 'Work effectively with Terraform in teams',
          topics: ['Code Review', 'State Management', 'Access Control', 'Communication']
        },
        {
          id: 'lesson-09-03',
          title: 'Best Practices & Patterns',
          duration: '45 min',
          description: 'Apply industry-proven patterns and practices',
          topics: ['Code Organization', 'Security', 'Performance', 'Troubleshooting']
        }
      ],
      challenges: [
        {
          id: 'challenge-09-01',
          title: 'Build Complete CI/CD Pipeline',
          difficulty: 'advanced',
          description: 'Create end-to-end automated Terraform pipeline',
          points: 400
        },
        {
          id: 'challenge-09-02',
          title: 'Implement GitOps Workflow',
          difficulty: 'advanced',
          description: 'Set up GitOps-based infrastructure management',
          points: 375
        }
      ],
      resources: ['CI/CD Examples', 'GitOps Guide', 'Enterprise Patterns']
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
