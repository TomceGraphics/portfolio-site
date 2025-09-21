// Application data and configuration
export const appData = {
    // Project information
    project: {
        title: "Digital Parking App for Ohrid",
        description: "A comprehensive case study on designing and developing a digital parking solution to improve user experience and increase city revenue",
        roles: ["UI/UX Designer", "Full-Stack Developer", "Product Owner"],
        timeline: "2 months + iterations"
    },

    // Charts data
    charts: {
        successRate: {
            labels: ['Successful Payments', 'Failed Attempts'],
            data: [92, 8],
            backgroundColor: [
                'rgba(34, 197, 94, 0.8)',
                'rgba(239, 68, 68, 0.8)'
            ],
            borderColor: [
                'rgba(34, 197, 94, 1)',
                'rgba(239, 68, 68, 1)'
            ]
        },
        // Add other chart data here
    },

    // Visuals data
    visuals: [
        {
            id: 'payment-dashboard',
            title: 'Payment Dashboard',
            description: 'Streamlined payment interface showing real-time parking status and payment options.',
            image: 'images/dashboard+pay/showcase-payment.png',
            alt: 'Payment Dashboard Showcase'
        },
        {
            id: 'user-onboarding',
            title: 'User Onboarding',
            description: 'Intuitive onboarding flow that guides new users through the app\'s features and benefits.',
            image: 'images/onboard/showcase-onboard.png',
            alt: 'Onboarding Showcase'
        }
    ],

    // Results data
    results: {
        successRate: 92,
        timeSaved: 65,
        satisfaction: 4.8
    },

    // Contact information
    contact: {
        email: "hello@example.com",
        social: {
            twitter: "#",
            linkedin: "#",
            github: "#"
        }
    }
};

// Export default for easy imports
export default appData;
