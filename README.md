# Personal Portfolio PWA

A modern, responsive personal portfolio website built with Next.js, React, and TailwindCSS. The website functions as a Progressive Web App (PWA) with offline support and mobile-first design.

## Features

- Progressive Web App (PWA) support
- Responsive design with mobile-first approach
- Offline support through service workers
- Modern UI with TailwindCSS
- TypeScript for type safety
- Next.js for server-side rendering and routing

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
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

## Building for Production

1. Build the application:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## PWA Features

- Installable on mobile devices
- Works offline
- App-like experience on mobile
- Responsive design for all screen sizes

## Project Structure

```
portfolio/
├── public/
│   ├── icons/           # PWA icons
│   ├── manifest.json    # PWA manifest
│   └── sw.js           # Service worker
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   └── styles/         # Global styles
└── package.json
```

## Adding Icons

Place your PWA icons in the `public/icons` directory with the following sizes:
- 72x72
- 96x96
- 128x128
- 144x144
- 152x152
- 192x192
- 384x384
- 512x512

## License

MIT
