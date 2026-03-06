# Jorvea Website + Deep Linking Setup Guide

## 1) What is implemented

- App deep linking in React Native for:
  - https://app.jorvea.tech/r/:reelId
  - jorvea://r/:reelId
- Android intent filters added in MainActivity
- Website created at D:\JORVEA\website with high-SEO pages:
  - /
  - /download
  - /support
  - /safety
  - /privacy
  - /terms
  - /contact
  - /r/[reelId] (web-to-app handoff)
- SEO technical files:
  - sitemap.xml
  - robots.txt
  - manifest.webmanifest
  - metadata + OpenGraph/Twitter tags

## 2) Required image assets (replace placeholders)

Put these files in: public/images/

1. logo.png
   - 512x512 PNG transparent preferred
2. og-image.jpg
   - 1200x630 JPG (for Google/social previews)
3. icon-192.png
   - 192x192 PNG
4. icon-512.png
   - 512x512 PNG

Asset checklist file is available at:
- public/images/README_ASSETS.txt

## 3) Domain and DNS for app.jorvea.tech

Point app.jorvea.tech to your hosting provider (Vercel recommended for Next.js):

- Create project from D:\JORVEA\website
- Add custom domain: app.jorvea.tech
- Configure A/CNAME records based on hosting instructions
- Enable HTTPS

## 4) Android App Links verification (critical)

File path:
- public/.well-known/assetlinks.json

You must replace:
- REPLACE_WITH_YOUR_RELEASE_KEY_SHA256_FINGERPRINT

How to get SHA256 fingerprint of release keystore:

keytool -list -v -keystore your-release-key.jks -alias your-alias

After deployment, verify this URL works:
- https://app.jorvea.tech/.well-known/assetlinks.json

## 5) SEO actions to rank "Jorvea" strongly

1. Submit sitemap to Google Search Console:
   - https://app.jorvea.tech/sitemap.xml
2. Verify domain ownership in Search Console
3. Request indexing for:
   - /
   - /download
   - /support
   - /safety
   - /privacy
   - /terms
   - /contact
4. Use consistent brand name "Jorvea" in app listing, social profiles, and website titles
5. Get backlinks from official profiles and partner sites to app.jorvea.tech
6. Keep legal/support pages live and updated (trust signals)

## 6) Local run and deploy commands

From D:\JORVEA\website:

- npm run dev
- npm run lint
- npm run build
- npm run start

## 7) Deep-link test cases

1. Open in browser:
   - https://app.jorvea.tech/r/test123
   Expected: attempts app open, then falls back to APKPure if app absent

2. Open custom scheme:
   - jorvea://r/test123
   Expected: app opens SingleReelViewer with reelId=test123

3. Open verified app link on Android device:
   - https://app.jorvea.tech/r/test123
   Expected: opens app directly (after assetlinks configured + app installed)
