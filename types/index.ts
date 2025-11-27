export interface Lesson {
  id: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
}

export interface Challenge {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  points: number;
}

export interface Module {
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

export interface ProgressState {
  completedModules: string[];
  currentModule: string | null;
  progress: number;
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
