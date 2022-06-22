const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'JOB GROWTH',
            data: [8, 12, 10, 30, 41, 67],
            backgroundColor: [
                'rgba(0, 0, 100, 1)'
            ],
            borderColor: [
                'rgba(41,155,99)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
         responsive:true
    }
});