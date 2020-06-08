import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import _ from 'lodash';

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [{}],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update");
    if(this.props.chartData.labels.length !== this.state.chartData.labels.length ||
      !_.isEqual(this.props.chartData.datasets, this.state.chartData.datasets)) {
      this.setState( (state, props) => ({chartData: this.props.chartData }));
    }
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

export default Chart;
