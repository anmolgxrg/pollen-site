# Pollen AI Website

## Overview
This is the official pre-launch website for Pollen AI - a futuristic, innovative AI company.

## Domain Information
- Primary domain: `pollenhq.com`
- All form submissions send notifications to: `a.anmolgarg@gmail.com` (via FormSubmit.co)

## Directory Structure

```
pollen-site/
├── public/             # Static files served to the client
│   ├── css/           # Compiled CSS files
│   │   └── styles.css # Main stylesheet
│   ├── js/            # JavaScript files
│   │   └── main.js    # Main JavaScript file
│   ├── images/        # Image assets
│   ├── fonts/         # Font files
│   ├── index.html     # Homepage
│   ├── about.html     # About page
│   ├── contact.html   # Contact page
│   ├── thanks.html    # Thank you page after form submissions
│   ├── favicon.ico    # Site favicon
│   ├── CNAME          # Domain configuration for GitHub Pages
│   ├── robots.txt     # Instructions for web crawlers
│   ├── sitemap.xml    # Site structure for search engines
│   └── .htaccess      # Apache server configuration
├── src/               # Source files for development
│   ├── css/           # CSS source files
│   │   └── styles.css # Main CSS source
│   ├── js/            # JS source files
│   └── assets/        # Original assets
│       ├── images/    # Image source files
│       └── fonts/     # Font source files
├── .htaccess          # Root-level redirect to public directory
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## Getting Started

### Prerequisites
- Node.js and npm

### Installation
1. Clone the repository
   ```
   git clone https://github.com/yourusername/pollen-site.git
   cd pollen-site
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. The site will be available at `http://localhost:3000`

## Email Form Configuration
The site uses FormSubmit.co to handle email form submissions:

- Form action points to: `https://formsubmit.co/578761bededd12526fd059ae22f62352`
- This is a secure endpoint that forwards submissions to `a.anmolgarg@gmail.com`
- Successful submissions are redirected to the thanks.html page

## Directory Configuration
- The site is configured to automatically display the contents of the /public directory
- This is managed through .htaccess configurations at both the root and public directory levels

## Development

### Workflow
1. Make changes to files in the `src` directory
2. For simple testing, copy changes to the public directory
3. In a production environment, use a build process (not set up in this repository)

## Deployment
The contents of the `public` directory can be deployed to any static hosting service such as:

### GitHub Pages
1. Push your repository to GitHub
2. Enable GitHub Pages in the repository settings
3. Set it to deploy from the `main` branch /docs folder or from the gh-pages branch
4. The CNAME file in the public directory will configure the custom domain

### Netlify
1. Connect your GitHub repository to Netlify
2. Configure Netlify to deploy from the `public` directory
3. Configure your custom domain in Netlify's domain settings

### Vercel
1. Connect your GitHub repository to Vercel
2. Configure Vercel to deploy from the `public` directory
3. Configure your custom domain in Vercel's domain settings

## License
MIT
