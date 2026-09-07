# ProKitchens Dark Kitchen Launch Timeline

A comprehensive, interactive timeline for launching a dark kitchen with ProKitchens infrastructure. Displays all phases, milestones, responsibilities, and risk management for the complete deployment journey.

## Features

- 📋 **7 Major Phases** — From preparation to official launch
- 🎯 **40+ Detailed Milestones** — Every step mapped with timeline and responsibility
- ⚠️ **Risk Identification** — Built-in risk assessment per phase
- 🎨 **ProKitchens Design System** — Brand-compliant colors, typography, and components
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile
- 🌙 **Dark Mode Support** — Full dark/light theme support
- ✨ **Smooth Animations** — Progressive reveal on scroll, phase transitions
- ♿ **Accessible** — WCAG compliant with proper semantic HTML

## Tech Stack

- **Next.js 16** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS 4** — Utility-first styling
- **Rubik Font** — ProKitchens brand typography
- **Lucide Icons** — Clean, professional icon set

## Getting Started

### Prerequisites

- Node.js 20+ (uses nvm recommended)
- npm

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Visit http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  ├── components/
  │   ├── Header.tsx        # Sticky header with branding
  │   ├── Timeline.tsx      # Main timeline container
  │   ├── TimelinePhase.tsx # Individual phase accordion
  │   └── Footer.tsx        # Footer with info
  ├── data/
  │   └── timelineData.ts   # All timeline phases and steps
  ├── globals.css           # Design system tokens and animations
  ├── layout.tsx            # Root layout with metadata
  └── page.tsx              # Main page component
```

## Design System

### Colors (ProKitchens Brand)

- **Primary Teal**: `#5BC8C8` — Hero color, CTAs
- **Dark Teal**: `#1A4E58` — Backgrounds, headers
- **Mid Teal**: `#3A8A96` — Gradient steps
- **Near-Black**: `#222222` — Body text (light mode)
- **Light Teal**: `#B8E6E6` — Accents, light backgrounds
- **Pale Blue-Gray**: `#EAF5F6` — Card backgrounds

### Typography

- **Rubik** — Primary font (300, 400, 500, 600, 700 weights)
- **Weights**: Light for display, SemiBold for headings, Regular for body

## Timeline Data

The timeline is structured as:

```
Phase
├── Title & Description
├── Duration
└── Steps (array)
    └── Step
        ├── Task description
        ├── Calendar/Timeline
        ├── Responsible party
        └── Risk (if applicable)
```

All data is stored in `app/data/timelineData.ts` for easy updates.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy with one click

```bash
# Vercel CLI deployment
vercel
```

### Environment Variables

No environment variables required for basic deployment.

## Customization

### Update Timeline Data

Edit `app/data/timelineData.ts` to add/modify phases and steps.

### Change Colors

Modify CSS variables in `app/globals.css`:

```css
:root {
  --color-primary-teal: #5BC8C8;
  /* ... */
}
```

### Update Branding

Edit header logo and footer content in:
- `app/components/Header.tsx`
- `app/components/Footer.tsx`

## Performance

- Static site generation (all pages pre-rendered)
- Optimized images and fonts
- Code splitting with Next.js
- Responsive animations with `prefers-reduced-motion`

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- PDF export of timeline
- Timeline filtering by phase/responsibility
- Downloadable Gantt chart
- Milestone completion tracking
- Email notifications for milestones

## License

© 2025 ProKitchens. All rights reserved.
