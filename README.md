# Personal Portfolio Website

My personal portfolio website built with **React (JavaScript)**, **HTML**, and **Tailwind CSS**.  
It features a **responsive**, **cross-platform** design that works smoothly on both **mobile** and **desktop**.

## Live Site (Vercel)
This website is hosted on **Vercel**:  
- **Live Demo:** https://your-vercel-link-here.vercel.app

## Features
- ✅ Responsive layout (mobile + desktop friendly)
- ✅ Cross-platform compatibility (works on phones, tablets, and computers)
- ✅ Social links (LinkedIn + GitHub)
- ✅ Contact form that lets visitors message me (**powered by EmailJS**)
- ✅ **Song of the Day** feature powered by the **Jamendo API**
- ✅ Sections for About, Projects, and more

## Tech Stack
- **React**
- **JavaScript**
- **HTML**
- **Tailwind CSS**
- **EmailJS** (contact form messaging)
- **Jamendo API** (Song of the Day)

## EmailJS (Contact Form)
The contact form uses **EmailJS** to send messages directly from the site to my email.  
If your deployment requires keys, add them in **Vercel → Project Settings → Environment Variables**.

> Common examples:
> - `VITE_EMAILJS_SERVICE_ID=...`
> - `VITE_EMAILJS_TEMPLATE_ID=...`
> - `VITE_EMAILJS_PUBLIC_KEY=...`

## Jamendo API
The **Song of the Day** feature uses Jamendo to fetch music data.  
If an API key/client ID is required for your deployment, add it in **Vercel → Project Settings → Environment Variables**.

> Example (common for Vite projects):
> `VITE_JAMENDO_CLIENT_ID=your_client_id_here`

## Notes
- Built for performance and a clean UI using Tailwind utility classes.
- Deployed and managed through Vercel for fast builds and easy updates.

---
If you fork this repo, feel free to customize it for your own portfolio.
