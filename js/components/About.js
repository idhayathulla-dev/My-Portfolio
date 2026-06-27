export default {
    async render() {
        return `
            <section class="container" style="padding-top: 120px; padding-bottom: 80px;">
                <div class="about-layout">
                    <div class="about-visual reveal-on-scroll" style="transition-delay: 0.2s">
                        <spline-viewer url="https://prod.spline.design/sUPmiRY4AX1r5wgE/scene.splinecode"></spline-viewer>
                    </div>
                    <div class="about-text reveal-on-scroll">
                        <h1 class="section-title" style="text-align: left;">About The Journey</h1>
                        <p class="about-lead">I'm a Computer Science student and Software Developer, passionate about building modern web applications and business software that solve real-world problems.</p>
                        <p>I combine clean code, practical design, and scalable development to create reliable, user-focused digital solutions with lasting value.</p>
                        <p>Beyond development, I continuously explore AI, automation, and emerging technologies while expanding my skills through hands-on projects and continuous learning.</p>
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

        // Logo removal for Spline viewer
        const viewer = document.querySelector('.about-layout spline-viewer');
        if (viewer) {
            const removeLogo = () => {
                if (viewer.shadowRoot) {
                    const logo = viewer.shadowRoot.querySelector('#logo') || viewer.shadowRoot.querySelector('.spline-watermark');
                    if (logo) logo.remove();

                    // Inject style to force hide if it regenerates
                    if (!viewer.shadowRoot.querySelector('#hide-logo-style')) {
                        const style = document.createElement('style');
                        style.id = 'hide-logo-style';
                        // Hide both ID and class potentially used by Spline
                        style.textContent = `
                            #logo, .spline-watermark { 
                                display: none !important; 
                                visibility: hidden !important; 
                                opacity: 0 !important; 
                                pointer-events: none !important;
                            }
                        `;
                        viewer.shadowRoot.appendChild(style);
                    }
                }
            };

            // Initial attempt
            removeLogo();

            // Listen for load event
            viewer.addEventListener('load', removeLogo);

            // Periodic check
            const interval = setInterval(() => {
                if (viewer.shadowRoot) {
                    removeLogo();
                }
            }, 100);

            // Safety timeout - keep checking for longer (20s)
            setTimeout(() => clearInterval(interval), 20000);
        }
    },
    beforeUnmount() { }
};
