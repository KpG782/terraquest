'use client';

import { 
  FaGlobeAmericas, 
  FaMountain, 
  FaTree, 
  FaSlidersH, 
  FaMagic, 
  FaCity, 
  FaGlobe, 
  FaFlask, 
  FaRocket 
} from 'react-icons/fa';

interface ModuleIconProps {
  iconName: string;
  size?: number;
  className?: string;
}

const iconMap = {
  FaGlobeAmericas,
  FaMountain,
  FaTree,
  FaSlidersH,
  FaMagic,
  FaCity,
  FaGlobe,
  FaFlask,
  FaRocket
};

export function ModuleIcon({ iconName, size = 24, className = '' }: ModuleIconProps) {
  const IconComponent = iconMap[iconName as keyof typeof iconMap];
  
  if (!IconComponent) {
    return <FaGlobeAmericas size={size} className={className} />;
  }
  
  return <IconComponent size={size} className={className} />;
}
