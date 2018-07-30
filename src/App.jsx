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
        { position: { lat: 49.2331455, lng: -123.1188404 } }
      ],
      place: 'Oakridge 41st',
      shops: [],
      // address: '',
    };
  }

  // setErrorMessage(message) {
  //   this.setState({
  //     address: message,
  //     location: [{ position: {
  //       lat: 0, lng: 0
  //     }}]
  //   })
  // }

  getShopsInfo() {
    return fetch(`/api/shops`)
      .then(res => {
        return res.json();
      })
  }

  // setSelectedLocations(locations) {
  //   this.setState({ locations });
  // }
  handlePlaceSubmit(place) {
    this.getShopsInfo()
      .then(shopsInfo => {
        return shopsInfo.filter(shopInfo => {
          return shopInfo.street === place;
        })
      })
      .then(shops => {
        const locations = shops.map(shop => {
          return { position: JSON.parse(shop.geocode) };
        });
        this.setState({ locations, shops });
      })
      .catch(err => {
        this.setErrorMessage('Communication error.');
      })
  }

  // handlePlaceSubmit(place) {
  //   geocode(place)
  //     .then(({ status, address, location }) => {
  //       if (status === 'OK') {
  //         return this.getShopsInfo();
  //       } else if (status === 'ZERO_RESULTS') {
  //         this.setErrorMessage('No result.');
  //       } else {
  //         this.setErrorMessage('An error happens.');
  //       }
  //     })
  //     .then(shopsInfo => {
  //       return shopsInfo.filter(shopInfo => {
  //         const splitInfo = shopInfo.street.split(' ');
  //         let streetName = splitInfo[1];
  //         splitInfo.forEach((element, id) => {
  //           if (id > 1) {
  //             streetName = streetName + ' ' + element;
  //           }
  //         });

  //         return streetName === place;
  //       })
  //     })
  //     .then(shops => {
  //       const selectedLocations = [];
  //       shops.forEach(shop => {
  //         const address = `${shop.street} ${shop.postalCode}`;
  //         geocode(address)
  //           .then(address => selectedLocations.push({ position: address.location }));
  //       });
  //       return { shops, selectedLocations };
  //     })
  //     .then(({ shops, selectedLocations }) => {
  //       this.setState({ shops, locations: selectedLocations });
  //     })
  //     .catch(err => {
  //       this.setErrorMessage('Communication error.');
  //     })
  // }

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
              // setSelectedLocations={locations => this.setSelectedLocations(locations)} 
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