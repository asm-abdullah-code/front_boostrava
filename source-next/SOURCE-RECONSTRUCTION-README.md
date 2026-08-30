# Boost RAVA Source Reconstruction — Phase 1

This is a parallel, non-destructive Next.js source project reconstructed from the current approved static site.

## Goals
- Stop editing compiled Next.js chunks for routine page work.
- Centralize Header/Footer and metadata/page loading.
- Preserve current visual output while source is migrated progressively.
- Keep the existing `front_boostrava` static site untouched until parity is approved.

## Routes reconstructed
31 routes from the current local build.

## Run locally
```bash
cd source-next
npm install
npm run dev
```
Preview: http://localhost:3001

## Build
```bash
npm run build
```
The project uses `output: export` so the generated static site appears in `out/`.

## Architecture
- `src/components/SharedHeader.tsx` — one shared header source
- `src/components/SharedFooter.tsx` — one shared footer source
- `src/components/PageRenderer.tsx` — shared page shell
- `content/pages.json` — route metadata, page main HTML, page-specific styles and lightweight interactions
- `public/legacy-assets/_next/` — frozen legacy CSS/font/image dependencies for visual parity during migration

## Important
This Phase 1 deliberately runs in parallel. Do not replace the working production/static site with it until visual parity is approved. The next reconstruction phase should convert page groups from HTML fragments into typed React components and move interactive tools into reusable components.
