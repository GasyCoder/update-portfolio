# 🚀 Futuristic Portfolio - GasyCoder

A modern and futuristic portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a stunning UI with dark/light mode, multi-language support (French/English), and beautiful animations.

## ✨ Features

- 🎨 **Futuristic Design**: Modern UI with gradient effects, neon borders, and smooth animations
- 🌓 **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- 🌍 **Multi-language**: Switch between French and English
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Built with Next.js 14+ for optimal performance
- 🎯 **Sections**:
  - Hero section with animated particles background
  - About section with statistics
  - Projects showcase with GitHub links
  - Skills & Technologies with progress bars
  - Contact form with social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Emoji-based (no external dependencies)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/GasyCoder/update-portfolio.git
cd update-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment

### Build for production:
```bash
npm run build
npm start
```

### Deploy to Vercel:
The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

## 📝 Customization

### Update Personal Information:

1. **Hero Section**: Edit `components/Hero.tsx` - change the name "GasyCoder" and role
2. **Projects**: Edit `components/Projects.tsx` - add your own projects with links
3. **Skills**: Edit `components/Skills.tsx` - update your skills and proficiency levels
4. **Social Links**: Edit `components/Contact.tsx` and `components/Footer.tsx` - update social media links
5. **Translations**: Edit `lib/translations.ts` - customize French/English text

### Change Colors:

Edit `tailwind.config.ts` to customize the color scheme and animations.

## 📄 Project Structure

```
update-portfolio/
├── app/
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Main page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects showcase
│   ├── Skills.tsx       # Skills section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── lib/
│   ├── ThemeContext.tsx      # Dark/Light mode context
│   ├── LanguageContext.tsx   # Language switcher context
│   └── translations.ts       # French/English translations
├── public/              # Static assets
└── package.json
```

## 🎨 Features Highlights

### Animated Particle Background
The hero section features an animated particle network that creates a futuristic atmosphere.

### Dark Mode
Automatically detects system preference and allows manual toggle. Theme preference is saved in localStorage.

### Multi-language Support
Seamlessly switch between French and English. Language preference is saved in localStorage.

### Responsive Design
Optimized for all screen sizes from mobile to desktop.

## 📱 Sections Overview

1. **Hero**: Eye-catching introduction with animated background
2. **About**: Personal introduction with statistics
3. **Projects**: Showcase of your work with live demo and GitHub links
4. **Skills**: Visual representation of your technical skills
5. **Contact**: Contact form and social media links

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

- GitHub: [@GasyCoder](https://github.com/gasycoder)
- Email: contact@gasycoder.dev

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by GasyCoder
