# Next.js Single Page Website

A modern, responsive single-page website built with Next.js 14 and React.

## Features
- **Responsive Design**: Optimized for all devices, including mobile, tablet, and desktop.
- **Smooth Navigation**: Fast and smooth scrolling between sections.
- **Customizable**: Easy to update and modify with clear and organized code.
- **Optimized Performance**: Lightweight and fast-loading.

## Prerequisites

- Node.js 
- npm or yarn package manager
- Git (optional, but recommended)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/PSB1234/Pharma_Homepage_Amrutam.git
cd Pharma_Homepage_Amrutam
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── public/
│    └──Images
├── src/
│   │   
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.css
    ├── components/
    ├── Skeletons/
    │   
    ├── package.json
    └── next.config.js
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm start` - Starts the production server
- `npm run lint` - Runs ESLint for code quality

## Deployment

This project can be deployed to any platform that supports Next.js:

1. Build the project:
```bash
npm run build
```

2. Deploy to Vercel (recommended):
```bash
vercel
```

Or deploy to your preferred hosting platform following their specific instructions.

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_SITE_URL=your-site-url
# Add other environment variables as needed
```



## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


