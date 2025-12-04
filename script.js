document.addEventListener("DOMContentLoaded", function() {

    
    const typewriterElement = document.getElementById('typewriter');
    if (typewriterElement) {
        const phrases = ["Desenvolvedor Web", "Estudante de Análise de Sistemas", "Entusiasta de Tecnologia", "Futuro Dev Full-Stack"];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                
                typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
               
                typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typingSpeed = isDeleting ? 100 : 150;

            if (!isDeleting && charIndex === currentPhrase.length) {
              
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }

            setTimeout(type, typingSpeed);
        }
        
        type(); 
    }


    
    const sectionsToFade = document.querySelectorAll('.fade-in-section');

    if (sectionsToFade.length) {
        const observerOptions = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.15 
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); 
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        sectionsToFade.forEach(section => {
            observer.observe(section);
        });
    }

});