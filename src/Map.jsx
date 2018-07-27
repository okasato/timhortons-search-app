import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const InnerMap = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={14}
    defaultCenter={props.location}
    center={props.location}
  >
    <Marker
      position={props.location}
    />
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
        mapElement={(<div className='map' style={{marginLeft: 50, height: 400, width: 350}}/>)}
        location={this.props.location}
      />
    )
  }
}