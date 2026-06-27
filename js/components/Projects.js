export default {
    async render() {
        return `
            <section class="container" style="padding-top: 120px; padding-bottom: 80px;">
                <h1 class="section-title reveal-on-scroll">Selected Projects</h1>
                <div class="projects-list">
                    
                    <!-- Project: CrySense -->
                    <article class="project-block reveal-on-scroll">
                        <div class="project-content">
                            <h3>CrySense</h3>
                            <p class="project-description">An AI-powered web application that analyzes a baby's cry to identify possible reasons such as hunger, discomfort, or tiredness. It provides real-time insights through a simple, user-friendly interface, helping caregivers respond more quickly and confidently.</p>
                            <a href="https://idhayathulla-dev.github.io/Cry_Sense/" target="_blank" class="text-link">View Live Project →</a>
                            <div class="tags">
                                <span>AI-Powered</span><span>Web Application</span><span>Audio Analysis</span>
                            </div>
                        </div>
                        <div class="project-visual">
                            <div class="carousel-container" id="crysense-carousel">
                                <button class="carousel-btn prev" aria-label="Previous Slide">❮</button>
                                <div class="carousel-track">
                                    <div class="carousel-slide"><img src="./assets/images/crysense/screenshot1.jpg" alt="CrySense Screenshot 1"></div>
                                    <div class="carousel-slide"><img src="./assets/images/crysense/screenshot2.jpg" alt="CrySense Screenshot 2"></div>
                                    <div class="carousel-slide"><img src="./assets/images/crysense/screenshot3.jpg" alt="CrySense Screenshot 3"></div>
                                    <div class="carousel-slide"><img src="./assets/images/crysense/screenshot4.jpg" alt="CrySense Screenshot 4"></div>
                                    <div class="carousel-slide"><img src="./assets/images/crysense/screenshot5.jpg" alt="CrySense Screenshot 5"></div>
                                </div>
                                <button class="carousel-btn next" aria-label="Next Slide">❯</button>
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        `;
    },
    afterRender() {
        // Scroll Reveal
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stop observing once visible if we want one-time reveal, 
                    // but for large blocks it's fine.
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // Carousel Logic
        initCarousel('crysense-carousel');
    },
    beforeUnmount() {
        // Cleanup if necessary
    }
};

function initCarousel(id) {
    const container = document.getElementById(id);
    if (!container) return;

    const track = container.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextBtn = container.querySelector('.next');
    const prevBtn = container.querySelector('.prev');
    let currentIndex = 0;

    const updateSlide = () => {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlide();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlide();
    });
}

