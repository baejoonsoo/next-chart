import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function App() {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  let myLineChart: Chart<"bar", number[], string>;

  const createBarChart = () => {
    if (canvasEl && canvasEl.current) {
      const ctx = canvasEl.current.getContext("2d");

      if (ctx) {
        myLineChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["1", "2", "3"],
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
  useEffect(() => {
    createBarChart();

    return () => {
      myLineChart.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span>Chart.js Demo</span>
      <canvas id="myChart" ref={canvasEl} height="100" />
    </div>
  );
}
