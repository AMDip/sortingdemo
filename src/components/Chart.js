import React, { Component } from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: this.props.chartData
    };
  }

  componentWillReceiveProps() {
    console.log("Component will receive props");
    this.setState({
        chartData: this.props.chartData
      });
  }

  render() {
      console.log("Render")
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
              text: "Default Chart Title"
            },
            legend: {
              display: true,
              position: "bottom"
            },
            scales: {
              xAxes: [
                {
                  ticks: { beginAtZero: true },
                  gridLines: {
                    display: false
                  }
                }
              ],
              yAxes: [
                {
                  display: false,
                  ticks: { beginAtZero: true },
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
