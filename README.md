# 🧭 NUS Seafarers Website

This is the official website for **NUS Seafarers**, built with **React**, styled with **Tailwind CSS**, and deployed on **GitHub Pages**.

## 🛠️ Tech Stack

- React
- Tailwind CSS
- React Router
- Markdown rendering with `react-markdown`
- GitHub Pages for static deployment
- `gh-pages` for auto-deploy

---

## 🚀 Deployment Instructions

To build and deploy the site to GitHub Pages:

```bash
npm run deploy
````

This will:

1. Run `npm run build` to generate a static `build/` folder
2. Push the build to the `gh-pages` branch
3. Update the live site at:
   📍 [https://nusseafarers.github.io/nus-seafarers-site](https://nusseafarers.github.io/nus-seafarers-site)

Make sure your GitHub Pages settings point to the `gh-pages` branch at root.

---

## 📝 Adding a New Blog Page (Markdown-Based)

### 1. Add your content as a markdown file

Create a new file inside:

```
src/content/
```

Example:

```
src/content/2024-04-voyage-to-badas.md
```


### 2. Register the post in `posts.js`

Open:

```
src/components/blog/posts.js
```

Then import and add your new post to the `posts` array:

```js
import taiwanVoyage from '../../content/2024-04-voyage-to-badas.md';

export const posts = [
  {
    title: "Badas-Riau Expedition",
    slug: "badas-riau-expedition",
    date: "January 2, 2025",
    author: "Lewis",
    link: "",
    thumbnail: "/images/voyages/2025-01-badas-riau/pulau_pinang_seribu.jpg", // Fill properly
    summary:
      "Sailing through the rich waters of Riau, discovering remote island communities and breathtaking coastlines.",
    meta: "Riau Voyage",
    content: badasContent,
  },
  // add more posts here
];
```

> Make sure the `slug` matches your URL routing if you're using dynamic routes.

---

## 🧼 Maintenance Tips

* Always commit and push your changes to the `main` branch
* To trigger a new deploy:

  ```bash
  npm run deploy
  ```
* If the site still shows the old content after deploying, hard-refresh or wait \~60 seconds due to GitHub Pages caching
* Keep the `homepage` field in `package.json` correctly set:

  ```json
  "homepage": "https://nusseafarers.github.io/"
  ```

---

## 📁 Project Structure Overview

```
nus-seafarers-site/
├── public/
│   └── index.html (customized head and title)
├── src/
│   ├── content/         ← Markdown blog content
│   ├── components/
│   │   └── blog/
│   │       └── posts.js ← Register markdown posts here
│   └── App.js           ← React app entry point
├── package.json
```

---

## 💬 Questions?

If you run into deployment or routing issues, feel free to check:

* [GitHub Pages Docs](https://docs.github.com/en/pages)
* [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/)

---