import React, { Component } from 'react';
import TimhortonsRow from './TimhortonsRow';

export default class TimhortonsTable extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <table>
        <tbody>
          <tr>
            <th>Store Name</th>
            <th>Telephone</th>
            <th>Wifi</th>
          </tr>
          {this.props.cafes.map(cafe => (
            <TimhortonsRow key={cafe.id} cafe={cafe}/>
          ))}
        </tbody>
      </table>
    )
  }
}