import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import { geocode } from '../utils/index';
import Map from './Map';
import TimhortonsTable from './TimhortonsTable';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      location: {
        lat: 49.2331455,
        lng: -123.1188404
      },
      place: 'Oakridge 41st',
      shops: []
    };
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0
      }
    })
  }

  handlePlaceSubmit(place) {
    geocode(place)
      .then(({ status, address, location }) => {
        if (status === 'OK') {
          this.setState({ address, location });
          return getCafeInfo(place);
        } else if (status === 'ZERO_RESULTS') {
          this.setErrorMessage('No result.');
        } else {
          this.setErrorMessage('An error happens.');
        }
      })
      .then(shops => {
        this.setState({ shops });
      })
      .catch(err => {
        this.setErrorMessage('Communication error.');
      })
  }

  render() {
    return (
      <div className='app'>
        <AppBar position='static' color='secondary'>
          <Typography align='center' variant='display1' color='inherit' className='title'>
            Tim Hortons Search App
          </Typography>
        </AppBar>
        <div className='header'>
          <Typography align='center' variant='display1' color='default'>
            Where is the nearest Tim Hortons?
          </Typography>
          <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
          <div className='result-area' style={{ display: 'flex', justifyContent: 'center' }}>
            <Map location={this.state.location} />
            <div style={{ marginTop: 10, padding: 10 }}>
              <AppBar position='static' color='default'>
                <Typography align='center' variant='title' color='inherit'>
                  Search Results
                </Typography>
              </AppBar>
              <TimhortonsTable cafes={this.state.shops} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}