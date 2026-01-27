<br/>
<h1 align="center">FiRasel Terminal Portfolio</h1>

<p align="center">
  <strong>An interactive terminal-styled portfolio website with sound effects and animations</strong>
</p>

<p align="center">
  <a href="https://terminal.firasel.com">Live Demo</a> •
  <a href="#features">Features</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#contributing">Contributing</a>
</p>

---

## 🚀 Features

- **Terminal Emulation** - Real terminal experience with command execution, history navigation (↑/↓), and auto-focus
- **Sound Effects** - Immersive audio feedback for typing, commands, and errors using Howler.js
- **Interactive Commands** - Browse projects, skills, experience, and contact information through CLI-style commands
- **Smooth Animations** - Falling text effects, glassmorphism UI, and fluid transitions
- **3D Effects** - Liquid background with animated blobs and depth
- **Modern Stack** - Built with cutting-edge technologies: Next.js 16, React 19, and Tailwind CSS 4
- **Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- **Command History** - Navigate through previous commands using arrow keys
- **Quick Actions** - Click-to-execute buttons

## 🛠 Technologies

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Howler.js](https://howlerjs.com/) (Audio)

## 🎯 Getting Started

### Installation

Clone the repository

```bash
git clone https://github.com/firasel/Terminal-Portfolio.git
```

Go to the project directory

```bash
cd Terminal-Portfolio
```

Install dependencies

```bash
npm install
# or
yarn install
```

### Development

Start the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

Start production server

```bash
npm start
# or
yarn start
```

## 📁 Project Structure

```
src/
├── app/                  # Next.js 16 App Router
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Home page
├── components/
│   ├── sound-control/   # Volume control widget
│   ├── terminal/        # Terminal emulator + command system
│   │   ├── commands.ts  # Command registry
│   │   ├── hooks/       # Custom hooks (terminal, history, sound)
│   │   └── templates/   # Output templates for commands
│   ├── text-drop/       # Falling text animation
│   └── liquid-background/ # Animated background
└── styles/
    └── globals.css      # Tailwind CSS v4 configuration
```

## 💻 Available Commands

Type these commands in the terminal:

- `help` - Show all available commands
- `about` - Learn about me
- `skills` - View my skill set
- `projects` - Browse my projects
- `experience` - Work experience
- `pr [1-4]` - Detailed project view
- `social` - Social profiles
- `contact` - Get in touch
- `clear` - Clear the terminal
- `github` / `linkedin` / `leetcode` - Open social links

## 🎨 Customization

To customize this portfolio for your own use:

1. Update personal information in `src/components/terminal/templates/`
2. Modify metadata in `src/app/layout.tsx`
3. Change color scheme in `src/styles/globals.css`
4. Update project links in `src/components/terminal/templates/project-details.ts`

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/firasel/Terminal-Portfolio/issues).

## 📝 License

This project is [MIT](LICENSE) licensed.

## 🌟 Inspiration

Inspired by these amazing terminal portfolios:

- [Heber Leonard](https://heberleonard2.github.io/terminal-style-portfolio-page/)
- [Huy](http://huy.im/)
- [ShellFolio](https://evilprince2009.netlify.app/)

## 👨‍💻 Author

**Fi Rasel**

- Website: [terminal.firasel.com](https://terminal.firasel.com)
- GitHub: [@firasel](https://github.com/firasel)
- LinkedIn: [firasel](https://www.linkedin.com/in/firasel)

---

<p align="center">
  If you found this project helpful, please consider giving it a ⭐️
</p>

<p align="center">
  Made with ❤️ by <a href="https://github.com/firasel">Fi Rasel</a>
</p>
