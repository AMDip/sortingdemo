import React, { Component } from 'react';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  randomArray(){
    return  Math.floor(Math.random() * 70) + 30;
  }
  // randomArray(length, max) { [...new Array(length)].map(
  //   ()=>Math.round(Math.random()*max));}

  getChartData() {
    this.setState({
      chartData: {
        labels: ['bar1', 'bar2', 'bar3', 'bar4', 'bar5'],
        datasets: [
          {
            label: 'Dataset Label Text',
            //data: [819, 500, 12345, 4135, 900],
            data: [this.randomArray(),this.randomArray(),this.randomArray(),this.randomArray() ],
            backgroundColor: 'rgba(121,7,242,75)'
          }
        ]
      }
    })
  }

  componentWillMount(){
    this.getChartData();
    console.log("Random Number:" + this.state.chartData.datasets);
  }

  render() {
    return (
      <div className="App">
        <Chart chartData={this.state.chartData}/>
      </div>
    )
  }
}

export default App;
