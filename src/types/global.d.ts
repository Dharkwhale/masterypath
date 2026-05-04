// Allows side-effect CSS imports (e.g. import "./globals.css") without TS2882 errors.
// Next.js handles these at build time; TypeScript just needs the declaration.
declare module "*.css" {}
