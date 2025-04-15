# Workshop Navigation Documentation

## Current Structure
The navigation should show the following hierarchy:

```
Workshop Info
└── Schedule

Workshop Content
├── Day 1: Understanding Digital Presence
│   ├── Session 1: Understanding Websites & Digital Presence
│   │   ├── Introduction & Overview
│   │   ├── Digital Presence Fundamentals
│   │   ├── Platform Selection
│   │   ├── AI & Tools
│   │   └── Resources
│   ├── Session 2: Content Organization & Customization
│   │   ├── Content Strategy
│   │   ├── Technical Implementation
│   │   └── Final Steps
│   └── Participants
├── Day 2: Hands-on Website Creation
│   ├── Session 1: Hands-on Website Building
│   └── Session 2: Advanced Customization & Launch
├── Day 3: Advanced Features & Analytics
│   ├── Session 1: Advanced Website Features
│   └── Session 2: SEO & Analytics
└── Day 4: Final Showcase & Future Growth
    ├── Session 1: Final Project Showcase
    └── Session 2: Future Growth & Maintenance
```

## Required Functionality

1. **Hierarchical Navigation**
   - Show all levels of navigation
   - Proper indentation for child items
   - Collapsible sections
   - Visual indicators for active items

2. **Active State**
   - Highlight current page
   - Show active path in hierarchy
   - Expand parent sections when child is active
   - Visual feedback on hover

3. **Icons**
   - Each navigation item should have an appropriate icon
   - Icons should be consistent with the content type
   - Icons should be visible in both collapsed and expanded states

4. **Responsive Design**
   - Collapsible on mobile
   - Proper spacing and alignment
   - Clear visual hierarchy
   - Smooth transitions

## Implementation Notes

1. **Navigation Configuration**
   - Use the existing `workshopContentNavigation` config
   - Ensure all paths are correctly mapped
   - Add missing sections and pages
   - Include proper icons for all items

2. **Component Structure**
   - Recursive rendering for nested items
   - Proper state management for active items
   - Smooth transitions and animations
   - Mobile-friendly design

3. **Styling**
   - Consistent with workshop theme
   - Clear visual hierarchy
   - Proper spacing and alignment
   - Accessible color contrast

## Gotchas and Lessons Learned

1. **Path Handling**
   - Always ensure consistent path formatting with leading slashes
   - Paths in navigation config must match exactly with actual routes
   - Be careful with trailing slashes in path comparisons
   - Use `pathname?.startsWith(href + '/')` for proper active state detection

2. **Section Toggling**
   - When opening a section:
     - Ensure all parent sections are opened
     - Close other day sections if opening a new day
     - Maintain parent sections open when opening a child
   - When closing a section:
     - Close all child sections
     - Don't close parent sections
     - Handle day section exclusivity correctly

3. **State Management**
   - Use Set for openSections to prevent duplicates
   - Initialize sections based on current path in useEffect
   - Handle path changes properly to update open sections
   - Preserve state when collapsing/expanding navigation

4. **Debugging Tips**
   - Add detailed logging for:
     - Section rendering
     - Click events
     - State changes
     - Path handling
   - Test edge cases:
     - Root paths
     - Deep nested paths
     - Paths with special characters
     - Empty paths

5. **Common Issues**
   - Mixed path formats (with/without leading slashes)
   - Incorrect parent-child relationship handling
   - Day section exclusivity not working
   - Active state not updating on path change
   - Collapse state not preserving active sections

## Expected Behavior

The WorkshopNavigation component should:

1. **Path-Based Section Opening**
   - When on `/workshop/own-your-digital-presence/day/1/participants`:
     - "Workshop Content" section should be open
     - "Day 1" section should be open
     - "Participants" item should be highlighted
     - All parent sections should be open

2. **Active State Highlighting**
   - Current page should be highlighted with indigo background
   - Parent sections of current page should be highlighted
   - Highlight should persist when section is collapsed

3. **Section Toggling**
   - Clicking a section with children should:
     - Open the section if closed
     - Close the section if open
     - Keep parent sections open when opening a child
     - Close child sections when closing a parent
     - Close other day sections when opening a new day

4. **Collapse Behavior**
   - Collapsing the navigation should:
     - Close all sections
     - Preserve active state highlighting
     - Allow expanding sections when navigation is collapsed

## Test Cases

### Path-Based Opening
1. Navigate to `/workshop/own-your-digital-presence/day/1/participants`
   - Expected: Day 1 section open, Participants highlighted
2. Navigate to `/workshop/own-your-digital-presence/day/1/session/1`
   - Expected: Day 1 and Session 1 sections open
3. Navigate to `/workshop/own-your-digital-presence/schedule`
   - Expected: Schedule section highlighted

### Section Toggling
1. Click "Day 1" when closed
   - Expected: Day 1 section opens
2. Click "Day 1" when open
   - Expected: Day 1 section closes
3. Click "Session 1" when Day 1 is closed
   - Expected: Day 1 opens, then Session 1 opens
4. Click "Day 2" when Day 1 is open
   - Expected: Day 1 closes, Day 2 opens

### Active State
1. Navigate to a deep page
   - Expected: All parent sections highlighted
2. Collapse navigation
   - Expected: Active state preserved
3. Expand navigation
   - Expected: Active state and open sections restored

## Implementation Notes

1. **Path Handling**
   ```typescript
   // Current path: /workshop/own-your-digital-presence/day/1/participants
   const sections = new Set([
     '/workshop',
     '/workshop/own-your-digital-presence',
     '/workshop/own-your-digital-presence/day',
     '/workshop/own-your-digital-presence/day/1',
     '/workshop/own-your-digital-presence/day/1/participants'
   ])
   ```

2. **Active State Logic**
   ```typescript
   const isActive = pathname === href || pathname?.startsWith(href + '/')
   ```

3. **Section Toggling**
   ```typescript
   // Opening a section
   if (!next.has(href)) {
     // Add all parent paths
     let currentPath = ''
     href.split('/').forEach(part => {
       if (part) {
         currentPath += (currentPath ? '/' : '') + part
         next.add(currentPath)
       }
     })
     
     // Handle day section exclusivity
     if (href.includes('/day/')) {
       const currentDay = href.match(/\/day\/(\d+)/)?.[1]
       Array.from(next).filter(section => {
         const sectionDay = section.match(/\/day\/(\d+)/)?.[1]
         return sectionDay && sectionDay !== currentDay
       }).forEach(section => next.delete(section))
     }
   }
   ```

## Debugging Tips

1. **Check Path Handling**
   - Verify path segments are correctly split
   - Ensure parent paths are included
   - Check for trailing slashes
   - Log path comparisons for debugging

2. **Verify State Updates**
   - Log openSections state changes
   - Check useEffect dependencies
   - Verify pathname updates
   - Monitor parent-child relationships

3. **Test Edge Cases**
   - Root paths
   - Paths with trailing slashes
   - Non-existent paths
   - Empty paths
   - Deep nested paths
   - Paths with special characters

4. **Performance Considerations**
   - Use Set for efficient lookups
   - Minimize re-renders
   - Optimize path comparisons
   - Cache computed values when possible 