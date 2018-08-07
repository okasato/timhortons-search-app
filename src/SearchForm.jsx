import React, { Component } from 'react';
import Icon from "@material-ui/core/Icon";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'Oakridge 41st',
    };
  }

  handlePlaceChange(place) {
    this.setState({ place });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.place);
  }

  handlePressEnter(e) {
    e.preventDefault();
    if(e.keyCode === 13) { //13 is the enter keycode
      this.props.onSubmit(this.state.place);
    }
  }

  render() {
    return (
      <form style={{ textAlign: 'center', marginBottom: 7 }}>
        <TextField
          className='search'
          label='Type a street name (e.g. Main St, W 41st Ave etc.) or your current location (i.e. My Location). Word space is necessary.'
          id="margin-normal"
          margin="normal"
          onChange={e => this.handlePlaceChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Icon>place</Icon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <Button 
                  variant='contained' 
                  color='secondary' 
                  size='small'
                  onClick={e => this.handleSubmit(e)}
                  onKeyDown={e => this.handlePressEnter(e)}
                >
                  search
                  <Icon>search</Icon>
                </Button>
              </InputAdornment>
            )
          }}
        />
      </form>
    )
  };
}
