// Animation configuration
export const animationConfig = {
    threshold: 0.1,
    rootMargin: '0px',
    animationClass: 'animate-slide-up',
    targetClass: 'animate-on-scroll'
};

// Initialize intersection observer for scroll animations
export function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(animationConfig.animationClass);
                // Unobserve after animation is triggered to improve performance
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: animationConfig.threshold,
        rootMargin: animationConfig.rootMargin
    });

    // Observe all elements with the target class
    document.querySelectorAll(`.${animationConfig.targetClass}`).forEach(el => {
        observer.observe(el);
    });

    return observer;
}

// Add animation delay to elements
export function addAnimationDelay(elements, baseDelay = 0, increment = 0.1) {
    elements.forEach((el, index) => {
        const delay = baseDelay + (index * increment);
        el.style.animationDelay = `${delay}s`;
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', initAnimations);
