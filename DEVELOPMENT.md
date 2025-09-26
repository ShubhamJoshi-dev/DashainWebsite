# 💻 Development Guide

A comprehensive guide for developing and maintaining the Dashain Festival website.

## 🏗️ Architecture Overview

This project follows modern Next.js best practices with a clean `src/` folder structure:

### Folder Structure Explained

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── lib/          # Utility functions and constants
├── pages/        # Next.js pages (routing)
├── styles/       # CSS styles and modules
└── types/        # TypeScript type definitions
```

## 🛠️ Development Workflow

### 1. Setting Up Development Environment

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### 2. Code Style and Standards

- **TypeScript**: All files should be properly typed
- **ESLint**: Follow the configured linting rules
- **CSS Modules**: Use for component-specific styles
- **Path Mapping**: Use `@/` for imports from src folder

### 3. Component Development

**Creating a New Component:**

```typescript
// src/components/MyComponent.tsx
import React from 'react';
import styles from '@/styles/MyComponent.module.css';

interface MyComponentProps {
  title: string;
  children?: React.ReactNode;
}

const MyComponent: React.FC<MyComponentProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

export default MyComponent;
```

**Creating Component Styles:**

```css
/* src/styles/MyComponent.module.css */
.container {
  padding: 2rem;
  border-radius: 8px;
  background: var(--primary-color);
}

.title {
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 1rem;
}
```

### 4. Adding Custom Hooks

```typescript
// src/hooks/useMyHook.ts
import { useState, useEffect } from 'react';

export function useMyHook(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  
  useEffect(() => {
    // Hook logic here
  }, []);
  
  return { value, setValue };
}

// Export from src/hooks/index.ts
export { useMyHook } from './useMyHook';
```

### 5. Utility Functions

```typescript
// src/lib/utils.ts
export function formatDashainDate(date: Date): string {
  // Utility function implementation
  return date.toLocaleDateString('ne-NP');
}

// src/lib/constants.ts
export const DASHAIN_COLORS = {
  primary: '#DC143C',
  secondary: '#FFD700',
  // ... more constants
};
```

## 🎨 Styling Guidelines

### CSS Variables

Use CSS custom properties defined in `globals.css`:

```css
:root {
  --primary-color: #dc143c;
  --secondary-color: #ffd700;
  --text-color: #333;
  --background-color: #fff;
}
```

### Responsive Design

```css
/* Mobile First Approach */
.container {
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

## 🧪 Testing

### Running Tests

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Fix linting issues
npm run lint:fix

# Build test
npm run build
```

### Manual Testing Checklist

- ✅ All pages load without errors
- ✅ Responsive design works on mobile/tablet/desktop
- ✅ Images load properly
- ✅ Animations work smoothly
- ✅ SEO meta tags are present
- ✅ No console errors or warnings

## 🔧 Common Development Tasks

### Adding a New Page

1. Create page component in `src/pages/`
2. Follow Next.js file-based routing
3. Add SEO meta tags using the Layout component
4. Test routing and SEO

### Updating Styles

1. Modify existing CSS modules or create new ones
2. Follow naming conventions (camelCase for classes)
3. Use CSS variables for colors and spacing
4. Test responsive design

### Adding Images

1. Place images in `public/images/`
2. Use Next.js Image component for optimization
3. Provide proper alt text for accessibility
4. Consider WebP/AVIF formats for better performance

### Performance Optimization

```bash
# Analyze bundle size
npm run analyze

# Check build output
npm run build

# Test production build locally
npm run preview
```

## 🐛 Debugging

### Common Issues

1. **Import Errors**
   - Check path mapping in `tsconfig.json`
   - Verify file extensions are correct
   - Use `@/` prefix for src folder imports

2. **CSS Not Loading**
   - Ensure CSS module naming is correct
   - Check import statements
   - Verify CSS variables are defined

3. **TypeScript Errors**
   - Run `npm run type-check`
   - Check type definitions in `src/types/`
   - Ensure all props are properly typed

### Development Tools

- **Next.js DevTools**: Built-in error reporting
- **React DevTools**: Browser extension for React debugging
- **TypeScript**: VS Code integration for type checking
- **ESLint**: Real-time code quality feedback

## 📦 Adding Dependencies

```bash
# Production dependency
npm install package-name

# Development dependency
npm install -D package-name

# Update dependencies
npm update
```

### Recommended Packages

- **UI Components**: Consider adding a UI library like Chakra UI or Material-UI
- **Forms**: React Hook Form for form handling
- **State Management**: Zustand or Context API for complex state
- **Animation**: Framer Motion (already included)

## 🚀 Pre-deployment Checklist

Before deploying:

1. **Code Quality**
   - [ ] All TypeScript errors resolved
   - [ ] ESLint warnings addressed
   - [ ] Unused imports removed
   - [ ] Console.log statements removed

2. **Performance**
   - [ ] Bundle size optimized
   - [ ] Images optimized
   - [ ] Lighthouse score > 90
   - [ ] Core Web Vitals are good

3. **Functionality**
   - [ ] All pages work correctly
   - [ ] Mobile responsiveness tested
   - [ ] SEO meta tags verified
   - [ ] Accessibility tested

4. **Content**
   - [ ] All text is accurate
   - [ ] Images have proper alt text
   - [ ] Cultural information is respectful and accurate

---

**Happy Coding! 🪔**

*May your development journey be as joyful as Dashain celebrations!*
