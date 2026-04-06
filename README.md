# 🚀 Frontend Performance Optimization Practice

## 📌 Introduction

This project is a **React-based frontend application** built with **Vite** that focuses on practicing and demonstrating **frontend performance optimization techniques**, such as lazy loading, code splitting, and learning core web vitals such as LCP. CLS, TTI, and INP.

---

## ✨ Features
- ⚡ Fast development with **Vite**
- 🔀 Client-side routing using **React Router**
- 🧩 Component-based architecture
- 🎨 Styling with **Tailwind CSS + custom CSS**
- 📄 Multiple pages:
  - Home
  - About
  - Store
  - Contact
  - Not Found (404)
- 🚀 Optimized for performance (lazy loading-ready structure)

---

## 🛠 Tech Stack
- **Frontend Framework:** React 19
- **Bundler:** Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS + CSS files
- **Linting:** ESLint

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone frontend-performance-optimization-practice
cd frontend-performance-optimization-practice-main
```

### 2. Install dependencies

```bash
npm install
```
## ▶️ Usage

Start development server
```bash
npm run dev
```
Build for production
```bash
npm run build
```
Preview production build
```bash
npm run preview
```

## Project Structure

```bash
frontend-performance-optimization-practice-main/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Store.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── styles/
│   │   ├── Home.css
│   │   ├── About.css
│   │   ├── Store.css
│   │   ├── Contact.css
│   │   └── Navbar.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── netlify.toml
```

## ⚡ Performance Techniques

This project is designed for experimenting with:

 Code Splitting
 Lazy Loading using React.lazy and Suspense
 Efficient routing with dynamic imports
 Optimized asset loading via Vite
 Component-level optimization
 Image asset optimization 


## 🧪 Examples
Lazy Loading Example

```bash
import { lazy, Suspense } from "react";

const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  );
}
```

