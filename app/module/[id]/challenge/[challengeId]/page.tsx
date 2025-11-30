'use client';

import { useParams, useRouter } from 'next/navigation';
import { getModuleById } from '@/lib/modules';
import { HelpOverlay } from '@/components/HelpOverlay';
import { FaArrowLeft, FaTrophy, FaCheckCircle, FaLightbulb, FaCode, FaTerminal } from 'react-icons/fa';
import { useState } from 'react';

export default function ChallengePage() {
  const params = useParams();
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);
  
  const module = getModuleById(params.id as string);
  const challenge = module?.content.challenges.find(c => c.id === params.challengeId);
  
  if (!module || !challenge) {
    return (
      <div className="min-h-screen bg-bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Challenge Not Found</h1>
          <button
            onClick={() => router.push(`/module/${params.id}`)}
            className="px-6 py-3 bg-terraform-purple text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Back to Module
          </button>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    beginner: 'from-green-500/20 to-green-600/10 border-green-400/30 text-green-400',
    intermediate: 'from-yellow-500/20 to-yellow-600/10 border-yellow-400/30 text-yellow-400',
    advanced: 'from-red-500/20 to-red-600/10 border-red-400/30 text-red-400'
  };

  // Get challenge content based on challenge ID
  const getChallengeContent = () => {
    switch (challenge.id) {
      case 'challenge-01-01':
        return {
          objective: 'Install Terraform on your local machine and verify the installation is working correctly.',
          prerequisites: [
            'A computer running Windows, macOS, or Linux',
            'Administrator/sudo access',
            'Internet connection'
          ],
          steps: [
            {
              title: 'Download Terraform',
              content: `Visit the official Terraform downloads page:
https://developer.hashicorp.com/terraform/downloads

Choose the appropriate package for your operating system:
- **Windows**: Download the .zip file
- **macOS**: Download the .zip file or use Homebrew
- **Linux**: Download the .zip file or use package manager`
            },
            {
              title: 'Install Terraform',
              content: `**Windows:**
1. Extract the .zip file
2. Move terraform.exe to a directory (e.g., C:\\terraform)
3. Add the directory to your PATH environment variable

**macOS (Homebrew):**
\`\`\`bash
brew tap hashicorp/tap
brew install hashicorp/tap/terraform
\`\`\`

**macOS (Manual):**
\`\`\`bash
unzip terraform_*_darwin_amd64.zip
sudo mv terraform /usr/local/bin/
\`\`\`

**Linux:**
\`\`\`bash
unzip terraform_*_linux_amd64.zip
sudo mv terraform /usr/local/bin/
\`\`\``
            },
            {
              title: 'Verify Installation',
              content: `Open a new terminal/command prompt and run:

\`\`\`bash
terraform version
\`\`\`

You should see output like:
\`\`\`
Terraform v1.6.0
on darwin_amd64
\`\`\`

If you see this, congratulations! Terraform is installed correctly.`
            },
            {
              title: 'Test Basic Commands',
              content: `Try these commands to familiarize yourself:

\`\`\`bash
# Show help
terraform -help

# Show version details
terraform version

# Show available commands
terraform
\`\`\`

All commands should work without errors.`
            }
          ],
          hints: [
            'Make sure to restart your terminal after adding Terraform to PATH',
            'On Windows, you may need to run as Administrator',
            'On macOS/Linux, ensure the terraform binary has execute permissions: chmod +x terraform',
            'If "terraform" command is not found, check your PATH environment variable'
          ],
          validation: {
            title: 'How to Verify Completion',
            steps: [
              'Run `terraform version` and see version information',
              'Run `terraform -help` and see the help menu',
              'Take a screenshot of the terminal showing the version output'
            ]
          }
        };
      
      case 'challenge-01-02':
        return {
          objective: 'Write your first Terraform configuration file and apply it to create a simple local file.',
          prerequisites: [
            'Terraform installed (Challenge 01-01 completed)',
            'Text editor (VS Code, Sublime, or any editor)',
            'Basic command line knowledge'
          ],
          steps: [
            {
              title: 'Create a Project Directory',
              content: `Create a new directory for your first Terraform project:

\`\`\`bash
mkdir my-first-terraform
cd my-first-terraform
\`\`\`

This will be your working directory for this challenge.`
            },
            {
              title: 'Create main.tf File',
              content: `Create a file named \`main.tf\` with the following content:

\`\`\`hcl
# Configure the local provider
terraform {
  required_providers {
    local = {
      source  = "hashicorp/local"
      version = "~> 2.0"
    }
  }
}

# Create a local file
resource "local_file" "welcome" {
  filename = "\${path.module}/welcome.txt"
  content  = "Welcome to Terraform! This file was created by Infrastructure as Code."
}

# Output the file path
output "file_path" {
  value = local_file.welcome.filename
}
\`\`\`

**What this does:**
- Declares the local provider (for creating local files)
- Creates a resource that generates a text file
- Outputs the path to the created file`
            },
            {
              title: 'Initialize Terraform',
              content: `Run the initialization command:

\`\`\`bash
terraform init
\`\`\`

**Expected output:**
\`\`\`
Initializing the backend...
Initializing provider plugins...
- Finding hashicorp/local versions matching "~> 2.0"...
- Installing hashicorp/local v2.4.0...
- Installed hashicorp/local v2.4.0

Terraform has been successfully initialized!
\`\`\`

This downloads the local provider plugin.`
            },
            {
              title: 'Plan the Changes',
              content: `See what Terraform will do:

\`\`\`bash
terraform plan
\`\`\`

**Expected output:**
\`\`\`
Terraform will perform the following actions:

  # local_file.welcome will be created
  + resource "local_file" "welcome" {
      + content  = "Welcome to Terraform!..."
      + filename = "./welcome.txt"
      + id       = (known after apply)
    }

Plan: 1 to add, 0 to change, 0 to destroy.
\`\`\`

The \`+\` symbol means Terraform will CREATE this resource.`
            },
            {
              title: 'Apply the Configuration',
              content: `Create the file:

\`\`\`bash
terraform apply
\`\`\`

Type \`yes\` when prompted.

**Expected output:**
\`\`\`
local_file.welcome: Creating...
local_file.welcome: Creation complete after 0s [id=...]

Apply complete! Resources: 1 added, 0 changed, 0 destroyed.

Outputs:

file_path = "./welcome.txt"
\`\`\`

Check that \`welcome.txt\` was created:
\`\`\`bash
cat welcome.txt
\`\`\``
            },
            {
              title: 'Explore the State',
              content: `Terraform created a state file to track your infrastructure:

\`\`\`bash
# View the state
terraform show

# List resources in state
terraform state list
\`\`\`

You should see:
\`\`\`
local_file.welcome
\`\`\`

This is how Terraform remembers what it created!`
            },
            {
              title: 'Make a Change',
              content: `Edit \`main.tf\` and change the content:

\`\`\`hcl
resource "local_file" "welcome" {
  filename = "\${path.module}/welcome.txt"
  content  = "Updated content! Terraform detected the change."
}
\`\`\`

Run plan and apply again:
\`\`\`bash
terraform plan
terraform apply
\`\`\`

Notice Terraform detects the change and updates the file!`
            },
            {
              title: 'Clean Up',
              content: `Destroy the resources:

\`\`\`bash
terraform destroy
\`\`\`

Type \`yes\` when prompted.

The \`welcome.txt\` file will be deleted. This shows Terraform can both create AND destroy infrastructure.`
            }
          ],
          hints: [
            'Make sure you\'re in the correct directory when running commands',
            'If init fails, check your internet connection',
            'The state file (terraform.tfstate) is created after the first apply',
            'You can run plan multiple times - it doesn\'t change anything',
            'Always review the plan before applying'
          ],
          validation: {
            title: 'How to Verify Completion',
            steps: [
              'Successfully run `terraform init` without errors',
              'Run `terraform plan` and see "1 to add"',
              'Run `terraform apply` and see the file created',
              'Verify `welcome.txt` exists in your directory',
              'Run `terraform show` and see the resource details',
              'Successfully run `terraform destroy` to clean up'
            ]
          }
        };
      
      default:
        return {
          objective: challenge.description,
          prerequisites: ['Complete previous lessons'],
          steps: [
            {
              title: 'Getting Started',
              content: challenge.description
            }
          ],
          hints: ['Review the lesson materials', 'Check the official documentation'],
          validation: {
            title: 'Completion Criteria',
            steps: ['Complete the challenge objectives']
          }
        };
    }
  };

  const content = getChallengeContent();

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary pb-24">
      <HelpOverlay />
      
      {/* Header */}
      <div className={`bg-gradient-to-br ${difficultyColors[challenge.difficulty]} border-b`}>
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button
            onClick={() => router.push(`/module/${params.id}`)}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-4"
          >
            <FaArrowLeft /> Back to {module.name}
          </button>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
              <FaTrophy className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{challenge.title}</h1>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[challenge.difficulty]}`}>
                  {challenge.difficulty}
                </span>
              </div>
              <p className="text-lg text-text-secondary mb-3">{challenge.description}</p>
              <div className="flex items-center gap-2">
                <FaTrophy className="text-yellow-400" />
                <span className="font-semibold">{challenge.points} points</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Objective */}
        <section className="mb-8 bg-blue-500/10 border border-blue-400/30 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <FaCode className="text-blue-400" />
            Objective
          </h2>
          <p className="text-text-secondary leading-relaxed">{content.objective}</p>
        </section>

        {/* Prerequisites */}
        <section className="mb-8 bg-white/5 border border-white/10 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-3">Prerequisites</h2>
          <ul className="space-y-2">
            {content.prerequisites.map((prereq, index) => (
              <li key={index} className="flex items-start gap-2 text-text-secondary">
                <span className="text-terraform-purple mt-1">✓</span>
                <span>{prereq}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Steps */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Step-by-Step Guide</h2>
          <div className="space-y-6">
            {content.steps.map((step, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-terraform-purple rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <div className="prose prose-invert max-w-none">
                      <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                        {step.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hints */}
        <section className="mb-8">
          <button
            onClick={() => setShowHint(!showHint)}
            className="w-full bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4 hover:bg-yellow-500/20 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <FaLightbulb className="text-yellow-400" size={24} />
              <span className="font-semibold">Need a hint?</span>
            </div>
            <span className="text-sm text-text-secondary">
              {showHint ? 'Hide hints' : 'Show hints'}
            </span>
          </button>
          
          {showHint && (
            <div className="mt-4 bg-yellow-500/5 border border-yellow-400/20 rounded-lg p-6">
              <ul className="space-y-2">
                {content.hints.map((hint, index) => (
                  <li key={index} className="flex items-start gap-2 text-text-secondary">
                    <span className="text-yellow-400 mt-1">💡</span>
                    <span>{hint}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* Validation */}
        <section className="mb-8 bg-green-500/10 border border-green-400/30 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
            <FaCheckCircle className="text-green-400" />
            {content.validation.title}
          </h2>
          <ul className="space-y-2">
            {content.validation.steps.map((step, index) => (
              <li key={index} className="flex items-start gap-2 text-text-secondary">
                <span className="text-green-400 mt-1">✓</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Complete Challenge */}
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-400/30 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">Challenge Complete?</h3>
              <p className="text-sm text-text-secondary">
                Mark as complete to earn {challenge.points} points
              </p>
            </div>
            <button
              onClick={() => setIsCompleted(!isCompleted)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                isCompleted
                  ? 'bg-success-green text-white'
                  : 'bg-terraform-purple hover:bg-purple-600 text-white'
              }`}
            >
              {isCompleted ? (
                <>
                  <FaCheckCircle />
                  Completed (+{challenge.points} pts)
                </>
              ) : (
                <>
                  <FaTrophy />
                  Mark Complete
                </>
              )}
            </button>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => router.push(`/module/${params.id}`)}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            Back to Module Overview
          </button>
        </div>
      </div>
    </div>
  );
}
