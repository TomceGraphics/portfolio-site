// Import data
import { appData } from './data.js';

export let successChart, timeChart, satisfactionChart;

export function createCharts() {
  const isDark = document.documentElement.classList.contains('dark');
  const textColor = isDark ? '#e5e7eb' : '#374151';
  const gridColor = isDark ? '#374151' : '#e5e7eb';

  // Success Rate Chart
  const successCtx = document.getElementById('successChart')?.getContext('2d');
  if (successCtx) {
    successChart = new Chart(successCtx, {
      type: 'doughnut',
      data: {
        labels: appData.charts.successRate.labels,
        datasets: [{
          data: appData.charts.successRate.data,
          backgroundColor: appData.charts.successRate.backgroundColor,
          borderColor: appData.charts.successRate.borderColor,
          borderWidth: 2,
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: textColor,
              padding: 20,
              font: {
                size: 12,
                weight: '500'
              }
            }
          }
        },
        animation: {
          animateRotate: true,
          duration: 2000
        }
      }
    });
  }
}

// Update charts when theme changes
export function updateCharts() {
  if (successChart) {
    successChart.destroy();
  }
  createCharts();
}
