export default {
    async render() {
        return `
            <section class="container" style="padding-top: 120px; padding-bottom: 80px;">
                <h1 class="section-title reveal-on-scroll">Technical Arsenal</h1>
                
                <div class="skills-grid">
                    ${renderSkillCategory('Core', ['HTML5 / Semantics', 'CSS3 / Animations', 'Vanilla JavaScript (ES6+)'])}
                    ${renderSkillCategory('Frontend', ['React / Next.js', 'Vue.js', 'WebGL / Three.js'])}
                    ${renderSkillCategory('Backend & Tools', ['Node.js', 'PostgreSQL', 'Git / CI/CD'])}
                </div>
            </section>
        `;
    },
    afterRender() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Animate bars
                    const bars = entry.target.querySelectorAll('.skill-progress-fill');
                    bars.forEach(bar => {
                        bar.style.width = bar.dataset.width;
                    });
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.skill-category').forEach(el => observer.observe(el));
        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    },
    beforeUnmount() { }
};

function renderSkillCategory(title, skills) {
    return `
        <div class="skill-category reveal-on-scroll">
            <h3 class="skill-cat-title">${title}</h3>
            <ul class="skill-list">
                ${skills.map(skill => `
                    <li class="skill-item">
                        <span class="skill-name">${skill}</span>
                        <div class="skill-progress">
                            <div class="skill-progress-fill" data-width="${Math.floor(Math.random() * 30 + 70)}%"></div>
                        </div>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}
