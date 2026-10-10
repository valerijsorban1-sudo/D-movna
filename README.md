# Dřímovna — bilingual preview (CS / EN)

Static Czech/English love-brand storefront demo. **Not a functioning shop:** orders, payments, WhatsApp and contact form submissions are disabled. Product names, imagery, availability and prices are illustrative.

## Netlify

Link repository `valerijsorban1-sudo/D-movna` to Netlify site `drimovna`, production branch `main`. The `netlify.toml` file sets publish directory to `public`; there is no build command.

Landing `/`: Netlify Edge Function `locale-router` selects `/cs/` for visitors from CZ/SK and `/en/` elsewhere using Netlify's built-in geo detection. Missing location falls back to the request's Accept-Language. Explicit language choices (🇨🇿 / 🇬🇧 in the header) are stored in a first-party cookie `drim_lang` for one year and override geolocation. Each locale remains directly reachable at `/cs/` and `/en/`.

## Layout

- `public/cs/index.html` / `public/en/index.html`: translated static pages
- `public/app.js`: shared shop demo interactions
- `public/i18n.js`: translated products, support copy and information pages
- `public/styles.css`: responsive visuals and language selector
- `public/assets/`: bundled local product illustration placeholders
- `netlify/edge-functions/locale-router.js`: root-only IP geography routing

Brand name *Dřímovna* is deliberately retained in English. Currency remains CZK and shipping outside the Czech Republic is not yet confirmed. Robots remain set to `noindex,nofollow` until the actual storefront launches.
