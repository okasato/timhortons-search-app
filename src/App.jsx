import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import SearchForm from './SearchForm';
import GeocodeResult from './GeocodeResult';
import { geocode } from '../utils/index';
import Map from './Map';
import SearchResults from './SearchResults';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [
        {
          lat: 49.2331455,
          lng: -123.1188404
        }
      ],
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

  getShopsInfo(place) {
    return fetch(`/api/shops`)
      .then(res => res.json());
  }

  handlePlaceSubmit(place) {
    geocode(place)
      .then(({ status, address, location }) => {
        console.log({ status, address, location });
        if (status === 'OK') {
          return this.getShopsInfo(place);
        } else if (status === 'ZERO_RESULTS') {
          this.setErrorMessage('No result.');
        } else {
          this.setErrorMessage('An error happens.');
        }
      })
      .then(shopsInfo => {
        return shopsInfo.filter(shopInfo => {
          const splitInfo = shopInfo.street.split(' ');
          let streetName = splitInfo[1];
          splitInfo.forEach((element, id) => {
            if (id > 1) {
              streetName = streetName + ' ' + element;
            }
          });

          return streetName === place;
        })
      })
      .then(shops => {
        console.log(shops);
        const chosenLocations = [];
        shops.forEach(shop => {
          const address = `${shop.street} ${shop.postalCode}`;
          geocode(address)
          .then( address => chosenLocations.push(address.location));
        });
        this.setState({ shops, locations: chosenLocations });
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
          <SearchForm
            onSubmit={place => this.handlePlaceSubmit(place)}
          />
          <div className='result-area' style={{ display: 'flex', justifyContent: 'center' }}>
            <Map locations={this.state.locations} />
            <div style={{ marginTop: 10, padding: 10 }}>
              <AppBar position='static' color='default'>
                <Typography align='center' variant='title' color='inherit'>
                  Search Results
                </Typography>
              </AppBar>
              <SearchResults shops={this.state.shops} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}