# OwnStak Docusaurus Example

This is an example documentation website built with Docusaurus and designed to be deployed on OwnStak.

## Features

- **Docusaurus 3** - Modern static site generator for documentation
- **React-based** - Built on React for component-based development
- **Markdown support** - Write content in Markdown with MDX support
- **Search functionality** - Built-in search with Algolia DocSearch
- **Responsive design** - Mobile-friendly documentation site
- **Dark/Light mode** - Toggle between themes

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

The site will be available at `http://localhost:3000`

### Building for Production

Build the project for production:
```bash
npx ownstak build
```

The built files will be in the `build` directory, ready for deployment.

### Preview Production Build

Preview the production build locally:
```bash
npx ownstak start
```

## Deployment to OwnStak

This Docusaurus site is configured for easy deployment to OwnStak:
```bash
npx ownstak deploy
```


## Learn More

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [OwnStak Documentation](https://docs.ownstak.com/)
- [MDX Documentation](https://mdxjs.com/)
