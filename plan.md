# AYAN ALTAQI Website Development Plan

## Project Goal

Build and maintain a production-ready corporate website for AYAN ALTAQI Trading & Contracting. The site is a Next.js 15 App Router application with TypeScript, Tailwind CSS, Framer Motion, Lucide icons, optimized imagery, reusable components, SEO metadata, and responsive layouts.

The brand direction is premium Gulf-region industrial enterprise: strong red branding, clean white/gray surfaces, cinematic imagery, metallic accents, glassmorphism, and polished motion.

## Project Type

- Framework: Next.js 15 App Router
- Language: TypeScript
- Styling: Tailwind CSS with custom theme tokens
- Animation: Framer Motion and CSS utilities
- Icons: Lucide React
- Content model: Static typed data in `data/site.ts`
- Assets: Local public images plus selected remote images

## Design System

- Primary red: `#b5000b`
- Primary bright red: `#e30613`
- Background/surfaces: `#f9f9f9`, `#ffffff`, `#eeeeee`, `#e8e8e8`, `#e2e2e2`
- Text: `#1a1c1c`, `#5f5e5e`, `#5e3f3b`
- Dark surface: `#2f3131`
- Typography: Montserrat for headings, Inter for body
- Shape: mostly 4px to 12px radius; cards use restrained rounded corners
- Effects: glass panels, red hover glows, metallic gradients, dark cinematic overlays

## Pages

- `/` Home
- `/about` About
- `/services` Services
- `/projects` Projects
- `/projects/[slug]` Project detail pages
- `/industries` Industries
- `/careers` Careers
- `/contact` Contact
- `/_not-found` Custom not found page

## Home Sections

- Hero slider with three industrial slides, auto-advance, vertical dots, and Read More CTA
- About preview with heading, paragraph, checklist, and image
- Products slider with auto motion and arrow controls
- Core services grid
- Industries grid
- Animated stats section
- CTA banner

## Other Page Sections

- About: hero, overview, values/quality copy, Why AYAN, CTA
- Services: hero, service detail cards, project process, industries supported, CTA
- Projects: hero, filterable project explorer, modal previews, dynamic project detail pages
- Industries: hero, sector cards, service fit grid, CTA
- Careers: hero, culture/benefits, open positions, hiring process, application form
- Contact: hero, inquiry form, named contacts, WhatsApp CTA, map placeholder
- Global layout: fixed bottom-right WhatsApp shortcut using the first named contact's WhatsApp number

## Reusable Components

- Layout: `Navbar`, `Footer`, `FloatingWhatsApp`
- UI: `Container`, `Button`, `MotionWrapper`, `StaggerGroup`, `StaggerItem`, `SectionTitle`, `AnimatedCard`, `AnimatedCounter`
- Sections: `HeroSection`, `AboutPreview`, `ProductsSection`, `ServicesGrid`, `IndustriesGrid`, `StatsSection`, `CtaBanner`, `PageHero`, `ProjectExplorer`, `ContactForm`

## Animations and Interactions

- Framer Motion scroll reveals via `MotionWrapper`
- Staggered card reveal via `StaggerGroup` and `StaggerItem`
- Hero slide fade/scale transitions
- Products transform carousel with auto-slide and manual arrows
- Project filtering and modal preview animation
- Animated numeric counters
- Navbar scroll blur and mobile menu animation
- Hover image zoom and red glow card effects
- Fixed WhatsApp shortcut opens the configured `wa.me` contact link

## Current Task

Maintain the current AYAN ALTAQI website as a polished corporate industrial site. Recent focus has been Home hero carousel, products slider, About page content, contact details, WhatsApp access, and product catalog expansion.

## Future Tasks

- Connect contact and careers forms to a backend or form service.
- Replace map placeholder with an actual map embed or static office location module.
- Audit all remote images and migrate critical assets locally.
- Add real project case studies and replace dummy project data.
- Add metadata images/OpenGraph image assets under `public`.
- Add accessibility QA for carousel controls, focus states, and contrast.
- Add product categories or filtering if the product slider becomes too long.
- Add automated tests or at least route smoke tests.

## UI/UX Consistency Rules

- Preserve red/gray industrial brand direction.
- Keep navbar and footer logo treatments on the local transparent `/logo/logo.png` asset unless a new approved brand file replaces it.
- Keep hero and CTA sections cinematic with dark overlays.
- Use Montserrat for major headings and Inter for body copy.
- Prefer dense, practical corporate layouts over marketing fluff.
- Use glassmorphism sparingly for stats, cards, and panels.
- Keep buttons uppercase, bold, and action-focused.
- Keep images relevant to industrial supply, materials, contracting, logistics, oil and gas, construction, or infrastructure.
- Avoid unrelated palettes, decorative blobs, and large visual style shifts.

## Next Recommended Tasks

- Replace remote background images for About, Services, Projects, Industries, Careers, and Contact with reliable local assets.
- Convert product data to include categories for product slider grouping.
- Wire form submissions to a real endpoint.
