// Import necessary modules
import { initAnimations } from './animations.js';
import { createCharts } from './charts.js';
import './theme.js';

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();
    
    // Initialize charts with a small delay to ensure DOM is fully loaded
    setTimeout(createCharts, 500);
    
    // Add any other initialization code here
    console.log('Application initialized');
});

// Export any functions or variables that might be needed in other modules
export {};
