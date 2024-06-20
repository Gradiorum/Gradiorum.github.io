// Toggle dark mode
document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.createElement('button');
    themeSwitch.textContent = 'Toggle Theme';
    document.body.insertBefore(themeSwitch, document.body.firstChild);
    themeSwitch.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});

// Dynamically load Markdown content for docs
function loadMarkdown(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(text => {
            document.getElementById(elementId).innerHTML = marked(text);
        })
        .catch(err => console.error('Failed to load markdown', err));
}

// Example usage for project documentation
loadMarkdown('path_to_markdown_file.md', 'repositories');

// Dynamically embedding YouTube videos
function embedVideo(videoId, containerId) {
    const videoFrame = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    document.getElementById(containerId).innerHTML = videoFrame;
}

// Example usage for embedding a video
embedVideo('video_id_here', 'videos');

// Load papers dynamically (This part will need to be customized based on how you store your paper data)
function loadPapers(containerId) {
    const papers = [
        { title: "Paper 1", link: "https://arxiv.org/abs/1234.5678", abstract: "This is the abstract of paper 1." },
        // Add more papers here
    ];

    const container = document.getElementById(containerId);
    papers.forEach(paper => {
        const paperElement = document.createElement('div');
        paperElement.innerHTML = `<h3>${paper.title}</h3><p>${paper.abstract}</p><a href="${paper.link}" target="_blank">Read more</a>`;
        container.appendChild(paperElement);
    });
}

// Load blog dynamically
function createBlogPost(title, content, containerId) {
    const blogContainer = document.getElementById(containerId);
    const post = document.createElement('div');
    post.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
    blogContainer.appendChild(post);
}

// Add functionality to create a new blog post via a form
document.getElementById('new-blog-post-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = e.target.elements['title'].value;
    const content = e.target.elements['content'].value;
    createBlogPost(title, content, 'blog');
});
