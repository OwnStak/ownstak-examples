# OwnStak Vue.js Example

This is an example Vue.js Single Page Application (SPA) built with Vite and designed to be deployed on OwnStak.

## Features

- **Vue 3** with Composition API and modern features
- **Vite** for fast development and optimized builds
- **TypeScript** support for better development experience
- **ESLint** for code quality and consistency
- **Hot Module Replacement (HMR)** for fast development

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npx ownstak dev
```

The app will be available at `http://localhost:3000`

### Building for Production

Build the project for production:
```bash
npx ownstak build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

Preview the production build locally:
```bash
npx ownstak start
```

## Deployment to OwnStak

This Vue.js SPA is configured for easy deployment to OwnStak:
```bash
npx ownstak deploy
```

## Learn More

- [Vue.js Documentation](https://vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [OwnStak Documentation](https://docs.ownstak.com/)
