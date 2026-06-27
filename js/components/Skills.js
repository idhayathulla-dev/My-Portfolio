export default {
    async render() {
        return `
            <section class="container" style="padding-top: 120px; padding-bottom: 80px;">
                <h1 class="section-title reveal-on-scroll">Technical Stack</h1>
                
                <div class="skills-grid">
                    ${renderSkillCategory('Frontend', [
                        'HTML5 • CSS3 • JavaScript (ES6+)',
                        'React • Next.js'
                    ])}
                    ${renderSkillCategory('Backend', [
                        'Node.js • Express.js',
                        'REST APIs'
                    ])}
                    ${renderSkillCategory('Database', [
                        'PostgreSQL • MongoDB'
                    ])}
                    ${renderSkillCategory('Tools & DevOps', [
                        'Git • Docker • CI/CD'
                    ])}
                    ${renderSkillCategory('Cloud & Deployment', [
                        'Vercel • AWS • Firebase'
                    ])}
                    ${renderSkillCategory('AI Integration', [
                        'OpenAI APIs • AI Chatbots • Automation with better UI'
                    ])}
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
                    <li class="skill-item-badge">
                        ${skill}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}
