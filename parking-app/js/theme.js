// Theme configuration
export const themeConfig = {
    darkModeClass: 'dark',
    localStorageKey: 'theme',
    defaultTheme: 'dark'
};

// Initialize theme based on localStorage or system preference
export function initTheme() {
    // Check for saved theme preference or use default
    if (!localStorage.getItem(themeConfig.localStorageKey)) {
        localStorage.setItem(themeConfig.localStorageKey, themeConfig.defaultTheme);
    }
    
    // Apply the theme
    if (localStorage.getItem(themeConfig.localStorageKey) === 'dark') {
        document.documentElement.classList.add(themeConfig.darkModeClass);
    } else {
        document.documentElement.classList.remove(themeConfig.darkModeClass);
    }
}

// Toggle between light and dark theme
export function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.classList.contains(themeConfig.darkModeClass);
    
    if (isDark) {
        html.classList.remove(themeConfig.darkModeClass);
        localStorage.setItem(themeConfig.localStorageKey, 'light');
    } else {
        html.classList.add(themeConfig.darkModeClass);
        localStorage.setItem(themeConfig.localStorageKey, 'dark');
    }
    
    // Dispatch a custom event that other modules can listen to
    const event = new CustomEvent('themeChanged', { 
        detail: { isDark: !isDark }
    });
    document.dispatchEvent(event);
}

// Initialize theme when the script loads
initTheme();

// Add event listener for theme toggle button
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Export the current theme state
export function isDarkMode() {
    return document.documentElement.classList.contains(themeConfig.darkModeClass);
}
