// Set dark mode by default if no preference is set
if (localStorage.theme === undefined) {
  localStorage.theme = 'dark';
  document.documentElement.classList.add('dark');
} else {
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle('dark');
  localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
  updateCharts();
}