async function submitPost() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const token = sessionStorage.getItem('githubToken');

    if (!title || !content) {
        alert('Please fill out all fields.');
        return;
    }

    const filePath = `posts/${title.replace(/\s+/g, '-').toLowerCase()}.md`;
    const message = `Add new post: ${title}`;
    const sha = await getFileSha(filePath, token);

    const data = {
        message: message,
        content: btoa(unescape(encodeURIComponent(content))),
        sha: sha || undefined,
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
            alert('Error publishing post.');
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
