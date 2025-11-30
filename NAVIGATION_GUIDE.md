# TerraQuest Navigation Guide

## Quick Reference

### Module Navigation Flow

```
START HERE
    ↓
[01] Foundation Island (2h) ────────────────────┐
    ↓                                           │
[02] Overview Peak (1.5h) ─────────────────────┤ STARTER REGION
    ↓                                           │ (Blue)
────────────────────────────────────────────────┘
    ↓
[03] Basics Forest (3h) ────────────────────────┐
    ↓                                           │ FOUNDATION REGION
[04] Variables Valley (2.5h) ───────────────────┤ (Purple)
    ↓                                           │
────────────────────────────────────────────────┘
    ↓
[05] Features Realm (3.5h) ─────────────────────┐
    ↓                                           │ ADVANCED REGION
[06] Module Metropolis (4h) ────────────────────┤ (Orange)
    ↓                                           │
────────────────────────────────────────────────┘
    ↓
[07] Multi-Env Archipelago (3.5h) ──────────────┐
    ↓                                           │
[08] Testing Laboratory (3h) ───────────────────┤ MASTERY REGION
    ↓                                           │ (Red)
[09] Workflow Summit (4h) ──────────────────────┤
    ↓                                           │
COMPLETE! 🎉                                    │
────────────────────────────────────────────────┘
```

---

## Module Details at a Glance

| # | Module | Type | Time | Prerequisites | Key Topics |
|---|--------|------|------|---------------|------------|
| 01 | Foundation Island | Island | 2h | None | IaC basics, Why Terraform, Core concepts |
| 02 | Overview Peak | Peak | 1.5h | 01 | Architecture, Providers, State basics |
| 03 | Basics Forest | Forest | 3h | 02 | Resources, Data sources, Outputs |
| 04 | Variables Valley | Valley | 2.5h | 03 | Input variables, Locals, Complex types |
| 05 | Features Realm | Realm | 3.5h | 04 | Functions, Expressions, Dynamic blocks |
| 06 | Module Metropolis | Metropolis | 4h | 05 | Module structure, Sources, Composition |
| 07 | Multi-Env Archipelago | Archipelago | 3.5h | 06 | Workspaces, Environments, Remote state |
| 08 | Testing Laboratory | Laboratory | 3h | 07 | Validation, Testing, Policy as code |
| 09 | Workflow Summit | Summit | 4h | 08 | CI/CD, Team collaboration, Best practices |

---

## Interactive Controls

### Mouse Controls
| Action | Control |
|--------|---------|
| Rotate view | Left-click + drag |
| Pan view | Right-click + drag |
| Zoom in/out | Scroll wheel |
| Select module | Click on region |
| View details | Hover over region |

### Touch Controls (Mobile/Tablet)
| Action | Control |
|--------|---------|
| Rotate view | One-finger drag |
| Zoom/Pan | Two-finger pinch/drag |
| Select module | Tap on region |

### Keyboard Controls
| Key | Action |
|-----|--------|
| Tab | Navigate to next module |
| Shift + Tab | Navigate to previous module |
| Enter / Space | Select focused module |
| Escape | Return to map (from module page) |

---

## Visual Indicators

### Module States

#### 🔒 Locked
- **Appearance**: Gray, low opacity (30%)
- **Meaning**: Prerequisites not completed
- **Action**: Complete previous modules first

#### 🔓 Unlocked
- **Appearance**: Full color, normal opacity
- **Meaning**: Ready to start
- **Action**: Click to view details

#### ✅ Completed
- **Appearance**: Green glow, pulsing animation
- **Meaning**: Module finished
- **Action**: Can review anytime

### Region Colors
- **Starter** (Blue): #3B82F6 - Foundation concepts
- **Foundation** (Purple): #A855F7 - Core building blocks
- **Advanced** (Orange): #F97316 - Advanced features
- **Mastery** (Red): #EF4444 - Production workflows

---

## Module Page Layout

When you click on a module, you'll see:

### Header Section
- Module icon and name
- Completion status
- Estimated time
- Number of lessons
- Total points available

### Content Sections
1. **Overview**: High-level description of what you'll learn
2. **Lessons**: Detailed learning content with topics
3. **Challenges**: Hands-on exercises with point values
4. **Resources**: External links to official documentation

