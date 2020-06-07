import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: this.props.chartData,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
    if (this.props.chartData !== prevProps.chartData) {
      this.setState({
        chartData: this.props.chartData,
      });
    }
  }

  render() {
    return (
      <div>
        {console.log("render Chart component")}
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
                  display: false,
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

export default Chart;
