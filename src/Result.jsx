import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default class Result extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.shop.driveThruCloseTime) {
      return (
        <Card>
          <CardContent>
            <Typography variant='title' color='inherit'>
              {this.props.shop.shopname}
            </Typography>
            <Typography variant='subheading' color='inherit'>
              <div>Address: {this.props.shop.street} {this.props.shop.floor} {this.props.shop.postalCode}</div>
            </Typography>
            <Typography variant='subheading' color='inherit'>
              Phone: {this.props.shop.phone}
            </Typography>
            <Typography variant='subheading' color='inherit'>
              Close Time: {this.props.shop.closeTime}
            </Typography>
            <Typography variant='subheading' color='inherit'>
              Drive-Thru Close Time: {this.props.shop.driveThruCloseTime}
            </Typography>
          </CardContent>
        </Card>
      )
    } else {
      return (
        <Card>
          <CardContent>
            <Typography variant='title' color='inherit'>
              {this.props.shop.shopname}
            </Typography>
            <Typography variant='subheading' color='inherit'>
              <div>Address: {this.props.shop.street} {this.props.shop.floor} {this.props.shop.postalCode}</div>
            </Typography>
            <Typography variant='subheading' color='inherit'>
              Phone: {this.props.shop.phone}
            </Typography>
            <Typography variant='subheading' color='inherit'>
              Close Time: {this.props.shop.closeTime}
            </Typography>
          </CardContent>
        </Card>
      )
    }
  }
}