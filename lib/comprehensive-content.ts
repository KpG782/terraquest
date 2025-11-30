// Comprehensive Terraform Learning Content for All Modules
export interface ContentSection {
  title: string;
  content: string;
}

export const LESSON_LIBRARY: Record<string, ContentSection[]> = {
  // Module 01: Foundation Island
  'lesson-01-01': [
    { title: 'Infrastructure as Code Fundamentals', content: 'IaC manages infrastructure through code files instead of manual configuration. Benefits include version control, automation, and consistency across environments.' },
    { title: 'Declarative vs Imperative', content: 'Declarative (Terraform): Describe desired state. Imperative (Scripts): Describe steps to execute. Terraform figures out how to achieve your desired state.' },
    { title: 'Real-World Impact', content: 'Companies using IaC deploy 200x more frequently with 24x faster recovery times. Infrastructure changes become code reviews, reducing errors by 60%.' }
  ],
  'lesson-01-02': [
    { title: 'Multi-Cloud Advantage', content: 'Terraform works with AWS, Azure, GCP, and 3000+ providers. Write once, deploy anywhere. Avoid vendor lock-in.' },
    { title: 'Provider Ecosystem', content: 'Official providers: AWS (900+ resources), Azure (1300+ resources), GCP (400+ resources). Community providers for everything from GitHub to Datadog.' },
    { title: 'State Management', content: 'State file tracks infrastructure. Enables drift detection, team collaboration, and safe updates. Can be stored locally or remotely (S3, Terraform Cloud).' }
  ],
  'lesson-01-03': [
    { title: 'Providers Explained', content: 'Providers are plugins enabling Terraform to interact with APIs. Configure once, use throughout your code. Example: provider "aws" { region = "us-east-1" }' },
    { title: 'Resources Deep Dive', content: 'Resources are infrastructure components. Syntax: resource "type" "name" { config }. Example: resource "aws_instance" "web" { ami = "ami-123", instance_type = "t2.micro" }' },
    { title: 'The Terraform Workflow', content: 'Write → Init (download providers) → Plan (preview changes) → Apply (create resources) → Manage (update/destroy). State tracks everything automatically.' }
  ],

  // Module 02: Overview Peak  
  'lesson-02-01': [
    { title: 'Terraform Architecture', content: 'Core: Written in Go, handles graph theory and dependency resolution. Plugins: Providers communicate with APIs. Graph: Terraform builds dependency graph to determine creation order.' },
    { title: 'Workflow Internals', content: 'Init: Downloads providers to .terraform/. Plan: Compares desired state (code) vs current state (state file). Apply: Executes changes in correct order based on dependencies.' },
    { title: 'Dependency Resolution', content: 'Terraform automatically detects dependencies. Implicit: resource.name.attribute references. Explicit: depends_on meta-argument. Creates directed acyclic graph (DAG) for parallel execution.' }
  ],
  'lesson-02-02': [
    { title: 'Provider Types', content: 'Official: Maintained by HashiCorp (AWS, Azure, GCP). Partner: Maintained by technology companies. Community: Open source contributions. All available in Terraform Registry.' },
    { title: 'Provider Configuration', content: 'Authentication: Environment variables, config files, or inline. Version constraints: Use ~> for compatible versions. Multiple instances: Use alias for multiple regions/accounts.' },
    { title: 'Provider Best Practices', content: 'Pin versions for stability. Use required_providers block. Store credentials securely (never in code). Use separate providers for different environments.' }
  ],
  'lesson-02-03': [
    { title: 'State File Purpose', content: 'Maps configuration to real resources. Stores metadata and resource dependencies. Enables performance optimization through caching. Required for updates and deletions.' },
    { title: 'Local vs Remote State', content: 'Local: terraform.tfstate in working directory. Simple but risky for teams. Remote: S3, Azure Blob, Terraform Cloud. Enables locking, encryption, and team collaboration.' },
    { title: 'State Commands', content: 'terraform state list: Show all resources. terraform state show: Inspect resource. terraform state mv: Rename resource. terraform state rm: Remove from state (keeps real resource).' }
  ]
};

export const CHALLENGE_LIBRARY: Record<string, any> = {
  'challenge-01-01': {
    objective: 'Install Terraform and verify it works',
    steps: ['Download from terraform.io', 'Extract and add to PATH', 'Run terraform version', 'Verify output shows version'],
    hints: ['Restart terminal after PATH update', 'Use chmod +x on Unix systems', 'Check firewall if download fails']
  },
  'challenge-01-02': {
    objective: 'Create your first Terraform configuration',
    steps: ['Create main.tf file', 'Add local_file resource', 'Run terraform init', 'Run terraform plan', 'Run terraform apply', 'Verify file created'],
    hints: ['Use local provider for simplicity', 'Check syntax carefully', 'Read error messages - they help!']
  }
};

