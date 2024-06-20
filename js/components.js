// Load header and footer across all pages
function loadHeaderFooter() {
    const headerHTML = `
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="videos.html">Videos</a></li>
                    <li><a href="papers.html">Papers</a></li>
                </ul>
            </nav>
        </header>`;

    const footerHTML = `
        <footer>
            <p>&copy; 2024 Your Name. All rights reserved.</p>
            <p>Follow us on [Social Media Links]</p>
        </footer>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

document.addEventListener('DOMContentLoaded', loadHeaderFooter);
