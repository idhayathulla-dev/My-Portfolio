import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';

document.addEventListener('DOMContentLoaded', async () => {
    const app = document.getElementById('app');

    // Clear any existing content
    app.innerHTML = '';

    // Render all components sequentially wrapped in sections with IDs
    // The IDs match the hrefs in index.html (e.g. href="#about" -> id="about")
    app.innerHTML = `
        <div id="home">${await Home.render()}</div>
        <div id="projects">${await Projects.render()}</div>
        <div id="about">${await About.render()}</div>
        <div id="skills">${await Skills.render()}</div>
        <div id="contact">${await Contact.render()}</div>
    `;

    // Execute lifecycle methods (Event listeners, observers, etc.)
    // We wrap in requestAnimationFrame to ensure DOM is ready and reflows/paints have happened if needed
    requestAnimationFrame(() => {
        if (Home.afterRender) Home.afterRender();
        if (About.afterRender) About.afterRender();
        if (Projects.afterRender) Projects.afterRender();
        if (Skills.afterRender) Skills.afterRender();
        if (Contact.afterRender) Contact.afterRender();
    });
});
