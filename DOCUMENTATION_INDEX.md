# TerraQuest Documentation Index

Welcome to the TerraQuest documentation! This index will help you find the information you need quickly.

## 📖 Core Documentation

### Getting Started
- **[README.md](./README.md)** - Project overview, features, and quick start guide
- **[QUICK_START.md](./QUICK_START.md)** - Step-by-step setup instructions
- **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - Common issues and solutions

### Learning Resources
- **[JOURNEY_MAP.md](./JOURNEY_MAP.md)** - Complete guide to all 9 modules, regions, and learning paths
- **[NAVIGATION_GUIDE.md](./NAVIGATION_GUIDE.md)** - Interactive controls, keyboard shortcuts, and navigation tips

### Project Information
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history and updates
- **[LICENSE](./LICENSE)** - MIT License details
- **[ATTRIBUTION.md](./ATTRIBUTION.md)** - Credits and acknowledgments

---

## 🗺️ Module Documentation

### Starter Region (Blue)
1. **[Foundation Island](./lib/modules.ts#L6-L50)** - Infrastructure as Code basics
   - Duration: 2 hours
   - Prerequisites: None
   - [Official Terraform Docs](https://developer.hashicorp.com/terraform/docs)

2. **[Overview Peak](./lib/modules.ts#L52-L96)** - Terraform architecture overview
   - Duration: 1.5 hours
   - Prerequisites: Foundation Island
   - [Provider Documentation](https://developer.hashicorp.com/terraform/language/providers)

### Foundation Region (Purple)
3. **[Basics Forest](./lib/modules.ts#L98-L142)** - Essential Terraform building blocks
   - Duration: 3 hours
   - Prerequisites: Overview Peak
   - [Resource Documentation](https://developer.hashicorp.com/terraform/language/resources)

4. **[Variables Valley](./lib/modules.ts#L144-L188)** - Parameterization and configuration
   - Duration: 2.5 hours
   - Prerequisites: Basics Forest
   - [Variable Documentation](https://developer.hashicorp.com/terraform/language/values/variables)

### Advanced Region (Orange)
5. **[Features Realm](./lib/modules.ts#L190-L234)** - Advanced Terraform capabilities
   - Duration: 3.5 hours
   - Prerequisites: Variables Valley
   - [Function Reference](https://developer.hashicorp.com/terraform/language/functions)

6. **[Module Metropolis](./lib/modules.ts#L236-L280)** - Reusable infrastructure components
   - Duration: 4 hours
   - Prerequisites: Features Realm
   - [Module Registry](https://registry.terraform.io/browse/modules)

### Mastery Region (Red)
7. **[Multi-Env Archipelago](./lib/modules.ts#L282-L326)** - Multi-environment management
   - Duration: 3.5 hours
   - Prerequisites: Module Metropolis
   - [Backend Documentation](https://developer.hashicorp.com/terraform/language/settings/backends/configuration)

8. **[Testing Laboratory](./lib/modules.ts#L328-L372)** - Infrastructure testing and validation
   - Duration: 3 hours
   - Prerequisites: Multi-Env Archipelago
   - [Terratest Documentation](https://terratest.gruntwork.io/)

9. **[Workflow Summit](./lib/modules.ts#L374-L418)** - Complete Terraform workflow
   - Duration: 4 hours
   - Prerequisites: Testing Laboratory
   - [CI/CD Examples](https://developer.hashicorp.com/terraform/tutorials/automation)

---

## 🎨 Design & Branding

- **[BRANDING_UPDATE.md](./BRANDING_UPDATE.md)** - Brand guidelines and visual identity
- **[TRADEMARK_NOTICE.md](./TRADEMARK_NOTICE.md)** - Terraform trademark usage
- **[ATTRIBUTION_UPDATE.md](./ATTRIBUTION_UPDATE.md)** - Updated attribution information

---

## 🔧 Technical Documentation

### Architecture
- **[components/](./components/)** - React components documentation
  - `JourneyMap3D.tsx` - Main 3D scene component
  - `RegionMesh.tsx` - Individual 3D region meshes
  - `CameraController.tsx` - GSAP camera animations
  - `HelpOverlay.tsx` - In-app help system

### State Management
- **[lib/store.ts](./lib/store.ts)** - Zustand progress store
- **[lib/modules.ts](./lib/modules.ts)** - Module data and content

### Utilities
- **[lib/webgl-detection.ts](./lib/webgl-detection.ts)** - WebGL support detection
- **[lib/coordinate-transform.ts](./lib/coordinate-transform.ts)** - 3D to 2D coordinate conversion
- **[lib/responsive.ts](./lib/responsive.ts)** - Responsive design utilities
- **[lib/keyboard-navigation.ts](./lib/keyboard-navigation.ts)** - Keyboard navigation hook
- **[lib/accessibility.ts](./lib/accessibility.ts)** - Accessibility utilities

---

## 🚀 Development Guides

### Setup & Configuration
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

### Environment Variables
Create `.env.local`:
```bash
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
NEXT_PUBLIC_API_URL=https://api.terraquest.dev
```

### Project Structure
```
terraquest/
├── app/                    # Next.js app router pages
├── components/             # React components
├── lib/                    # Utilities and data
├── public/                 # Static assets
├── types/                  # TypeScript definitions
└── [documentation files]   # Markdown documentation
```

---

## 📚 External Resources

### Official Terraform Documentation
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [HashiCorp Learn](https://developer.hashicorp.com/terraform/tutorials)
- [Terraform Registry](https://registry.terraform.io/)
- [Terraform CLI Reference](https://developer.hashicorp.com/terraform/cli)

### Community Resources
- [Terraform Community Forum](https://discuss.hashicorp.com/c/terraform-core)
- [GitHub Repository](https://github.com/hashicorp/terraform)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/terraform)
- [Reddit r/Terraform](https://www.reddit.com/r/Terraform/)

### Learning Platforms
- [A Cloud Guru](https://acloudguru.com/course/hashicorp-certified-terraform-associate)
- [Udemy Terraform Courses](https://www.udemy.com/topic/terraform/)
- [Pluralsight Terraform Path](https://www.pluralsight.com/paths/terraform)

---

## 🎯 Quick Reference

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `Tab` | Navigate to next module |
| `Shift + Tab` | Navigate to previous module |
| `Enter` / `Space` | Select focused module |
| `Escape` | Return to map view |

### Mouse Controls
| Action | Control |
|--------|---------|
| Rotate view | Left-click + drag |
| Pan view | Right-click + drag |
| Zoom | Scroll wheel |
| Select module | Click on region |
| View details | Hover over region |

### Module States
- 🔒 **Locked** - Prerequisites not completed (gray, 30% opacity)
- 🔓 **Unlocked** - Ready to start (full color)
- ✅ **Completed** - Module finished (green glow, pulsing)

---

## 🆘 Getting Help

### In-App Help
- Click the **?** button (bottom-right) for in-app help overlay
- Hover over modules for quick information
- Check the mini-map (bottom-left) for navigation

### Documentation
1. Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues
2. Review [NAVIGATION_GUIDE.md](./NAVIGATION_GUIDE.md) for controls
3. Read [JOURNEY_MAP.md](./JOURNEY_MAP.md) for module details

### Community Support
- [GitHub Issues](https://github.com/KpG782/terraquest/issues) - Report bugs or request features
- [GitHub Discussions](https://github.com/KpG782/terraquest/discussions) - Ask questions
- [Email Support](mailto:kenpatrickgarcia123@gmail.com) - Direct contact

---

## 📝 Contributing

Want to contribute? Check out:
- [README.md - Contributing Section](./README.md#-contributing)
- [GitHub Repository](https://github.com/KpG782/terraquest)
- [Open Issues](https://github.com/KpG782/terraquest/issues)

---

## 📄 License & Legal

- **License**: MIT License - see [LICENSE](./LICENSE)
- **Trademark**: Terraform® is a trademark of HashiCorp - see [TRADEMARK_NOTICE.md](./TRADEMARK_NOTICE.md)
- **Attribution**: See [ATTRIBUTION.md](./ATTRIBUTION.md) for credits

---

## 🔄 Updates & Changelog

Stay up to date with the latest changes:
- [CHANGELOG.md](./CHANGELOG.md) - Version history
- [GitHub Releases](https://github.com/KpG782/terraquest/releases)
- [Commit History](https://github.com/KpG782/terraquest/commits/main)

---

## 📞 Contact

- **Developer**: Ken Patrick A. Garcia
- **Email**: kenpatrickgarcia123@gmail.com
- **LinkedIn**: [ken-patrick-garcia-ba5430285](https://www.linkedin.com/in/ken-patrick-garcia-ba5430285)
- **GitHub**: [@KpG782](https://github.com/KpG782)
- **Portfolio**: [kengarciaportfolio-kpg782s-projects.vercel.app](https://kengarciaportfolio-kpg782s-projects.vercel.app)

---

## 🌟 Quick Links

| Category | Link |
|----------|------|
| 🏠 Home | [README.md](./README.md) |
| 🗺️ Journey Map | [JOURNEY_MAP.md](./JOURNEY_MAP.md) |
| 🎮 Navigation | [NAVIGATION_GUIDE.md](./NAVIGATION_GUIDE.md) |
| 🚀 Quick Start | [QUICK_START.md](./QUICK_START.md) |
| 🔧 Troubleshooting | [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) |
| 📖 Terraform Docs | [developer.hashicorp.com/terraform](https://developer.hashicorp.com/terraform/docs) |
| 💻 GitHub | [github.com/KpG782/terraquest](https://github.com/KpG782/terraquest) |

---

**Last Updated**: November 30, 2025  
**Version**: 1.0.0  
**Maintained by**: Ken Patrick Garcia

---

*Happy learning! 🚀*