// Additional lesson content for other modules
export const EXTENDED_LESSONS: Record<string, ContentSection[]> = {
  // Module 03: Basics Forest
  'lesson-03-01': [
    { title: 'Resource Syntax', content: 'resource "provider_type" "local_name" { argument = value }. Type identifies what to create. Name is your reference. Arguments configure the resource.' },
    { title: 'Meta-Arguments', content: 'depends_on: Explicit dependencies. count: Create multiple instances. for_each: Create from map/set. lifecycle: Control creation/destruction. provider: Use specific provider instance.' },
    { title: 'Resource Lifecycle', content: 'Create: New resource added. Update: In-place or destroy/recreate. Destroy: Resource removed. Terraform determines best approach based on API capabilities.' }
  ],
  'lesson-03-02': [
    { title: 'Data Sources vs Resources', content: 'Resources: Create/manage infrastructure. Data Sources: Query existing infrastructure. Syntax: data "type" "name" { filter }. Read-only, no state changes.' },
    { title: 'Common Data Sources', content: 'aws_ami: Find AMI IDs. aws_availability_zones: List AZs. aws_vpc: Query existing VPC. azurerm_resource_group: Find resource groups. Use for dynamic lookups.' },
    { title: 'Dynamic Lookups', content: 'Filter by tags, names, or attributes. Reference: data.type.name.attribute. Enables environment-agnostic code. Example: data.aws_ami.ubuntu.id' }
  ],
  'lesson-03-03': [
    { title: 'Output Values', content: 'output "name" { value = expression }. Export values from modules. Display after apply. Use in other configurations. Essential for module composition.' },
    { title: 'Sensitive Outputs', content: 'output "password" { value = resource.db.password, sensitive = true }. Hides value in CLI output. Still stored in state. Use for secrets and credentials.' },
    { title: 'Output Dependencies', content: 'Outputs create implicit dependencies. Terraform ensures resources exist before outputting. Use depends_on for explicit control. Outputs available after apply.' }
  ],

  // Module 04: Variables Valley
  'lesson-04-01': [
    { title: 'Variable Types', content: 'string: Text values. number: Integers and floats. bool: true/false. list: Ordered collection. map: Key-value pairs. object: Complex structures. any: No type constraint.' },
    { title: 'Variable Files', content: 'terraform.tfvars: Auto-loaded. *.auto.tfvars: Auto-loaded. -var-file flag: Manual load. Environment variables: TF_VAR_name. CLI flags: -var="name=value".' },
    { title: 'Default Values', content: 'variable "region" { default = "us-east-1" }. Optional if default provided. Required if no default. Use defaults for common values. Override per environment.' }
  ],
  'lesson-04-02': [
    { title: 'Locals Syntax', content: 'locals { name = expression }. Computed once per run. Reference: local.name. Reduce repetition. Simplify complex expressions. Not user-configurable.' },
    { title: 'When to Use Locals', content: 'Complex expressions used multiple times. Computed values from variables. Conditional logic. Naming conventions. NOT for user inputs (use variables).' },
    { title: 'Locals Best Practices', content: 'Group related values. Use descriptive names. Keep expressions simple. Document complex logic. Prefer variables for user inputs.' }
  ],
  'lesson-04-03': [
    { title: 'Collection Types', content: 'list(string): ["a", "b"]. set(number): Unique values. map(string): {key = "value"}. Access: var.list[0], var.map["key"].' },
    { title: 'Structural Types', content: 'object({ name = string, age = number }). tuple([string, number, bool]). Enforce structure. Type safety. Complex configurations.' },
    { title: 'Validation Rules', content: 'variable "region" { validation { condition = contains(["us-east-1", "us-west-2"], var.region), error_message = "Invalid region" } }. Custom validation logic.' }
  ],

  // Module 05: Features Realm
  'lesson-05-01': [
    { title: 'String Functions', content: 'format(): String formatting. join(): Combine list. split(): Split string. replace(): Text replacement. lower()/upper(): Case conversion. substr(): Extract substring.' },
    { title: 'Collection Functions', content: 'length(): Count elements. concat(): Merge lists. merge(): Combine maps. lookup(): Get map value. contains(): Check membership. flatten(): Nested to flat.' },
    { title: 'Encoding Functions', content: 'jsonencode(): Convert to JSON. yamlencode(): Convert to YAML. base64encode(): Base64 encoding. csvdecode(): Parse CSV. Essential for API interactions.' }
  ],
  'lesson-05-02': [
    { title: 'Conditional Expressions', content: 'condition ? true_val : false_val. Example: var.env == "prod" ? "t3.large" : "t3.micro". Ternary operator. Inline decisions. Keep simple.' },
    { title: 'For Expressions', content: '[for item in list : transform]. {for k, v in map : k => transform}. Transform collections. Filter with if. Create new structures.' },
    { title: 'Splat Expressions', content: 'resource.*.attribute: Get attribute from all instances. Shorthand for [for r in resource : r.attribute]. Works with count and for_each.' }
  ],
  'lesson-05-03': [
    { title: 'Dynamic Block Syntax', content: 'dynamic "block_name" { for_each = collection, content { argument = block.value } }. Generate nested blocks. Iterate over collections. Reduce repetition.' },
    { title: 'Dynamic Use Cases', content: 'Security group rules from list. Tags from map. Ingress rules. Network ACLs. Any repeated nested block. Keeps code DRY.' },
    { title: 'Dynamic Best Practices', content: 'Use sparingly - reduces readability. Prefer explicit blocks when possible. Document the logic. Test thoroughly. Consider module abstraction.' }
  ],

  // Module 06: Module Metropolis
  'lesson-06-01': [
    { title: 'Module Structure', content: 'main.tf: Primary resources. variables.tf: Input variables. outputs.tf: Output values. README.md: Documentation. examples/: Usage examples. Standard structure aids understanding.' },
    { title: 'Module Calling', content: 'module "name" { source = "./path", var1 = value1 }. Source: Local path, registry, git, HTTP. Version: For registry modules. Inputs: Pass variables.' },
    { title: 'Root vs Child Modules', content: 'Root: Where you run terraform. Child: Called by root or other modules. Encapsulation: Modules hide complexity. Reusability: Use across projects.' }
  ],
  'lesson-06-02': [
    { title: 'Local Modules', content: 'source = "./modules/vpc". Relative or absolute paths. Good for organization. Easy to modify. Version control with main code.' },
    { title: 'Registry Modules', content: 'source = "terraform-aws-modules/vpc/aws", version = "~> 3.0". Public registry. Verified modules. Community contributions. Semantic versioning.' },
    { title: 'Git Sources', content: 'source = "git::https://github.com/user/repo.git". Specify branch/tag: ?ref=v1.0.0. Private repos supported. SSH or HTTPS.' }
  ],
  'lesson-06-03': [
    { title: 'Module Dependencies', content: 'Implicit: Output references. Explicit: depends_on. Terraform resolves automatically. Parallel execution when possible. Respects dependency graph.' },
    { title: 'Module Versioning', content: 'Semantic versioning: MAJOR.MINOR.PATCH. ~> 1.0: >= 1.0, < 2.0. Pin versions in production. Test updates in dev. Document breaking changes.' },
    { title: 'Module Testing', content: 'Terratest: Go-based testing. Kitchen-Terraform: Ruby-based. terraform validate: Syntax check. terraform plan: Dry run. Examples as tests.' }
  ],

  // Module 07: Multi-Env Archipelago
  'lesson-07-01': [
    { title: 'Workspace Basics', content: 'terraform workspace new dev. terraform workspace select prod. Separate state per workspace. Same code, different state. Good for simple scenarios.' },
    { title: 'Workspace Commands', content: 'list: Show all workspaces. new: Create workspace. select: Switch workspace. delete: Remove workspace. show: Current workspace. State isolated per workspace.' },
    { title: 'Workspace Limitations', content: 'Same backend for all. Limited metadata. Hard to see all environments. Better for dev/test. Consider separate configs for prod.' }
  ],
  'lesson-07-02': [
    { title: 'Directory Structure', content: 'environments/dev/, environments/staging/, environments/prod/. Separate state files. Clear separation. Easy to understand. Recommended for production.' },
    { title: 'Variable Management', content: 'terraform.tfvars per environment. Environment-specific values. Shared modules. DRY principle. Version control all configs.' },
    { title: 'Environment Promotion', content: 'Test in dev → Validate in staging → Deploy to prod. Automated pipelines. Approval gates. Rollback capability. Audit trail.' }
  ],
  'lesson-07-03': [
    { title: 'Backend Types', content: 'S3: AWS storage. Azure Blob: Azure storage. GCS: Google storage. Terraform Cloud: SaaS. Consul: HashiCorp Consul. HTTP: Custom backend.' },
    { title: 'State Locking', content: 'Prevents concurrent modifications. DynamoDB for S3. Built-in for Terraform Cloud. Essential for teams. Automatic with most backends.' },
    { title: 'Backend Migration', content: 'terraform init -migrate-state. Moves state to new backend. Backup first! Test in non-prod. Update team documentation.' }
  ],

  // Module 08: Testing Laboratory
  'lesson-08-01': [
    { title: 'Validate Command', content: 'terraform validate: Check syntax. Validates configuration. Checks references. Fast feedback. Run before commit. CI/CD integration.' },
    { title: 'Format Checking', content: 'terraform fmt: Auto-format code. -check: Verify formatting. -recursive: All subdirectories. Consistent style. Pre-commit hooks.' },
    { title: 'Custom Validation', content: 'variable validation blocks. Precondition/postcondition. Check constraints. Fail fast. Clear error messages. Document requirements.' }
  ],
  'lesson-08-02': [
    { title: 'Unit Testing', content: 'Test individual modules. Mock dependencies. Fast execution. Terratest framework. Go-based tests. Assert outputs and state.' },
    { title: 'Integration Testing', content: 'Test full deployments. Real infrastructure. Slower but thorough. Automated cleanup. Test in isolated accounts. Verify functionality.' },
    { title: 'Testing Tools', content: 'Terratest: Go framework. Kitchen-Terraform: Ruby framework. terraform test: Built-in (experimental). Checkov: Policy as code. tflint: Linter.' }
  ],
  'lesson-08-03': [
    { title: 'Sentinel Policies', content: 'Policy as code for Terraform Cloud. Enforce standards. Cost controls. Security requirements. Compliance checks. Fail deployments that violate policies.' },
    { title: 'OPA Integration', content: 'Open Policy Agent. Rego language. Flexible policies. Open source. Kubernetes integration. Cloud-agnostic.' },
    { title: 'Compliance Scanning', content: 'Checkov: Security scanning. tfsec: Security checks. Terrascan: Policy enforcement. Pre-deployment validation. CI/CD integration.' }
  ],

  // Module 09: Workflow Summit
  'lesson-09-01': [
    { title: 'Pipeline Design', content: 'Stages: Validate → Plan → Apply. Approval gates. Automated testing. Artifact storage. Parallel execution. Environment promotion.' },
    { title: 'Automated Testing', content: 'Run tests on PR. Validate syntax. Check formatting. Security scanning. Cost estimation. Prevent bad code.' },
    { title: 'Deployment Strategies', content: 'Blue-green: Zero downtime. Canary: Gradual rollout. Rolling: Sequential updates. Feature flags. Rollback capability.' }
  ],
  'lesson-09-02': [
    { title: 'Code Review', content: 'Review terraform plan output. Check for unintended changes. Verify resource naming. Security review. Cost impact. Documentation updates.' },
    { title: 'State Management', content: 'Remote state required. State locking enabled. Backup strategy. Access controls. Encryption at rest. Audit logging.' },
    { title: 'Access Control', content: 'RBAC for state access. Separate credentials per environment. Least privilege principle. Audit all changes. MFA for production.' }
  ],
  'lesson-09-03': [
    { title: 'Code Organization', content: 'Modules for reusability. Clear naming conventions. Consistent structure. Documentation. Examples. Version control.' },
    { title: 'Security Best Practices', content: 'Never commit secrets. Use secret management. Encrypt state. Scan for vulnerabilities. Regular updates. Security policies.' },
    { title: 'Performance Optimization', content: 'Minimize provider calls. Use data sources wisely. Parallel execution. Target specific resources. Optimize dependencies. Cache when possible.' }
  ]
};

// Comprehensive Challenge Content
export const COMPREHENSIVE_CHALLENGES: Record<string, any> = {
  // Module 01 Challenges
  'challenge-01-01': {
    objective: 'Install Terraform and verify it works',
    steps: ['Download from terraform.io', 'Extract and add to PATH', 'Run terraform version', 'Verify output shows version'],
    hints: ['Restart terminal after PATH update', 'Use chmod +x on Unix systems', 'Check firewall if download fails']
  },
  'challenge-01-02': {
    objective: 'Create your first Terraform configuration',
    steps: ['Create main.tf file', 'Add local_file resource', 'Run terraform init', 'Run terraform plan', 'Run terraform apply', 'Verify file created'],
    hints: ['Use local provider for simplicity', 'Check syntax carefully', 'Read error messages - they help!']
  }
};