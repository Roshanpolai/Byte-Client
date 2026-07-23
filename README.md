# ByteBlog — Client

A full-stack blogging platform where users can sign up, log in, and publish rich-text blog posts with featured images. This repository is the **frontend** — a React single-page app built with Vite.

**Live demo:** https://byte-blog-mauve.vercel.app/

---

## Features

- **Authentication** — signup, login, logout with persisted session
- **Protected routes** — auth-gated pages redirect appropriately (logged-out users can't reach `/add-post`, logged-in users are redirected away from `/login`)
- **Create, edit, and delete posts** — full CRUD, with author-only edit/delete permissions
- **Rich text editor** — TinyMCE-powered content editor with formatting, images, and more
- **Featured image upload** — each post supports a cover image
- **Post status** — mark posts as `active` or `inactive`
- **Auto-generated slugs** — URL slugs generate live from the post title as you type
- **Search** — search posts by title from the navbar
- **Responsive UI** — built with Tailwind CSS, works across mobile, tablet, and desktop

---

## Tech Stack

| Category | Tech |
|---|---|
| UI library | React |
| Build tool | Vite |
| Styling | Tailwind CSS |
| State management | Redux Toolkit |
| Routing | React Router |
| Forms | React Hook Form |
| Rich text editor | TinyMCE (`@tinymce/tinymce-react`) |
| HTTP client | Axios |
| HTML parsing | html-react-parser |

---

## Project Structure

```
src/
├── api/            → axios instance and API config
├── assets/         → static assets (images, icons)
├── components/     → reusable UI components
│   ├── container/  → layout wrapper for consistent page padding
│   ├── Header/      Footer/     → layout components
│   ├── post-form/  → shared form used for both Create and Edit post
│   ├── profile-menu/ → avatar dropdown (Account / Logout)
│   └── ...          → Button, Input, Select, PostCard, PostListItem, RTE, etc.
├── pages/          → route-level pages (Home, AllPosts, AddPost, EditPost, Post, Login, Signup)
├── services/        → API call logic (auth.service.js, post.service.js)
├── store/           → Redux slices and store config
├── App.jsx          → route definitions
└── main.jsx         → app entry point
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A running instance of the https://github.com/Roshanpolai/Byte-Server with MongoDB connected

### Installation

```bash
git clone https://github.com/Roshanpolai/Byte-Client
cd Blog-Project-client
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_TINYMCE_API_KEY=your_tinymce_api_key
```

Get a free TinyMCE API key at [tiny.cloud](https://www.tiny.cloud/).

### Run locally

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Build for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

---

## Deployment

This app is configured to deploy on **Vercel**:

1. Import the repository into Vercel
2. Set the build command to `vite build` and output directory to `dist`
3. Add the environment variables (`VITE_API_URL`, `VITE_TINYMCE_API_KEY`) in the Vercel project settings, pointing `VITE_API_URL` to your deployed backend
4. Deploy

---

## Limitations

- No pagination on post listings — all posts are fetched at once
- No visible per-field validation error messages in forms beyond required-field checks
- No automated tests yet

---

## Author

Designed and built by **Roshan Polai**.
