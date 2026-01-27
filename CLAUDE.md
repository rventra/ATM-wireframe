# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CashReady ATM is a Next.js 16 website for an ATM Independent Sales Organization (ISO). It provides wholesale PAI processing rates to ATM operators.

## Tech Stack

- Next.js 16.1.5 with App Router
- React 19
- TypeScript 5
- Tailwind CSS v4 (CSS-based configuration)
- Framer Motion for animations
- React Hook Form with Zod v4 for validation
- Lucide React for icons

## Build Commands

```bash
# Development server
npm run dev

# Production build (static export to dist/)
npm run build

# Linting
npm run lint
```

## Project Structure

- `src/app/` - Next.js App Router pages
- `src/components/ui/` - Reusable UI components (Button, Navigation, Footer)
- `src/components/sections/` - Page section components (HeroSection, ROICalculator, etc.)
- `src/components/forms/` - Form components (LeadForm, ContactForm)
- `src/lib/` - Utilities and Zod schemas

## Key Configuration

- **next.config.ts**: Static export configured (`output: "export"`, `distDir: "dist"`)
- **globals.css**: Tailwind v4 configuration with custom CSS variables for brand colors
- **Images**: Uses `unoptimized: true` for static export compatibility

## Styling Conventions

Tailwind v4 uses CSS-based configuration in `globals.css`:

```css
@theme inline {
  --color-navy: var(--navy);
  --color-green: var(--green);
  --font-sans: 'Inter', system-ui, sans-serif;
}
```

Brand colors:
- Navy: `#0f172a` (primary dark)
- Green: `#10b981` (accent/CTA)

Custom component classes defined in `@layer components`:
- `.btn-primary` / `.btn-secondary`
- `.section-padding` / `.container-padding`
- `.heading-xl` / `.heading-lg` / `.heading-md`
- `.gradient-navy` / `.gradient-hero`

## Form Handling

Forms use React Hook Form with Zod v4. Use `z.union([z.literal(...)])` for enum-like validation (not `z.enum()` with `required_error`):

```typescript
monthlyVolume: z.union([
  z.literal("<500"),
  z.literal("500-2k"),
]),
```

All forms include a honeypot field for spam prevention.

## SEO

Pages include Schema.org markup:
- LocalBusiness schema on homepage
- FAQ schema on FAQ page

Metadata is exported from each page's `metadata` export.

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:
- `NEXT_PUBLIC_COMPANY_PHONE`
- `NEXT_PUBLIC_COMPANY_EMAIL`
- HubSpot, Calendly, GA4 keys (for integrations)

## Deployment

Build outputs to `dist/` folder. Deploy to any static hosting (Vercel, Netlify, S3, etc.).

## Important Notes

- This is a static export (no server-side rendering)
- All pages use trailing slashes (`trailingSlash: true`)
- Forms currently log to console - integrate with HubSpot/Zapier for production
- Phone number formatting available in `src/lib/utils.ts`
