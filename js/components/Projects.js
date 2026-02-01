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

                    <!-- Project: EV Vehicle Demand Prediction -->
                    <article class="project-block reveal-on-scroll">
                        <div class="project-content">
                            <h3>EV Vehicle Demand Prediction</h3>
                            <p class="project-description">Designed and built an end-to-end data science solution to analyze and forecast electric vehicle adoption at the U.S. county level. The project transforms raw public datasets into actionable insights through data cleaning, exploratory analysis, visualization, and baseline forecasting models. Engineered to demonstrate real-world ML workflows, model evaluation, and data-driven decision-making, the solution highlights strong proficiency in Python, statistical modeling, and practical AI applications, developed as part of an AICTE learning internship.</p>
                            <a href="https://github.com/idhayathulla-dev/EV_Vehicle_Demand_Prediction" target="_blank" class="text-link">View Project on GitHub →</a>
                            <div class="tags">
                                <span>Python</span><span>Data Science</span><span>Forecasting</span><span>ML</span>
                            </div>
                        </div>
                        <div class="project-visual">
                            <div class="carousel-container" id="ev-demand-carousel">
                                <button class="carousel-btn prev" aria-label="Previous Slide">❮</button>
                                <div class="carousel-track">
                                    <div class="carousel-slide"><img src="./assets/images/EV_Demand_Prediction/Screenshot6.png" alt="EV Demand Prediction Screenshot 1"></div>
                                    <div class="carousel-slide"><img src="./assets/images/EV_Demand_Prediction/Screenshot7.png" alt="EV Demand Prediction Screenshot 2"></div>
                                    <div class="carousel-slide"><img src="./assets/images/EV_Demand_Prediction/Screenshot8.png" alt="EV Demand Prediction Screenshot 3"></div>
                                    <div class="carousel-slide"><img src="./assets/images/EV_Demand_Prediction/Screenshot9.png" alt="EV Demand Prediction Screenshot 4"></div>
                                    <div class="carousel-slide"><img src="./assets/images/EV_Demand_Prediction/Screenshot10.png" alt="EV Demand Prediction Screenshot 5"></div>
                                </div>
                                <button class="carousel-btn next" aria-label="Next Slide">❯</button>
                            </div>
                        </div>
                    </article>

                    <!-- Project: Wind Energy Feasibility Dashboard -->
                    <article class="project-block reveal-on-scroll">
                        <div class="project-content">
                            <h3>Wind Energy Feasibility Dashboard</h3>
                            <p class="project-description">Developed a data-driven dashboard to assess the suitability of locations for wind energy generation using historical wind speed data. The project applies Python-based data processing, visualization, and time-series analysis to uncover trends, seasonal patterns, and variability in wind behavior. Implemented ARIMA forecasting to predict wind speeds over the next 30 days, enabling informed feasibility assessment for renewable energy planning. This work demonstrates practical skills in data cleaning, exploratory analysis, statistical modeling, and translating raw environmental data into actionable insights.</p>
                            <!-- Note: No link provided in prompt, assuming placeholder or omitted if not available. User asked to "add this project", assuming standard format. If no link exists, I will omit the anchor tag or use # -->
                            <!-- Checking prompt again: no link provided. I will omit the link for now or just put a placeholder if consistent. The prompt for EV had a link. This one doesn't. I'll omit the link. -->
                            <div class="tags">
                                <span>Python</span><span>Data Analysis</span><span>ARIMA</span><span>Visualization</span>
                            </div>
                        </div>
                        <div class="project-visual">
                            <div class="carousel-container" id="wind-energy-carousel">
                                <button class="carousel-btn prev" aria-label="Previous Slide">❮</button>
                                <div class="carousel-track">
                                    <div class="carousel-slide"><img src="./assets/images/Wind_Energy_Feasibility_Dashboard/Screenshot11.png" alt="Wind Energy Dashboard Screenshot 1"></div>
                                    <div class="carousel-slide"><img src="./assets/images/Wind_Energy_Feasibility_Dashboard/Screenshot12.png" alt="Wind Energy Dashboard Screenshot 2"></div>
                                    <div class="carousel-slide"><img src="./assets/images/Wind_Energy_Feasibility_Dashboard/Screenshot13.png" alt="Wind Energy Dashboard Screenshot 3"></div>
                                    <div class="carousel-slide"><img src="./assets/images/Wind_Energy_Feasibility_Dashboard/screenshot14.png" alt="Wind Energy Dashboard Screenshot 4"></div>
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
        initCarousel('ev-demand-carousel');
        initCarousel('wind-energy-carousel');
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
