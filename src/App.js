import React, { Component } from "react";
import "./App.css";
import Chart from "./components/Chart";

class App extends Component {
  constructor(props) {
    super(props);
    this.counter= 0;
    this.state = {
      chartData: {
        labels: ["bar1", "bar2", "bar3", "bar4", "bar5"],
        datasets: [
          {
            label: "Dataset Label Text",
            data: [50,300,100,600,555],
            backgroundColor: "rgba(121,7,242,75)"
          }
        ]
      }
    }
  }


  randomArray = (min, max) => {
    let randomNumber = Math.floor(Math.random() * max-min) + min;
    console.log(randomNumber + "min:" + min + "max:" + max)
    return randomNumber;
  }

  componentDidUpdate() {
    console.log("Component did update start");
  }

  clickHandle = () => {
    this.setState({
      chartData: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Dataset Label Text",
            //data: [this.randomArray(),this.randomArray(),this.randomArray(),this.randomArray(),this.randomArray() ],
            data: [this.randomArray(500,1000)],
            backgroundColor: "rgba(121,7,242,75)"
          }
        ]
      },
    });
    this.counter = this.counter + 1
    console.log("Button Clicked + charData: " + this.state.chartData.datasets.data)
  }

  render() {
    console.log("Render")
    return (
      <div className="App">
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
