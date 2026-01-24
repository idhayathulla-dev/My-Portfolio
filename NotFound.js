export default {
    async render() {
        return `
            <section style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 80vh;">
                <h1>404</h1>
                <p>Page not found.</p>
                <a href="/" data-link style="color: var(--color-primary); margin-top: 20px;">Return Home</a>
            </section>
        `;
    },
    afterRender() { },
    beforeUnmount() { }
};
