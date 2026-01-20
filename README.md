# Kytlos Landing Page

A modern, minimalist landing page for Kytlos - AI consulting services for startups. Built with Astro and Tailwind CSS for optimal performance and SEO.

## Features

- **Lightning Fast Performance**: Astro static site with minimal JavaScript
- **SEO Optimized**: Complete meta tags, structured data (JSON-LD), and semantic HTML
- **Fully Responsive**: Mobile-first design with breakpoints for tablet and desktop
- **Accessible**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- **Modern Design**: Clean black-and-white aesthetic with thoughtful typography
- **Contact Form**: Netlify Forms integration for easy contact submissions

## Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) - Modern sans-serif typeface
- **Deployment**: [Netlify](https://www.netlify.com/) - Automatic deployment and hosting

## Project Structure

```
kytlos-website/
├── public/
│   ├── kytlos-logo.svg        # Company logo
│   └── robots.txt              # Search engine crawler rules
├── src/
│   ├── components/
│   │   ├── Header.astro        # Navigation header with logo
│   │   ├── Hero.astro          # Hero section with headline and CTAs
│   │   ├── ValueProposition.astro  # 3-column benefits section
│   │   ├── Services.astro      # Services/offerings section
│   │   ├── CTASection.astro    # Contact form section
│   │   └── Footer.astro        # Site footer
│   ├── layouts/
│   │   └── BaseLayout.astro    # Base HTML layout with SEO meta tags
│   ├── pages/
│   │   └── index.astro         # Main landing page
│   └── styles/
│       └── global.css          # Global styles and design system
├── astro.config.mjs            # Astro configuration
├── tailwind.config.cjs         # Tailwind CSS configuration
├── package.json                # Project dependencies and scripts
└── netlify.toml                # Netlify deployment configuration
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kytlos-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
```

## Deployment

### Netlify Deployment

This project is configured for automatic deployment on Netlify:

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Connect the repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. The site will build and deploy on every push to main branch

### Manual Build

To build the site manually:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Configuration

### SEO Customization

Update SEO meta tags in `/src/layouts/BaseLayout.astro`:
- Title tag
- Meta description
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)

### Design System Customization

Modify design tokens in:
- `/src/styles/global.css` - CSS custom properties
- `/tailwind.config.cjs` - Tailwind theme extension

### Content Updates

Edit content in the respective component files:
- Hero headline: `/src/components/Hero.astro`
- Benefits: `/src/components/ValueProposition.astro`
- Services: `/src/components/Services.astro`
- Contact info: `/src/components/Footer.astro`

## Contact Form

The contact form uses Netlify Forms for submission handling:

1. Form submissions appear in your Netlify dashboard
2. Configure email notifications in Netlify settings
3. No backend code required

To use a different form handler, update `/src/components/CTASection.astro`

## Performance

Expected Lighthouse scores:
- Performance: 95-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

Core Web Vitals targets:
- LCP (Largest Contentful Paint): < 1.5s
- INP (Interaction to Next Paint): < 100ms
- CLS (Cumulative Layout Shift): < 0.05

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Accessibility

This site meets WCAG 2.1 AA standards:
- Semantic HTML structure
- Proper heading hierarchy
- Sufficient color contrast
- Keyboard navigation support
- Screen reader compatible
- Skip link for keyboard users
- Focus indicators on all interactive elements

## License

ISC

## Support

For questions or support, contact hello@kytlos.com

---

Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/)
