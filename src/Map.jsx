import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const InnerMap = withGoogleMap(props => 
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 49.2331455, lng: -123.1188404 }}
    center={{ lat: 49.2331455, lng: -123.1188404 }}
  >
    {props.locations.map((location, id) => {
      console.log(location, id);
      return <Marker
        key={id}
        position={location}
      />
    })}
  </GoogleMap>
);

export default class Map extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <InnerMap
        containerElement={(<div />)}
        mapElement={(<div className='map' style={{ marginTop: 10, height: 400, width: 350}}/>)}
        locations={this.props.locations}
      />
    )
  }
}