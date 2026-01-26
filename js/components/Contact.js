export default {
    async render() {
        return `
            <section class="container" style="padding-top: 120px; height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div class="contact-content reveal-on-scroll">
                    <p class="section-label">What's Next?</p>
                    <h1 class="contact-heading">Let's Work<br>Together</h1>
                    <a href="mailto:idhayathulla.official@gmail.com" class="email-link">idhayathulla.official@gmail.com</a>
                    
                    <div class="social-links">
                        <a href="https://github.com/idhayathulla-dev" target="_blank" rel="noopener noreferrer" class="social-item">GitHub</a>
                        <a href="https://www.linkedin.com/in/idhayathulla-a-9791b9370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" class="social-item">LinkedIn</a>
                        <a href="https://x.com/Idhayathulla_" target="_blank" rel="noopener noreferrer" class="social-item">Twitter</a>
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
