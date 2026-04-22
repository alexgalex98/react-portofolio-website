# Contributing Guide

Thanks for contributing to this portfolio project.

## Project overview

This is a Create React App single-page portfolio built from section components.

- Entry point: `src/index.js` renders `<App />`.
- Page composition: `src/App.jsx` stacks the main sections.
- Section components live in `src/components/<feature>/` with a paired CSS file.
- Static assets are kept in `src/assets/`.

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Run locally:

```bash
npm start
```

3. Build production bundle:

```bash
npm run build
```

## Common editing tasks

### Add a new portfolio project

Edit `src/components/portfolio/Portfolio.jsx` and add a new object to the `data` array with:

- `id`
- `image`
- `title`
- `github`
- `demo`

Then import the corresponding image asset at the top of the file.

### Add or remove page sections

- Update `src/App.jsx` to include/remove the section component.
- Keep `id` attributes aligned with links in:
  - `src/components/nav/Nav.jsx`
  - `src/components/footer/Footer.jsx`

### Update contact behavior

Contact form email sending is implemented in `src/components/contact/Contact.jsx` using EmailJS.

## Code style and conventions

- Keep components functional and focused.
- Keep section-specific styles in the section CSS file.
- Prefer mapping over arrays for repeatable UI blocks.
- Reuse global utility classes from `src/index.css` (`container`, `btn`, `btn-primary`, etc.).

## Suggested next improvements

- Move hardcoded section data to dedicated `src/data/*.js` files.
- Replace hardcoded EmailJS identifiers with environment variables.
- Add unit/smoke tests for rendering key sections.
- Fix minor naming/typo inconsistencies as you touch files.
