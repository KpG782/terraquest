// Foundation Island - Lesson Content
export const module01Lessons = {
  'lesson-01-01': {
    sections: [
      {
        title: 'What is Infrastructure as Code?',
        content: `Infrastructure as Code (IaC) is managing infrastructure through code rather than manual processes.

**Traditional Approach:**
- Click through web consoles
- Manual configuration
- Hard to reproduce
- Prone to human error

**IaC Approach:**
- Write configuration files
- Automated deployment
- Version controlled
- Consistent and repeatable`
      },
      {
        title: 'Key Benefits',
        content: `**Reproducibility:** Create identical environments every time
**Version Control:** Track all infrastructure changes in Git
**Automation:** Deploy in minutes, not hours
**Documentation:** Code serves as living documentation
**Consistency:** Same configuration across all environments`
      }
    ]
  },
  'lesson-01-02': {
    sections: [
      {
        title: 'Why Terraform?',
        content: `Terraform is the industry standard for Infrastructure as Code.

**Multi-Cloud:** Works with AWS, Azure, GCP, and 3000+ providers
**Declarative:** Describe what you want, not how to create it
**State Management:** Tracks your infrastructure automatically
**Community:** Massive ecosystem and support`
      }
    ]
  },
  'lesson-01-03': {
    sections: [
      {
        title: 'Core Concepts',
        content: `**Providers:** Plugins for cloud platforms (AWS, Azure, etc.)
**Resources:** Infrastructure components (servers, databases)
**State:** Terraform's memory of your infrastructure
**HCL:** HashiCorp Configuration Language - easy to read and write`
      }
    ]
  }
};
