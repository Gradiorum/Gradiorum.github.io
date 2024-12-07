document.addEventListener('DOMContentLoaded', () => {
    const newPostBtn = document.getElementById('new-post-btn');
    const user = sessionStorage.getItem('googleUser');

    if (user) {
        newPostBtn.style.display = 'block';
        newPostBtn.addEventListener('click', () => {
            window.location.href = 'new-post.html';
        });
    } else {
        const loginPrompt = document.createElement('div');
        loginPrompt.textContent = 'Sign in to create new posts';
        loginPrompt.className = 'text-center text-sm text-gray-600 mt-4';
        document.querySelector('main').appendChild(loginPrompt);
    }

    fetchPosts();
});

async function fetchPosts() {
    const response = await fetch('https://api.github.com/repos/YourUsername/Gradiorum/contents/posts');
    const posts = await response.json();

    const postsContainer = document.getElementById('blog-posts');
    for (const post of posts) {
        if (post.name.endsWith('.md')) {
            const postContent = await fetch(post.download_url).then(res => res.text());
            const postElement = document.createElement('div');
            postElement.classList.add('bg-white', 'dark:bg-gray-800', 'p-4', 'rounded', 'shadow', 'hover:shadow-lg', 'transition');
            postElement.innerHTML = marked.parse(postContent);
            postsContainer.appendChild(postElement);
        }
    }
}
