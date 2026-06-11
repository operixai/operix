# Operix

Operix is an AI automation agency website published on GitHub Pages:

https://operixai.github.io/operix/

## Structure

- `index.html` - home
- `services.html` - services
- `cases.html` - demo scenarios and playbooks
- `pricing.html` - pilot and retainer pricing
- `about.html` - positioning
- `contact.html` - lead form and contact routes
- `blog.html` - content hub
- `privacy.html` / `terms.html` - legal pages
- `css/` - site styles
- `js/` - layout, copy, animation, mobile behavior
- `assets/motion/` - motion videos and posters

## Local Preview

Use any static server from the repo root.

```powershell
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

## Deployment

The site is deployed through GitHub Pages from the `main` branch of `operixai/operix`.

```powershell
git status
git add .
git commit -m "Describe change"
git push origin main
```

## QA Checklist

Before calling the site ready, check:

- All pages return HTTP 200.
- Desktop layout has no broken sections.
- Mobile 390px and 360px have no horizontal scroll.
- Mobile menu opens and closes.
- Contact page form renders correctly.
- Footer appears on every page.
- `privacy.html` and `terms.html` use compact legal typography.
- No fake client claims or unapproved case-study claims are present.
- Cache-bust query strings are updated when CSS/JS changes.

## Lead Capture

Primary route:

- Formspree endpoint in `contact.html`

Secondary route:

- Hidden Google Form submission in `contact.html`, fire-and-forget so it does not block the user-facing success state.

Do not store API keys, tokens, OAuth files, or private credentials in this repo or in Obsidian.

## Brand Contacts

- Telegram: https://t.me/operixai
- Instagram: https://www.instagram.com/operixagency/

