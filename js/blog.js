document.addEventListener('DOMContentLoaded', () => {
    const newPostBtn = document.getElementById('new-post-btn');

    // Check if the user is authenticated
    if (sessionStorage.getItem('githubToken')) {
        newPostBtn.style.display = 'block';
        newPostBtn.addEventListener('click', () => {
            window.location.href = 'new-post.html';
        });
    } else {
        // Show login button for creators
        const loginBtn = document.createElement('button');
        loginBtn.textContent = 'Creator Login';
        loginBtn.addEventListener('click', () => {
            authenticateWithGitHub();
        });
        document.body.insertBefore(loginBtn, document.body.firstChild);
    }

    fetchPosts();
});

async function fetchPosts() {
    const response = await fetch('https://api.github.com/repos/YourUsername/Gradiorum/contents/posts');
    const posts = await response.json();

    const postsContainer = document.getElementById('blog-posts');
    postsContainer.classList.add('post-grid');
    posts.forEach(async (post) => {
        if (post.name.endsWith('.md')) {
            const postContent = await fetch(post.download_url).then(res => res.text());
            const postElement = document.createElement('div');
            postElement.classList.add('post-card');
            postElement.innerHTML = marked.parse(postContent);
            postsContainer.appendChild(postElement);
        }
    });
}

function authenticateWithGitHub() {
    const clientId = 'YOUR_GITHUB_APP_CLIENT_ID';
    const redirectUri = 'https://yourdomain.com/callback.html';
    const scope = 'repo';

    const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${scope}`;

    window.location.href = authUrl;
}
