# TaiCore Website

A modern, single-page website built with Next.js, React, and Tailwind CSS.

## Design System

### Color Palette
- **Primary**: #1E40AF (Deep Blue)
- **Secondary**: #3B82F6 (Bright Blue)
- **Accent**: #8B5CF6 (Purple)
- **Background**: #F8FAFC
- **Text**: #0F172A

### Typography
- **Headings**: Poppins
- **Body Text**: Inter

## Pages/Sections

The website includes the following sections:
- Home (Hero)
- Services
- Portfolio
- About
- Contact

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Node.js

## Project Structure

```
taicore-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── public/
```

## Customization

You can customize the content by editing the component files in the `components/` directory. The color scheme is defined in `app/globals.css` using CSS variables.
