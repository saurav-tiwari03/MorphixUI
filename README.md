# MorphixUI 🎨

A sleek, minimalist UI library designed for React applications, providing pre-built, customizable components to accelerate development.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## ✨ Features

- **🎨 Multi-Theme Support**: Built-in light, dark, and blue themes with smooth transitions
- **🚀 Modern React**: Built with React 18+ and Next.js 14 App Router
- **💅 Tailwind CSS**: Fully integrated with Tailwind CSS for consistent styling
- **📱 Responsive Design**: Mobile-first approach with responsive components
- **🔧 TypeScript**: Full TypeScript support for better development experience
- **💾 Persistent Themes**: Theme preferences saved in localStorage
- **⚡ Performance**: Optimized components with minimal bundle size

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/morphixui.git
cd morphixui

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 🎯 Usage

### Theme Provider Setup

Wrap your application with the `ThemeProvider` in your root layout:

```tsx
// app/layout.tsx
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

### Using the Theme Toggle

```tsx
// components/YourComponent.tsx
import ThemeToggle from "@/components/ThemeToggle";

export default function YourComponent() {
  return (
    <div>
      <h1>Welcome to MorphixUI</h1>
      <ThemeToggle />
    </div>
  );
}
```

### Custom Theme Integration

The library automatically applies CSS variables for theming. You can customize themes in your CSS:

```css
/* globals.css */
:root {
  --background-color: #EEE6CA;
  --text-color: #080404;
}

[data-theme="dark"] {
  --background-color: #121212;
  --text-color: #EEE6CA;
}

[data-theme="blue"] {
  --background-color: #1e3a8a;
  --text-color: #ffffff;
}
```

## 🧩 Components

### ThemeToggle

A dropdown component for switching between available themes.

**Props:**
- No props required - automatically uses theme context

**Features:**
- Dropdown selection for light, dark, and blue themes
- Automatic theme persistence
- Smooth color transitions
- Responsive design

**Example:**
```tsx
import ThemeToggle from "@/components/ThemeToggle";

<ThemeToggle />
```

### ThemeProvider

Context provider for managing theme state across your application.

**Props:**
- `children`: React nodes to wrap with theme context

**Features:**
- Theme state management
- localStorage persistence
- Automatic theme application to DOM

## 🎨 Available Themes

| Theme | Background | Text | Description |
|-------|------------|------|-------------|
| Light | `#EEE6CA` | `#080404` | Warm cream background with dark text |
| Dark | `#121212` | `#EEE6CA` | Dark background with cream text |
| Blue | `#1e3a8a` | `#ffffff` | Blue background with white text |

## 🛠️ Customization

### Adding New Themes

1. Add new theme variables to your CSS:

```css
[data-theme="purple"] {
  --background-color: #7c3aed;
  --text-color: #ffffff;
}
```

2. Add the theme option to your ThemeToggle component:

```tsx
<option value="purple">Purple</option>
```

### Customizing Colors

Modify the CSS variables in `globals.css` to match your brand colors:

```css
:root {
  --background-color: #your-color;
  --text-color: #your-text-color;
}
```

## 📱 Responsive Design

All components are built with mobile-first responsive design:

- **Mobile**: Optimized for small screens
- **Tablet**: Adaptive layouts for medium screens
- **Desktop**: Full-featured desktop experience

## 🔧 Development

### Project Structure

```
morphixui/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css     # Global styles and theme variables
│   │   ├── layout.tsx      # Root layout with ThemeProvider
│   │   └── page.tsx        # Main page component
│   └── components/         # React components
│       ├── ThemeProvider.tsx  # Theme context provider
│       └── ThemeToggle.tsx    # Theme selection component
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

### Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## 🌟 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons and design inspiration from the open-source community

## 📞 Support

- **Documentation**: [https://morphixui.sauravgo.fun](https://morphixui.sauravgo.fun)
- **Issues**: [GitHub Issues](https://github.com/yourusername/morphixui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/morphixui/discussions)

---

Made with ❤️ by [Saurav Tiwari](https://sauravgo.fun)
