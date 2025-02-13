const computerProjects = [];
const mobileProjects = [];

function renderComputerProjects() {
    renderProjects(computerProjects, 'portfolio-container');
}

function renderMobileProjects() {
    renderProjects(mobileProjects, 'portfolio-container');
}

function renderProjects(projects, containerId, isMobile) {
    const portfolioContainer = document.getElementById(containerId);
    portfolioContainer.innerHTML = '';

    projects.forEach(project => {
        const isDevelopment = project.title === 'En desarrollo...';

        const githubIcon = isDevelopment ? '<i class="bx bxs-error bx-lg"></i>' : `<a target="_blank" href="${project.githubLink}"><i class='bx bxl-github bx-lg'></i></a>`;
        const toolsIcons = project.tools.length > 0 && !isDevelopment ? project.tools.map(tool => `<i class="devicon-${tool.toLowerCase()}-plain colored" style="font-size: xx-large;"></i>`).join('') : '';

        const projectCard = `
            <div class="portfolio__img ${isMobile ? 'mobile-project' : ''}">
                <h2>${project.title}</h2>
                <img src="${project.image}" alt="${project.title}" class="${isMobile ? 'mobile-image' : ''}">
                <div class="portfolio__info">
                    <p>${project.description}</p>
                    <div class="portfolio__links">
                        ${project.liveLink ? `<a target="_blank" href="${project.liveLink}"><i class='bx bx-link bx-lg'></i></a>` : ''}
                        ${githubIcon}
                    </div>
                </div>
                <div class="portfolio-tools">
                    ${toolsIcons}
                </div>
            </div>
        `;
        portfolioContainer.innerHTML += projectCard;
    });

    sr.reveal('.portfolio__img', { interval: 100 });
}

// Projects Fetch
function filterProjects(category) {
    if (category === 'computer') {
        renderComputerProjects();
    } else if (category === 'mobile') {
        renderMobileProjects();
    }
}

// Projects Fetch
axios.get('/json/projects.json')
    .then(response => {
        computerProjects.push(...response.data);
        filterProjects('computer');
    })
    .catch(error => console.error('Error fetching computer projects:', error));

axios.get('/json/projectsMobile.json')
    .then(response => {
        mobileProjects.push(...response.data);
        filterProjects('mobile');
    })
    .catch(error => console.error('Error fetching mobile projects:', error))
    .finally(() => {
        renderComputerProjects();
    });

