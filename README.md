# 🚍 Busly

**Busly** is a modern web application built with **React + Vite** for managing and booking buses.
It follows a scalable folder structure with reusable components, context management, utilities, and type safety using **TypeScript**.

---

## 🖼️ Project Screenshot

![Busly Screenshot](/public/project-screenshot.png)

---

## ✨ Features

- ⚡ **Blazing fast dev experience** with Vite
- 🎨 **TailwindCSS** (with Prettier plugin for class sorting)
- 🧭 **React Router v7** for dynamic routing
- 📝 **Formik + Yup** for robust forms and validation
- 📅 **Date handling** with date-fns & react-flatpickr
- ♻️ **Reusable architecture** with components, hooks, context, and utils
- ✅ **ESLint + Prettier** for consistent, high-quality code

---

## 📂 Project Structure

```
BUSLY/
├── dist/                # Production build output
├── node_modules/        # Dependencies
├── public/              # Static assets
├── docs/                # Document related to project
├── src/                 # Application source code
│   ├── assets/          # Project assets
│   ├── components/      # Reusable UI components
│   ├── config/          # App-level configurations
│   ├── context/         # React Context providers
│   ├── data/            # Static/mock data
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Application pages (routed views)
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility/helper functions
│   ├── App.tsx          # Root component
│   ├── main.tsx         # Entry point
│   └── vite-env.d.ts    # Vite TypeScript env definitions
├── index.html           # HTML template
├── package.json         # Dependencies & scripts
├── vite.config.ts       # Vite configuration
├── eslint.config.js     # ESLint configuration
├── .prettierrc          # Prettier configuration
└── .gitignore           # Git ignored files
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/prashantsingh181/busly.git
cd busly
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## 🧑‍💻 Development Commands

- **Linting:**

  ```bash
  npm run lint
  ```

- **Formatting (Prettier + Tailwind):**

  ```bash
  npm run format
  ```

---

## 📦 Tech Stack

- **Framework:** React 19 + React DOM
- **Bundler:** Vite
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Routing:** React Router v7
- **Forms & Validation:** Formik + Yup
- **Date Handling:** date-fns + react-flatpickr
- **Icons:** react-icons

---

## 📚 Documentation

- [Routing Guide](/docs/routing.md)
- [Context Management](/docs/context.md)

---

## 📜 License

This project is **private**. Please do not distribute without permission.
