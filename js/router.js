/**
 * router.js
 * Handles navigation and component lifecycle.
 */

const routes = {};
let currentComponent = null;

/**
 * Register all application routes
 * @param {Object} routeMap - Dictionary of path: componentModule
 */
export function initRouter(routeMap) {
    Object.assign(routes, routeMap);

    // Initial load
    handleLocation();

    // Browser back/forward
    window.addEventListener('popstate', handleLocation);

    // Intercept links
    document.addEventListener('click', e => {
        const link = e.target.closest('[data-link]');
        if (link) {
            e.preventDefault();
            navigateTo(link.getAttribute('href'));
        }
    });
}

/**
 * Navigate to a specific path
 * @param {string} path 
 */
export function navigateTo(path) {
    window.history.pushState({}, "", path);
    handleLocation();
}

/**
 * Handle route change logic
 */
async function handleLocation() {
    const path = window.location.pathname;
    const route = routes[path] || routes['/404'];

    if (!route) {
        // Fallback if 404 component is missing
        document.getElementById('app').innerHTML = '<h1>404 - Page Not Found</h1>';
        return;
    }

    // LIFECYCLE: BEFOR UNMOUNT
    if (currentComponent && typeof currentComponent.beforeUnmount === 'function') {
        try {
            currentComponent.beforeUnmount();
        } catch (err) {
            console.error("Error in beforeUnmount:", err);
        }
    }

    // RENDER with Transition
    const app = document.getElementById('app');

    // 1. Fade Out
    app.classList.add('page-fade-out');

    // Wait for transition
    await new Promise(resolve => setTimeout(resolve, 300));

    app.innerHTML = await route.render();

    // Reset state for Fade In
    app.classList.remove('page-fade-out');
    app.classList.add('page-fade-in');

    // Force reflow
    void app.offsetWidth;

    app.classList.add('active'); // Triggers fade in

    // Update reference
    currentComponent = route;

    // LIFECYCLE: AFTER RENDER
    if (currentComponent && typeof currentComponent.afterRender === 'function') {
        requestAnimationFrame(() => {
            // ... existing logic ...
            try {
                currentComponent.afterRender();
            } catch (err) {
                console.error("Error in afterRender:", err);
            }
        });
    }
}
