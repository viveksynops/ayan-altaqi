# Architecture

## Overview

This is a Next.js 15 App Router website for AYAN ALTAQI Trading & Contracting. It is a static-first corporate marketing and catalog site with interactive client components for sliders, animated sections, mobile navigation, forms, counters, and project filtering.

## App Structure

- `app/`: App Router pages and root layout.
- `components/`: Shared layout, UI primitives, and page sections.
- `components/ui/`: Small reusable primitives.
- `components/sections/`: Larger composable marketing sections.
- `data/site.ts`: Central static data source for navigation, services, products, industries, projects, careers, contacts, and image paths.
- `lib/utils.ts`: Classname helper and metadata factory.
- `styles/globals.css`: Tailwind entry, global CSS, and shared component utility classes.
- `public/logo`: Local AYAN logo assets used by layout branding.
- `public/images`: Local hero images.
- `public/products`: Local product images.

## Routing Structure

- `/`: Home page composed from reusable sections.
- `/about`: Corporate profile and overview page.
- `/services`: Services overview with detailed service cards.
- `/products/fasteners`: Fastener product category page.
- `/products/structural-items`: Structural steel product category page.
- `/projects`: Filterable project showcase.
- `/projects/[slug]`: Static project detail pages generated from `projects` data.
- `/industries`: Industry coverage page.
- `/careers`: Careers and application page.
- `/contact`: Contact and inquiry page.
- `app/not-found.tsx`: Custom 404.

Dynamic route generation is handled by `generateStaticParams` in `app/projects/[slug]/page.tsx`.

## Component Organization

Layout-level components:

- `Navbar`: fixed glass navigation, active route highlighting, Products dropdown, mobile menu.
- `Footer`: brand area, quick links, named contact details, social links.
- `FloatingWhatsApp`: fixed bottom-right WhatsApp action mounted in the root layout.

Section-level components:

- `HeroSection`: Home carousel.
- `PageHero`: reusable route hero.
- `ProductsSection`: product carousel.
- `ProductCategoryGrid`: reusable product category card grid for product pages.
- `ServicesGrid`, `IndustriesGrid`, `StatsSection`, `CtaBanner`, `AboutPreview`, `ProjectExplorer`, `ContactForm`.

UI primitives:

- `Container`, `Button`, `SectionTitle`, `MotionWrapper`, `AnimatedCard`, `AnimatedCounter`.

## State Management

No global state library is used.

Local React state is used for:

- Navbar mobile menu and scroll styling.
- Hero carousel active slide.
- Products carousel active index.
- Project filter and modal selection.
- Contact form demo submission state.
- Animated counters.

Most content is static and driven by `data/site.ts`.

The floating WhatsApp action reads the first configured `contactPeople` entry and links to its `whatsapp` number through `https://wa.me/`.

## Styling Architecture

Tailwind CSS is the primary styling system.

Theme extensions are defined in `tailwind.config.ts`:

- AYAN color palette.
- Typography scales matching the original HTML reference.
- Custom spacing tokens.
- Box shadows for glow and glass effects.
- `ease-premium` cubic-bezier motion.
- Float and shimmer animations.

Global utilities in `styles/globals.css`:

- `.glass-panel`
- `.hover-glow`
- `.metallic-bg`
- `.industrial-texture`
- `.cinematic-overlay`

The design relies heavily on utility classes inside components. Shared style primitives should be extracted only when repeated behavior becomes hard to maintain.

## Animation Architecture

Framer Motion is used for interactive and scroll-based animation:

- `MotionWrapper`: one-time scroll reveal.
- `StaggerGroup` and `StaggerItem`: staggered grid/card reveals.
- `HeroSection`: carousel image fade/scale and content transitions.
- `ProjectExplorer`: filtering layout animation and modal transitions.
- `AnimatedCounter`: in-view numeric counter animation.

CSS/Tailwind animation is used for:

- Floating decorative circles.
- Hover scale/zoom effects.
- Smooth transform transitions.

## Data Architecture

`data/site.ts` is the central source of truth. It exports:

- `siteConfig`
- `navLinks`
- `images`
- `services`
- `productNavLinks`
- `products`
- `fastenerProducts`
- `structuralProducts`
- `industries`
- `stats`
- `values`
- `projects`
- `careers`
- `contactPeople`

This keeps page components mostly declarative and allows future CMS migration.

The Home product carousel uses `products` for broad product categories only. Detailed Fasteners and Structural Items lists are stored separately in `fastenerProducts` and `structuralProducts`, and are rendered on their own product category pages.

Brand logo paths are also defined in `siteConfig`:

- `logo`: navbar logo, currently `/logo/logo.png`.
- `footerLogo`: footer logo, currently `/logo/logo.png`.

## Build and Deployment

Scripts:

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

Vercel config exists in `vercel.json`. The output directory should be `.next`, not `public`.

Known local build note: if Next worker cache errors occur, use:

```powershell
$env:NEXT_PRIVATE_BUILD_WORKER='0'; npm run build
```

## Next Recommended Tasks

- Replace remaining remote images with local files.
- Add typed product category metadata if more product groups are introduced.
- Connect forms to real persistence or notification workflow.
- Add automated route smoke tests.
