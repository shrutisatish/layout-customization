import React from 'react';

import ListLayout from './list_layout'
import GridLayout from './grid_layout'
import dummy_data from './../data/dummy_data'

class CustomizeLayout extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      layout:'grid',
    }
  }

  handleChange = (e) => {
    this.setState({
      layout: e.target.value
    })
  }

  render(){
    return (
      <div>
      <select onChange={this.handleChange} className="browser-default custom-select">
          <option value="grid">Grid</option>
          <option value="list">List</option>
      </select>
      {(this.state.layout === 'list') ? 
          (<ListLayout data={dummy_data.data}/>) 
          : 
          (<GridLayout data={dummy_data.data}/>)}

      </div>
      );
  }
}

export default CustomizeLayout;