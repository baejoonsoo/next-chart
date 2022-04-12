import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function App() {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  let myLineChart: Chart<"bar", number[], string>;
  const canvasEl2 = useRef<HTMLCanvasElement>(null);
  let myLineChart2: Chart<"bar", number[], string>;
  const canvasEl3 = useRef<HTMLCanvasElement>(null);
  let myLineChart3: Chart<"bar", number[], string>;

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
                backgroundColor: "red", //단색일 경우에는 배열에 넣지 않아도 된다 // 여러색일 경우 배열 요소를 번갈아가며 입힘
                borderWidth: 5,
                borderColor: "#000", // ["#000", "aqua"] 배열로 할 시 번갈아가며 색을 입힘
                hoverBorderWidth: 8,
                hoverBackgroundColor: "blue",
                hoverBorderColor: "aqua",
              },
            ],
          },
        });
      }
    }
  };
  const createBarChart3 = () => {
    if (canvasEl3 && canvasEl3.current) {
      const ctx = canvasEl3.current.getContext("2d");

      if (ctx) {
        myLineChart3 = new Chart(ctx, {
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

  useEffect(() => {
    createBarChart();
    createBarChart2();
    createBarChart3();

    return () => {
      myLineChart.destroy();
      myLineChart2.destroy();
      myLineChart3.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span>Chart.js Demo</span>
      <canvas id="myChart" ref={canvasEl} height="100" />
      <canvas id="myChart" ref={canvasEl2} height="100" />
      <canvas id="myChart" ref={canvasEl3} height="100" />
    </div>
  );
}
