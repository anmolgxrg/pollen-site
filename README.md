# Pollen Animation Website

## Overview
A minimalist website featuring a simple animation of pollen spreading from a plant. No text or other elements - just a visually appealing animation.

## Domain Information
- Primary domain: `pollenhq.com`

## Directory Structure

```
pollen-site/
├── public/             # Static files served to the client
│   ├── css/           # CSS files (not currently used as CSS is inline)
│   ├── js/            # JS files (not currently used as JS is inline)
│   ├── images/        # Image assets (not currently used)
│   ├── fonts/         # Font files (not currently used)
│   ├── index.html     # Homepage with plant and pollen animation
│   ├── about.html     # Redirects to index.html
│   ├── contact.html   # Redirects to index.html
│   ├── thanks.html    # Redirects to index.html
│   ├── favicon.ico    # Site favicon
│   ├── CNAME          # Domain configuration for GitHub Pages
│   ├── robots.txt     # Instructions for web crawlers
│   ├── sitemap.xml    # Site structure for search engines
│   └── .htaccess      # Apache server configuration
├── src/               # Source files for development
│   ├── css/           # CSS source files (reference only)
│   ├── js/            # JS source files (reference only)
│   └── assets/        # Original assets
│       ├── images/    # Image source files
│       └── fonts/     # Font source files
├── .htaccess          # Root-level redirect to public directory
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## Animation Details

The website features a minimalist animation with the following elements:

1. A plant with stem and leaves
2. A flower at the top of the stem
3. Pollen particles that continuously emanate from the flower
4. Subtle glowing effects and gentle swaying motion

All HTML, CSS, and JavaScript required for the animation are contained within the single index.html file.

## Getting Started

### Prerequisites
- Any modern web browser

### Installation
1. Clone the repository
   ```
   git clone https://github.com/yourusername/pollen-site.git
   cd pollen-site
   ```

2. Open index.html in a web browser
   ```
   open public/index.html
   ```

## Deployment

The contents of the `public` directory can be deployed to any static hosting service such as:

### GitHub Pages
1. Push your repository to GitHub
2. Enable GitHub Pages in the repository settings
3. Set it to deploy from the `main` branch /docs folder or from the gh-pages branch
4. The CNAME file in the public directory will configure the custom domain

### Netlify or Vercel
1. Connect your GitHub repository
2. Configure to deploy from the `public` directory
3. Configure your custom domain in domain settings

## License
MIT
