export default {
    async render() {
        return `
            <section class="container" style="padding-top: 120px; padding-bottom: 80px;">
                <div class="about-layout">
                    <div class="about-visual reveal-on-scroll" style="transition-delay: 0.2s">
                        <div class="abstract-shape"></div>
                    </div>
                    <div class="about-text reveal-on-scroll">
                        <h1 class="section-title" style="text-align: left;">About The Journey</h1>
                        <p class="about-lead">I am a computer science student and aspiring web and software developer, focused on building clean and impactful digital experiences.</p>
                        <p>With a growing foundation in frontend development, UI design, and programming fundamentals, I combine logic with creativity to build intuitive solutions.</p>
                        <p>Outside of development, I explore modern web technologies, UI/UX trends, and continuously upskill through projects and learning.</p>
                    </div>
                </div>
            </section>
        `;
    },
    afterRender() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    },
    beforeUnmount() { }
};
