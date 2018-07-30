import React, { Component } from 'react';
import Result from './Result';

export default class SearchResults extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.shops.map((shop, id) => (
          <Result 
            key={id} 
            shop={shop}
          />
        ))}
      </div>
    )
  }
}