import "./style.css";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import zoomPlugin from 'chartjs-plugin-zoom';

class Point {
  constructor(id, x, y) {
    this.id = id;
    this.x = x;
    this.y = y;
  }
}
Chart.register(zoomPlugin);
let ctx = document.getElementById("myChart").getContext("2d");
let close = await (await fetch("/close")).json();
const zoomOptions = {
  pan: {
    enabled: true,
    modifierKey: 'ctrl',
    mode: 'x'
  },
  zoom: {
    wheel: {
      enabled: true,
    },
    drag: {
      enabled: true,
    },
    mode: 'x',
  },
};

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    datasets: [
      {
        label: "close",
        data: close,
        borderColor: "red",
      }
    ],
  },
  options: {
    responsive: false,
    scales: {
      x: {
        type: "timeseries",
        time: {
          unit: "hour",
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      zoom: zoomOptions
    }
  },
});
