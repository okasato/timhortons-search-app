import React, {Component} from 'react';

export default class GeocodeResult extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <ul className='geocode-result' style={{width: 500, textAligh: 'center', color: '#444'}}>
        <li>Address: {this.props.address}</li>
        {/* <li>latitude: {this.props.location.lat}</li>
        <li>longitude: {this.props.location.lng}</li> */}
      </ul>
    )
  }
}