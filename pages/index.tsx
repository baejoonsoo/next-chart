import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function App() {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  let myLineChart: Chart<"bar", number[], string>;
  const canvasEl2 = useRef<HTMLCanvasElement>(null);
  let myLineChart2: Chart<"bar", number[], string>;

  const createBarChart = () => {
    if (canvasEl && canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");

      if (ctx) {
        myLineChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["A", "B", "C"],
            datasets: [
              {
                label: "as",
                data: [10, 20, 30],
              },
            ],
          },
        });
      }
    }
  };

  const createBarChart2 = () => {
    if (canvasEl2 && canvasEl2.current) {
      const ctx = canvasEl2.current.getContext("2d");

      if (ctx) {
        myLineChart2 = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["D", "E", "F", "G", "H"],
            datasets: [
              {
                label: "as",
                data: [40, 5, 20, 13, 10],
                backgroundColor: ["red", "blue", "green"],
                borderWidth: 5,
              },
            ],
          },
        });
      }
    }
  };

  useEffect(() => {
    createBarChart();
    createBarChart2();

    return () => {
      myLineChart.destroy();
      myLineChart2.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span>Chart.js Demo</span>
      <canvas id="myChart" ref={canvasEl} height="100" />
      <canvas id="myChart" ref={canvasEl2} height="100" />
    </div>
  );
}
