import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
 
const InnerMap = withGoogleMap(props => {
  if (props.markers.length > 0) {
    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 49.2331455, lng: -123.1188404 }}
        center={props.markers[0].position}
      >
        {props.markers.map(marker => {
          return <Marker
            {...marker}
          />
        })}
      </GoogleMap>
    )
  } else {
    return (
      <div>Loading markers...</div>
    )
  }
  } 
);

export default class Map extends Component{
  constructor(props){
    super(props);
  }

  render() {
    if (this.props.locations.length <= 0) {
      return (
        <div>Loading locations...</div>
      )
    } else {
      return (
        <InnerMap
          containerElement={(<div />)}
          mapElement={(<div className='map' style={{ marginTop: 10, height: 400, width: 350}}/>)}
          markers={this.props.locations}
        />
      )
    }
  }
}