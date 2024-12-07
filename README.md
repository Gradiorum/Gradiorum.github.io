# Gradiorum

Gradiorum is a cutting-edge platform dedicated to showcasing technological innovation, AI-driven solutions, and creative works. It serves as both a portfolio of achievements and an open environment for knowledge sharing and collaboration.

## Key Features

- **Projects & Research**: Explore advanced toolkits like Via and Ascendus, delve into LuminaGuard’s adaptive lighting, and learn about ongoing human-AI teaming research.
- **Blog**: Stay updated with the latest articles. Users can sign in via Google and contribute their own blog posts if granted the appropriate permissions.
- **Papers & Publications**: Access our published papers and ongoing research efforts.

## Architecture

- **Frontend**: HTML, Tailwind CSS for styling, and vanilla JavaScript for interactivity.
- **Auth**: Google Sign-In for user authentication. The site avoids direct user data storage.
- **Backend**: GitHub as a backend for content storage. Blog posts are pulled from GitHub and can be pushed back using a GitHub personal access token.
- **Deployment**: Hosted via Cloudflare.

## Contribution

We welcome contributions:
- **Blog Posts**: Submit Markdown files to the `posts` directory via pull requests.
- **Code Enhancements**: Fork the repository, create a branch, commit changes, and submit a pull request.

## Google Sign-In and GitHub Integration

- Obtain a Google OAuth Client ID and configure it in `header.html`.
- For blog publishing, set up a serverless function or a secure method to exchange OAuth tokens for GitHub tokens (not fully implemented here).

## License

This project is licensed under the MIT License. See [LICENSE.md](LICENSE.md) for details.
