# React Portfolio Website

A modern single-page portfolio built with React and component-scoped styles.

## Tech Stack

- React 17 (Create React App)
- Swiper for testimonials carousel
- React Icons
- EmailJS for contact form submission
- GitHub Pages for static hosting

## Project Structure

```text
src/
  components/
    about/
    contact/
    experience/
    footer/
    header/
    nav/
    portfolio/
    services/
    testimonials/
  assets/
  App.jsx
  index.js
  index.css
```

## Scripts

- `npm start` – run local dev server
- `npm run build` – create production build
- `npm test` – run tests
- `npm run deploy` – deploy `build/` to GitHub Pages

## Contact Form Configuration (EmailJS)

Create a `.env` file in project root:

```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these variables, the form displays a fallback message and prompts visitors to use direct contact links.

## GitHub Pages Hosting

This repo is already configured with a `homepage` field and deploy scripts in `package.json`.

1. Ensure your default branch is pushed to GitHub.
2. Run:

```bash
npm install
npm run deploy
```

3. In GitHub repo settings, check that Pages is serving from the `gh-pages` branch.

