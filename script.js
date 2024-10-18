const tombol = document.querySelector(".tombol");
      const menu = document.querySelector(".menu");
      tombol.addEventListener("click", () => {
        menu.classList.toggle("aktif");
      });

      document.addEventListener('DOMContentLoaded', function() {
        const navbar1 = document.querySelector('.navbar1');
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar1.classList.add('scrolled');
            } else {
                navbar1.classList.remove('scrolled');
            }
        });
    });