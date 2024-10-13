document.addEventListener('DOMContentLoaded', () => {
    fetchProjects();
});

async function fetchProjects() {
    const orgName = 'FallingPlanet'; // Replace with your organization name
    const userName = 'WilliamStigall'; // Replace with your GitHub username
    const projectsContainer = document.getElementById('projects-container');

    // Fetch organization repositories
    const orgRepos = await fetchRepos(`https://api.github.com/orgs/${orgName}/repos`);
    // Fetch user repositories
    const userRepos = await fetchRepos(`https://api.github.com/users/${userName}/repos`);

    // Separate solo and organization projects
    const soloProjects = userRepos.filter(repo => repo.owner.login === userName && !repo.organization);
    const orgProjects = orgRepos;

    // Display organization projects
    const orgSection = document.createElement('section');
    orgSection.innerHTML = '<h2>Organization Projects</h2>';
    await displayRepos(orgProjects, orgSection);
    projectsContainer.appendChild(orgSection);

    // Display solo projects
    const soloSection = document.createElement('section');
    soloSection.innerHTML = '<h2>Solo Projects</h2>';
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
    for (const repo of repos) {
        const repoDiv = document.createElement('div');
        repoDiv.className = 'repo';

        // Repository name
        const repoName = document.createElement('h3');
        repoName.textContent = repo.name;
        repoDiv.appendChild(repoName);

        // Fetch README.md content
        const readmeContent = await fetchReadme(repo);

        if (readmeContent) {
            const readmeDiv = document.createElement('div');
            readmeDiv.innerHTML = marked.parse(readmeContent);
            repoDiv.appendChild(readmeDiv);
        } else {
            const noReadme = document.createElement('p');
            noReadme.textContent = 'No README available.';
            repoDiv.appendChild(noReadme);
        }

        container.appendChild(repoDiv);
    }
}

async function fetchReadme(repo) {
    let readmeContent = null;
    try {
        const response = await fetch(`https://api.github.com/repos/${repo.full_name}/readme`, {
            headers: {
                'Accept': 'application/vnd.github.v3.raw' // Fetch raw content
            }
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
