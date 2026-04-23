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

- `npm start` - run local dev server
- `npm run build` - create production build
- `npm test` - run tests

## Contact Form Configuration (EmailJS)

Create a `.env` file in project root:

```bash
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Without these variables, the form displays a fallback message and prompts visitors to use direct contact links.

## GitHub Pages Hosting

This repo is configured to deploy to GitHub Pages using GitHub Actions.

1. Push changes to the `master` branch (or run the workflow manually from the Actions tab).
2. Open the Actions tab and confirm `Deploy React app to GitHub Pages` completes successfully.
3. In GitHub repo Settings -> Pages, ensure Source is set to `GitHub Actions`.
4. Visit [https://alexgalex98.github.io/react-portofolio-website/](https://alexgalex98.github.io/react-portofolio-website/).
