# Gradiorum Next.js Professional Site

This is the completely overhauled Gradiorum site built with:
- **Next.js** for robust React-based server-side rendering and static generation.
- **Tailwind CSS** for rapid UI development with a professional, customizable design.
- **Three.js** integration via @react-three/fiber for immersive interactive scenes.
- **GSAP** for smooth, scroll-driven animations.
- Advanced AI-powered content personalization and JAMstack performance enhancements.

## Quick Start

1. **Install** dependencies:
   ```bash
   npm install
   # or
   yarn
--------------------
File: tailwind.config.js
--------------------
/** @type {import('tailwindcss').Config} / module.exports = { content: [ "./pages/**/.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}" ], theme: { extend: { colors: { xboxGreen: "#00ff7f", background: "#0a0a0a", foreground: "#ededed" }, boxShadow: { neon: "0 0 8px #00ff7f, 0 0 16px #00ff7f" }, fontFamily: { orbitron: ["Orbitron", "sans-serif"] }, animation: { 'pulse-slow': 'pulse 3s infinite' } } }, plugins: [], darkMode: 'class' };

--------------------
File: .wrangler/tmp/bundle-WSSZLG/checked-fetch.js
--------------------
const urls = new Set();

function checkURL(request, init) { const url = request instanceof URL ? request : new URL( (typeof request === "string" ? new Request(request, init) : request ).url ); if (url.port && url.port !== "443" && url.protocol === "https:") { if (!urls.has(url.toString())) { urls.add(url.toString()); console.warn( WARNING: known issue with \fetch()` requests to custom HTTPS ports in published Workers:\n + - ${url.toString()} - the custom port will be ignored when the Worker is published using the `wrangler deploy` command.\n` ); } } }

globalThis.fetch = new Proxy(globalThis.fetch, { apply(target, thisArg, argArray) { const [request, init] = argArray; checkURL(request, init); return Reflect.apply(target, thisArg, argArray); }, });

--------------------
File: .wrangler/tmp/bundle-WSSZLG/middleware-insertion-facade.js
--------------------
import worker, * as OTHER_EXPORTS from "C:\Users\WillR\AppData\Roaming\npm\node_modules\wrangler\templates\pages-shim.ts"; import * as MIDDLEWARE_0 from "C:\Users\WillR\AppData\Roaming\npm\node_modules\wrangler\templates\middleware\middleware-ensure-req-body-drained.ts"; import * as MIDDLEWARE_1 from "C:\Users\WillR\AppData\Roaming\npm\node_modules\wrangler\templates\middleware\middleware-miniflare3-json-error.ts";

export * from "C:\Users\WillR\AppData\Roaming\npm\node_modules\wrangler\templates\pages-shim.ts";

export const INTERNAL_WRANGLER_MIDDLEWARE = [ MIDDLEWARE_0.default, MIDDLEWARE_1.default ]; export default worker;

--------------------
File: .wrangler/tmp/dev-EcO1OJ/pages-shim.js
--------------------
var __defProp = Object.defineProperty; var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/bundle-WSSZLG/checked-fetch.js var urls = /* @PURE */ new Set(); function checkURL(request, init) { const url = request instanceof URL ? request : new URL( (typeof request === "string" ? new Request(request, init) : request).url ); if (url.port && url.port !== "443" && url.protocol === "https:") { if (!urls.has(url.toString())) { urls.add(url.toString()); console.warn( WARNING: known issue with \fetch()` requests to custom HTTPS ports in published Workers:

