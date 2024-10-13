document.addEventListener('DOMContentLoaded', () => {
    const newPostBtn = document.getElementById('new-post-btn');

    // Check if the user is authenticated
    if (sessionStorage.getItem('githubToken')) {
        newPostBtn.style.display = 'block';
        newPostBtn.addEventListener('click', () => {
            window.location.href = 'new-post.html';
        });
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
            postElement.innerHTML = marked(postContent); // Use a Markdown parser like Marked.js
            postsContainer.appendChild(postElement);
        }
    });
}
