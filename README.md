# Shibo Dai — English Academic Homepage

A **static, responsive academic website** designed for an undergraduate researcher. Inspired by the academic-first organization of [liyitang22.github.io](https://liyitang22.github.io/), not a copy of its code or visual assets.

## Files

- `index.html` — official English academic homepage.
- `cv.html` — concise English academic CV; use the **Print / Save as PDF** link from your browser.
- `assets/style.css` — layout, typography, mobile responsiveness, print styles.
- `assets/site.js` — public social links, portrait, WeChat QR code, navigation and placeholders.
- `assets/favicon.svg` — custom initials favicon.
- `CONTENT_REVIEW.md` — publication/wording decisions and items to check.

No build tools, frameworks, cookies, analytics, or tracking scripts. The dark theme uses Google Fonts (Cormorant Garamond and Source Serif 4), with local serif fallbacks if the font service is unavailable.

## Preview locally

Double-click `index.html` or run:

```bash
cd shibo-academic-homepage
python -m http.server 8000
```

Then visit `http://localhost:8000`. `cv.html` is linked from the header and sidebar.

## Add a portrait

Place an approved public portrait at `assets/profile.jpg`. The page automatically shows it inside the existing photo frame. Until then, it displays an intentional “SD” placeholder. Keep the exact filename or change `SITE_CONFIG.portrait` in `assets/site.js`.

## Connect your public profiles

Open `assets/site.js` and edit `SITE_CONFIG`:

```js
const SITE_CONFIG = Object.freeze({
  googleScholar: "https://scholar.google.com/citations?user=YOUR_ID",
  github: "https://github.com/DaiShiBo369",
  x: "https://x.com/YOUR_HANDLE",
  linkedin: "https://www.linkedin.com/in/YOUR_HANDLE/",
  rednote: "https://www.xiaohongshu.com/user/profile/YOUR_ID",
  portrait: "assets/profile.jpg",
  wechatQr: "assets/wechat-qr.png"
});
```

**The URLs above are examples only.** Do not use them as genuine links. In the submitted website, only the previously documented GitHub URL is active; all unspecified services have visually marked, clickable placeholders that show a friendly pending message rather than navigating to fake URLs.

For the WeChat Official Account, add a publicly shareable QR image as `assets/wechat-qr.png`. The WeChat button opens a QR dialog even before the image has been supplied.

## GitHub Pages deployment

1. Create a new public repository on GitHub, for example `academic-homepage-preview`.
2. Push/upload `index.html`, `cv.html`, the `assets` folder, and `.nojekyll` to the repository root.
3. Choose **Settings → Pages → Build and deployment → Deploy from a branch**, branch `main`, directory `/ (root)`.
4. First verify the preview at `https://DaiShiBo369.github.io/academic-homepage-preview/` (example path if that repository name is used).
5. Only after approval should you consider updating your existing personal domain or website.

This package has **not** been published to GitHub or `disboundary.top`.

## Public-content verification

Before publishing, check `CONTENT_REVIEW.md`, especially:

- Whether `dsb25@mails.tsinghua.edu.cn` is the correct mailbox (two variants appear in the personal archive).
- Whether the English name of each award matches its official certificate.
- The non-political **descriptive wording** used for a class collective recognition: it is *not claimed to be the official English award title*.
- Permission to publish any in-submission research manuscript; this website intentionally does **not** list or identify the current ICLR submission.
- All social URLs and image assets should be explicitly supplied or approved by you.

**Never upload `00-个人档案_主文件.md`** or any other source record to the public website repository: it contains private information.

## Sidebar behavior (v3)

- At viewport widths above 780 px, the left profile/sidebar uses CSS `position: fixed`. Scrolling the document leaves it at the same viewport coordinates while the research/main content scrolls. On unusually short screens, only the sidebar's own overflow can scroll so no links become inaccessible.
- At widths of 780 px or below, the sidebar is part of the normal page flow, which avoids covering the content on mobile.
- The sidebar now includes the approved dual-degree line **Mathematical Foundations + Software Engineering**.
