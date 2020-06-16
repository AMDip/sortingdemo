import React, { Component } from "react";
import "./App.css";
import MyChart from "./components/MyChart";
import cloneDeep from 'lodash/cloneDeep'

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
    return (
      "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + "," + r().toFixed(1) +")"
    );
  }

  randomArray(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
  }

  componentDidMount() {
    console.log("Component did mount");
    let _chartData={
      labels: [...this.state.chartData.labels],
      datasets: [...this.state.chartData.datasets],
    }
    _chartData=this.GenerateChartData(10);
    this.setState({
      chartData: _chartData
    });
    console.log(_chartData)
    console.log(this.state.chartData)
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
  };

  clickHandle = (actions) => {
    console.log("Button handler")
    let _chartData = cloneDeep(this.state.chartData);
    console.log(_chartData)
    console.log(this.state.chartData)
    switch (actions) {
      case "random":
        _chartData = this.GenerateChartData(
          this.state.chartData.datasets[0].data.length
        );
        break;
      case "add":
        _chartData = this.addBartoChart(_chartData);
        console.log(_chartData);
        break;
      case "remove":
        _chartData = this.removeBarFromChart(_chartData);
        break;
      case "sort":
        _chartData = this.sortBars(_chartData);
        break;
    }
    this.setState({
      chartData: _chartData
    });
    this.counter = this.counter + 1;
    console.log(this.state.chartData);
    console.log("Button Clicked");
  };

  addBartoChart = (_chartData) => {
    console.log("add bar clicked");
    _chartData.labels.push("Bar Label " + (_chartData.labels.length + 1));
    _chartData.datasets[0].data.push(this.randomArray(50, 100));
    return _chartData;
  };

  removeBarFromChart = (_chartData) => {
    console.log("remove bar clicked");
    _chartData.labels.pop();
    _chartData.datasets[0].data.pop();
    return _chartData;
  };

  sortBars = (_chartData) => {
    console.log("sort bars clicked");
    _chartData.datasets[0].data.sort();
    console.log(_chartData);
    return _chartData;
  };

  render() {
    return (
      <div className="App">
        {console.log("render App component")}
        <div className="chart">
          <MyChart chartData={this.state.chartData} />
        </div>
        <div>
          <button onClick={(e) => this.clickHandle("remove")}>Remove Bar</button>
          <button onClick={(e) => this.clickHandle("random")}>Change Values, clicks: {this.counter}</button>
          <button onClick={(e) => this.clickHandle("add")}>Add Bar</button>
        </div>
        <div>
          <button onClick={(e) => this.clickHandle("sort")}>Sort Bars</button>
        </div>
      </div>
    );
  }
}

export default App;
