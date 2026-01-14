
const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        link: "#",
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Task Manager App",
        description: "A web application to manage daily tasks and to-dos.",
        link: "#",
        tags: ["React", "JavaScript", "LocalStorage"]
    },
    {
        title: "Blog Platform",
        description: "A platform for creating and sharing blog posts.",
        link: "#",
        tags: ["React","Node.js", "Express", "MongoDB"]
    },
    {
        title: "Weather Dashboard",
        description:
        "A web app that fetches real-time weather data from a public API and displays current conditions for searched cities.",
        link: "#",
        tags: ["JavaScript", "API", "HTML", "CSS"]
    }
];
const filterButtons = document.getElementById('project-filters');
filterButtons.addEventListener('click', (event) => {
    if (event.target.classList.contains('filter-button')) {
        document.querySelectorAll('.filter-button').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
        const filter = event.target.getAttribute('data-filter');
        filterProjects(filter);
    }
});

function filterProjects(filter) {
    const projectsSection = document.getElementById('projects');
    projectsSection.innerHTML = '';
    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.tags.includes(filter));
    filteredProjects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        
        const title = document.createElement('h3');
        title.textContent = project.title;
        projectDiv.appendChild(title);
        
        const description = document.createElement('p');
        description.textContent = project.description;
        projectDiv.appendChild(description);
        
        const link = document.createElement('a');
        link.href = project.link;
        link.textContent = 'View Project';
        projectDiv.appendChild(link);
        
        projectsSection.appendChild(projectDiv);
    });
}

function displayProjects() {
    const projectsSection = document.getElementById('projects');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        
        const title = document.createElement('h3');
        title.textContent = project.title;
        projectDiv.appendChild(title);
        
        const description = document.createElement('p');
        description.textContent = project.description;
        projectDiv.appendChild(description);
        
        const link = document.createElement('a');
        link.href = project.link;
        link.textContent = 'View Project';
        projectDiv.appendChild(link);
        
        projectsSection.appendChild(projectDiv);
    });
}

document.addEventListener('DOMContentLoaded', displayProjects); 

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    form.reset();
});

const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});