${url.toString()} - the custom port will be ignored when the Worker is published using the `wrangler deploy` command. ` ); } } } __name(checkURL, "checkURL"); globalThis.fetch = new Proxy(globalThis.fetch, { apply(target, thisArg, argArray) { const [request, init] = argArray; checkURL(request, init); return Reflect.apply(target, thisArg, argArray); } });
// C:/Users/WillR/AppData/Roaming/npm/node_modules/wrangler/templates/pages-shim.ts var pages_shim_default = { async fetch(request, env, context) { const response = await env.ASSETS.fetch(request.url, request); return new Response(response.body, response); } };

// C:/Users/WillR/AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts var drainBody = /* @PURE */ __name(async (request, env, _ctx, middlewareCtx) => { try { return await middlewareCtx.next(request, env); } finally { try { if (request.body !== null && !request.bodyUsed) { const reader = request.body.getReader(); while (!(await reader.read()).done) {} } } catch (e) { console.error("Failed to drain the unused request body.", e); } } }, "drainBody"); var middleware_ensure_req_body_drained_default = drainBody;

// C:/Users/WillR/AppData/Roaming/npm/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts function reduceError(e) { return { name: e?.name, message: e?.message ?? String(e), stack: e?.stack, cause: e?.cause === void 0 ? void 0 : reduceError(e.cause) }; } __name(reduceError, "reduceError"); var jsonError = /* @PURE */ __name(async (request, env, _ctx, middlewareCtx) => { try { return await middlewareCtx.next(request, env); } catch (e) { const error = reduceError(e); return Response.json(error, { status: 500, headers: { "MF-Experimental-Error-Stack": "true" } }); } }, "jsonError"); var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-WSSZLG/middleware-insertion-facade.js var INTERNAL_WRANGLER_MIDDLEWARE = [ middleware_ensure_req_body_drained_default, middleware_miniflare3_json_error_default ]; var middleware_insertion_facade_default = pages_shim_default;

// C:/Users/WillR/AppData/Roaming/npm/node_modules/wrangler/templates/middleware/common.ts var facade_middleware = []; function facade_register(...args) { facade_middleware.push(...args.flat()); } __name(facade_register, "facade_register"); function facade_invokeChain(request, env, ctx, dispatch, middlewareChain) { const [head, ...tail] = middlewareChain; const middlewareCtx = { dispatch, next(newRequest, newEnv) { return facade_invokeChain(newRequest, newEnv, ctx, dispatch, tail); } }; return head(request, env, ctx, middlewareCtx); } __name(facade_invokeChain, "facade_invokeChain"); function facade_invoke(request, env, ctx, dispatch, finalMiddleware) { return facade_invokeChain(request, env, ctx, dispatch, [ ...facade_middleware, finalMiddleware ]); } __name(facade_invoke, "facade_invoke");

// .wrangler/tmp/bundle-WSSZLG/middleware-loader.entry.ts var Facade_ScheduledController = class { constructor(scheduledTime, cron, noRetry) { this.scheduledTime = scheduledTime; this.cron = cron; this.#noRetry = noRetry; } #noRetry; noRetry() { if (!(this instanceof Facade_ScheduledController)) { throw new TypeError("Illegal invocation"); } this.#noRetry(); } }; __name(Facade_ScheduledController, "Facade_ScheduledController"); function wrapExportedHandler(worker) { if (INTERNAL_WRANGLER_MIDDLEWARE === void 0 || INTERNAL_WRANGLER_MIDDLEWARE.length === 0) { return worker; } for (const middleware of INTERNAL_WRANGLER_MIDDLEWARE) { facade_register(middleware); } const fetchDispatcher = /* @PURE / __name(function(request, env, ctx) { if (worker.fetch === void 0) { throw new Error("Handler does not export a fetch() function."); } return worker.fetch(request, env, ctx); }, "fetchDispatcher"); return { ...worker, fetch(request, env, ctx) { const dispatcher = / @PURE */ __name(function(type, init) { if (type === "scheduled" && worker.scheduled !== void 0) { const controller = new Facade_ScheduledController( Date.now(), init.cron ?? "", () => {} ); return worker.scheduled(controller, env, ctx); } }, "dispatcher"); return facade_invoke(request, env, ctx, dispatcher, fetchDispatcher); } }; } __name(wrapExportedHandler, "wrapExportedHandler"); function wrapWorkerEntrypoint(klass) { if (INTERNAL_WRANGLER_MIDDLEWARE === void 0 || INTERNAL_WRANGLER_MIDDLEWARE.length === 0) { return klass; } for (const middleware of INTERNAL_WRANGLER_MIDDLEWARE) { facade_register(middleware); } return class extends klass { #fetchDispatcher = (request, env, ctx) => { this.env = env; this.ctx = ctx; if (super.fetch === void 0) { throw new Error("Entrypoint class does not define a fetch() function."); } return super.fetch(request); }; #dispatcher = (type, init) => { if (type === "scheduled" && super.scheduled !== void 0) { const controller = new Facade_ScheduledController( Date.now(), init.cron ?? "", () => {} ); return super.scheduled(controller); } }; fetch(request) { return facade_invoke( request, this.env, this.ctx, this.#dispatcher, this.#fetchDispatcher ); } }; } __name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint"); var WRAPPED_ENTRY; if (typeof middleware_insertion_facade_default === "object") { WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default); } else if (typeof middleware_insertion_facade_default === "function") { WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default); } var middleware_loader_entry_default = WRAPPED_ENTRY; export { INTERNAL_WRANGLER_MIDDLEWARE, middleware_loader_entry_default as default }; //# sourceMappingURL=pages-shim.js.map

--------------------
File: components/ChatInput.jsx
--------------------
import { useState } from "react";

export default function ChatInput({ onSend }) { const [text, setText] = useState("");

const handleSend = (e) => { e.preventDefault(); if (!text.trim()) return; onSend({ role: "user", content: text }); // For demo purposes, simulate an AI response onSend({ role: "assistant", content: "This is a simulated AI response. Your message was: " + text }); setText(""); };

return ( <form onSubmit={handleSend} className="w-full flex"> <textarea value={text} onChange={(e) => setText(e.target.value)} className="chat-input flex-grow bg-gray-700 text-white p-2 rounded" placeholder="Type your message..." /> <button type="submit" className="ml-2 px-4 py-2 bg-[var(--accent-color)] text-black rounded hover:shadow-neon"> Send </button> </form> ); }

--------------------
File: components/ChatWindow.jsx
--------------------
export default function ChatWindow({ messages }) { return ( <div className="chat-window p-4"> {messages.map((msg, index) => ( <div key={index} className={mb-3 ${msg.role === "user" ? "text-right" : "text-left"}} > <span className={inline-block p-3 rounded ${ msg.role === "user" ? "bg-[var(--accent-color)] text-black" : "bg-gray-600 text-white" }} > {msg.content} </span> </div> ))} </div> ); }

--------------------
File: components/ColorPicker.jsx
--------------------
import { useState } from "react";

export default function ColorPicker({ currentColor, onChange }) { const [color, setColor] = useState(currentColor);

const handleChange = (e) => { setColor(e.target.value); onChange(e.target.value); };

return ( <input type="color" value={color} onChange={handleChange} className="w-16 h-10 p-0 border-0" /> ); }

--------------------
File: components/Footer.jsx
--------------------
export default function Footer() { return ( <footer className="w-full bg-gray-900 text-gray-400 p-4 text-center"> <p>© {new Date().getFullYear()} Gradiorum Corporation. All rights reserved.</p> </footer> ); }

--------------------
File: components/Header.jsx
--------------------
import Link from "next/link";

export default function Header() { return ( <header className="w-full bg-gray-900 text-gray-200 p-4 flex justify-between items-center"> <div className="flex items-center space-x-2"> <img src="/images/logo.png" alt="Gradiorum Logo" className="w-10 h-10" /> <Link href="/" className="text-xl font-bold">Gradiorum</Link> </div> <nav className="hidden md:flex space-x-4"> <Link href="/" className="hover:text-[var(--accent-color)]">Home</Link> <Link href="/dashboard" className="hover:text-[var(--accent-color)]">Dashboard</Link> <Link href="/blog" className="hover:text-[var(--accent-color)]">Blog</Link> <Link href="/settings" className="hover:text-[var(--accent-color)]">Settings</Link> </nav> <div className="flex space-x-2"> <Link href="/auth/signin" className="hover:text-[var(--accent-color)]">Sign In</Link> <Link href="/auth/signup" className="hover:text-[var(--accent-color)]">Sign Up</Link> </div> </header> ); }

--------------------
File: components/Hero.jsx
--------------------
import SceneRenderer from "./SceneRenderer";

export default function Hero() { return ( <section className="relative w-full h-[70vh] bg-black flex items-center justify-center text-center overflow-hidden"> <SceneRenderer /> <div className="absolute inset-0 bg-black bg-opacity-40" /> <div className="relative z-10 text-white max-w-2xl p-4"> <h1 className="text-5xl font-bold mb-4 neon-title">Welcome to Gradiorum</h1> <p className="text-xl mb-6">The Frontier of Innovation & Technology</p> <a href="/about" className="inline-block px-6 py-3 bg-xboxGreen text-black rounded font-semibold hover:bg-opacity-80 transition" > Learn More </a> </div> </section> ); }

--------------------
File: components/SceneRenderer.js
--------------------
import { Canvas } from '@react-three/fiber'; import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei'; import { useRef } from 'react'; import { useFrame } from '@react-three/fiber';

export default function SceneRenderer() { return ( <Canvas shadows camera={{ position: [0, 0, 10], fov: 50 }} className="w-full h-full"> <ScrollControls pages={1.5} damping={0.25}> <ambientLight intensity={0.5} /> <pointLight position={[10, 10, 10]} /> <OrbitControls enableZoom={false} /> <SceneContent /> </ScrollControls> </Canvas> ); }

function SceneContent() { const groupRef = useRef(); const { progress } = useScroll();

useFrame(() => { if (groupRef.current) { groupRef.current.position.y = -progress * 5; } });

return ( <group ref={groupRef}> <mesh position={[-2, 0, 0]}> <boxGeometry args={[1, 1, 1]} /> <meshStandardMaterial color="hotpink" /> </mesh> <mesh position={[2, 0, 0]}> <sphereGeometry args={[0.75, 32, 32]} /> <meshStandardMaterial color="#00ff7f" /> </mesh> </group> ); }

--------------------
File: components/Layout.jsx
--------------------
import Head from "next/head"; import Header from "./Header"; import Footer from "./Footer";

export default function Layout({ children, title }) { const pageTitle = title ? ${title} : "Gradiorum";

return ( <> <Head> <title>{pageTitle}</title> <meta name="description" content="Gradiorum - Frontier of Innovation and Technology" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> </Head> <div className="bg-black min-h-screen flex flex-col font-orbitron"> <Header /> <main className="flex-grow flex items-center justify-center p-8"> <div className="w-full max-w-4xl">{children}</div> </main> <Footer /> </div> </> ); }

--------------------
File: components/Sidebar.jsx
--------------------
import Link from "next/link";

export default function Sidebar() { // Placeholder list of projects/workflows const items = [ { name: "Project Alpha", link: "/dashboard?project=alpha" }, { name: "Workflow Beta", link: "/dashboard?workflow=beta" }, { name: "Custom Model", link: "/dashboard?model=custom" } ];

return ( <aside className="w-64 bg-gray-800 text-gray-200 p-4"> <h2 className="text-xl font-bold mb-4">Projects & Workflows</h2> <ul className="space-y-2"> {items.map((item, i) => ( <li key={i}> <Link href={item.link} className="hover:text-accent">{item.name}</Link> </li> ))} </ul> <div className="mt-6"> <h3 className="font-semibold mb-2">Model Selector</h3> <select className="w-full p-2 rounded bg-gray-700 text-white"> <option value="default">Default GPT Model</option> <option value="custom">Add New Model...</option> </select> </div> </aside> ); }

--------------------
File: gradiorum/package.json
--------------------
{ "name": "gradiorum", "version": "2.0.0", "private": true, "scripts": { "dev": "next dev --turbopack", "build": "next build", "start": "next start", "lint": "next lint", "pages:build": "npx @cloudflare/next-on-pages", "preview": "npm run pages:build && wrangler pages dev", "deploy": "npm run pages:build && wrangler pages deploy", "cf-typegen": "wrangler types --env-interface CloudflareEnv env.d.ts" }, "dependencies": { "next": "15.1.5", "react": "^19.0.0", "react-dom": "^19.0.0" }, "devDependencies": { "@cloudflare/next-on-pages": "^1.13.7", "@cloudflare/workers-types": "^4.20250124.3", "@eslint/eslintrc": "^3", "@types/node": "^20", "@types/react": "^19", "@types/react-dom": "^19", "eslint": "^9", "eslint-config-next": "15.1.5", "postcss": "^8", "tailwindcss": "^3.4.1", "typescript": "^5", "vercel": "^39.3.0", "wrangler": "^3.105.1" } }

--------------------
File: gradiorum/README.md
--------------------
This is a Next.js project bootstrapped with c3.

Getting Started
First, run the development server:

bash
Copy
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
For more information on customization and deployment, please refer to the documentation in DOCS/ReusableCodePatterns.md.

--------------------
File: gradiorum/tsconfig.json
--------------------
{ "compilerOptions": { "target": "ES2017", "lib": ["dom", "dom.iterable", "esnext"], "allowJs": true, "skipLibCheck": true, "strict": true, "noEmit": true, "esModuleInterop": true, "module": "esnext", "moduleResolution": "bundler", "resolveJsonModule": true, "isolatedModules": true, "jsx": "preserve", "incremental": true, "plugins": [ { "name": "next" } ], "paths": { "@/": ["./src/"] }, "types": [ "@cloudflare/workers-types/2023-07-01" ] }, "include": ["next-env.d.ts", "/*.ts", "/.tsx", ".next/types/**/.ts"], "exclude": ["node_modules"] }

--------------------
File: gradiorum/wrangler.json
--------------------
{ "$schema": "node_modules/wrangler/config-schema.json", "name": "gradiorum", "compatibility_date": "2025-01-24", "compatibility_flags": [ "nodejs_compat" ], "pages_build_output_dir": ".vercel/output/static", "observability": { "enabled": true } // Additional bindings and configuration may be added here as needed. }

--------------------
File: gradiorum/src/app/globals.css
--------------------
@tailwind base; @tailwind components; @tailwind utilities;

:root { --background: #ffffff; --foreground: #171717; }

@media (prefers-color-scheme: dark) { :root { --background: #0a0a0a; --foreground: #ededed; } }

body { color: var(--foreground); background: var(--background); font-family: Arial, Helvetica, sans-serif; }

--------------------
File: hooks/useTheme.js
--------------------
import { useEffect, useState } from "react";

const DEFAULT_THEME = { background: "#0a0a0a", foreground: "#ededed", accent: "#00ff7f" };

export function useTheme() { const [theme, setTheme] = useState(DEFAULT_THEME);

useEffect(() => { const savedTheme = localStorage.getItem("gradiorum-theme"); if (savedTheme) { setTheme(JSON.parse(savedTheme)); applyTheme(JSON.parse(savedTheme)); } else { applyTheme(DEFAULT_THEME); } }, []);

const applyTheme = (theme) => { document.documentElement.style.setProperty("--background-color", theme.background); document.documentElement.style.setProperty("--foreground-color", theme.foreground); document.documentElement.style.setProperty("--accent-color", theme.accent); };

const changeTheme = (newTheme) => { setTheme(newTheme); localStorage.setItem("gradiorum-theme", JSON.stringify(newTheme)); applyTheme(newTheme); };

return { theme, changeTheme }; }

--------------------
File: pages/dashboard.jsx
--------------------
import Header from "../components/Header"; import Footer from "../components/Footer"; import Sidebar from "../components/Sidebar";

export default function Dashboard() { return ( <div className="min-h-screen flex" style={{ backgroundColor: "var(--background-color)", color: "var(--foreground-color)" }}> <Sidebar /> <div className="flex-grow p-8"> <Header /> <h1 className="text-4xl font-bold mb-6 text-center">Projects & Workflows</h1> <p className="text-center">Create new workflows, view chat history per project, and manage your AI integrations.</p> </div> <Footer /> </div> ); }

--------------------
File: pages/index.jsx
--------------------
import Layout from "../components/Layout"; import Hero from "../components/Hero";

export default function Home() { return ( <Layout> <Hero /> <section className="max-w-7xl mx-auto px-6 py-12 text-center"> <h2 className="text-3xl font-bold mb-6">Featured Projects</h2> <div className="grid md:grid-cols-2 gap-8"> <div className="bg-gray-900 text-white p-6 rounded-lg hover:shadow-neon hover:scale-105 transform transition"> <h3 className="text-2xl font-semibold mb-2">Via</h3> <p className="mb-4">A lightweight modular framework for AI integration.</p> <a href="/projects#via" className="inline-block px-4 py-2 text-black bg-xboxGreen rounded hover:bg-opacity-80 transition"> Learn More </a> </div> <div className="bg-gray-900 text-white p-6 rounded-lg hover:shadow-neon hover:scale-105 transform transition"> <h3 className="text-2xl font-semibold mb-2">Ascendus</h3> <p className="mb-4">An advanced AI toolkit for large-scale automation.</p> <a href="/projects#ascendus" className="inline-block px-4 py-2 text-black bg-xboxGreen rounded hover:bg-opacity-80 transition"> Learn More </a> </div> </div> </section> <section className="max-w-7xl mx-auto px-6 py-12"> <h2 className="text-3xl font-bold mb-6 text-center">Latest News</h2> <p className="text-gray-200 text-center"> Check out the <a href="/blog" className="text-xboxGreen underline">blog</a> for updates! </p> </section> </Layout> ); }

--------------------
File: pages/settings.jsx
--------------------
import { useTheme } from "../hooks/useTheme"; import Header from "../components/Header"; import Footer from "../components/Footer"; import ColorPicker from "../components/ColorPicker";

export default function Settings() { const { theme, changeTheme } = useTheme();

const handleColorChange = (colorType, newColor) => { changeTheme({ ...theme, [colorType]: newColor }); };

return ( <div className="min-h-screen" style={{ backgroundColor: "var(--background-color)", color: "var(--foreground-color)" }}> <Header /> <main className="page-wrapper py-10"> <h1 className="text-3xl font-bold mb-6 text-center">Customize Your UI</h1> <div className="max-w-md mx-auto space-y-6"> <div> <label className="block mb-2">Background Color:</label> <ColorPicker currentColor={theme.background} onChange={(color) => handleColorChange("background", color)} /> </div> <div> <label className="block mb-2">Foreground (Text) Color:</label> <ColorPicker currentColor={theme.foreground} onChange={(color) => handleColorChange("foreground", color)} /> </div> <div> <label className="block mb-2">Accent Color:</label> <ColorPicker currentColor={theme.accent} onChange={(color) => handleColorChange("accent", color)} /> </div> </div> </main> <Footer /> </div> ); }

--------------------
File: pages/auth/signin.jsx
--------------------
import Header from "../../components/Header"; import Footer from "../../components/Footer";

export default function SignIn() { return ( <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "var(--background-color)", color: "var(--foreground-color)" }}> <Header /> <main className="page-wrapper py-10"> <h1 className="text-3xl font-bold mb-6">Sign In</h1> <form className="max-w-md w-full space-y-4"> <input type="email" placeholder="Email" className="w-full p-3 rounded" /> <input type="password" placeholder="Password" className="w-full p-3 rounded" /> <button type="submit" className="w-full p-3 bg-[var(--accent-color)] text-black rounded">Sign In</button> </form> </main> <Footer /> </div> ); }

--------------------
File: pages/auth/signup.jsx
--------------------
import Header from "../../components/Header"; import Footer from "../../components/Footer";

export default function SignUp() { return ( <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: "var(--background-color)", color: "var(--foreground-color)" }}> <Header /> <main className="page-wrapper py-10"> <h1 className="text-3xl font-bold mb-6">Sign Up</h1> <form className="max-w-md w-full space-y-4"> <input type="text" placeholder="Username" className="w-full p-3 rounded" /> <input type="email" placeholder="Email" className="w-full p-3 rounded" /> <input type="password" placeholder="Password" className="w-full p-3 rounded" /> <button type="submit" className="w-full p-3 bg-[var(--accent-color)] text-black rounded">Sign Up</button> </form> </main> <Footer /> </div> ); }

--------------------
File: pages/blog/index.jsx
--------------------
import Header from "../../components/Header"; import Footer from "../../components/Footer"; import Link from "next/link";

export default function BlogIndex() { // Example placeholder posts const posts = [ { slug: "post-one", title: "Post One", excerpt: "This is the first blog post.", date: "2024-12-07" }, { slug: "post-two", title: "Post Two", excerpt: "This is the second blog post.", date: "2024-11-15" } ];

return ( <div className="min-h-screen" style={{ backgroundColor: "var(--background-color)", color: "var(--foreground-color)" }}> <Header /> <main className="container mx-auto px-4 py-8"> <h1 className="text-3xl font-bold mb-6">Blog</h1> <div className="space-y-6"> {posts.map((post) => ( <div key={post.slug} className="p-4 bg-gray-800 rounded"> <h2 className="text-2xl font-bold">{post.title}</h2> <p className="text-sm text-gray-400">{post.date}</p> <p className="mt-2">{post.excerpt}</p> <Link href={/blog/${post.slug}} className="text-accent underline">Read More</Link> </div> ))} </div> </main> <Footer /> </div> ); }

--------------------
File: pages/blog/[slug].jsx
--------------------
import { useRouter } from "next/router"; import Layout from "../../components/Layout";

export default function BlogPost() { const { query } = useRouter(); const { slug } = query;

// Demo placeholder content const mockContent = `

