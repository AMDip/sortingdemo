import React, { Component } from 'react';
import { Bar, HorizontalBar, Line } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: 'Default Chart Title'
    }

    render() {
        return (
            <div>
                <div className='chart' style={{ height: '500px', width: '500px' }}> Chart Component
                <HorizontalBar
                        data={this.state.chartData}
                        options={{
                            responsive: true,
                            maintainAspectRatio: true,
                            title: {
                                display: true,
                                fontSize: 20,
                                text: this.props.displayTitle
                            },
                            legend: {
                                display: true,
                                position: 'bottom'
                            }
                            , scales: {
                                xAxes: [{
                                    ticks: { beginAtZero: true },
                                    gridLines: {
                                        display: false
                                    }
                                }],
                                yAxes: [{
                                    display: false,
                                    ticks: { beginAtZero: true },
                                    gridLines: {
                                        display: false
                                    }
                                }]
                            }
                        }}
                    />
                    <Bar
                        data={this.state.chartData}
                    />
                    <Line
                        data={this.state.chartData}
                        options={{
                            showLines: true,
                            scales: {
                                xAxes: [{
                                    display: false,
                                    gridLines: {
                                        display: true
                                    }
                                }],
                                yAxes: [{
                                    display: true,
                                    ticks: { beginAtZero: true },
                                    gridLines: {
                                        display: true
                                    }
                                }]
                            }
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Chart;