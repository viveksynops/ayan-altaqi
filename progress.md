# AYAN ALTAQI Website Progress

## Completion State

The project is functional and builds successfully as a Next.js 15 App Router site. Core pages, reusable components, animations, responsive layouts, and static content data are in place.

## Completed

- Next.js 15 project scaffold with TypeScript and Tailwind CSS.
- App Router pages for Home, About, Services, Projects, Industries, Careers, Contact, and Not Found.
- Shared layout with `Navbar` and `Footer`.
- Custom Tailwind theme matching the original industrial red/gray brand palette.
- Home hero converted to a three-slide carousel.
- Home products section converted to an animated slider.
- Product catalog expanded with pipes, fittings, fasteners, valves, steel items, scaffolding, fence, PVC/sanitary accessories, and fastener subtypes.
- About page rebuilt with industrial supplier content and AYAN brand styling.
- Named contacts added for Business Development Executive and General Manager.
- Generic placeholder contact details removed from rendered contact blocks.
- Project explorer includes filtering, modal previews, and dynamic project detail routes.
- Careers page includes open roles, benefits, process, and application form.
- Contact page includes inquiry form, named contacts, WhatsApp CTA, and map placeholder.
- Site-wide floating WhatsApp shortcut added at the bottom-right, using the first named contact's WhatsApp number.
- Header and footer now use the local transparent logo asset at `public/logo/logo.png`.
- Production build verified with `npm run build`; in this environment, `NEXT_PRIVATE_BUILD_WORKER=0` has been useful when Next worker cache errors occur.

## Work In Progress

- Product images: many product-specific assets exist under `public/products`, but some image filenames and product labels may need final client review.
- Contact/careers forms: UI exists, but submission is demo-only and not connected to a backend.
- Map: Contact page has a production placeholder for map integration.

## Missing or Incomplete

- Real backend/form handler for contact and careers.
- Real map or office location embed.
- Final approved copy for all pages.
- Real case-study data and project images.
- Formal accessibility testing.
- Automated tests.
- OpenGraph image file under `public`.

## TODO / Placeholder Scan

- `app/contact/page.tsx`: map placeholder text exists.
- `components/sections/ContactForm.tsx`: demo submission message exists.
- `components/FloatingWhatsApp.tsx`: WhatsApp shortcut currently uses `contactPeople[0]`; change contact order or component selection if the preferred primary WhatsApp contact changes.
- Several product and project texts are practical placeholders and may need final business copy.

## Known Issues

- `siteConfig.email`, `phone`, and `location` still exist in data but are no longer rendered as generic contact cards. Keep or remove later depending on business requirements.
- Some remote images from Unsplash and Google are still used; network or optimization failures can affect visual reliability.
- Normal Next build workers have occasionally thrown stale internal `_document` or `_not-found` collection errors in this local environment. Running build with `$env:NEXT_PRIVATE_BUILD_WORKER='0'; npm run build` has passed.
- `vercel.json` sets `outputDirectory` to `.next`; ensure Vercel project settings do not override this to `public`.

## Improvement Suggestions

- Make remaining critical hero/background assets local.
- Add product grouping: Fasteners, Structural Steel, Pipes/Fittings, Access/Fencing, PVC/Sanitary.
- Replace project dummy data with actual completed projects.
- Add schema.org organization structured data.
- Add aria-live or pause behavior for auto-advancing sliders if accessibility requirements increase.
- Add route-level smoke tests and visual regression screenshots.

## Next Recommended Tasks

- Connect `ContactForm` to a server action, API route, or external form service.
- Replace remaining remote images with local files.
- Review product list order and decide whether all subtypes should appear in the main Home slider.
