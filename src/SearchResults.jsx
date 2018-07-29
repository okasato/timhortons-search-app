import React, { Component } from 'react';
import Result from './Result';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class SearchResults extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props.shops);
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