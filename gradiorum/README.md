This is a [Next.js](https://nextjs.org/) project bootstrapped with [`c3`](https://developers.cloudflare.com/pages/get-started/c3).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
--------------------
File: gradiorum/tsconfig.json
--------------------
{ "compilerOptions": { "target": "ES2017", "lib": ["dom", "dom.iterable", "esnext"], "allowJs": true, "skipLibCheck": true, "strict": true, "noEmit": true, "esModuleInterop": true, "module": "esnext", "moduleResolution": "bundler", "resolveJsonModule": true, "isolatedModules": true, "jsx": "preserve", "incremental": true, "plugins": [ { "name": "next" } ], "paths": { "@/": ["./src/"] }, "types": [ "@cloudflare/workers-types/2023-07-01" ] }, "include": ["next-env.d.ts", "/*.ts", "/.tsx", ".next/types/**/.ts"], "exclude": ["node_modules"] }

--------------------
File: gradiorum/wrangler.json
--------------------
/**

For more details on how to configure Wrangler, refer to:
https://developers.cloudflare.com/workers/wrangler/configuration/ / { "$schema": "node_modules/wrangler/config-schema.json", "name": "gradiorum", "compatibility_date": "2025-01-24", "compatibility_flags": [ "nodejs_compat" ], "pages_build_output_dir": ".vercel/output/static", "observability": { "enabled": true } /*
Smart Placement
Docs: https://developers.cloudflare.com/workers/configuration/smart-placement/#smart-placement */ // "placement": { "mode": "smart" },
/**

Bindings
Bindings allow your Worker to interact with resources on the Cloudflare Developer Platform, including
databases, object storage, AI inference, real-time communication and more.
https://developers.cloudflare.com/workers/runtime-apis/bindings/ */
/**

Environment Variables
https://developers.cloudflare.com/workers/wrangler/configuration/#environment-variables / // "vars": { "MY_VARIABLE": "production_value" }, /*
Note: Use secrets to store sensitive data.
https://developers.cloudflare.com/workers/configuration/secrets/ */
/**

Static Assets
https://developers.cloudflare.com/workers/static-assets/binding/ */ // "assets": { "directory": "./public/", "binding": "ASSETS" },
/**

Service Bindings (communicate between multiple Workers)
https://developers.cloudflare.com/workers/wrangler/configuration/#service-bindings */ // "services": [{ "binding": "MY_SERVICE", "service": "my-service" }] }
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

export function useTheme() { const [theme, setTheme] = useState("dark");

useEffect(() => { const localTheme = localStorage.getItem("theme"); if (localTheme) { setTheme(localTheme); document.documentElement.classList.toggle("dark", localTheme === "dark"); } else { document.documentElement.classList.add("dark"); } }, []);

const toggleTheme = () => { const newTheme = theme === 'light' ? 'dark' : 'light'; setTheme(newTheme); localStorage.setItem("theme", newTheme); document.documentElement.classList.toggle("dark", newTheme === "dark"); };

return { theme, toggleTheme }; }

--------------------
File: pages/about.jsx
--------------------
import Layout from "../components/Layout";

export default function About() { return ( <Layout title="About - Gradiorum"> <section className="max-w-5xl mx-auto px-4 py-10"> <h1 className="text-4xl font-bold mb-6">About Gradiorum</h1> <p className="text-lg text-gray-200 mb-6"> Gradiorum stands at the intersection of innovation, technology, and art. We present cutting-edge projects, creative endeavors, and advanced AI-driven works spanning artificial intelligence, reinforcement learning, synthetic data generation, and more. </p> <p className="text-lg text-gray-200 mb-6"> Our mission: to push the boundaries of what’s possible, foster collaboration, and openly share knowledge with the global community. </p> <h2 className="text-3xl font-semibold mb-4">Our Mission</h2> <p className="text-gray-300 mb-8"> We strive to pioneer forward-looking technological solutions using advanced AI frameworks, emerging paradigms, and rigorous research methodologies. Transparency, education, and open collaboration define our ethos. </p> <h2 className="text-3xl font-semibold mb-4">History & Timeline</h2> <div className="space-y-8"> <div> <h3 className="text-xl font-semibold">October 13, 2024</h3> <p className="text-gray-300"> Official name change from “FallingPlanet” to “Gradiorum”. </p> </div> <div> <h3 className="text-xl font-semibold">October 20, 2024</h3> <p className="text-gray-300 mb-2">Completion of the major toolkit rewrite:</p> <ul className="list-disc ml-5 space-y-1 text-gray-300"> <li><strong>Via</strong> (formerly Orbit): A lightweight modular framework for AI integration.</li> <li><strong>Ascendus</strong> (formerly Quasar): An advanced AI toolkit for scalable automation.</li> <li><strong>Motus</strong>: A reinforcement learning library for dynamic AI solutions.</li> </ul> </div> </div> </section> </Layout> ); }

--------------------
File: pages/contact.jsx
--------------------
import Layout from "../components/Layout";

export default function Contact() { return ( <Layout title="Contact - Gradiorum"> <section className="max-w-3xl mx-auto px-4 py-10"> <h1 className="text-4xl font-bold mb-6">Contact Us</h1> <p className="text-gray-200 mb-4"> For inquiries, collaboration proposals, or more details, send us an email: </p> <p className="mb-6"> <a href="mailto:gradiorum@gmail.com" className="text-xboxGreen underline"> gradiorum@gmail.com </a> </p> <p className="text-gray-200"> We welcome your feedback and look forward to hearing from you. </p> </section> </Layout> ); }

--------------------
File: pages/discordbots.jsx
--------------------
import Layout from "../components/Layout";

export default function DiscordBots() { return ( <Layout title="Discord Bots - Gradiorum"> <section className="max-w-4xl mx-auto px-4 py-10"> <h1 className="text-4xl font-bold mb-6">Discord Bots</h1> <p className="text-gray-200 mb-6"> Gradiorum’s Discord integrations bring innovative capabilities right into your community servers. </p> <article className="mb-8"> <h2 className="text-2xl font-semibold mb-2">GradiorumMP3</h2> <p> A music manager bot for Discord, capable of playing MP3 files, handling playlists, queue management, skipping, pausing, and resuming tracks—bringing a social listening experience to your server. </p> </article> <article> <h2 className="text-2xl font-semibold mb-2">Polishadow</h2> <p> Monitors politicians’ stock trades and leverages synthetic data insights to detect potential insider patterns. It can paper-trade strategies, issue alerts, and offer subscription tiers for timely updates on market moves. </p> </article> </section> </Layout> ); }

--------------------
File: pages/humanai.jsx
--------------------
import Layout from "../components/Layout";

export default function HumanAITeaming() { return ( <Layout title="Human-AI Teaming - Gradiorum"> <section className="max-w-3xl mx-auto px-4 py-10"> <h1 className="text-4xl font-bold mb-6">Human-AI Teaming</h1> <p className="text-gray-200 mb-6"> In partnership with Kennesaw State University, we research effective paradigms for collaboration between humans and intelligent agents. Our aim is to foster trust, interpretability, and high performance in complex tasks. </p> <h2 className="text-2xl font-semibold mb-4">Scope & Objectives</h2> <ul className="list-disc ml-5 mb-6 text-gray-300 space-y-2"> <li>Develop interactive interfaces for joint human-AI strategy formation.</li> <li>Ensure explainability in AI-driven recommendations.</li> <li>Explore reinforcement learning & adaptive feedback loops for continuous improvement.</li> </ul> <p className="text-gray-300"> This project is in its early phases. We plan to publish working papers, demos, and frameworks as progress continues. </p> </section> </Layout> ); }

--------------------
File: pages/index.jsx
--------------------
import Layout from "../components/Layout"; import Hero from "../components/Hero";

export default function Home() { return ( <Layout> <Hero /> <section className="max-w-7xl mx-auto px-6 py-12 text-center"> <h2 className="text-3xl font-bold mb-6"> Featured Projects </h2> <div className="grid md:grid-cols-2 gap-8"> {/* Example project cards */} <div className="bg-gray-900 text-white p-6 rounded-lg hover:shadow-neon hover:scale-105 transform transition"> <h3 className="text-2xl font-semibold mb-2">Via</h3> <p className="mb-4">A lightweight modular framework for AI integration.</p> <a href="/projects#via" className="inline-block px-4 py-2 text-black bg-xboxGreen rounded hover:bg-opacity-80 transition" > Learn More </a> </div> <div className="bg-gray-900 text-white p-6 rounded-lg hover:shadow-neon hover:scale-105 transform transition"> <h3 className="text-2xl font-semibold mb-2">Ascendus</h3> <p className="mb-4">An advanced AI toolkit for large-scale automation.</p> <a href="/projects#ascendus" className="inline-block px-4 py-2 text-black bg-xboxGreen rounded hover:bg-opacity-80 transition" > Learn More </a> </div> </div> </section> <section className="max-w-7xl mx-auto px-6 py-12"> <h2 className="text-3xl font-bold mb-6 text-center">Latest News</h2> <p className="text-gray-200 text-center"> Check out the <a href="/blog" className="text-xboxGreen underline">blog</a> for updates! </p> </section> </Layout> ); }

--------------------
File: pages/members.jsx
--------------------
import Layout from "../components/Layout";

export default function Members() { return ( <Layout title="Members - Gradiorum"> <section className="max-w-3xl mx-auto px-4 py-10"> <h1 className="text-4xl font-bold mb-6">Members</h1> <div className="md:flex items-center md:space-x-6 mb-6"> <img src="/images/william-stigall.jpg" alt="William A. Stigall" className="w-32 h-32 rounded-full object-cover border-2 border-xboxGreen mb-4 md:mb-0" /> <div> <h2 className="text-2xl font-semibold mb-2">William A. Stigall</h2> <p className="text-gray-200"> William is a 22-year-old AI enthusiast with a B.S. in CS (AI concentration) and Data Science minor from KSU. He’ll start an M.S. in Machine Learning at Georgia Tech in January. Dedicated to bridging the gap between reinforcement learning, human-AI teaming, and everyday life. </p> </div> </div> </section> </Layout> ); }

--------------------
File: pages/papers.jsx
--------------------
import Layout from "../components/Layout";

export default function Papers() { return ( <Layout title="Our Papers - Gradiorum"> <section className="max-w-5xl mx-auto px-4 py-10"> <h1 className="text-4xl font-bold mb-8">Our Papers</h1> <div className="grid md:grid-cols-2 gap-8"> <article className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition"> <h2 className="text-2xl font-semibold mb-2"> TransformingGameplay: A Transformer-Based Q-Network </h2> <p className="mb-2"><strong>Authors:</strong> William A. Stigall, Jitendra Sai Kota</p> <p className="text-gray-300 mb-4"> Explores a transformer-based Q-Network for gameplay environments without convolutional layers, analyzing performance and limitations in RL tasks. </p> <p className="mb-4"><strong>Keywords:</strong> Transformer, Q-Network, RL</p> <a href="https://arxiv.org/submit/5925810/view" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-xboxGreen text-black rounded hover:bg-opacity-80" > Read Paper </a> </article> <article className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition"> <h2 className="text-2xl font-semibold mb-2"> Scaling Synthetic Data for Behavioral Health Classification </h2> <p className="mb-2"><strong>Authors:</strong> William Stigall, Md Abdullah Al Hafiz Khan</p> <p className="text-gray-300 mb-4"> Investigates synthetic data generation using large language models (LLMs) to enhance behavioral health classification datasets at scale. </p> <p className="mb-4"><strong>Keywords:</strong> Synthetic Data, Behavioral Health, LLMs</p> <span className="inline-block px-3 py-1 bg-gray-400 text-white rounded opacity-50 cursor-not-allowed"> Read Paper (Pending) </span> <p className="mt-2 text-gray-500"> Link will be available once published. </p> </article> </div> </section> </Layout> ); }

--------------------
File: pages/projects.jsx
--------------------
import Layout from "../components/Layout";

export default function Projects() { return ( <Layout title="Projects - Gradiorum"> <section className="max-w-5xl mx-auto px-4 py-10"> <h1 className="text-4xl font-bold mb-8">Projects</h1> <div className="grid md:grid-cols-2 gap-8"> <article id="via" className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition"> <h2 className="text-2xl font-semibold mb-4">Via</h2> <p className="mb-4"> A lightweight, modular framework for AI integration. Simplifies connecting various AI components, enabling rapid prototyping. </p> <a href="https://github.com/Gradiorum/Via" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-xboxGreen text-black rounded hover:bg-opacity-80" > View on GitHub </a> </article> <article id="ascendus" className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition"> <h2 className="text-2xl font-semibold mb-4">Ascendus</h2> <p className="mb-4"> An advanced AI toolkit for scalable automation and efficiency. Ideal for large-scale deployments and complex orchestration tasks. </p> <a href="https://github.com/Gradiorum/Ascendus" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-xboxGreen text-black rounded hover:bg-opacity-80" > View on GitHub </a> </article> <article className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition"> <h2 className="text-2xl font-semibold mb-4">LuminaGuard</h2> <p className="mb-4"> An AI-driven adaptive lighting solution. Adjusts screen brightness, color temperature, and integrates with smart lighting for optimized environments. </p> <a href="https://github.com/Gradiorum/Gradiorum" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-xboxGreen text-black rounded hover:bg-opacity-80" > View on GitHub </a> </article> <article className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition"> <h2 className="text-2xl font-semibold mb-4">Motus</h2> <p className="mb-4"> A reinforcement learning library for dynamic AI solutions. Provides specialized RL modules for advanced problem solving. </p> <a href="https://github.com/Gradiorum/Motus" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-xboxGreen text-black rounded hover:bg-opacity-80" > View on GitHub </a> </article> </div> </section> </Layout> ); }

--------------------
File: pages/videos.jsx
--------------------
import Layout from "../components/Layout";

export default function Videos() { return ( <Layout title="Videos - Gradiorum"> <section className="max-w-3xl mx-auto px-4 py-10 text-center"> <h1 className="text-4xl font-bold mb-6">Visit Our YouTube Channel</h1> <p className="text-gray-200 mb-6">Access tutorials, demos, and talks.</p> <a href="https://www.youtube.com/channel/Gradiorum" target="_blank" rel="noreferrer" className="px-4 py-2 bg-xboxGreen text-black rounded hover:bg-opacity-80" > Go to YouTube Channel </a> </section> </Layout> ); }

--------------------
File: pages/_app.jsx
--------------------
import '../styles/globals.css';

export default function App({ Component, pageProps }) { return ( <Component {...pageProps} /> ); }

--------------------
File: pages/blog/index.jsx
--------------------
import Layout from "../../components/Layout"; import Link from "next/link";

export default function BlogIndex() { // Example placeholder blog listing (replace with real fetch if needed) const mockPosts = [ { slug: "williams-journey-and-our-vision", title: "William’s Journey and Our Vision", excerpt: "Our founder prepares for an MS at Georgia Tech, bridging the gap between AI research and everyday applications...", date: "Dec 07, 2024", }, { slug: "synthetic-data-for-behavioral-health", title: "Scaling Synthetic Data for Behavioral Health", excerpt: "Investigating how LLMs can enrich classification datasets in healthcare with safe synthetic data...", date: "Nov 15, 2024", } ];

return ( <Layout title="Blog - Gradiorum"> <section className="max-w-6xl mx-auto px-4 py-10"> <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1> <div className="grid md:grid-cols-2 gap-8"> {mockPosts.map((post) => ( <article key={post.slug} className="bg-gray-900 text-white p-6 rounded hover:shadow-neon transition" > <h2 className="text-2xl font-semibold mb-2">{post.title}</h2> <p className="text-sm text-gray-400 mb-4">{post.date}</p> <p className="text-gray-200 mb-6">{post.excerpt}</p> <Link href={/blog/${post.slug}} className="inline-block px-4 py-2 rounded bg-xboxGreen text-black font-semibold hover:bg-opacity-80" > Read More </Link> </article> ))} </div> </section> </Layout> ); }

--------------------
File: pages/blog/[slug].jsx
--------------------
import { useRouter } from "next/router"; import Layout from "../../components/Layout";

export default function BlogPost() { const { query } = useRouter(); const { slug } = query;

// Demo placeholder content const mockContent = `

${slug?.replaceAll('-', ' ')}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod nisl a urna pellentesque, at lobortis augue commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. `;

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

/* Custom classes and overrides */

html, body { margin: 0; padding: 0; }

/* Optional neon-glow text utility */ .neon-title { text-shadow: 0 0 8px #00ff7f, 0 0 20px #00ff7f; }

/* For a subtle background starfield or swirl, you can use: body { background: url('/images/starfield.png') repeat; background-size: cover; } */

/* Example animations or transitions could be placed here */ .hover:\shadow-neon:hover { box-shadow: 0 0 8px #00ff7f, 0 0 16px #00ff7f; }

.prose-invert h1, .prose-invert h2, .prose-invert h3 { color: #00ff7f; }
