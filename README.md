# currex — Multi-currency Calculator

A free, ad-free currency and crypto converter. Built as an installable PWA
that works offline.

I made it for my own needs when I got tired of seeing ads in every other
converter.

## Features

- **Fiat currencies** — 160+ currencies, live rates
- **Cryptocurrencies** — 1000+ coins from CoinGecko
- **Favorites** — star currencies for quick access
- **Drag-and-drop** — reorder currencies by dragging the handle
- **Offline-first PWA** — installable, works without network (cached rates)
- **15 languages** — English, Русский, 中文, हिन्दी, Español, Français, العربية,
  বাংলা, Português, 日本語, Deutsch, 한국어, Türkçe, Italiano, Indonesia
- **Theme switcher** — System / Light / Dark
- **Auto-update** — the app notifies you when a new version is available
- **Responsive** — mobile-first, adapts to desktop

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** + **vite-plugin-pwa**
- **Tailwind CSS v4** + **shadcn/ui** (base-ui)
- **@dnd-kit** (drag-and-drop)
- **Rubik** variable font

## Prerequisites

- **Node.js** 22+
- **pnpm** (`npm i -g pnpm`)

## Installation

```bash
pnpm install
```

## Development

```bash
pnpm dev              # PWA dev server at http://localhost:5173
```

## Production Build

```bash
pnpm build            # PWA build → dist/
```

The PWA build outputs an optimized bundle with a service worker, web app
manifest, and offline caching.

## Deployment

### PWA (GitHub Pages)

Push to `main` — the `Deploy to GitHub Pages` workflow builds and deploys
automatically.

```bash
git push origin main
```

## APIs Used

| API                                                       | Purpose               | Cache  |
| --------------------------------------------------------- | --------------------- | ------ |
| [exchangerate-api.com](https://www.exchangerate-api.com/) | Fiat currency rates   | 1 hour |
| [CoinGecko](https://www.coingecko.com/)                   | Cryptocurrency prices | 1 hour |

Currency flags are generated locally from currency codes (regional indicator
symbols) — no external request needed.

## Project Structure

```
src/
├── components/        # UI components (CurrencyList, CurrencyModal, etc.)
│   └── ui/            # shadcn/ui primitives
├── hooks/             # useCurrencyApp, useTheme, usePullToRefresh, etc.
├── i18n/              # translations (15 languages)
├── utils/             # storage, flags, currencyNames
└── index.css          # Royal Sapphire theme (Tailwind v4)

.github/workflows/     # CI: deploy.yml (GitHub Pages)
```

## License

MIT
