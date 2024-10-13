function authenticateWithGitHub() {
    const clientId = 'YOUR_GITHUB_APP_CLIENT_ID';
    const redirectUri = 'https://yourdomain.com/callback.html';
    const scope = 'repo';

    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;

    window.location.href = authUrl;
}
