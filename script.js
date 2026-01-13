
const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website to showcase my projects and skills.",
        link: "#"
    },
    {
        title: "Task Manager App",
        description: "A web application to manage daily tasks and to-dos.",
        link: "#"
    },
    {
        title: "Blog Platform",
        description: "A platform for creating and sharing blog posts.",
        link: "#"
    }
];

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

