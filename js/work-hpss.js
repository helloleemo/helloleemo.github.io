  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['T1達成率', 'T2達成率', 'T3達成率', 'T4達成率', 'T5達成率'],
      datasets: [{
        label: '不同任務達成率',
        data: [0.45, .55, .27, .18, 0],
        borderWidth: 1,
        backgroundColor: '#ffb184',
        barThickness:"50",
      },
    //   {
    //     type: 'line',
    //     label: '教育程度（年）',
    //     data: [1,0.27, 0.48, 0.14],        
    //   }
    ]

    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['T1 time(s)', 'T2 time(s)', 'T3 time(s)', 'T4 time(s)', 'T5 time(s)'],
      datasets: [{
        label: '任務平均完成時間(sec)',
        data: [54.65, 32.55, 111.26, 119.19, 101.04],
        borderWidth: 1,
        backgroundColor: '#ffbf2b',
        barThickness:"50",
      },
    ]

    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const ctx3 = document.getElementById('myChart3');

  new Chart(ctx3, {
    type: 'bar',
    data: {
        labels:["B11","B08","B04","B18","B02","B01","B23","B07","B13","B09","B03"],
      datasets: [{
        axis: 'y',
        label: '滿意分數',
        data: [87.5, 27.5, 72.5, 65, 70, 62.5, 62.5, 50, 100, 45, 65],
        fill: false,
        backgroundColor:'#97cdff',
        borderWidth: 1,
        barThickness:"50",
      }]

    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });