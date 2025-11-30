'use client';

import { useParams, useRouter } from 'next/navigation';
import { getModuleById } from '@/lib/modules';
import { HelpOverlay } from '@/components/HelpOverlay';
import { FaArrowLeft, FaArrowRight, FaBook, FaClock, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function LessonPage() {
  const params = useParams();
  const router = useRouter();
  const [isCompleted, setIsCompleted] = useState(false);
  
  const module = getModuleById(params.id as string);
  const lesson = module?.content.lessons.find(l => l.id === params.lessonId);
  
  if (!module || !lesson) {
    return (
      <div className="min-h-screen bg-bg-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Lesson Not Found</h1>
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

  const currentIndex = module.content.lessons.findIndex(l => l.id === lesson.id);
  const previousLesson = currentIndex > 0 ? module.content.lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < module.content.lessons.length - 1 ? module.content.lessons[currentIndex + 1] : null;

  // Get comprehensive lesson content based on lesson ID
  const getLessonContent = () => {
    // Import lesson content dynamically based on module
    const modulePrefix = lesson.id.split('-')[1]; // Extract module number
    
    switch (lesson.id) {
      case 'lesson-01-01':
        return {
          sections: [
            {
              title: 'What is Infrastructure as Code?',
              content: `Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.

Think of it like this: instead of manually clicking through a cloud provider's console to create servers, networks, and databases, you write code that describes what you want, and the IaC tool creates it for you.`
            },
            {
              title: 'Key Benefits of IaC',
              content: `**1. Reproducibility**
You can create identical environments every time. No more "it works on my machine" problems.

**2. Version Control**
Your infrastructure is stored in Git, just like your application code. You can track changes, review history, and roll back if needed.

**3. Automation**
Eliminate manual errors and save time. Deploy infrastructure in minutes instead of hours or days.

**4. Documentation**
Your code IS your documentation. Anyone can read your Terraform files and understand your infrastructure.

**5. Consistency**
Ensure all environments (dev, staging, production) are configured the same way.`
            },
            {
              title: 'Declarative vs Imperative',
              content: `**Declarative (Terraform's Approach)**
You describe the desired end state:
\`\`\`hcl
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}
\`\`\`
Terraform figures out HOW to get there.

**Imperative (Traditional Scripting)**
You describe the steps to take:
\`\`\`bash
aws ec2 run-instances --image-id ami-0c55b159cbfafe1f0 --instance-type t2.micro
\`\`\`
You tell the system exactly WHAT to do.`
            },
            {
              title: 'Real-World Example',
              content: `Imagine you need to create a web application infrastructure:

**Without IaC (Manual):**
1. Log into AWS console
2. Click through 20+ screens to create a VPC
3. Manually configure subnets
4. Set up security groups
5. Launch EC2 instances
6. Configure load balancer
7. Hope you remember all settings for next time

**With IaC (Terraform):**
1. Write a 50-line Terraform file
2. Run \`terraform apply\`
3. Everything is created in 2 minutes
4. Commit to Git
5. Reuse for other environments
6. Share with your team`
            }
          ]
        };
      
      case 'lesson-01-02':
        return {
          sections: [
            {
              title: 'Why Choose Terraform?',
              content: `Terraform has become the industry standard for Infrastructure as Code. Here's why it stands out from other tools.`
            },
            {
              title: '1. Multi-Cloud Support',
              content: `Unlike cloud-specific tools (AWS CloudFormation, Azure ARM), Terraform works with ANY cloud provider:

- **AWS** - EC2, S3, RDS, Lambda, and 300+ services
- **Azure** - Virtual Machines, Storage, Databases
- **Google Cloud** - Compute Engine, Cloud Storage, BigQuery
- **And more** - Kubernetes, GitHub, Datadog, PagerDuty

**Example: Multi-Cloud Setup**
\`\`\`hcl
# AWS Resources
resource "aws_s3_bucket" "data" {
  bucket = "my-data-bucket"
}

# Azure Resources
resource "azurerm_storage_account" "backup" {
  name = "mybackupstorage"
}

# All in one configuration!
\`\`\``
            },
            {
              title: '2. Massive Provider Ecosystem',
              content: `Terraform has **3,000+ providers** in the official registry:

**Cloud Providers:**
- AWS, Azure, GCP, Oracle Cloud, IBM Cloud

**Infrastructure:**
- VMware, OpenStack, Docker, Kubernetes

**SaaS Platforms:**
- GitHub, GitLab, Datadog, PagerDuty, Cloudflare

**Databases:**
- PostgreSQL, MySQL, MongoDB, Snowflake

This means you can manage your ENTIRE tech stack with Terraform!`
            },
            {
              title: '3. State Management',
              content: `Terraform keeps track of your infrastructure in a **state file**:

**What it does:**
- Remembers what resources exist
- Detects changes between code and reality
- Enables team collaboration
- Prevents conflicts

**Example:**
\`\`\`bash
# First apply - creates resources
terraform apply

# Someone manually changes something in AWS console
# Terraform detects the drift
terraform plan
# Shows: "Resource has changed outside Terraform"

# Restore to desired state
terraform apply
\`\`\``
            },
            {
              title: '4. Strong Community',
              content: `**By the Numbers:**
- 40,000+ stars on GitHub
- 3,000+ providers
- 10,000+ modules in the registry
- Used by 100,000+ companies

**Community Benefits:**
- Extensive documentation
- Active forums and Slack channels
- Thousands of example modules
- Regular updates and improvements
- Enterprise support available`
            },
            {
              title: 'Terraform vs Alternatives',
              content: `**Terraform vs CloudFormation (AWS)**
✅ Multi-cloud support
✅ Better syntax (HCL vs JSON/YAML)
✅ Larger community

**Terraform vs Ansible**
✅ Declarative (vs imperative)
✅ Better for infrastructure (Ansible better for config)
✅ State management

**Terraform vs Pulumi**
✅ More mature ecosystem
✅ Simpler learning curve
✅ No programming language required`
            }
          ]
        };
      
      case 'lesson-01-03':
        return {
          sections: [
            {
              title: 'Core Terraform Concepts',
              content: `Let's explore the fundamental building blocks that make Terraform work.`
            },
            {
              title: '1. Providers',
              content: `Providers are plugins that let Terraform interact with cloud platforms, SaaS providers, and APIs.

**Example: AWS Provider**
\`\`\`hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}
\`\`\`

**What this does:**
- Downloads the AWS provider plugin
- Configures authentication
- Sets the default region
- Enables you to create AWS resources`
            },
            {
              title: '2. Resources',
              content: `Resources are the most important element. They represent infrastructure objects like VMs, networks, or databases.

**Syntax:**
\`\`\`hcl
resource "PROVIDER_TYPE" "NAME" {
  argument1 = "value1"
  argument2 = "value2"
}
\`\`\`

**Real Example: EC2 Instance**
\`\`\`hcl
resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "MyWebServer"
    Environment = "Production"
  }
}
\`\`\`

**Breakdown:**
- \`aws_instance\` - Resource type (AWS EC2 instance)
- \`web_server\` - Local name (used to reference it)
- \`ami\` - Amazon Machine Image ID
- \`instance_type\` - Server size
- \`tags\` - Metadata for organization`
            },
            {
              title: '3. State',
              content: `The state file is Terraform's memory. It tracks what resources exist and their current configuration.

**State File (terraform.tfstate):**
\`\`\`json
{
  "version": 4,
  "resources": [
    {
      "type": "aws_instance",
      "name": "web_server",
      "instances": [{
        "attributes": {
          "id": "i-1234567890abcdef0",
          "public_ip": "54.123.45.67"
        }
      }]
    }
  ]
}
\`\`\`

**Why State Matters:**
- Maps your code to real resources
- Tracks metadata and dependencies
- Improves performance (caching)
- Enables team collaboration
- Required for updates and deletions`
            },
            {
              title: '4. Configuration Language (HCL)',
              content: `Terraform uses HashiCorp Configuration Language (HCL) - designed to be human-readable and machine-friendly.

**Basic Syntax:**
\`\`\`hcl
# Comments start with #

# Block structure
block_type "label" "name" {
  argument = "value"
  
  nested_block {
    nested_argument = 123
  }
}

# Variables
variable "instance_type" {
  default = "t2.micro"
}

# Outputs
output "server_ip" {
  value = aws_instance.web_server.public_ip
}
\`\`\`

**Key Features:**
- Readable syntax (not JSON/YAML)
- Supports comments
- Variables and expressions
- Built-in functions
- Conditionals and loops`
            },
            {
              title: 'How It All Works Together',
              content: `**The Terraform Workflow:**

1. **Write** - Create .tf files with your infrastructure code
2. **Initialize** - \`terraform init\` downloads providers
3. **Plan** - \`terraform plan\` shows what will change
4. **Apply** - \`terraform apply\` creates resources
5. **State** - Terraform updates state file
6. **Manage** - Make changes and repeat

**Example Flow:**
\`\`\`bash
# 1. Write configuration
$ cat main.tf
provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
}

# 2. Initialize
$ terraform init
Initializing provider plugins...

# 3. Plan
$ terraform plan
Plan: 1 to add, 0 to change, 0 to destroy

# 4. Apply
$ terraform apply
aws_instance.web: Creating...
aws_instance.web: Creation complete!

# 5. State is updated automatically
$ terraform show
# aws_instance.web:
resource "aws_instance" "web" {
    id = "i-1234567890abcdef0"
    ...
}
\`\`\``
            }
          ]
        };
      
      default:
        return {
          sections: [
            {
              title: lesson.title,
              content: lesson.description
            }
          ]
        };
    }
  };

  const content = getLessonContent();

  return (
    <div className="min-h-screen bg-bg-dark text-text-primary pb-24">
      <HelpOverlay />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 border-b border-blue-400/30">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <button
            onClick={() => router.push(`/module/${params.id}`)}
            className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-4"
          >
            <FaArrowLeft /> Back to {module.name}
          </button>
          
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-terraform-purple rounded-full flex items-center justify-center text-xl font-bold">
              {currentIndex + 1}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{lesson.title}</h1>
              <p className="text-lg text-text-secondary mb-3">{lesson.description}</p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <FaClock className="text-blue-400" />
                  <span>{lesson.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBook className="text-purple-400" />
                  <span>Lesson {currentIndex + 1} of {module.content.lessons.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Topics */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-text-secondary uppercase mb-3">Topics Covered</h3>
          <div className="flex flex-wrap gap-2">
            {lesson.topics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Lesson Content */}
        <div className="space-y-8">
          {content.sections.map((section, index) => (
            <section key={index} className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <div className="prose prose-invert max-w-none">
                <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Mark as Complete */}
        <div className="mt-8 bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-400/30 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">Lesson Complete?</h3>
              <p className="text-sm text-text-secondary">Mark this lesson as complete to track your progress</p>
            </div>
            <button
              onClick={() => setIsCompleted(!isCompleted)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                isCompleted
                  ? 'bg-success-green text-white'
                  : 'bg-white/10 text-text-primary hover:bg-white/20'
              }`}
            >
              <FaCheckCircle />
              {isCompleted ? 'Completed' : 'Mark Complete'}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between">
          {previousLesson ? (
            <button
              onClick={() => router.push(`/module/${params.id}/lesson/${previousLesson.id}`)}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <FaArrowLeft />
              <div className="text-left">
                <div className="text-xs text-text-secondary">Previous</div>
                <div className="font-semibold">{previousLesson.title}</div>
              </div>
            </button>
          ) : (
            <div></div>
          )}

          {nextLesson ? (
            <button
              onClick={() => router.push(`/module/${params.id}/lesson/${nextLesson.id}`)}
              className="flex items-center gap-2 px-6 py-3 bg-terraform-purple hover:bg-purple-600 rounded-lg transition-colors"
            >
              <div className="text-right">
                <div className="text-xs text-purple-200">Next</div>
                <div className="font-semibold">{nextLesson.title}</div>
              </div>
              <FaArrowRight />
            </button>
          ) : (
            <button
              onClick={() => router.push(`/module/${params.id}`)}
              className="flex items-center gap-2 px-6 py-3 bg-success-green hover:bg-green-600 rounded-lg transition-colors"
            >
              <div className="text-right">
                <div className="text-xs text-green-200">Finish</div>
                <div className="font-semibold">Back to Module</div>
              </div>
              <FaCheckCircle />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
