// public/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Add active class to current navigation item
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      if (
        (linkPath === '/' && currentPath === '/') ||
        (linkPath !== '/' && currentPath.startsWith(linkPath))
      ) {
        link.classList.add('active');
      }
    });
    
    // Form validation for compose page
    const composeForm = document.querySelector('.compose-form');
    
    if (composeForm) {
      composeForm.addEventListener('submit', function(e) {
        const titleInput = document.getElementById('postTitle');
        const contentInput = document.getElementById('postContent');
        
        if (titleInput.value.trim() === '') {
          e.preventDefault();
          alert('Please enter a title for your post.');
          titleInput.focus();
          return false;
        }
        
        if (contentInput.value.trim() === '') {
          e.preventDefault();
          alert('Please enter content for your post.');
          contentInput.focus();
          return false;
        }
        
        return true;
      });
    }
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });