
const ctx = document.getElementById('activityChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Logins', 'Shop Views', 'Phishing Views'],
    datasets: [{
      label: 'User Interactions (Simulated)',
      data: [12, 19, 3],
      backgroundColor: ['#f00', '#0f0', '#00f']
    }]
  }
});
