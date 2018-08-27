import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

import loading from '../buttons/gear.svg'
import './chart.css'

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = { chartData: null , highAvg: null, lowAvg: null};
  }

  componentDidUpdate(prevProps) {
    if (prevProps.make !== this.props.make) {
      let searchQuery = encodeURIComponent(
        this.props.make + " " + this.props.model
      );
      let category = this.props.categoryslug;
      let AuthString = `Bearer ${process.env.REACT_APP_REVERB_ACCESS_TOKEN}`;
      axios
        .get(
          `https://api.reverb.com/api/listings?query=${searchQuery}&conditions=used&category=${category}&page=1&per_page=1`,
          {
            headers: {
              Authorization: AuthString,
              "Content-Type": "application/hal+json",
              "Accept-Version": "3.0"
            }
          }
        )
        .then(results => {
          let priceGuideId = results.data.listings[0].price_guide_id;
          axios
            .get(
              `https://api.reverb.com/api/priceguide/${priceGuideId}/transactions/summary?number_of_months=12&condition=used`,
              {
                headers: {
                  Authorization: AuthString,
                  "Content-Type": "application/hal+json",
                  "Accept-Version": "3.0"
                }
              }
            )
            .then(results => {
              let dates = [];
              let askPrices = [];
              let finalPrices = [];
              results.data.summaries.map(e => {
                dates.push(e.date);
                askPrices.push(e.average_price_ask.amount);
                finalPrices.push(e.average_price_final.amount);
              });
              this.setState({
                chartData: {
                  labels: dates,
                  datasets: [
                    {
                      data: askPrices,
                      label: "Average Ask Price",
                      fill: "#f2f1ef",
                      borderColor: "#f2f1ef"
                    },
                    {
                      data: finalPrices,
                      label: "Average Final Sale Price",
                      fill: "#FE6B38",
                      borderColor: "#FE6B38"
                    }
                  ]
                },
                highAvg: askPrices,
                lowAvg: finalPrices
              });
            });
        });
    }
  }

  render() {
          if(this.state.chartData === null){
              return (
                  <img className="loading-gear" src={loading} alt="loading"/>
              )
          } else {
              let high = Math.floor(this.state.highAvg.reduce((total, num) => +total + +num) / this.state.highAvg.length)
              let low = Math.floor(this.state.lowAvg.reduce((total, num) => +total + +num) / this.state.lowAvg.length)
              return(
                  <div className="chart_div">
                  <div className="chart_title"><span className="gearTitleSpan">Price</span><span className="gearTitleorangeSpan">History</span></div>
              <Line
              data={this.state.chartData}
              />
              <div className="chart_div">
              <p className="gear_p_orange">Estimated Value</p>
              <span className="gearTitleSpan">${low} - ${high}</span>
              </div>
              </div>
          )
        }
  }
}
