import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import SearchForm from './SearchForm';
import { findShopsAroundHere } from '../utils';
import Map from './Map';
import SearchResults from './SearchResults';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [ 
        { position: { lat: 49.2331455, lng: -123.1188404 } }
      ],
      place: 'Oakridge 41st',
      shops: [],
      address: ''
    };
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: [
        { position: {　lat: 0, lng: 0　}　}
      ]
    })
  }

  getShopsInfo() {
    return fetch(`/api/shops`)
      .then(res => {
        return res.json();
      })
  }

  handlePlaceSubmit(place) {
    const formattedPlace = place.toLowerCase().split(' ').map(word => {
      if (word === 'street') {
        word = 'st';
      } else if (word === 'avenue') {
        word = 'ave';
      } else if (word === 'drive') {
        word = 'dr';
      } else if (word === 'road') {
        word = 'rd';
      } else if (word === 'w') {
        word = 'west';
      } else if (word === 'e') {
        word = 'east';
      }
      return word;
    }).join('');

    this.getShopsInfo()
      .then(shopsInfo => {
        if (formattedPlace === 'mylocation') {
          const selectedShopsInfo = [];
          shopsInfo.forEach(shopInfo => {
            findShopsAroundHere(JSON.parse(shopInfo.geocode))
              .then(result => { 
                if (result) {
                  selectedShopsInfo.push(shopInfo);
                }
              });
          });
          return selectedShopsInfo;
        } else if (formattedPlace === 'vancouver') {
          return shopsInfo.filter(shopInfo => {
            return shopInfo.id >= 22;
          });
        } else if (formattedPlace === 'victoria') {
          return shopsInfo.filter(shopInfo => {
            return shopInfo.id <= 21;
          });
        } else {
          return shopsInfo.filter(shopInfo => {
            return shopInfo.street.toLowerCase().split(' ').join('') === formattedPlace;
          });
        }
      })
      .then(shops => {
        setTimeout(() => {
          const locations = shops.map(shop => {
            return { position: JSON.parse(shop.geocode) };
          });
          this.setState({ locations, shops });
        }, 2000);
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
            <Map 
              locations={this.state.locations}
              shops={this.state.shops}
            />
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