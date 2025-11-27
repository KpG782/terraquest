# Quick Start Guide

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: http://localhost:3000

## 🎮 How to Use

### Exploring the 3D Map

1. **Rotate View**: Click and drag with mouse
2. **Zoom**: Scroll mouse wheel
3. **Hover Modules**: See detailed information cards
4. **Click Modules**: Open full module detail pages
5. **Complete Modules**: Mark as complete to unlock next ones

### Keyboard Navigation

- **Tab**: Cycle through modules
- **Enter/Space**: Open focused module
- **Arrow Keys**: Navigate between modules
- **Escape**: Return to map view

## 🗺️ Map Layout

### Starter Region (Southwest, Blue)
- **Foundation Island** - IaC fundamentals
- **Overview Peak** - Terraform architecture

### Foundation Region (Center, Purple)
- **Basics Forest** - Resources and data sources
- **Variables Valley** - Configuration and variables

### Advanced Region (East, Orange)
- **Features Realm** - Functions and expressions
- **Module Metropolis** - Reusable components

### Mastery Region (North, Red)
- **Multi-Env Archipelago** - Environment management
- **Testing Laboratory** - Testing and validation
- **Workflow Summit** - CI/CD and best practices

## 📊 Progress Tracking

Your progress is automatically saved and includes:
- ✅ Completed modules
- 🏆 Points earned
- 📈 Region completion stats
- 🎯 Overall percentage

## 🎯 Module Structure

Each module contains:
- **3 Lessons** with topics and duration
- **2 Challenges** with difficulty and points
- **Resources** for additional learning
- **Estimated Time** for completion

## 🎨 Visual Indicators

- **Blue Glow**: Starter region modules
- **Purple Glow**: Foundation region modules
- **Orange Glow**: Advanced region modules
- **Red Glow**: Mastery region modules
- **Green Glow**: Completed modules
- **Gray/Locked**: Prerequisites not met

## 📱 Responsive Design

The map adapts to your device:
- **Desktop**: Full features, high quality
- **Tablet**: Optimized performance
- **Mobile**: Touch controls, reduced particles

## 🔧 Build for Production

```bash
# Build optimized version
npm run build

# Start production server
npm start
```

## 🧪 Run Tests

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage
```

## 📦 Project Structure

```
terraquest/
├── app/
│   ├── page.tsx              # 3D map home
│   └── module/[id]/page.tsx  # Module details
├── components/
│   ├── JourneyMap3D.tsx      # Main 3D scene
│   ├── RegionMesh.tsx        # 3D terrain
│   ├── Scene.tsx             # Lighting & environment
│   └── ...
├── lib/
│   ├── modules.ts            # Content data
│   └── store.ts              # State management
└── types/
    └── index.ts              # TypeScript types
```

## 🎓 Learning Path

1. Start with **Foundation Island** (unlocked by default)
2. Complete lessons and challenges
3. Mark module as complete
4. Unlock next module in sequence
5. Progress through all 4 regions
6. Reach **Workflow Summit** for mastery

## 💡 Tips

- Hover over modules to preview content
- Check progress bar for region stats
- Complete challenges to earn points
- Use keyboard navigation for accessibility
- Explore all 4 regions systematically

## 🐛 Troubleshooting

If you encounter issues:
1. Check browser console (F12)
2. Verify WebGL support: https://get.webgl.org/
3. Clear cache: `rm -rf .next`
4. Reinstall: `rm -rf node_modules && npm install`
5. See TROUBLESHOOTING.md for detailed help

## 📚 Documentation

- **IMPROVEMENTS.md** - List of all improvements
- **CHANGELOG.md** - Version history
- **TROUBLESHOOTING.md** - Common issues and fixes
- **README.md** - Full project documentation

## 🌟 Features Highlights

✅ 9 complete Terraform modules
✅ 27 detailed lessons
✅ 18 hands-on challenges
✅ 4,000+ points to earn
✅ Interactive 3D world map
✅ Professional React Icons
✅ Region-based organization
✅ Real-time progress tracking
✅ Responsive design
✅ Keyboard accessible

## 🎉 Start Your Journey!

Run `npm run dev` and begin your Terraform learning adventure!
