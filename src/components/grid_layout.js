import React from "react";
import _ from "lodash";
import StandardCell from './standard'

import RGL, { WidthProvider } from "react-grid-layout";
const ReactGridLayout = WidthProvider(RGL);
const originalLayout = getFromLS("layout") || [];


class GridLayout extends React.Component {
  static defaultProps = {
    className: "layout",
    rowHeight: 30,
    onLayoutChange: function() {}
  };

  constructor(props) {
    super(props);

    this.state = {
      layout: JSON.parse(JSON.stringify(originalLayout)),
      number_of_grid_column: 4,
      width_of_grid_item: 3,
      position:'view',
      resize:'resize'
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  resetLayout = () => {
    this.setState({
      layout: []
    });
  }

  handleDragability = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  handleResize = (e) => {
    this.setState({
      resize: e.target.value
    })
  }

  onLayoutChange = (layout) => {
    saveToLS("layout", layout);
    this.setState({ layout });
    this.props.onLayoutChange(layout); 
  }

  generateDOM() {
    const layout = this.generateLayout();
    return this.props.data.map(function(container, i) {
      return (
        <div key={i} data-grid={layout[i]}>
          <StandardCell container={container} />
        </div>
      );
    });
  }

  generateLayout() {
    var number_of_grid_column = this.state.number_of_grid_column
    var width_of_grid_item = this.state.width_of_grid_item
    return _.map(this.props.data, function(item, i) {
      return {
        x: (i% number_of_grid_column) * width_of_grid_item,
        y: Math.floor((i/number_of_grid_column)) * width_of_grid_item,
        w: width_of_grid_item,
        h: width_of_grid_item,
        i: item.name
      };
    });
  }

  render() {
    return (
      <div>
        <div className='reset--btn'>
          <button onClick={ this.resetLayout }>Reset Layout</button>
          <select onChange={this.handleDragability}>
            <option value="view">View</option>
            <option value="edit">Edit</option>
          </select>
          <select onChange={this.handleResize}>
            <option value="resize">Resizable</option>
            <option value="nonresize">Non Resizable</option>
          </select>
        </div>

        <ReactGridLayout
          {...this.props}
          isDraggable={this.state.position === 'edit' ? true : false}
          isResizable={this.state.resize === 'resize' ? true : false}
          layout={this.state.layout}
          onLayoutChange={this.onLayoutChange}
        >
          {this.generateDOM()}
        </ReactGridLayout>
      </div>
    );
  }
}

export default GridLayout;

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("grid-pos")) || {};
    } catch (e) {
      console.log(e)
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "grid-pos",
      JSON.stringify({
        [key]: value
      })
    );
  }
}
