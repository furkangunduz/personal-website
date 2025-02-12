# Personal Portfolio Website

This is a personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. The website's content is managed through a single
`data.json` file for easy updates and maintenance.

## Content Management with data.json

The `data.json` file is the central configuration file that manages all the content and SEO settings for the website. Here's how to use and
modify each section:

### Profile Section

```json
"profile": {
  "name": "Your Name",
  "title": "Your Title",
  "location": "City, Country",
  "image": "/profile.webp",
  "availability": {
    "status": true,
    "text": "Available for work"
  },
  "email": "your@email.com",
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername"
  }
}
```

This section controls your personal information displayed in the header.

### Buttons Section

```json
"buttons": {
  "booking": {
    "text": "Book Meeting",
    "href": "your-calendly-link"
  },
  "cv": {
    "text": "Download CV",
    "href": "your-cv-link"
  }
}
```

Configure the call-to-action buttons in the header.

### About Section

```json
"about": {
  "title": "About me",
  "content": [
    "First paragraph",
    "Second paragraph"
  ]
}
```

Manage your about section content. Each array item becomes a new paragraph.

### Stack Section

```json
"stack": {
  "title": "Stack",
  "items": [
    {
      "icon": "/stack/technology.svg",
      "name": "Technology Name"
    }
  ]
}
```

Add or modify your technical stack. Icons should be placed in the `public/stack/` directory.

### Projects Section

```json
"projects": {
  "title": "Projects",
  "items": [
    {
      "id": "unique-id",
      "title": "Project Title",
      "category": "Category",
      "image": "/projects/project/image.png",
      "website": "https://project-url.com",
      "description": "Project description",
      "services": "Services provided",
      "client": "Client name",
      "year": "Year",
      "features": [
        {
          "title": "Feature Title",
          "description": "Feature description"
        }
      ],
      "summary": "Project summary",
      "images": [
        "/projects/project/image-1.png"
      ]
    }
  ]
}
```

Manage your project portfolio. Images should be placed in `public/projects/[project-id]/`.

### Experience Section

```json
"experience": {
  "title": "Experience",
  "items": [
    {
      "company": "Company Name",
      "position": "Your Position",
      "period": "Duration",
      "remote": true/false,
      "achievements": [
        "Achievement 1",
        "Achievement 2"
      ]
    }
  ]
}
```

List your professional experience and achievements.

### Education Section

```json
"education": {
  "title": "Education",
  "items": [
    {
      "location": "City",
      "degree": "Your Degree",
      "school": "School Name",
      "period": "Duration",
      "description": "Description"
    }
  ]
}
```

Manage your educational background.

### SEO Section

```json
"seo": {
  "baseUrl": "https://yourdomain.com",
  "title": "Your SEO Title",
  "titleTemplate": "%s | Your Name",
  "description": "SEO Description",
  "keywords": ["keyword1", "keyword2"],
  "author": {
    "name": "Your Name",
    "url": "https://yourdomain.com"
  },
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "@yourusername"
  },
  "verification": {
    "google": "your-google-verification-code"
  },
  "image": {
    "url": "/profile.webp",
    "width": 1200,
    "height": 630,
    "alt": "Image Alt Text"
  }
}
```

Configure all SEO-related settings, including:

- Meta tags
- Open Graph data
- Twitter cards
- Google verification
- Structured data

## Image Guidelines

1. Profile Image:

   - Place in `public/` directory
   - Recommended size: 400x400px
   - Format: WebP for better performance

2. Stack Icons:

   - Place in `public/stack/` directory
   - Use SVG format for better scaling
   - Keep files small and optimized

3. Project Images:
   - Place in `public/projects/[project-id]/` directory
   - Use consistent aspect ratios (16:9 recommended)
   - Optimize images for web

## SEO Setup

1. Replace `your-google-verification-code` with your actual Google Search Console verification code
2. Update social media profiles in the SEO section
3. Customize meta descriptions and keywords for better search visibility
4. Add your actual Twitter handle if you have one

## Updating Content

1. Modify the `data.json` file directly
2. Follow the existing structure
3. Keep text formatting consistent
4. Use relative paths for images
5. Maintain proper JSON syntax

## Type Safety

The website uses TypeScript for type safety. The types for the data structure are defined in `src/app/types.ts`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load
[Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
