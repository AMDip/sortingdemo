import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";

class App extends Component {
  constructor(props) {
    super(props);
    this.counter=0;
    this.state = {
      chartData: this.GenerateChartData(10)
    }
  }

  GenerateChartData(numberOfBars){
    let chartdata= {
      labels: [],
      datasets: []
    };
    let dataAux=[];
    for (let i = 0; i < numberOfBars; i++) {
      chartdata.labels.push("Bar Label " + (+i + +1));
      dataAux.push(this.randomArray(50,100))
    };
    chartdata.datasets.push({
        label: "Dataset Label",
        backgroundColor: "rgba(120,52,237,0.9)",
        data: dataAux
    });
    console.log(chartdata);
    return chartdata;
  }
  random_rgba(){
    let o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }

  randomArray(min, max){
    let randomNumber = Math.floor(Math.random() * max-min) + min;
    return randomNumber;
  }

  componentDidMount() {
    console.log("Component did mount");
  }

  clickHandle = () => {
    this.setState({chartData:  this.GenerateChartData(10)});;
    this.counter = this.counter + 1
    console.log("Button Clicked")
  }

  render() {
    return (
      <div className="App">
        {console.log("render App component")}
        <div className="chart">
          <Chart chartData={this.state.chartData} />
        </div>
        <button onClick={this.clickHandle}>
          Change Values, clicks: {this.counter}
        </button>
      </div>
    );
  }
}

export default App;
