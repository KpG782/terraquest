// Lesson content for all TerraQuest modules
export interface LessonSection {
  title: string;
  content: string;
}

export interface LessonContent {
  sections: LessonSection[];
}

export function getLessonContent(lessonId: string): LessonContent {
  const content: Record<string, LessonContent> = {
    // MODULE 01: FOUNDATION ISLAND
    'lesson-01-01': {
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
        }
      ]
    }
  };

  return content[lessonId] || { sections: [] };
}
