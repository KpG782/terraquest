'use client';

import { useParams, useRouter } from 'next/navigation';
import { getModuleById } from '@/lib/modules';
import { useProgressStore } from '@/lib/store';

export default function ModulePage() {
  const params = useParams();
  const router = useRouter();
  const { completeModule } = useProgressStore();
  const moduleId = params.id as string;
  
  const module = getModuleById(moduleId);

  if (!module) {
    return (
      <div className="min-h-screen bg-bg-dark text-text-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Module Not Found</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-terraform-purple hover:bg-terraform-purple-dark rounded-lg transition-colors"
          >
            Back to Journey Map
          </button>
        </div>
      </div>
    );
  }

  const handleComplete = () => {
    completeModule(moduleId);
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.push('/')}
            className="text-terraform-purple hover:text-terraform-purple-light mb-4 flex items-center gap-2"
          >
            ← Back to Journey Map
          </button>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-6xl">{module.icon}</span>
            <div>
              <h1 className="text-4xl font-bold">{module.name}</h1>
              <p className="text-text-secondary mt-2">{module.description}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-card-dark rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4">{module.content.title}</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-terraform-purple">Lessons</h3>
            <ul className="space-y-2">
              {module.content.lessons.map((lesson, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-success-green mt-1">✓</span>
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-terraform-purple">Challenges</h3>
            <ul className="space-y-2">
              {module.content.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-plan-yellow mt-1">⚡</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={handleComplete}
            className="px-8 py-4 bg-success-green hover:bg-success-green/80 rounded-lg transition-colors font-semibold"
          >
            Mark as Complete
          </button>
          <button
            onClick={() => router.push('/')}
            className="px-8 py-4 bg-card-dark hover:bg-card-hover border border-border-subtle rounded-lg transition-colors"
          >
            Continue Later
          </button>
        </div>
      </div>
    </div>
  );
}
