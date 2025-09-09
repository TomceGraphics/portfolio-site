let successChart, timeChart, satisfactionChart;

function createCharts() {
  const isDark = document.documentElement.classList.contains('dark');
  const textColor = isDark ? '#e5e7eb' : '#374151';
  const gridColor = isDark ? '#374151' : '#e5e7eb';

  // Success Rate Chart
  const successCtx = document.getElementById('successChart').getContext('2d');
  successChart = new Chart(successCtx, {
    type: 'doughnut',
    data: {
      labels: ['Successful Payments', 'Failed Attempts'],
      datasets: [{
        data: [92, 8],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(239, 68, 68, 0.8)'
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(239, 68, 68, 1)'
        ],
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

  // Time Comparison Chart
  const timeCtx = document.getElementById('timeChart').getContext('2d');
  timeChart = new Chart(timeCtx, {
    type: 'bar',
    data: {
      labels: ['SMS Method', 'App Method'],
      datasets: [{
        label: 'Average Time (seconds)',
        data: [120, 35],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(34, 197, 94, 0.8)'
        ],
        borderColor: [
          'rgba(239, 68, 68, 1)',
          'rgba(34, 197, 94, 1)'
        ],
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: gridColor
          },
          ticks: {
            color: textColor
          }
        },
        x: {
          grid: {
            display: false
          },
          ticks: {
            color: textColor
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  });

  // User Satisfaction Chart
  const satisfactionCtx = document.getElementById('satisfactionChart').getContext('2d');
  satisfactionChart = new Chart(satisfactionCtx, {
    type: 'radar',
    data: {
      labels: ['Ease of Use', 'Speed', 'Reliability', 'Design', 'Overall'],
      datasets: [{
        label: 'User Rating',
        data: [4.5, 4.8, 4.3, 4.6, 4.4],
        fill: true,
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 5,
          grid: {
            color: gridColor
          },
          pointLabels: {
            color: textColor,
            font: {
              size: 11,
              weight: '500'
            }
          },
          ticks: {
            color: textColor,
            stepSize: 1
          }
        }
      },
      animation: {
        duration: 2000,
        easing: 'easeInOutQuart'
      }
    }
  });
}

function updateCharts() {
  if (successChart && timeChart && satisfactionChart) {
    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#e5e7eb' : '#374151';
    const gridColor = isDark ? '#374151' : '#e5e7eb';

    // Update all charts
    [successChart, timeChart, satisfactionChart].forEach(chart => {
      if (chart.options.plugins.legend) {
        chart.options.plugins.legend.labels.color = textColor;
      }
      if (chart.options.scales) {
        Object.values(chart.options.scales).forEach(scale => {
          if (scale.ticks) scale.ticks.color = textColor;
          if (scale.grid) scale.grid.color = gridColor;
          if (scale.pointLabels) scale.pointLabels.color = textColor;
        });
      }
      chart.update();
    });
  }
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(createCharts, 500);
});