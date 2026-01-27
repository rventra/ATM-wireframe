# CashReady ATM Website

A professional website for CashReady ATM, an ATM Independent Sales Organization (ISO) providing wholesale processing rates to ATM operators.

## Features

- **Homepage**: Hero section, portfolio advantage, ROI calculator, service tiers, daily oversight comparison, lead capture
- **Equipment Page**: Genmega and Hyosung terminal showcase with specifications
- **How It Works**: Process flow and onboarding timeline
- **About**: Company story, values, and PAI partnership credentials
- **FAQ**: Categorized frequently asked questions with Schema.org markup
- **Contact**: Contact form and Calendly scheduling integration
- **Support**: Technical support and maintenance request forms
- **Resources**: ROI calculator and industry insights

## Tech Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rventra/ATM-wireframe.git
cd ATM-wireframe
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static site will be generated in the `dist` folder.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Homepage
│   ├── equipment/         # Equipment page
│   ├── how-it-works/      # How it works page
│   ├── about/             # About page
│   ├── faq/               # FAQ page
│   ├── contact/           # Contact page
│   ├── support/           # Support page
│   ├── resources/         # Resources page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   └── agreement/         # ISO agreement overview
├── components/
│   ├── ui/                # Reusable UI components
│   ├── sections/          # Page sections
│   └── forms/             # Form components
├── lib/
│   ├── utils.ts           # Utility functions
│   └── schemas.ts         # Zod validation schemas
└── types/                 # TypeScript types
```

## Configuration

### Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
# HubSpot/Zapier Integration
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
NEXT_PUBLIC_HUBSPOT_FORM_ID=your_form_id

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key
```

### CMS Integration

To enable dynamic content updates:

1. **Equipment Specifications**: Edit `src/app/equipment/page.tsx`
2. **FAQ Content**: Edit `src/app/faq/page.tsx`
3. **Team Bios**: Edit `src/app/about/page.tsx`

For headless CMS integration (Sanity, Contentful, etc.), add the appropriate client SDK and update data fetching in the respective pages.

## SEO & Performance

- Semantic HTML structure
- Schema.org LocalBusiness and FAQ markup
- Meta tags and Open Graph tags
- Mobile-first responsive design
- Optimized Core Web Vitals

## Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- ARIA labels on interactive elements
- Color contrast ratios meet standards

## Customization

### Brand Colors

Edit `src/app/globals.css`:

```css
:root {
  --navy: #0f172a;
  --navy-light: #1e293b;
  --green: #10b981;
  --green-dark: #059669;
  --green-light: #34d399;
}
```

### Typography

The site uses:
- **Inter** for body text and UI elements
- **Playfair Display** for headlines

## Deployment

### Vercel

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add environment variables in Vercel dashboard

### Netlify

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Add environment variables in Netlify dashboard

### Static Hosting

Upload the contents of the `dist` folder to any static web hosting service (AWS S3, Cloudflare Pages, etc.).

## Support

For questions or support, contact info@cashreadyatm.com.

## License

© 2025 CashReady ATM. All rights reserved.
