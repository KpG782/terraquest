'use client';

import { useState } from 'react';
import { FaQuestion, FaTimes, FaBook, FaMap, FaKeyboard, FaExternalLinkAlt, FaGraduationCap } from 'react-icons/fa';
import { MODULES } from '@/lib/modules';

export function HelpOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  const quickLinks = [
    {
      title: 'Journey Map Guide',
      description: 'Complete overview of all 9 modules and learning paths',
      icon: <FaMap className="text-blue-400" />,
      url: 'https://github.com/KpG782/terraquest/blob/main/JOURNEY_MAP.md'
    },
    {
      title: 'Navigation Guide',
      description: 'Interactive controls, keyboard shortcuts, and tips',
      icon: <FaKeyboard className="text-purple-400" />,
      url: 'https://github.com/KpG782/terraquest/blob/main/NAVIGATION_GUIDE.md'
    },
    {
      title: 'Official Terraform Docs',
      description: 'HashiCorp\'s comprehensive Terraform documentation',
      icon: <FaBook className="text-orange-400" />,
      url: 'https://developer.hashicorp.com/terraform/docs'
    },
    {
      title: 'HashiCorp Learn',
      description: 'Interactive tutorials and hands-on labs',
      icon: <FaGraduationCap className="text-green-400" />,
      url: 'https://developer.hashicorp.com/terraform/tutorials'
    }
  ];

  const regions = [
    { name: 'Starter', color: 'text-blue-400', modules: MODULES.filter(m => m.region === 'starter') },
    { name: 'Foundation', color: 'text-purple-400', modules: MODULES.filter(m => m.region === 'foundation') },
    { name: 'Advanced', color: 'text-orange-400', modules: MODULES.filter(m => m.region === 'advanced') },
    { name: 'Mastery', color: 'text-red-400', modules: MODULES.filter(m => m.region === 'mastery') }
  ];

  return (
    <>
      {/* Help Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 z-30 w-14 h-14 bg-terraform-purple hover:bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110"
        title="Help & Documentation"
        aria-label="Open help overlay"
      >
        <FaQuestion size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-bg-dark border border-border-subtle rounded-2xl max-w-5xl w-full mx-4 max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-terraform-purple to-purple-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaQuestion className="text-white" size={24} />
                <h2 className="text-2xl font-bold text-white">Help & Documentation</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close help overlay"
              >
                <FaTimes size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-80px)] p-6">
              {/* Quick Links */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">📚 Quick Links</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {quickLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl mt-1">{link.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-text-primary">{link.title}</h4>
                            <FaExternalLinkAlt className="text-text-muted text-xs group-hover:text-terraform-purple transition-colors" />
                          </div>
                          <p className="text-sm text-text-secondary">{link.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>

              {/* Learning Path */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">🗺️ Learning Path Overview</h3>
                <div className="space-y-4">
                  {regions.map((region) => (
                    <div key={region.name} className="bg-white/5 border border-white/10 rounded-lg p-4">
                      <h4 className={`font-bold text-lg mb-3 ${region.color}`}>
                        {region.name} Region ({region.modules.length} modules)
                      </h4>
                      <div className="space-y-2">
                        {region.modules.map((module, index) => (
                          <div key={module.id} className="flex items-center gap-3 text-sm">
                            <span className="text-text-muted font-mono">{index + 1}.</span>
                            <span className="text-text-primary font-medium">{module.name}</span>
                            <span className="text-text-muted">•</span>
                            <span className="text-text-secondary">{module.estimatedTime}</span>
                            <span className="text-text-muted">•</span>
                            <span className="text-text-secondary text-xs">{module.type}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Keyboard Shortcuts */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">⌨️ Keyboard Shortcuts</h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Navigate modules</span>
                      <kbd className="px-3 py-1 bg-white/10 border border-white/20 rounded text-sm font-mono">Tab</kbd>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Select module</span>
                      <kbd className="px-3 py-1 bg-white/10 border border-white/20 rounded text-sm font-mono">Enter</kbd>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Return to map</span>
                      <kbd className="px-3 py-1 bg-white/10 border border-white/20 rounded text-sm font-mono">Esc</kbd>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Zoom in/out</span>
                      <kbd className="px-3 py-1 bg-white/10 border border-white/20 rounded text-sm font-mono">Scroll</kbd>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mouse Controls */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">🖱️ Mouse Controls</h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Rotate view</span>
                      <span className="text-sm text-text-muted">Left-click + drag</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Pan view</span>
                      <span className="text-sm text-text-muted">Right-click + drag</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Select module</span>
                      <span className="text-sm text-text-muted">Click on region</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">View details</span>
                      <span className="text-sm text-text-muted">Hover over region</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Module States */}
              <section className="mb-8">
                <h3 className="text-xl font-bold text-text-primary mb-4">🎨 Module States</h3>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-gray-500 rounded opacity-30"></div>
                      <span className="text-text-secondary"><strong className="text-text-primary">Locked:</strong> Prerequisites not completed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-terraform-purple rounded"></div>
                      <span className="text-text-secondary"><strong className="text-text-primary">Unlocked:</strong> Ready to start</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-success-green rounded animate-pulse"></div>
                      <span className="text-text-secondary"><strong className="text-text-primary">Completed:</strong> Module finished</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Tips */}
              <section>
                <h3 className="text-xl font-bold text-text-primary mb-4">💡 Tips</h3>
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-lg p-4">
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• Start with <strong className="text-text-primary">Foundation Island</strong> - no prerequisites required</li>
                    <li>• Complete lessons before attempting challenges for better understanding</li>
                    <li>• Use the <strong className="text-text-primary">mini-map</strong> (bottom-left) for quick navigation</li>
                    <li>• Track your progress with the <strong className="text-text-primary">progress bar</strong> at the top</li>
                    <li>• Click on resource links in each module for official documentation</li>
                    <li>• Your progress is automatically saved to your browser</li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="bg-white/5 border-t border-border-subtle px-6 py-4 flex items-center justify-between">
              <span className="text-sm text-text-secondary">
                Need more help? Check the <a href="https://github.com/KpG782/terraquest" target="_blank" rel="noopener noreferrer" className="text-terraform-purple hover:text-purple-400 transition-colors">GitHub repository</a>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-terraform-purple hover:bg-purple-600 text-white rounded-lg transition-colors"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
