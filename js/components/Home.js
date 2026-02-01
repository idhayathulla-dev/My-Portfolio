export default {
    async render() {
        return `
            <section class="hero">
                <div class="hero-bg-glow"></div>
                <div class="hero-container">
                    <div class="hero-text-content">
                        <h1 class="hero-title">I am <span class="highlight-text">Idhayathulla</span></h1>
                        <p class="hero-role">Computer Science Student & Software Developer</p>
                        <div class="hero-description">
                            <p>Committed to the craft of clean code. I turn ambitious ideas into functional systems, ensuring every line of logic serves a thoughtful, user-centric purpose.</p>
                        </div>
                        <div class="hero-cta">
                            <a href="#projects" data-link class="btn">View Work</a>
                            <a href="#contact" data-link class="btn btn-outline">Contact Me</a>
                        </div>
                    </div>
                    <div class="hero-visual">
                        <spline-viewer url="https://prod.spline.design/vCw8Lg-M5sXZOXTy/scene.splinecode"></spline-viewer>
                    </div>
                </div>
            </section>
        `;
    },
    afterRender() {
        // Animation Entry
        const elements = document.querySelectorAll('.hero-title, .hero-role, .hero-description, .hero-cta');
        elements.forEach((el, index) => {
            el.style.transition = `opacity 0.8s var(--ease-out-quad) ${index * 0.1}s, transform 0.8s var(--ease-out-quad) ${index * 0.1}s`;
            // Trigger reflow/paint
            requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        });

        // Spline viewer loading state handling (optional enhancement)
        const viewer = document.querySelector('spline-viewer');
        if (viewer) {
            viewer.style.opacity = '0';
            viewer.style.transition = 'opacity 1.5s ease 0.5s';
            viewer.addEventListener('load', () => {
                viewer.style.opacity = '1';
            });
            // Fallback if load event doesn't fire or already loaded
            setTimeout(() => {
                viewer.style.opacity = '1';
            }, 2000);
        }

        // Remove Spline Logo
        // Spline viewer logo removal logic uses the same viewer instance

        const removeLogo = () => {
            if (viewer && viewer.shadowRoot) {
                const logo = viewer.shadowRoot.querySelector('#logo');
                if (logo) {
                    logo.remove();
                }
            }
        };

        // Try immediately
        removeLogo();

        // Watch for changes in the shadow DOM if supported, or retry
        if (viewer) {
            // Since shadowRoot might not be open or accessible immediately/reactively via standard MutationObserver on the host:
            const interval = setInterval(() => {
                removeLogo();
                // If we successfully removed it or verified it's gone, we could clear, 
                // but the viewer might re-inject it on re-renders. 
                // Keeping a low-frequency check is safer for this specific 3rd party component 
                // unless we want to hook into internal events.
                // However, let's optimize the check.
                if (viewer.shadowRoot && !viewer.shadowRoot.querySelector('#logo')) {
                    // Logo is gone
                    clearInterval(interval);
                }
            }, 100);

            // Backup timeout to stop checking eventually
            setTimeout(() => clearInterval(interval), 10000);
        }
    },
    beforeUnmount() {
        // Cleanup if necessary (e.g. if we add scroll listeners later)
    }
};
