(async function() {
    const code = new URLSearchParams(window.location.search).get('code');
    const clientId = 'YOUR_GITHUB_APP_CLIENT_ID';
    const clientSecret = 'YOUR_GITHUB_APP_CLIENT_SECRET';

    // Exchange code for access token via a proxy server or serverless function
    const response = await fetch('https://your-proxy-server.com/get-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clientId, clientSecret, code }),
    });

    const data = await response.json();
    if (data.access_token) {
        sessionStorage.setItem('githubToken', data.access_token);
        window.location.href = 'blog.html';
    } else {
        alert('Authentication failed.');
        window.location.href = 'login.html';
    }
})();
