# Gradiorum

Gradiorum is a platform showcasing technological innovation, AI-driven solutions, and creative works. We merge research, tools, and interactive media to inspire and inform.

## Key Features

- **Projects & Research**: Explore advanced toolkits like Via and Ascendus, LuminaGuard’s adaptive lighting, and our human-AI teaming investigations.
- **Blog**: Stay informed via blog articles. Authenticated users (via Google Sign-In) can contribute posts.
- **Papers & Publications**: Access and review our academic work.
- **Discord Bots**: Integrate GradiorumMP3 for music management, and Polishadow for monitoring political stock trades with subscription-based updates.

## Modernized Design

We've introduced a retro-futuristic / 8-bit inspired aesthetic layered atop Tailwind CSS. This theme draws inspiration from early game consoles and cutting-edge neon cyberpunk visuals.

## Authentication Setup

- **Google Sign-In**: Set your `YOUR_GOOGLE_CLIENT_ID` in `header.html`. Consider using environment variables or CI/CD secrets.
- **GitHub Token**: For blog publishing (editing and pushing markdown files to `posts`), you’ll need a secure GitHub token. Set it in session or via a serverless endpoint that safely exchanges OAuth tokens.

## Environment Variables & Backend

- **Google OAuth Client ID**: Provide in `header.html`.
- **GitHub Token**: Store securely on server side or via a serverless function.
- Consider adding a `.env` file or environment variables for local development.

## Contribution

- **Blog Posts**: Submit Markdown posts via `new-post.html` (if authenticated) or directly in the `posts` directory via PR.
- **Code Enhancements**: Fork, branch, commit, and submit a PR. We welcome front-end refinements, additional frameworks (React, Vue), or improved tooling (Webpack, Vite).

## License

MIT License. See [LICENSE.md](LICENSE.md) for details.
