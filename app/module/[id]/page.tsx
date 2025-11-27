'use client';

import { useParams, useRouter } from 'next/navigation';
import { getModuleById } from '@/lib/modules';
import { useProgressStore } from '@/lib/store';
import { ModuleIcon } from '@/components/ModuleIcon';
import { FaClock, FaBook, FaTrophy, FaArrowLeft, FaCheckCircle, FaLock, FaPlay } from 'react-icons/fa';

export default function ModulePage() {
  const params = useParams();
  const router = useRouter();
  const { completedModules, completeModule } = useProgressStore();
  
  const module = getModuleById(params.id as string);
  
  if (!module) {
    return (
      <div className="min-h-screen bg-bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Module Not Found</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-terraform-purple text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Return to Map
          </button>
        </div>
      </div>
    );
  }

  const isCompleted = completedModules.includes(module.id);
  const totalPoints = module.content.challenges.reduce((sum, c) => sum + c.points, 0);

  const regionColors = {
    starter: 'from-blue-500/20 to-blue-600/10 border-blue-400/30',
    foundation: 'from-purple-500/20 to-purple-600/10 border-purple-400/30',
    advanced: 'from-orange-500/20 to-orange-600/10 border-orange-400/30',
    mastery: 'from-red-500/20 to-red-600/10 border-red-400/30'
  };

  const difficultyColors = {
    beginner: 'bg-green-500/20 text-green-400 border-green-400/30',
    intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
    advanced: 'bg-red-500/20 text-red-400 border-red-400/30'
  };

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary">
      {/* Header */}
      <div className={`bg-gradient-to-br ${regionColors[module.region]} border-b`}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => router.push('/')}
              className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <FaArrowLeft /> Back to Journey Map
            </button>
            <div className="flex items-center gap-2">
              <img src="/terraform.svg" alt="Terraform" className="w-6 h-6" />
              <span className="text-text-secondary text-sm font-medium">TerraQuest</span>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="text-6xl">
              <ModuleIcon iconName={module.icon} size={64} className="text-terraform-purple" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">{module.name}</h1>
                {isCompleted && <FaCheckCircle className="text-success-green" size={32} />}
              </div>
              <p className="text-xl text-text-secondary mb-4">{module.description}</p>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <FaClock className="text-blue-400" />
                  <span>{module.estimatedTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBook className="text-purple-400" />
                  <span>{module.content.lessons.length} Lessons</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaTrophy className="text-yellow-400" />
                  <span>{totalPoints} Points</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-text-secondary text-lg leading-relaxed">{module.content.overview}</p>
        </section>

        {/* Lessons */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Lessons</h2>
          <div className="space-y-4">
            {module.content.lessons.map((lesson, index) => (
              <div
                key={lesson.id}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-terraform-purple rounded-full flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{lesson.title}</h3>
                      <span className="text-sm text-text-secondary flex items-center gap-1">
                        <FaClock size={12} /> {lesson.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary mb-3">{lesson.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {lesson.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {module.content.challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{challenge.title}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold border ${difficultyColors[challenge.difficulty]}`}>
                    {challenge.difficulty}
                  </span>
                </div>
                <p className="text-text-secondary mb-4">{challenge.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-yellow-400">
                    <FaTrophy />
                    <span className="font-semibold">{challenge.points} points</span>
                  </div>
                  <button className="px-4 py-2 bg-terraform-purple text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center gap-2">
                    <FaPlay size={12} /> Start
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Resources</h2>
          <div className="bg-white/5 border border-white/10 rounded-lg p-6">
            <ul className="space-y-3">
              {module.content.resources.map((resource) => (
                <li key={resource} className="flex items-center gap-3 text-text-secondary">
                  <span className="text-terraform-purple">→</span>
                  {resource}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Complete Module Button */}
        {!isCompleted && (
          <div className="flex justify-center">
            <button
              onClick={() => {
                completeModule(module.id);
                router.push('/');
              }}
              className="px-8 py-4 bg-success-green text-white rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold flex items-center gap-3"
            >
              <FaCheckCircle /> Mark as Complete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
