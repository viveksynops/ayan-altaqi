# Components

## Layout Components

### `Navbar`

Purpose: Fixed top navigation with glass/blur styling, active route state, CTA, and mobile menu.

Used by: `app/layout.tsx`

Notes:

- Uses `usePathname`, scroll state, and mobile open state.
- Logo source comes from `siteConfig.logo`.
- Current navbar logo is the local transparent asset `/logo/logo.png`.
- The logo is rendered as a small standalone lockup, matching the compact reference treatment.
- Products is a desktop hover/focus dropdown with Fasteners and Structural Items links, and a nested mobile submenu.

### `Footer`

Purpose: Footer with brand logo, quick links, named contacts, and social links.

Used by: `app/layout.tsx`

Notes:

- Generic office/email/phone contact cards were removed from rendering.
- Named contacts come from `contactPeople`.
- Footer logo source comes from `siteConfig.footerLogo`.
- Current footer logo is the same transparent local asset `/logo/logo.png`, rendered without a card/background treatment.

### `FloatingWhatsApp`

Purpose: Site-wide fixed WhatsApp shortcut at the bottom-right of the viewport.

Used by: `app/layout.tsx`

Notes:

- Uses the first entry in `contactPeople` as the active WhatsApp contact.
- Links to `https://wa.me/{contactPeople[0].whatsapp}` and opens in a new tab.
- Renders as a compact green circular icon-only action with an accessible label.

## UI Primitives

### `Container`

Purpose: Central max-width layout wrapper using `max-w-container-max` and `px-gutter`.

Used by: Nearly every section and page.

### `Button`

Purpose: Reusable link/button with primary, metallic, ghost, and dark variants.

Used by: Hero, CTA, About, Contact, Project modal, Not Found.

### `MotionWrapper`

Purpose: Client-side scroll reveal wrapper.

Used by: Most page and section content blocks.

### `StaggerGroup` and `StaggerItem`

Purpose: Staggered reveal for repeated cards.

Used by: Services, Industries, Products-related grids, About values, Careers.

### `SectionTitle`

Purpose: Reusable eyebrow/title/description heading block.

Used by: Services, Industries, Stats-related pages, Careers, Contact, About sections.

### `AnimatedCard`

Purpose: Image card with title, description, optional icon, hover lift, and CTA.

Used by: `ServicesGrid`.

### `AnimatedCounter`

Purpose: In-view numeric counter with glass panel style.

Used by: `StatsSection`.

## Section Components

### `HeroSection`

Purpose: Home page hero carousel.

Used by: `app/page.tsx`

Features:

- Three slides.
- Local `hero.png`, `hero2.png`, and `hero3.png` for slide backgrounds.
- Auto-advance every 5 seconds.
- Vertical dot controls.
- Framer Motion image/content transitions.
- Left-aligned large heading with red highlighted spans.

### `AboutPreview`

Purpose: Home About preview.

Used by: `app/page.tsx`

Features:

- Eyebrow, large headline, paragraph, checklist, CTA, side image.
- Text currently modeled after the requested reference.

### `ProductsSection`

Purpose: Home product carousel.

Used by: `app/page.tsx`

Features:

- Client-side transform carousel.
- Auto-slide every 2 seconds.
- Manual arrows.
- Product cards from `products`.
- Product descriptions are local to the component.

Notes:

- The Home carousel uses broad product categories only.
- Detailed fastener and structural steel items were moved to dedicated product category pages.
- Several product images are local and ready; final business review still recommended.

### `ProductCategoryGrid`

Purpose: Reusable product card grid for category pages.

Used by: `app/products/fasteners/page.tsx`, `app/products/structural-items/page.tsx`

Features:

- Uses `SectionTitle`, `MotionWrapper`, `StaggerGroup`, and `StaggerItem`.
- Renders local product images in a responsive card grid.
- Consumes `fastenerProducts` or `structuralProducts` from `data/site.ts`.

### `ServicesGrid`

Purpose: Core services card grid.

Used by: Home and Services page.

Features:

- Uses `AnimatedCard`.
- Data from `services`.

### `IndustriesGrid`

Purpose: Cinematic industry cards.

Used by: Home.

Features:

- Image overlays, Lucide icons, hover zoom.

### `StatsSection`

Purpose: Company stats with image and animated counters.

Used by: Home.

### `CtaBanner`

Purpose: Dark cinematic CTA section.

Used by: Home, About, Services, Project detail, Industries.

Notes:

- Uses `images.cta`, currently remote Google-hosted image.

### `PageHero`

Purpose: Generic hero for inner pages.

Used by: About, Services, Projects, Industries, Careers, Contact.

### `ProjectExplorer`

Purpose: Project grid with category filter and modal preview.

Used by: Projects page.

Features:

- Client-side filtering.
- Masonry-like CSS columns.
- Animated modal.
- Links to `/projects/[slug]`.

### `ContactForm`

Purpose: Contact and career form UI.

Used by: Contact page and Careers page.

Notes:

- Demo-only submission state.
- Needs backend or service integration.

## Duplicated or Similar Patterns

- Repeated card style: white cards, rounded corners, subtle shadow, hover lift.
- Repeated dark hero pattern: background image, overlay, heading, CTA.
- Repeated section heading pattern should continue using `SectionTitle`.
- Repeated `MotionWrapper` blocks are consistent and acceptable.
- Product descriptions live in `ProductsSection`; if product data grows, move descriptions into `data/site.ts`.

## Component Improvement Suggestions

- Add a `ProductCard` component if product cards need richer shared behavior across Home and category pages.
- Move product descriptions into `data/site.ts`.
- Add a reusable `ContactPersonCard`.
- Add a reusable `DarkFeatureSection` for dark image/overlay sections.
- Add explicit carousel pause-on-hover and reduced-motion behavior.

## Next Recommended Tasks

- Review long product carousel UX on mobile.
- Extract common card variants if pages continue to grow.