### Actions
- **Back to Journey Map**: Return to 3D view
- **Start Challenge**: Begin hands-on exercise
- **Mark as Complete**: Track your progress

---

## Progress Tracking

### Progress Bar (Top of screen)
- Shows overall completion percentage
- Updates as you complete modules
- Persists across sessions

### Achievement Badges (Bottom-right)
- Unlock by completing milestones
- Displayed as visual badges
- Track your learning journey

### Mini Map (Bottom-left)
- Shows your current position
- Displays all module locations
- Quick navigation reference

---

## Learning Tips

### For Beginners
1. Start with **Foundation Island** - no prerequisites
2. Complete lessons before challenges
3. Use the provided resources for deeper learning
4. Don't skip modules - each builds on previous knowledge

### For Intermediate Learners
1. Review prerequisites if concepts are unclear
2. Try challenges before checking solutions
3. Explore additional resources for advanced topics
4. Practice with real cloud providers

### For Advanced Users
1. Focus on Mastery Region modules
2. Implement learned concepts in real projects
3. Contribute to community resources
4. Share your knowledge with others

---

## Troubleshooting

### Module Won't Unlock
- **Issue**: Can't click on a module
- **Solution**: Complete all prerequisite modules first
- **Check**: Look at the module's prerequisites in the details

### Can't See 3D View
- **Issue**: Black screen or error message
- **Solution**: Check WebGL support in your browser
- **Alternative**: Use a modern browser (Chrome, Firefox, Safari, Edge)

### Progress Not Saving
- **Issue**: Completed modules reset on refresh
- **Solution**: Enable localStorage in browser settings
- **Check**: Browser privacy settings may block storage

### Performance Issues
- **Issue**: Slow or laggy 3D view
- **Solution**: 
  - Close other browser tabs
  - Use a device with better GPU
  - Reduce browser zoom level
  - Try on desktop instead of mobile

---

## Keyboard Navigation Example

```
1. Press Tab → Focus moves to first module (Foundation Island)
2. Press Tab → Focus moves to Overview Peak
3. Press Enter → Opens Overview Peak detail page
4. Press Escape → Returns to 3D map
5. Press Tab → Continue navigating modules
```

---

## Mobile Experience

### Optimizations
- Reduced particle effects for better performance
- Touch-optimized controls
- Simplified UI for smaller screens
- Responsive layout adjustments

### Best Practices
- Use landscape orientation for better view
- Pinch to zoom for detailed inspection
- Tap and hold for hover information
- Use native browser controls for navigation

---

## URL Structure

### Main Map
```
https://your-domain.com/
```

### Module Detail Pages
```
https://your-domain.com/module/01-foundation
https://your-domain.com/module/02-overview
https://your-domain.com/module/03-basics
... and so on
```

### Direct Navigation
You can bookmark specific modules and share links with others!

---

## Resource Links Quick Access

### Official Terraform Resources
- [Terraform Docs](https://developer.hashicorp.com/terraform/docs)
- [HashiCorp Learn](https://developer.hashicorp.com/terraform/tutorials)
- [Terraform Registry](https://registry.terraform.io/)
- [Community Forum](https://discuss.hashicorp.com/c/terraform-core)

### Module-Specific Resources
Each module page includes curated links to:
- Official documentation sections
- Tutorial guides
- Code examples
- Best practice guides

---

## Accessibility Features

### Screen Reader Support
- All modules have descriptive ARIA labels
- Status announcements for state changes
- Semantic HTML structure
- Keyboard-accessible navigation

### Visual Accessibility
- High contrast mode compatible
- WCAG 2.1 AA compliant colors
- Clear focus indicators
- Scalable text and UI elements

### Motor Accessibility
- Full keyboard navigation
- Large click targets
- No time-based interactions
- Alternative input methods supported

---

## Getting Help

### In-App Help
- Hover over modules for quick info
- Check the controls hint (bottom of screen)
- Use the mini-map for orientation

### External Help
- Review [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
- Check [README.md](./README.md) for setup
- Visit official Terraform documentation
- Ask in community forums

---

## Next Steps

1. **Start Learning**: Click on Foundation Island
2. **Track Progress**: Watch your progress bar grow
3. **Earn Achievements**: Complete milestones
4. **Master Terraform**: Reach the Workflow Summit
5. **Apply Knowledge**: Build real infrastructure!

Happy learning! 🚀
