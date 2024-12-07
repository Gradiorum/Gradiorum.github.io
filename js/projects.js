document.addEventListener('DOMContentLoaded', () => {
    fetchProjects();
});

async function fetchProjects() {
    const orgName = 'Gradiorum'; // Replace with actual org name if exists
    const userName = 'YourUsername'; // Replace with your GitHub username
    const projectsContainer = document.getElementById('projects-container');

    const orgRepos = await fetchRepos(`https://api.github.com/orgs/${orgName}/repos`);
    const userRepos = await fetchRepos(`https://api.github.com/users/${userName}/repos`);

    const soloProjects = userRepos.filter(repo => repo.owner.login === userName && !repo.organization);
    const orgProjects = orgRepos;

    const orgSection = document.createElement('section');
    orgSection.innerHTML = '<h2 class="text-2xl font-bold mb-4">Organization Projects</h2>';
    await displayRepos(orgProjects, orgSection);
    projectsContainer.appendChild(orgSection);

    const soloSection = document.createElement('section');
    soloSection.innerHTML = '<h2 class="text-2xl font-bold mb-4 mt-8">Solo Projects</h2>';
    await displayRepos(soloProjects, soloSection);
    projectsContainer.appendChild(soloSection);
}

async function fetchRepos(url) {
    let repos = [];
    try {
        const response = await fetch(url);
        if (response.ok) {
            repos = await response.json();
        } else {
            console.error('Failed to fetch repositories:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
    return repos;
}

async function displayRepos(repos, container) {
    const grid = document.createElement('div');
    grid.className = 'grid md:grid-cols-2 gap-6';

    for (const repo of repos) {
        const repoDiv = document.createElement('div');
        repoDiv.className = 'bg-white dark:bg-gray-800 p-4 rounded shadow hover:shadow-lg transition';

        const repoName = document.createElement('h3');
        repoName.className = 'text-xl font-semibold mb-2';
        repoName.textContent = repo.name;
        repoDiv.appendChild(repoName);

        const readmeContent = await fetchReadme(repo);

        const readmeDiv = document.createElement('div');
        if (readmeContent) {
            readmeDiv.innerHTML = marked.parse(readmeContent);
        } else {
            readmeDiv.textContent = 'No README available.';
        }
        repoDiv.appendChild(readmeDiv);

        grid.appendChild(repoDiv);
    }
    container.appendChild(grid);
}

async function fetchReadme(repo) {
    let readmeContent = null;
    try {
        const response = await fetch(`https://api.github.com/repos/${repo.full_name}/readme`, {
            headers: { 'Accept': 'application/vnd.github.v3.raw' }
        });
        if (response.ok) {
            readmeContent = await response.text();
        } else {
            console.warn(`No README found for ${repo.full_name}`);
        }
    } catch (error) {
        console.error(`Error fetching README for ${repo.full_name}:`, error);
    }
    return readmeContent;
}