<h2>${slug?.replaceAll('-', ' ')}</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod nisl a urna pellentesque, at lobortis augue commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> `;
return ( <Layout title={Blog: ${slug || 'Loading...'}}> <section className="max-w-3xl mx-auto px-4 py-10 text-gray-100"> {slug ? ( <article className="prose prose-invert"> <div dangerouslySetInnerHTML={{ __html: mockContent }} /> </article> ) : ( <p>Loading...</p> )} </section> </Layout> ); }

--------------------
File: posts/2024-12-07-first-blog-post.md
--------------------
William’s Journey and Our Vision
By: William (Founder)

As I prepare to embark on my Master of Science in Computer Science at Georgia Tech this coming January, specializing in Machine Learning, I’m reminded of the broader goal we hold at Gradiorum: bringing personalized AI assistants into everyday life.

From early forays into reinforcement learning to the nuanced complexities of human-AI teaming, our mission is rooted in practical innovation. Soon, I will be immersing myself in advanced coursework and research at one of the world’s leading institutions. This step is not just academic—it's a move towards realizing our dream: making AI assistants as ubiquitous and helpful as any common household technology.

Blog Roles at Gradiorum:

Founder (like me, William): We shape the strategic direction and share our vision.
Members: Our verified contributors who add depth to projects and research discussions.
Guests: Occasional voices from the larger tech and AI ecosystem. Guest posts are carefully verified before publication to ensure quality and relevance.
We look forward to sharing insights, updates, and breakthroughs. Thank you for joining us on this journey.

--------------------
File: posts/README.md
--------------------
// This README was replaced with the first blog post file above. // The original README in this directory is no longer needed. // You can keep this placeholder here if you like, or remove it.

--------------------
File: public/images/README.md
--------------------
Images Directory
Place your site's images and brand assets here. For example:

xbox-swirls.jpg for the Hero background
starfield.png if you do a starfield background
logo.png if you have an updated logo
william-stigall.jpg for the members page
--------------------
File: styles/globals.css
--------------------
@tailwind base; @tailwind components; @tailwind utilities;

/* Global reset and base styles */ html, body { margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; }

/* Center the overall page content */ .container-center { display: flex; flex-direction: column; align-items: center; justify-content: center; }

/* Theme Variables */ :root { --background-color: #0a0a0a; --foreground-color: #ededed; --accent-color: #00ff7f; }

/* Neon Glow for titles */ .neon-text { text-shadow: 0 0 8px var(--accent-color), 0 0 20px var(--accent-color); }

/* Chat interface improvements */ .chat-container { width: 100%; max-width: 800px; margin: 0 auto; background-color: #1a1a1a; border-radius: 8px; padding: 16px; display: flex; flex-direction: column; }

.chat-window { flex-grow: 1; max-height: 500px; overflow-y: auto; background-color: #2a2a2a; padding: 12px; border-radius: 8px; margin-bottom: 12px; word-wrap: break-word; }

.chat-input { width: 100%; padding: 12px; border: none; border-radius: 8px; font-size: 1rem; resize: vertical; min-height: 50px; }

/* Responsive spacing and centered content */ .page-wrapper { max-width: 1200px; margin: 0 auto; padding: 20px; }

/* Example hover neon effect */ .hover:shadow-neon:hover { box-shadow: 0 0 8px var(--accent-color), 0 0 16px var(--accent-color); }

/* Override default Tailwind dark mode if needed */ .dark { background-color: var(--background-color); color: var(--foreground-color); }

/* Additional professional UI refinements */ body { line-height: 1.6; } button { transition: background-color 0.3s ease; }
