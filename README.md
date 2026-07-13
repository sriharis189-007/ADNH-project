# ADNH Catering – Landing Page

A React landing page for ADNH Catering, matching the reference design: hero, brands, story, vision/mission, our people, services, sectors, investor relations, and contact footer.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Tailwind CSS

The project uses **Tailwind CSS v3**. You can use utility classes anywhere in your components alongside the existing custom CSS.

- **Config:** `tailwind.config.js` (content paths, theme extended with `navy`, `gold`, `cream`, `font-heading`, `font-body`)
- **Entry:** `src/index.css` starts with `@tailwind base; @tailwind components; @tailwind utilities;`

Examples: `className="flex gap-4 text-navy"`, `className="bg-gold text-white px-6 py-3 rounded-lg"`, `className="font-heading text-2xl"`.

## Project structure

- **`src/App.jsx`** – Main app and section order
- **`src/components/`** – One folder per section (Header, Hero, OurBrands, Story, VisionMission, OurPeople, OurServices, OurSectors, InvestorRelations, ContactFooter)
- **`src/index.css`** – Tailwind directives + global styles and CSS variables (navy, gold, cream)
- **`tailwind.config.js`** – Tailwind content and theme
- **`public/`** – Static assets (e.g. favicon)

Images currently use Unsplash placeholders. To use your own, add them under `public/images/` and update the `src` paths in the components (e.g. Hero, VisionMission, OurPeople, OurServices, OurSectors).
