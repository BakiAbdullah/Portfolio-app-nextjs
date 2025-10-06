# My Portfolio Website

A modern, fast, and secure personal portfolio website built using Next.js, NextAuth, and Shadcn UI — designed to showcase projects, blogs, and professional profile in an elegant, developer-friendly way.

---

## ⚙️ Installation & Setup

```bash
# Clone the repo
git clone https://github.com/BakiAbdullah/Portfolio-app-nextjs

# Navigate into the folder
cd portfolio-app-nextjs

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 🌱 Environment Variables

Create a `.env` file in root:

```env
NEXT_PUBLIC_NEXTAUTH_URL=https://portfolio-app-nextjs-nine.vercel.app
NEXT_PUBLIC_BASE_API=https://portfolio-server-prisma.vercel.app/api/v1
NEXTAUTH_SECRET=create_a_random_secret_string_here
```


## 🔑 Credentials (for Testing)
ADMIN_EMAIL=admin@gmail.com
ADMIN_PASSWORD=admin123

---

## 🚀 Features

### 🎨 General Features
- Fully responsive, SEO-friendly personal portfolio
- Built-in dark/light mode toggle using Shadcn UI
- Smooth animations powered by Framer Motion
- Modular and scalable folder structure (App Router)
- Automatic route-based page loading with Next.js App Router
- Server-side rendering (SSR) & static generation (SSG) supported
- Optimized for performance and accessibility

### 🧑‍💻 Authentication (NextAuth)

- NextAuth.js integration with credential provider
- JWT-based secure authentication (Internally handled by NextAuth)
- Login, logout, and protected dashboard routes
- Cookies stored with Secure + HttpOnly flags for production
- Middleware-based route protection (/dashboard is only accessible when logged in)
- Custom error and loading pages for better UX


### 📰 Blog Management

- Dynamic blog listing fetched from backend API
- Single blog page with SEO-friendly and ISR support
- Blog author info and published date display

### 🏦 Admin Dashboard (Private)

- Manage blogs, projects, and personal content
- Add / Edit / Delete blogs and projects
- Real-time API data sync with revalidation
- Secure access based on authentication session

---

## 🛠 Tech Stack

**Frontend:**

- Next.js 14 (App Router)
- TypeScript
- NextAuth.js (Authentication)
- Shadcn UI (UI Components)
- Tailwind CSS
- Framer Motion (Animations)

**Backend (Provided Separately):**
- Node.js + Express + Prisma
- PostgreSQL
- bcrypt

---

---

## 🌍 Deployment
> Frontend and Backend deployed on **Vercel**:   
> Developed with ❤️ by Baki Abdullah  
> 📧 [Frontend Live Link](https://portfolio-app-nextjs-nine.vercel.app)  
> 🌐 [Backend Live Link](https://portfolio-server-prisma.vercel.app)
