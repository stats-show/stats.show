import moment from 'moment';
import React, { Component } from 'react';
import { XYPlot, XAxis, YAxis, HorizontalGridLines, MarkSeries, Hint } from 'react-vis';
import { bindClass } from '../../utils';
import { names, colors, fieldNames, apiUrl } from '../../constants';
import StatsItem from '../StatsItem';
import Loader from '../Loader';


import "react-vis/main.css";
import "./index.css";

class RatioChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      xField: 'stars',
      yField: 'downloads',
      visibleDataTypes: [],
      value: null,
      highlightedType: null
    };
    bindClass(this);
  }
  componentWillMount() {
    const { xField, yField } = this.state;

    fetch(`${apiUrl}/all`).then((response) => {
      return response.json();
    }).then((data) => {
      this.setState({
        data: data,
        visibleDataTypes: Object.keys(this._mapData(data, xField, yField))
      });
    });
  }

  _rememberValue(value) {
    this.setState({
      value
    });
  }

  _forgetValue() {
    this.setState({
      value: null
    });
  }

  _navigateToGithubRepo(value, event) {
    window.open(`https://github.com/${value.user}/${value.repo}`, '_blank');
  }

  _setXField(event) {
    this.setState({
      xField: event.target.value
    });
  }

  _setYField(event) {
    this.setState({
      yField: event.target.value
    });
  }

  _toggleType(event) {
    const value = event.target.value;
    const visibleDataTypes = this.state.visibleDataTypes.slice(0);

    if (event.target.checked) {
      visibleDataTypes.push(value);
    } else {
      visibleDataTypes.splice(visibleDataTypes.indexOf(value), 1);
    }

    this.setState({
      visibleDataTypes
    });
  }

  _highlightType(event) {
    this.setState({
      highlightedType: event.target.dataset['type']
    });
  }
  _unhighlightType(event) {
    this.setState({
      highlightedType: null
    });
  }

  _mapData(data, xField, yField) {
    const mappedData = {};

    data.map((item)=>{
      const dataItem = Object.assign({}, item);
      dataItem.x = item[xField];
      dataItem.y = item[yField];
      
      if (xField === 'issueTtl' || xField === 'pullRequestTtl') {
        dataItem.x = moment.duration(dataItem.x).asDays();
      }

      if (yField === 'issueTtl' || yField === 'pullRequestTtl'){
        dataItem.y = moment.duration(dataItem.y).asDays();
      }
    
      return dataItem;
    }).forEach(dataItem => {
      const key = dataItem.type;
      mappedData[key] = mappedData[key] || [];

      mappedData[key].push(dataItem);
    });

    return mappedData;
  }

  render() {
    const { data, xField, yField, value, visibleDataTypes, highlightedType } = this.state;
    const mappedData = this._mapData(data, xField, yField);
    return (      
      <div className="RatioChart" id="chart">
        <h2 className="RatioChart-title">
          Javascript open-source projects ratio chart
        </h2>
        <div className="RatioChart-container RatioChart-card">
          {data.length === 0 ? (
            <div className="RatioChart-loading">
              <Loader/>
            </div>
          ) : (
            <XYPlot animation={true}
              width={900} height={500} 
              margin={{left: 70, right: 30, top: 30, bottom: 40}}>
              <HorizontalGridLines />
              <XAxis title={fieldNames[xField]} tickTotal={5} />
              <YAxis title={fieldNames[yField]} tickTotal={8} />
              {visibleDataTypes.map(key =>
                <MarkSeries
                  key={key}
                  size={key === highlightedType ? 16 : 6}
                  color={colors[key]}
                  data={mappedData[key]}
                  xType="time"
                  onValueMouseOver={this._rememberValue}
                  onValueMouseOut={this._forgetValue}
                  onValueClick={this._navigateToGithubRepo}
                />
              )}
              { value ?
                <Hint value={value}>
                  <StatsItem data={value}/>
                </Hint> : null
              }
            </XYPlot>
          )}
        </div>
        <div className="RatioChart-settings RatioChart-card">
          <div>
            <h4>Chart axis:</h4>
            <div>
              <span>X: </span>
              <select value={xField} onChange={this._setXField}>
                { Object.keys(fieldNames).map((fieldKey) => 
                  (fieldKey !== yField ?
                    <option
                      key={fieldKey}
                      value={fieldKey}>
                      {fieldNames[fieldKey]}
                    </option> : null)
                )}
              </select>
            </div>
            <div>
              <span>Y: </span>
              <select value={yField} onChange={this._setYField}>
               { Object.keys(fieldNames).map((fieldKey) => 
                   (fieldKey !== xField ?
                    <option
                      key={fieldKey}
                      value={fieldKey}>
                      {fieldNames[fieldKey]}
                    </option> : null)
                )}
              </select>
            </div>
          </div>
          <h4>Categories:</h4>
          <div className="RatioChart-settings__items">
            {Object.keys(mappedData).map(key =>
              <div key={'checkbox-' + key}>
                <input type="checkbox"
                  checked={visibleDataTypes.indexOf(key)!==-1}
                  value={key}
                  id={'type-checkbox-' + key}
                  onChange={this._toggleType}
                  onMouseEnter={this._highlightType}
                  onMouseLeave={this._unhighlightType}
                  data-type={key}
                />
                <label htmlFor={'type-checkbox-' + key}
                  onMouseEnter={this._highlightType}
                  onMouseLeave={this._unhighlightType}
                  data-type={key}
                  style={{color:colors[key]}}
                >{names[key]} ({mappedData[key].length})</label>
              </div>
            )}
          </div>
        </div>
        <div className="RatioChart-add">
          Want to add the project to chart? <a target="_blank" href="https://github.com/StarRatio/star-ratio/edit/master/docs/data.json">Create a Pull Request</a>!
        </div>
      </div>
    );
  }
}

export default RatioChart;
