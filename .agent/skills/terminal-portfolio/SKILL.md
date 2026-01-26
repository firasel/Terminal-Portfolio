---
name: Terminal Portfolio Development
description: Skills and knowledge for developing and maintaining the Terminal-Portfolio project - a terminal-styled portfolio website with sound effects built with Next.js, TypeScript, and TailwindCSS.
---

# Terminal Portfolio Development Skill

This skill documents the architecture, patterns, and development guidelines for the Terminal-Portfolio project.

## Project Overview

A unique portfolio website that emulates a terminal/command-line interface. Users interact with the site by typing commands, and the terminal responds with styled output. Features include:

- **Terminal Emulation**: Command-line interface with prompt, input, and styled output
- **Sound Effects**: Audio feedback on keypress, command execution, and errors using Howler.js
- **Character Animation**: Typed characters animate and fall across the screen
- **Command History**: Navigate previous commands with arrow keys
- **Responsive Design**: Adapts to mobile and desktop screens

## Technology Stack

| Technology  | Version | Purpose                         |
| ----------- | ------- | ------------------------------- |
| Next.js     | 15.x    | React framework with App Router |
| React       | 19.x    | UI library                      |
| TypeScript  | 5.x     | Type safety                     |
| TailwindCSS | 4.x     | CSS-first utility framework     |
| Howler.js   | 2.2.x   | Audio playback                  |

## Project Structure

```
Terminal-Portfolio/
├── public/                    # Static assets
│   ├── clear.mp3             # Sound for clear command
│   ├── error.mp3             # Sound for invalid commands
│   ├── keyPress.mp3          # Sound on typing
│   └── textPrint.mp3         # Sound for command output
├── src/
│   ├── app/                  # Next.js 15 App Router
│   │   ├── layout.tsx       # Root layout with Metadata API
│   │   └── page.tsx         # Home page (Server Component)
│   ├── assets/icons/         # SVG icons (soundOn, soundOff)
│   ├── components/
│   │   ├── Home/             # Main layout container ('use client')
│   │   ├── SoundControl/     # Volume control widget ('use client')
│   │   ├── Terminal/         # Core terminal logic + templates ('use client')
│   │   └── TextDrop/         # Keypress character animation ('use client')
│   └── styles/
│       └── globals.css       # TailwindCSS v4 imports + theme
├── next.config.ts            # Next.js configuration (TypeScript)
├── postcss.config.js         # PostCSS with @tailwindcss/postcss
└── tsconfig.json             # TypeScript configuration
```

## Color Palette (TailwindCSS v4 CSS Variables)

Defined in `globals.css` using `@theme`:

| Token                    | Value     | Usage               |
| ------------------------ | --------- | ------------------- |
| `--color-black`          | `#18191A` | Page background     |
| `--color-secondary`      | `#242526` | Terminal background |
| `--color-primary-text`   | `#E4E6EB` | Main text color     |
| `--color-secondary-text` | `#B0B3BB` | Muted text          |
| `--color-green`          | `#00C314` | Prompt, username    |
| `--color-orange-default` | `#FEB700` | Accents             |
| `--color-orange-light`   | `#fdba74` | Template text       |
| `--color-cyan`           | `#00BDD7` | Commands, input     |
| `--color-tahiti`         | `#3ab7bf` | Highlighted names   |

---

## Component Architecture

### App Router Structure

```
src/app/
├── layout.tsx    # Server Component - defines <html>, <body>, Metadata, GA
└── page.tsx      # Server Component - renders <Home /> client component
```

### Client Components

All interactive components use the `'use client'` directive:

| Component      | File               | Purpose                             |
| -------------- | ------------------ | ----------------------------------- |
| `Home`         | `Home.tsx`         | Layout container                    |
| `Terminal`     | `Terminal.tsx`     | Command handler, history, templates |
| `SoundControl` | `SoundControl.tsx` | Volume slider with Howler           |
| `TextDrop`     | `TextDrop.tsx`     | Animated falling characters         |

### Template Pattern

Each command has a template function that returns a DOM element:

```typescript
const templateName = (): HTMLDivElement => {
  const parentDiv = document.createElement("div");
  parentDiv.className = "text-orange-light text-lg";
  parentDiv.innerHTML = `/* HTML content */`;
  return parentDiv;
};
export default templateName;
```

---

## Available Commands

| Command                            | Description                |
| ---------------------------------- | -------------------------- |
| `help`                             | Show all commands          |
| `about`                            | Personal introduction      |
| `skills`                           | Categorized tech skills    |
| `projects`                         | 4 projects with links      |
| `pr 1-4` / `project 1-4`           | Project details            |
| `social`                           | GitHub, LinkedIn, Facebook |
| `contact`                          | Email and phone            |
| `github` / `linkedin` / `facebook` | Opens in new tab           |
| `clear`                            | Clear terminal             |

---

## Development Guidelines

### Adding a New Command

1. **Create template** in `src/components/Terminal/`:

   ```typescript
   const newTemplate = (): HTMLDivElement => {
     const parentDiv = document.createElement("div");
     parentDiv.className = "text-orange-light text-lg";
     parentDiv.innerHTML = `/* Your HTML */`;
     return parentDiv;
   };
   export default newTemplate;
   ```

2. **Import and add case** in `Terminal.tsx`:

   ```typescript
   import newTemplate from "./NewTemplate";

   case "newcmd":
     templateInsert(newTemplate, cmd);
     break;
   ```

3. **Update help list** in `HelpListTemplate.ts`

### Modifying Colors

Edit `src/styles/globals.css`:

```css
@theme {
  --color-new-color: #hexvalue;
}
```

### Adding Sound Effects

1. Add `.mp3` to `/public/`
2. Call `handleSound("/newSound.mp3")` in Terminal.tsx

---

## Running the Project

```bash
yarn install   # Install dependencies
yarn dev       # Development server
yarn build     # Production build
yarn start     # Start production server
yarn lint      # Lint code
```

---

## Key Implementation Notes

> [!IMPORTANT]
> All interactive components require `'use client'` directive at the top of the file since React 19 Server Components are the default.

> [!TIP]
> TailwindCSS v4 uses CSS-first configuration with `@import "tailwindcss"` and `@theme` block instead of `tailwind.config.js`.

> [!NOTE]
> Templates use direct DOM manipulation (`document.createElement`) because output is dynamically appended to a `ref`'d container.
