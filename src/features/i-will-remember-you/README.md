# I Will Remember You - System Architecture Visualization

This feature module provides an interactive 3D visualization of the technical system architecture for the "I Will Remember You" artwork.

## Overview

The visualization shows the interconnected components of the glass-headed robot installation, including:
- **Visitor** - Human interaction source
- **Input Devices** - Microphone and camera for data capture
- **Processing** - AI/ML systems for memory and response generation
- **Output** - Display and audio systems
- **Infrastructure** - Power and storage systems

## Components

### Core Components
- `ForceScene` - 3D force-directed graph visualization
- `InfoPanel` - Detailed information panel for selected nodes
- `Legend` - View mode toggle and node group legend
- `SystemVisualization` - Main component that combines all elements

### Data & State
- `data.ts` - Node and link definitions for the system architecture
- `store.ts` - Zustand store for managing visualization state
- `index.ts` - Module exports

## Usage

### Basic Usage
```tsx
import { SystemVisualization } from '@/features/i-will-remember-you'

function MyComponent() {
  return (
    <div className="h-screen">
      <SystemVisualization />
    </div>
  )
}
```

### With Research Page Integration
```tsx
import { SystemArchitectureVisualization } from '@/components/page/SystemArchitectureVisualization'

function ResearchPage() {
  return (
    <SystemArchitectureVisualization 
      title="System Architecture"
      description="Interactive 3D visualization of the technical system"
    />
  )
}
```

## Features

### Interactive Elements
- **3D Navigation** - Rotate, zoom, and pan the visualization
- **Node Selection** - Click nodes to view detailed information
- **View Modes** - Toggle between High-Level and Deep Tech descriptions
- **Fullscreen Mode** - Expand visualization to full screen
- **Responsive Design** - Adapts to different screen sizes

### Technical Information
Each node displays:
- Component image (with fallback placeholder)
- Power consumption
- Poetic description
- Technical role (High-Level or Deep Tech)
- Node group classification

### Node Groups
1. **Visitor** (Red) - Human interaction source
2. **Input** (Teal) - Data capture devices
3. **Processing** (Blue) - AI/ML systems
4. **Output** (Green) - Display and audio
5. **Infrastructure** (Yellow) - Power and storage

## Dependencies

- `react-force-graph-3d` - 3D graph visualization
- `three-spritetext` - Text rendering in 3D
- `zustand` - State management
- `lucide-react` - Icons

## Customization

### Adding New Nodes
Update `data.ts` to add new nodes and links:

```tsx
export const nodes = [
  // ... existing nodes
  { 
    id: "New Component", 
    group: 3, 
    power: "5 W", 
    poetic: "New poetic description",
    image: placeholderImages["New Component"] // or use generatePlaceholderImage("New Component", 3)
  }
]

export const links = [
  // ... existing links
  { source: "Existing Node", target: "New Component" }
]
```

### Adding Images
Each node includes an image property. You can:

1. **Use placeholder images** (recommended for development):
   ```tsx
   image: placeholderImages["Component Name"]
   ```

2. **Generate custom placeholders**:
   ```tsx
   image: generatePlaceholderImage("Component Name", groupNumber, width, height)
   ```

3. **Use custom images**:
   ```tsx
   image: "https://your-image-url.com/component.jpg"
   ```

### Modifying Descriptions
Update the `getTechnicalDescription` function in `InfoPanel.tsx`:

```tsx
const descriptions: Record<string, { highLevel: string; deepTech: string }> = {
  "New Component": {
    highLevel: "High-level description",
    deepTech: "Deep technical description"
  }
}
```

### Styling
The visualization uses Tailwind CSS classes and can be customized by modifying the component styles.

## Integration with Research Page

The visualization is automatically included in the Technical tab of the "I Will Remember You" research page. It provides an interactive way for visitors to understand the complex technical architecture of the artwork.

## Performance Considerations

- The 3D visualization is dynamically imported to avoid SSR issues
- Client-side only rendering ensures optimal performance
- Responsive design adapts to different screen sizes
- Memory management through proper cleanup of event listeners 