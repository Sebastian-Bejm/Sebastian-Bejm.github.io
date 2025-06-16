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

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');
  
    document.querySelectorAll('.lightbox').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            lightboxImg.src = link.href;
            lightbox.classList.remove('hidden');
        });
    });
  
    closeBtn.addEventListener('click', () => {
        lightbox.classList.add('hidden');
        lightboxImg.src = '';
    });
  
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox) {
            lightbox.classList.add('hidden');
            lightboxImg.src = '';
        }
    });

    document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
      
        if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
          lightbox.classList.add('hidden');
          lightboxImg.src = '';
        }
    });
});
  
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("fullname");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    const errorName = document.getElementById("error-name");
    const errorEmail = document.getElementById("error-email");
    const errorMessage = document.getElementById("error-message");
  
    function validateName() {
        if (!nameInput.value.trim()) {
            errorName.textContent = "Please enter your full name.";
        } else {
            errorName.textContent = "";
        }
    }
  
    function validateEmail() {
        const email = emailInput.value.trim();
        if (!email) {
            errorEmail.textContent = "Please enter your email.";
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            errorEmail.textContent = "Please enter a valid email address.";
        } else {
            errorEmail.textContent = "";
        }
    }
  
    function validateMessage() {
        if (!messageInput.value.trim()) {
            errorMessage.textContent = "Please enter a message.";
        } else {
            errorMessage.textContent = "";
        }
    }
  
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    messageInput.addEventListener("input", validateMessage);
  
    // Keep the submit validation too
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function (e) {
        validateName();
        validateEmail();
        validateMessage();
  
        if (
            errorName.textContent ||
            errorEmail.textContent ||
            errorMessage.textContent
        ) {
            e.preventDefault();
        }
    });
});
  