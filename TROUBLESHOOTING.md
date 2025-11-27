# Troubleshooting Guide

## Black Screen Issue

If you see a black screen with only the progress bar visible, try these solutions:

### Solution 1: Check Browser Console
Open browser DevTools (F12) and check for errors. Common issues:
- WebGL not supported
- Three.js loading errors
- Component rendering errors

### Solution 2: Verify WebGL Support
Visit https://get.webgl.org/ to confirm your browser supports WebGL 2.0

### Solution 3: Clear Cache and Rebuild
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
npm run dev
```

### Solution 4: Check Camera Position
The camera should be positioned to see the modules. Current settings:
- Position: `[0, 20, 30]`
- FOV: `60`
- Looking at: `[0, 0, 0]`

### Solution 5: Verify Module Positions
Modules are positioned in a world map layout:
- Starter Region: Southwest (negative X, positive Z)
- Foundation Region: Center-West
- Advanced Region: East (positive X, negative Z)
- Mastery Region: North (negative Z)

### Solution 6: Test with Simple Scene
The Scene component includes a red test cube at `[0, 2, 0]`. If you don't see this, there's a rendering issue.

### Solution 7: Check for Font Errors
The RegionLabel component no longer requires custom fonts. If you see font errors, they should be warnings only and not block rendering.

## Common Errors and Fixes

### Error: "Export FaSliders doesn't exist"
**Fix**: Changed to `FaSlidersH` in `components/ModuleIcon.tsx`

### Error: "Font loading failed"
**Fix**: Removed custom font from `components/RegionLabel.tsx`

### Error: "Module not found"
**Fix**: Ensure all imports use correct paths and components exist

## Performance Issues

If the 3D scene is slow:

1. **Reduce Particle Count**
   - Edit `lib/responsive.ts`
   - Lower `particleCount` values

2. **Disable Shadows**
   - Edit `lib/responsive.ts`
   - Set `enableShadows: false`

3. **Reduce Icon Count**
   - Edit `lib/responsive.ts`
   - Lower `iconCount` values

## Development Server Issues

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Hot Reload Not Working
```bash
# Restart dev server
# Clear .next folder
rm -rf .next
npm run dev
```

## Browser Compatibility

**Recommended Browsers**:
- Chrome 90+
- Edge 90+
- Firefox 88+
- Safari 14+

**Not Supported**:
- Internet Explorer
- Browsers without WebGL 2.0

## Still Having Issues?

1. Check the browser console for specific errors
2. Verify all dependencies are installed: `npm install`
3. Try a different browser
4. Check if your GPU drivers are up to date
5. Disable browser extensions that might interfere with WebGL

## Debug Mode

To enable debug logging, add to your browser console:
```javascript
localStorage.setItem('debug', 'true');
```

Then refresh the page and check console for detailed logs.
