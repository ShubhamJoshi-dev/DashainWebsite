# 🪔 Dashain Festival Website

A beautiful, modern website celebrating Dashain - Nepal's greatest festival of victory and family reunion. Built with Next.js, TypeScript, and featuring a clean, organized codebase structure.

## 🎯 Features

- **Modern Next.js Architecture**: Built with Next.js 14, TypeScript, and modern React patterns
- **Organized Code Structure**: Clean `src/` folder organization with proper separation of concerns
- **SEO Optimized**: Complete meta tags, OpenGraph, Twitter Cards, and JSON-LD structured data
- **Performance Focused**: Optimized images, code splitting, and fast loading times
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Rich Animations**: Beautiful floating animations and smooth transitions
- **Cultural Authenticity**: Accurate representation of Dashain traditions and significance

## 📁 Project Structure

```
DashainWebsite/
├── src/
│   ├── components/          # React components
│   │   ├── About.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Layout.tsx
│   │   ├── Traditions.tsx
│   │   └── Wishes.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── index.ts
│   │   ├── useLocalStorage.ts
│   │   └── useScrollPosition.ts
│   ├── lib/                 # Utility libraries
│   │   ├── constants.ts
│   │   └── utils.ts
│   ├── pages/               # Next.js pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   ├── styles/              # CSS styles
│   │   ├── Footer.module.css
│   │   ├── globals.css
│   │   ├── Header.module.css
│   │   ├── Hero.module.css
│   │   └── Sections.module.css
│   └── types/               # TypeScript type definitions
│       └── index.ts
├── public/                  # Static assets
│   ├── images/
│   ├── robots.txt
│   └── site.webmanifest
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies and scripts
└── vercel.json             # Vercel deployment config
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd DashainWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Generate static export
- `npm run analyze` - Analyze bundle size

## 🌐 Deployment

### Vercel (Recommended)

1. **Via Vercel Dashboard (Browser)**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will automatically detect Next.js and deploy

2. **Via Vercel CLI**
   ```bash
   npm i -g vercel
   vercel
   ```

### Other Platforms

- **Netlify**: Deploy the `out/` folder after running `npm run export`
- **GitHub Pages**: Use static export with `npm run export`
- **Any Static Host**: Use `npm run export` and upload the `out/` folder

## 🎨 Customization

### Adding New Components

1. Create your component in `src/components/`
2. Export it from the component file
3. Import and use in your pages

### Adding Styles

- Use CSS Modules (`.module.css`) for component-specific styles
- Add global styles to `src/styles/globals.css`
- Follow the existing naming conventions

### Adding Utilities

- Add utility functions to `src/lib/utils.ts`
- Add constants to `src/lib/constants.ts`
- Create custom hooks in `src/hooks/`

### Type Definitions

- Add TypeScript types to `src/types/index.ts`
- Use proper typing for all components and functions

## 🛠️ Technologies Used

- **Next.js 14** - React framework with SSR/SSG
- **TypeScript** - Type-safe JavaScript
- **React 18** - Modern React with hooks
- **CSS Modules** - Scoped CSS styling
- **Framer Motion** - Animation library
- **Next SEO** - SEO optimization
- **ESLint** - Code linting
- **Vercel** - Deployment platform

## 📱 SEO & Performance

- ✅ Meta tags and OpenGraph data
- ✅ Structured data (JSON-LD)
- ✅ Responsive images with optimization
- ✅ Performance optimizations
- ✅ Accessibility features
- ✅ Fast loading times

## 🎯 Cultural Significance

This website celebrates Dashain, the most important festival in Nepal:

- **10-day Festival**: From Ghatasthapana to Vijaya Dashami
- **Victory Celebration**: Commemorates the victory of good over evil
- **Family Reunion**: Brings families together from across the world
- **Cultural Heritage**: Preserves and shares Nepalese traditions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Traditional Dashain imagery and cultural information
- Nepal's rich cultural heritage
- The global Nepalese community

---

**शुभ दशैं! 🪔🌼**

*May this Dashain bring joy, prosperity, and victory to all!*