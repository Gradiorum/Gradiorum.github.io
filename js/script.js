// Toggle light/dark mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    localStorage.setItem('theme', body.classList.contains("dark-mode") ? "dark" : "light");
}

// Load theme from localStorage
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadTheme(); // Load the theme when the document is ready
});

// Example of fetching and displaying blog posts
async function fetchBlogPosts() {
    try {
        const response = await fetch('/path-to-blog-posts/posts.json'); // Path to your posts JSON
        const posts = await response.json();
        const postsContainer = document.getElementById('blog-posts');
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p>`;
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchBlogPosts);

