import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";

class App extends Component {
  constructor(props) {
    super(props);
    this.counter = 0;
    this.state = {
      chartData: {
        labels: [],
        datasets: [
          {
            label: {},
            data: [],
            backgroundColor: {},
          },
        ],
      },
    };
  }

  random_rgba() {
    let o = Math.round,
      r = Math.random,
      s = 255;
    return ("rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + r().toFixed(1) + ")");
  }

  randomArray(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
  }

  componentDidMount() {
    console.log("Component did mount");
    this.setState({
      chartData: this.GenerateChartData(10),
    });
  }

  GenerateChartData = (numberOfBars) => {
    console.log("Generate chartdata");
    let chartdata = {
      labels: [],
      datasets: [],
    };
    let dataAux = [];
    for (let i = 0; i < numberOfBars; i++) {
      chartdata.labels.push("Bar Label " + (+i + +1));
      dataAux.push(this.randomArray(50, 100));
    }
    chartdata.datasets.push({
      label: "Dataset Label",
      backgroundColor: "rgba(120,52,237,0.9)",
      data: dataAux,
    });
    return chartdata;
  }

  clickHandle = (actions) => {
    let _chartData = {};
    switch (actions) {
      case "random":
        _chartData= this.GenerateChartData(this.state.chartData.datasets[0].data.length);
        break;
      case "add":
        _chartData= this.addBartoChart();
        break;
      case "remove":
        _chartData= this.removeBarFromChart();
          break;
    }
    this.setState({
      chartData: _chartData
    });
    this.counter = this.counter + 1;
    console.log(this.state.chartData)
    console.log("Button Clicked");
  }

  addBartoChart = () => {
    console.log("add bar clicked");
    let chartdata = {
      labels: [...this.state.chartData.labels ],
      datasets: [ ...this.state.chartData.datasets ],
    };
    chartdata.labels.push("Bar Label " + (chartdata.labels.length + 1));
    chartdata.datasets[0].data.push(this.randomArray(50, 100));
    return chartdata;
  }

  removeBarFromChart = () => {
    console.log("remove bar clicked");
    let _chartData = {
      labels: [...this.state.chartData.labels ],
      datasets: [ ...this.state.chartData.datasets ],
    };
    _chartData.labels.pop();
    _chartData.datasets[0].data.pop();
    return _chartData;
  }

  render() {
    return (
      <div className="App">
        {console.log("render App component")}
        <div className="chart">
          <Chart chartData={this.state.chartData} />
        </div>
        <button onClick={(e) => this.clickHandle("remove")}>Remove Bar</button>
        <button onClick={(e) => this.clickHandle("random")}>Change Values, clicks: {this.counter}</button>
        <button onClick={(e) => this.clickHandle("add")}>Add Bar</button>
      </div>
    );
  }
}

export default App;
