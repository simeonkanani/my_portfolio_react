# Professional Portfolio Website

A modern, fully responsive portfolio website built with React and Tailwind CSS v4. Showcasing cloud architecture expertise, systems engineering, and AI/ML knowledge with a professional design, dark mode support, and smooth animations.

## 🚀 Features

- **Responsive Design**: Optimized for all screen sizes from mobile (320px) to desktop (1536px)
- **Dark Mode**: Smooth theme switching with localStorage persistence
- **Modern UI**: Glass morphism effects, gradient backgrounds, and smooth animations
- **Fast Performance**: Built with Vite for optimal build times and development experience
- **Professional Design**: Clean, modern interface with intuitive navigation
- **Accessibility**: Semantic HTML and proper color contrast in both light and dark modes

## 🛠️ Technologies Used

### Frontend Framework & Build
- **React** - UI library for building interactive components
- **Vite** - Next-generation frontend tooling for fast development
- **Node.js** - JavaScript runtime

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework with custom configuration
- **PostCSS** - CSS processing with Tailwind plugins
- **Google Fonts** - Rubik and Courier Prime font families

### Development Tools
- **npm** - Package manager for dependencies
- **@tailwindcss/postcss** - Tailwind CSS PostCSS plugin for v4 support
- **autoprefixer** - CSS vendor prefix handling

## 📋 Project Structure

```
my_portfolio_react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with dark mode toggle
│   │   ├── Hero.jsx             # Hero section with CTA buttons
│   │   ├── About.jsx            # About section with bio and skills tags
│   │   ├── Skills.jsx           # Tech stack with 14 technology logos
│   │   ├── Projects.jsx         # Featured projects showcase
│   │   ├── Resume.jsx           # Experience and education timeline
│   │   ├── Contact.jsx          # Contact form and social links
│   │   └── Footer.jsx           # Footer with navigation and links
│   ├── styles/
│   │   └── globals.css          # Global styles, dark mode, animations
│   ├── App.jsx                  # Main app component with dark mode logic
│   └── main.jsx                 # React entry point
├── index.html                   # HTML template
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS custom configuration
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Project dependencies
└── README.md                    # This file
```

## 🎨 Design Features

### Color Scheme
- **Light Mode**: White backgrounds with gray-700 text
- **Dark Mode**: Deep blue-black (rgb(15, 23, 42)) with white text
- **Accent Colors**: Blue (600) in light mode, Blue (400-500) in dark mode

### Responsive Breakpoints
- `sm`: 480px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Typography
- **Headings**: Rubik-400, Courier Prime monospace
  - h1: 60px (line-height: 72px)
  - h2: 20px (line-height: 28px)
  - h3: 16px (line-height: 24px)
- **Paragraphs**: Rubik-400, 16px (line-height: 24px)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. **Clone the repository** (or navigate to the project directory):
```bash
cd my_portfolio_react
```

2. **Install dependencies**:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Building for Production

Create an optimized production build:
```bash
npm run build
```

This generates a `dist/` directory with production-ready files.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 🎯 Components Overview

### Navbar
- Sticky navigation with glass morphism effect
- Mobile hamburger menu with smooth animations
- Dark mode toggle button
- Smooth scroll navigation to sections

### Hero
- Full-screen hero section with gradient background
- Animated gradient text for name
- Call-to-action buttons (View Work, Get In Touch)
- Status badge showing availability
- Statistics display (projects, experience, certifications)

### About
- Two-column layout (desktop) / single column (mobile)
- Professional biography
- Key expertise tags (Cloud Architecture, System Design, AI/ML, etc.)
- Avatar with gradient border

### Skills
- Responsive grid of technology logos
- 3 columns on mobile → 4 on tablet → 6 on desktop
- Hover scale animations
- 14 technologies: React, Node.js, AWS, Azure, GCP, Kubernetes, Docker, Terraform, GitHub Actions, Python, JavaScript, TypeScript, Tailwind CSS, and more

### Projects
- 3-column responsive grid
- Project cards with hover effects
- Technology tags for each project
- Learn More and GitHub links
- Featured projects include:
  1. Multi-Cloud Infrastructure Platform
  2. My Portfolio (this project)
  3. Automated CI/CD Pipeline

### Resume
- Two-column layout with experience and education
- Timeline view for work experience
- Cards for certifications and degrees
- PDF download button (placeholder)
- Experience from 2017-Present

### Contact
- Contact form with validation
- Contact information display
- Social media links (LinkedIn, GitHub, Twitter)
- Form success/error messages
- Responsive layout

### Footer
- Copyright information
- Quick navigation links
- Built with React + Tailwind CSS

## 🌓 Dark Mode Implementation

The app features a sophisticated dark mode system:

1. **State Management**: Dark mode preference stored in localStorage
2. **Smooth Transitions**: 300ms CSS transitions for theme switching
3. **Complete Coverage**: All components update text and background colors
4. **Proper Contrast**: White text on dark backgrounds for accessibility
5. **Persistent Preference**: User's theme choice is remembered

Toggle dark mode using the moon/sun emoji button in the navbar.

## 📱 Responsive Design Features

- Fluid typography using CSS `clamp()` function
- Adaptive spacing and padding at different breakpoints
- Mobile-first CSS approach
- Touch-friendly button sizes on mobile
- Optimized navigation for small screens

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js` and `src/styles/globals.css` to modify the color scheme.

### Adding New Sections
Create a new component in `src/components/` and import it in `App.jsx`.

### Updating Content
Edit component files directly to update text, links, and information.

### Modifying Fonts
Update the Google Fonts import and font-family declarations in `src/styles/globals.css`.

## 📝 Notes

- All responsive breakpoints are optimized for modern devices
- The portfolio uses placeholder images from Unsplash
- Contact form is UI-only (requires backend integration for actual email sending)
- Dark mode uses class-based strategy with `html.dark` selector

## 📞 Contact & Links

- **Email**: your.email@example.com
- **Location**: San Francisco, CA
- **LinkedIn**: https://linkedin.com
- **GitHub**: https://github.com
- **Twitter**: https://twitter.com

## 📄 License

This project is open source and available under the MIT License.

## 🎉 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS v4](https://tailwindcss.com)
- Bundled with [Vite](https://vitejs.dev)
- Images from [Unsplash](https://unsplash.com)

---

**Happy coding! 🚀**
