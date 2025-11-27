'use client';

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa';
import { SiTerraform, SiReact, SiNextdotjs, SiThreedotjs } from 'react-icons/si';

export function Footer() {
  const [easterEggClicks, setEasterEggClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleLogoClick = () => {
    const newCount = easterEggClicks + 1;
    setEasterEggClicks(newCount);
    
    if (newCount === 5) {
      setShowEasterEgg(true);
      setTimeout(() => {
        setShowEasterEgg(false);
        setEasterEggClicks(0);
      }, 5000);
    }
  };

  return (
    <>
      {/* Easter Egg Modal */}
      {showEasterEgg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-gradient-to-br from-purple-900/90 to-blue-900/90 border-2 border-purple-400 rounded-2xl p-8 max-w-2xl mx-4 shadow-2xl animate-bounce-in">
            <div className="text-center">
              <div className="text-6xl mb-4">🎉 🚀 ✨</div>
              <h2 className="text-3xl font-bold text-white mb-4">You Found the Easter Egg!</h2>
              <p className="text-xl text-purple-200 mb-6">
                Congratulations, curious explorer! You've discovered the secret.
              </p>
              <div className="bg-black/30 rounded-lg p-6 mb-6">
                <p className="text-lg text-white mb-2">
                  <span className="text-yellow-400 font-bold">Fun Fact:</span> This entire 3D world map was built in a single coding session
                </p>
                <p className="text-md text-gray-300 mb-4">
                  Powered by caffeine ☕, late-night debugging 🌙, and a passion for creating immersive learning experiences
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <SiReact className="text-blue-400" />
                    <span>React Three Fiber</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiNextdotjs className="text-white" />
                    <span>Next.js 16</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <SiThreedotjs className="text-green-400" />
                    <span>Three.js</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-purple-300 italic">
                "The best way to learn is to build something awesome" - Ken Patrick Garcia
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-bg-darker/95 backdrop-blur-md border-t border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left: Copyright & Attribution */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogoClick}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
                title="Click me 5 times for a surprise!"
              >
                <img src="/terraform.svg" alt="Terraform" className="w-6 h-6" />
                <span className="text-text-secondary text-sm font-medium">TerraQuest</span>
              </button>
              <div className="text-text-secondary text-sm">
                <span>© 2025 </span>
                <a
                  href="https://www.linkedin.com/in/ken-patrick-garcia-ba5430285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terraform-purple hover:text-purple-400 transition-colors font-semibold"
                >
                  Ken Patrick Garcia
                </a>
              </div>
            </div>

            {/* Center: Tech Stack */}
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <span>Powered by</span>
              <div className="flex items-center gap-2">
                <SiReact className="text-blue-400" title="React Three Fiber" />
                <SiNextdotjs className="text-white" title="Next.js" />
                <SiThreedotjs className="text-green-400" title="Three.js" />
              </div>
            </div>

            {/* Right: Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/KpG782"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-white transition-colors"
                title="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ken-patrick-garcia-ba5430285"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-blue-400 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:kenpatrickgarcia123@gmail.com"
                className="text-text-secondary hover:text-green-400 transition-colors"
                title="Email"
              >
                <FaEnvelope size={20} />
              </a>
              <a
                href="https://kengarciaportfolio-kpg782s-projects.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-terraform-purple transition-colors"
                title="Portfolio"
              >
                <FaCode size={20} />
              </a>
            </div>
          </div>

          {/* Bottom: Additional Info */}
          <div className="mt-3 pt-3 border-t border-border-subtle/50 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-text-muted">
            <div>
              <span>Computer Science Student @ </span>
              <span className="text-terraform-purple font-semibold">University of Makati</span>
              <span> | </span>
              <span>Terraform® logo used under </span>
              <a
                href="https://www.hashicorp.com/brand"
                target="_blank"
                rel="noopener noreferrer"
                className="text-terraform-purple hover:text-purple-400 transition-colors"
              >
                HashiCorp Brand Guidelines
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span>Open Source Project</span>
              <span>•</span>
              <a
                href="https://github.com/KpG782/terraquest"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terraform-purple transition-colors"
              >
                View on GitHub
              </a>
              <span>•</span>
              <span>MIT License</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
