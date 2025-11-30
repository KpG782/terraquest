# Navigation Test Guide

## Test the Foundation Island Flow

### Step 1: Access Foundation Island
1. Start the dev server: `npm run dev`
2. Open http://localhost:3000
3. Click on Foundation Island (the first island in the southwest)

**Expected**: Module page loads showing 3 lessons and 2 challenges

---

### Step 2: Test Lesson Navigation

#### Lesson 1
1. Click "Start Lesson" on Lesson 1: "What is Infrastructure as Code?"
2. **URL should be**: `/module/01-foundation/lesson/lesson-01-01`
3. Read through the content
4. Click "Next" button

**Expected**: Navigate to Lesson 2

#### Lesson 2
1. **URL should be**: `/module/01-foundation/lesson/lesson-01-02`
2. Read through the content
3. Click "Previous" to go back to Lesson 1
4. Click "Next" again to return to Lesson 2
5. Click "Next" to proceed

**Expected**: Navigate to Lesson 3

#### Lesson 3
1. **URL should be**: `/module/01-foundation/lesson/lesson-01-03`
2. Read through the content
3. Click "Previous" to go back to Lesson 2
4. Click "Next" again to return to Lesson 3
5. Click "Finish" or "Back to Module"

**Expected**: Return to module overview page

---

### Step 3: Test Challenge Navigation

#### Challenge 1
1. From module page, click "Start Challenge" on Challenge 1: "Install Terraform"
2. **URL should be**: `/module/01-foundation/challenge/challenge-01-01`
3. Read through the objective
4. Expand the step-by-step guide
5. Click "Show Hints" to see hints
6. Click "Mark Complete" button

**Expected**: Button changes to "Completed (+50 pts)"

#### Challenge 2
1. Click "Back to Module Overview"
2. Click "Start Challenge" on Challenge 2: "Your First Configuration"
3. **URL should be**: `/module/01-foundation/challenge/challenge-01-02`
4. Read through all 8 steps
5. Click "Show Hints"
6. Click "Mark Complete"

**Expected**: Button changes to "Completed (+100 pts)"

---

### Step 4: Complete Module
1. Return to module overview
2. Click "Mark as Complete" at the bottom
3. Return to main 3D map

**Expected**: Foundation Island shows as completed (green glow)

---

## URL Structure Reference

```
Main Map:
/

Module Overview:
/module/01-foundation

Lessons:
/module/01-foundation/lesson/lesson-01-01
/module/01-foundation/lesson/lesson-01-02
/module/01-foundation/lesson/lesson-01-03

Challenges:
/module/01-foundation/challenge/challenge-01-01
/module/01-foundation/challenge/challenge-01-02
```

---

## Troubleshooting

### Issue: "Lesson Not Found"
- Check the URL is correct
- Verify lesson ID matches: `lesson-01-01`, `lesson-01-02`, `lesson-01-03`
- Clear browser cache and reload

### Issue: "Challenge Not Found"
- Check the URL is correct
- Verify challenge ID matches: `challenge-01-01`, `challenge-01-02`
- Clear browser cache and reload

### Issue: Buttons not working
- Check browser console for errors
- Verify JavaScript is enabled
- Try a different browser

### Issue: Chunk loading error
- Clear browser cache
- Delete `.next` folder and rebuild: `rm -rf .next && npm run dev`
- Check internet connection

---

## Expected Behavior Summary

✅ All "Start Lesson" buttons navigate to lesson pages  
✅ All "Start Challenge" buttons navigate to challenge pages  
✅ Previous/Next buttons work in lessons  
✅ Back buttons return to module overview  
✅ Mark Complete buttons toggle state  
✅ All content displays correctly  
✅ No console errors  

---

## Quick Test Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Check for TypeScript errors
npx tsc --noEmit

# Check for linting issues
npm run lint
```

---

*Test completed successfully? Great! Foundation Island is fully functional! 🎉*
