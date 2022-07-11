import { Component } from '@angular/core';
import { ChartOptions } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  dataSet1 = this.getGeneratedLineData(this.randomArray(30, 1000));
  dataSet2 = this.getGeneratedBarData(this.randomArray(30, 1000));
  dataSet3 = this.getGeneratedLineData(this.randomArray(30, 1000));
  dataSet4 = this.getGeneratedLineData(this.randomArray(30, 1000));
  dataSet5 = this.getGeneratedBarData(this.randomArray(30, 1000));
  dataSet6 = this.getGeneratedLineData(this.randomArray(30, 1000));

  lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0,
      },
    },
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: false,
    maintainAspectRatio: false,
    elements: {
      line: {
        tension: 0,
      },
    },
  };

  constructor() {}

  randomArray(length: number, max: number) {
    return Array.apply(null, Array(length)).map(function () {
      return Math.round(Math.random() * max);
    });
  }

  getWeeksArray() {
    const weekArray = [];
    for (var i = 0; i < 30; i++) {
      weekArray.push('3/' + i);
    }
    return weekArray;
  }

  getGeneratedLineData(numbers: number[]) {
    return {
      labels: this.getWeeksArray(),
      datasets: [
        {
          borderColor: 'rgba(174,155,255,0.67)',
          pointColor: '#AE9BFF',
          data: numbers,
          pointRadius: 4,
          borderWidth: 1,
          pointBackgroundColor: '#C0B2FC',
        },
      ],
    };
  }

  getGeneratedBarData(numbers: number[]) {
    const labels = this.getWeeksArray();
    return {
      labels,
      datasets: [
        {
          labels,
          backgroundColor: 'rgba(174,155,255,0.67)',
          data: numbers,
        },
      ],
    };
  }
}
