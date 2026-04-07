# 🚀 Frontend Performance Optimization Practice

## 📌 Introduction

This project is a **React-based frontend application** built with **Vite** that focuses on practicing and demonstrating **frontend performance optimization techniques**, such as lazy loading, code splitting, and understanding **Core Web Vitals** like LCP, CLS, INP, and TTI.

---

## ✨ Features

-  Fast development with **Vite**
-  Client-side routing using **React Router**
-  Component-based architecture
-  Styling with **Tailwind CSS + custom CSS**
-  Multiple pages:
  - Home
  - About
  - Store
  - Contact
  - Not Found (404)
-  Optimized for performance (lazy loading-ready structure)

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

---

## ▶️ Usage

• Start development server
```bash
npm run dev
```
• Build for production
```bash
npm run build
```
• Preview production build
```bash
npm run preview
```

---

## 📁 Project Structure
```
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
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── netlify.toml
├── package-lock.json
├── package.json
└── vite.config.js
```

---

## ⚡Performance Techniques

This project is designed for experimenting with:

- Code Splitting
- Lazy Loading using React.lazy and Suspense
- Efficient Routing with dynamic imports
- Optimized Asset Loading via Vite
- Component-level Optimization
- Image Asset Optimization
- Preload Critical Resources
- Prefetch Future Resources
- Fetch Priority Optimization
- Core Web Vitals & Performance Metrics
- Core Web Vitals

---

### • Largest Contentful Paint (LCP)
Measures: Loading performance (largest visible element)
Good: ≤ 2.5s
Needs Improvement: 2.5 – 4.0s
Poor: > 4.0s

#### ✅ Optimization:

Preload critical resources
Optimize images (WebP, compression)
Use CDN
Reduce render-blocking CSS/JS

---

### • Cumulative Layout Shift (CLS)
Measures: Visual stability
Good: ≤ 0.1
Needs Improvement: 0.1 – 0.25
Poor: > 0.25

#### ✅ Optimization:

Set width & height for media
Avoid layout shifts from ads/components
Use font-display: swap
Reserve layout space

---

### • Interaction to Next Paint (INP)
Measures: Responsiveness to user interactions
Good: ≤ 200ms
Needs Improvement: 200 – 500ms
Poor: > 500ms

#### ✅ Optimization:

Reduce JavaScript execution
Use code splitting
Optimize event handlers
Avoid blocking main thread

---

## 📊 Additional Performance Metrics

#### • Time to Interactive (TTI)
Measures: Time until page is fully interactive
Goal: < 3.8s

#### ✅ Optimization:

Minimize JS bundle size
Defer non-critical JS
Use lazy loading

---

#### • First Contentful Paint (FCP)
Measures: Time until first content appears
Goal: ≤ 1.8s

#### ✅ Optimization:

Inline critical CSS
Optimize fonts
Reduce blocking resources

---

#### • Total Blocking Time (TBT)
Measures: Total time main thread is blocked
Goal: ≤ 200ms

#### ✅ Optimization:

Break long tasks
Use Web Workers
Optimize heavy computations

---

## 🧪 Performance Implementation Examples

### 1. Lazy Loading Example
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

---

### 2. Preload Example
```bash
<link rel="preload" href="/assets/hero.jpg" as="image">
```

---

### 3. Prefetch Example
```bash
<link rel="prefetch" href="/assets/next-page.js">
```

---

### 4. Fetch Priority Example
```bash
<img src="/hero.jpg" fetchpriority="high" alt="Hero Image">
```

---


## 🎯 Goal of This Project

The main goal is to:

- Understand real-world frontend performance issues
- Learn how to measure and optimize Core Web Vitals
- Apply modern optimization techniques in React apps
- Build production-ready, high-performance web applications
