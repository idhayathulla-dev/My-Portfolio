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
                            <p class="project-description">Conceptualized and developed CrySense, a smart web-based platform that leverages AI-driven analysis to predict why a baby is crying, enabling faster and more informed caregiver responses. The solution processes audio input to classify cry patterns into actionable insights such as hunger, discomfort, or fatigue, delivering real-time recommendations through an intuitive interface. Architected for accuracy, scalability, and privacy, CrySense showcases strong capabilities in AI integration, data-driven decision systems, and end-to-end web development, translating advanced technology into a high-impact, user-focused product.</p>
                            <a href="https://idhayathulla-dev.github.io/Cry_Sensor/" target="_blank" class="text-link">View Live Project →</a>
                            <div class="tags">
                                <span>AI Integration</span><span>Web Development</span><span>Audio Analysis</span>
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

                    <!-- Project: Neon Dashboard -->
                    <article class="project-block reveal-on-scroll">
                        <div class="project-content">
                            <h3>Neon Dashboard</h3>
                            <p>Real-time analytics platform with WebGL visualization.</p>
                            <div class="tags">
                                <span>WebGL</span><span>Vue 3</span><span>Node.js</span>
                            </div>
                        </div>
                    </article>

                    <!-- Project: Aether Finance -->
                    <article class="project-block reveal-on-scroll">
                        <div class="project-content">
                            <h3>Aether Finance</h3>
                            <p>DeFi aggregator interface with zero-latency updates.</p>
                            <div class="tags">
                                <span>React</span><span>ethers.js</span><span>Tailwind</span>
                            </div>
                        </div>
                    </article>

                    <!-- Project: Zenith AI -->
                    <article class="project-block reveal-on-scroll">
                        <div class="project-content">
                            <h3>Zenith AI</h3>
                            <p>Generative art portfolio for AI-driven artists.</p>
                            <div class="tags">
                                <span>Three.js</span><span>Python</span><span>FastAPI</span>
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
