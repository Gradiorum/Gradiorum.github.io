async function submitPost() {
    const title = document.getElementById('post-title').value.trim();
    const content = document.getElementById('post-content').value.trim();
    const user = sessionStorage.getItem('googleUser');

    if (!title || !content) {
        alert('Please fill out all fields.');
        return;
    }

    if (!user) {
        alert('You must be signed in to publish a post.');
        return;
    }

    // For simplicity, assume user also has a GitHub token in sessionStorage (not implemented).
    // In a real scenario, you'd have a server exchange Google token -> GitHub token or store a personal token.
    const token = sessionStorage.getItem('githubToken');
    if (!token) {
        alert('No GitHub token available. Configure token retrieval.');
        return;
    }

    const fileName = `${title.replace(/\s+/g, '-').toLowerCase()}.md`;
    const filePath = `posts/${fileName}`;
    const message = `Add new post: ${title}`;
    const sha = await getFileSha(filePath, token);

    const data = {
        message: message,
        content: btoa(unescape(encodeURIComponent(content))),
        sha: sha || undefined,
        branch: 'main',
    };

    fetch(`https://api.github.com/repos/YourUsername/Gradiorum/contents/${filePath}`, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            alert('Post published successfully!');
            window.location.href = 'blog.html';
        } else {
            response.json().then(err => {
                alert('Error publishing post: ' + err.message);
            });
        }
    });
}

async function getFileSha(path, token) {
    const response = await fetch(`https://api.github.com/repos/YourUsername/Gradiorum/contents/${path}`, {
        headers: { 'Authorization': `token ${token}` },
    });

    if (response.ok) {
        const data = await response.json();
        return data.sha;
    }

    return null;
}
