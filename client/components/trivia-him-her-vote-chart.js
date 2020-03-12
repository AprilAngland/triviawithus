/* eslint-disable no-new */
import React, {Component} from 'react'
import Chart from 'chart.js'
import {withStyles} from '@material-ui/core/styles'

const styles = {
  graphContainer: {
    width: '50vw',
    height: '30vh'
  }
}
class TriviaHimHerVoteChart extends Component {
  chartRef = React.createRef()

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d')
    Chart.defaults.global.defaultFontColor = 'black'
    Chart.defaults.global.defaultFontSize = '18'
    new Chart(myChartRef, {
      type: 'bar',
      data: {
        labels: ['Him', 'Her'],
        datasets: [
          {
            data: [
              this.props.question.ansCntHim,
              this.props.question.ansCntHer
            ],
            borderColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
            backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: `Answer: ${this.props.question.ans}`,
          fontStyle: 'normal',
          fontSize: '20'
          // fontFamily
        },
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                beginAtZero: true,
                display: false
              }
            }
          ]
        },
        animation: {
          duration: 0,
          onComplete: function() {
            // render the value of the chart above the bar
            var ctx = this.chart.ctx
            ctx.font = Chart.helpers.fontString(
              Chart.defaults.global.defaultFontSize,
              'normal',
              Chart.defaults.global.defaultFontFamily
            )
            ctx.fillStyle = this.chart.config.options.defaultFontColor
            ctx.textAlign = 'center'
            ctx.textBaseline = 'bottom'
            this.data.datasets.forEach(function(dataset) {
              for (var i = 0; i < dataset.data.length; i++) {
                var model =
                  dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model
                ctx.fillText(dataset.data[i], model.x, model.y - 5)
              }
            })
          }
        }
      }
    })
  }
  render() {
    const {classes} = this.props
    return (
      <div className={classes.graphContainer}>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    )
  }
}

export default withStyles(styles)(TriviaHimHerVoteChart)
