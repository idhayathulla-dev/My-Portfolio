export default {
    async render() {
        return `
            <section class="container" style="padding-top: 120px; height: 80vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div class="contact-content reveal-on-scroll">
                    <p class="section-label">What's Next?</p>
                    <h1 class="contact-heading">Let's Work<br>Together</h1>
                    <a href="mailto:idhayathulla.official@gmail.com" class="email-link">idhayathulla.official@gmail.com</a>
                    
                    <div class="social-links">
                        <a href="#" class="social-item">GitHub</a>
                        <a href="#" class="social-item">LinkedIn</a>
                        <a href="#" class="social-item">Twitter</a>
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
