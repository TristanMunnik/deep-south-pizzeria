# Deep South Pizzeria

A responsive landing page built for [Deep South Pizzeria](https://capetownexplore.co.za/listing/deep-south-pizzeria-simons-town/), a small wood-fired pizza shop in Simon's Town, Cape Town, where I work as Front of House Manager. Built as a real-world portfolio project — the goal was to design and ship something for an actual local business, not a tutorial clone.

**Live demo:** _coming soon_

## Features

- Responsive layout that adapts from mobile to desktop
- Sticky navigation with smooth scroll to each section
- Hero section with a full-width photo background and dark overlay for readability
- Menu section pulling real menu data, with hover animations on each item
- Customer reviews section with a horizontal scrolling carousel (arrow navigation + swipe support)
- Visit/contact section with the shop's address, hours, and phone number
- Color palette drawn directly from the pizzeria's real signage and interior (slate blue, cream, and warm gold tones)

## Tech Stack

- **React** – component structure and UI
- **Vite** – build tool and dev server
- **Tailwind CSS** – utility-first styling

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/TristanMunnik/deep-south-pizzeria.git
cd deep-south-pizzeria
npm install
```

Run the local dev server:

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.

## Project Structure

```
src/
├─ components/
│  ├─ Header.jsx
│  ├─ Hero.jsx
│  ├─ Menu.jsx
│  ├─ Reviews.jsx
│  ├─ Visit.jsx
│  └─ Footer.jsx
├─ data/
│  ├─ menu.js
│  └─ reviews.js
├─ App.jsx
├─ main.jsx
└─ index.css
```

Each section of the site is broken into its own component, with menu and review content kept in separate data files so they're easy to update without touching any layout code.

## Roadmap

- [ ] Deploy to a live URL
- [ ] Swap in additional real photos of the shop and food
- [ ] Explore wiring up live Google Reviews via the Places API

## About

Built by [Tristan Munnik](https://github.com/TristanMunnik), a Systems Development diploma student aiming for a career as a frontend/web developer.
