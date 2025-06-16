function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}

function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      if (category === 'all' || project.classList.contains(category)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  }
  