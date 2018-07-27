import React, {Component} from 'react';

export default class TimhortonsRow extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <tr>
        <td style={{padding: 4}}><a href={this.props.cafe.url} target='_blank'>{this.props.cafe.storename}</a></td>
        <td style={{padding: 4}}>{this.props.cafe.telephone}</td>
        <td style={{padding: 4}}>{this.props.cafe.wifi}</td>
      </tr>
    )
  }
}