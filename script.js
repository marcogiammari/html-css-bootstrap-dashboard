
const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Never', 'Every few hours', 'Every hour', 'Multiple times per hour', 'Constantly'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      borderWidth: 1
    }]
  }
});


