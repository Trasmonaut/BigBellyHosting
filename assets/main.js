 document.addEventListener('DOMContentLoaded', function() {
      // Mobile menu toggle
      const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
      const navLinks = document.querySelector('.nav-links');
      
      mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = this.querySelectorAll('span');
        if (this.classList.contains('active')) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans[0].style.transform = 'rotate(0) translate(0)';
          spans[1].style.opacity = '1';
          spans[2].style.transform = 'rotate(0) translate(0)';
        }
      });
      
      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Close mobile menu if open
          if (navLinks.classList.contains('active')) {
            mobileMenuToggle.click();
          }
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        });
      });
      
      // Add shadow to navbar on scroll
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.querySelector('.navbar').style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15); padding:20px';
        } else {
          document.querySelector('.navbar').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1) ;padding:20px';
        }
      });
    });

     document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.carousel-img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let current = 0;

    function showSlide(idx) {
      images.forEach((img, i) => img.classList.toggle('active', i === idx));
    }

    prevBtn.addEventListener('click', function() {
      current = (current - 1 + images.length) % images.length;
      showSlide(current);
    });

    nextBtn.addEventListener('click', function() {
      current = (current + 1) % images.length;
      showSlide(current);
    });

    // Optional: Auto-play
    setInterval(() => { nextBtn.click(); }, 4000);
  });


AOS.init();
  

