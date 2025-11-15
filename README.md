# Coursera - Modern Learning Platform UI

A fully modern, redesigned React.js UI inspired by Coursera with beautiful animations, dark mode support, and a polished user experience. Features Coursera's official branding colors and typography.

## Features

- 🎨 Modern, minimal UI with neumorphism and glassmorphism effects
- 🌗 Dark mode support with smooth transitions
- ✨ Smooth animations powered by Framer Motion
- 📱 Fully responsive design
- 🔍 Advanced course filtering and search
- 🎯 TypeScript for type safety
- ⚡ Fast development with Vite

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router v6
- Framer Motion
- Lucide React (Icons)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── context/         # React context providers
├── data/            # Static data (courses, etc.)
└── App.tsx          # Main app component with routing
```

## Pages

- **Home** (`/`) - Hero section, featured courses, testimonials
- **Course Catalog** (`/courses`) - Browse all courses with filters
- **Course Details** (`/courses/:id`) - Detailed course information

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme for light and dark modes.

### Course Data

All course data is stored in `src/data/courses.ts`. Add or modify courses there.

## License

MIT

