import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import _ from 'lodash';

class MyChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
      },
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("**CHART Component did update **");
    console.log("is sorted: "+ this.isSorted(this.props.chartData.datasets[0].data));
    console.log("is equal: ");
    console.log(_.isEqual(this.props.chartData.datasets, prevProps.chartData.datasets))
    console.log("Props chartdata: ");
    console.log(this.props.chartData);
    if(!_.isEqual(this.props.chartData, prevProps.chartData)){
        this.setState({chartData: this.props.chartData });
     }
  }

  isSorted = (array) => {
    let isSorted=true;
    for(let i=0; i<array.length; i++){
      if(array[i] > array[i+1]){
        isSorted=false;
        break;
      }
    }
    return isSorted;
  }

  render() {
    console.log("render Chart component")
    return (
      <div>
        <HorizontalBar
          data={this.state.chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            title: {
              display: true,
              fontSize: 20,
              text: "Default Chart Title",
            },
            legend: {
              display: true,
              position: "bottom",
            },
            scales: {
              xAxes: [
                {
                  ticks: { beginAtZero: true },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  display: true,
                  ticks: { beginAtZero: true },
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}

export default MyChart;
