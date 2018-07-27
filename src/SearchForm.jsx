import React, { Component } from 'react';
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
// import InputLabel from '@material-ui/core/InputLabel';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'Oakridge',
    };
  }

  handlePlaceChange(place) {
    this.setState({ place });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.place);
  }

  render() {
    return (
      <form style={{ textAlign: 'center', marginBottom: 40 }} onSubmit={e => this.handleSubmit(e)}>
        {/* <input 
          type="text"
          value={this.state.place}
          style={{fontSize: 24, padding: 3}}
          onChange={e => this.handlePlaceChange(e.target.value)}
        /> */}
        {/* <input type="submit" value='Search' style={{WebkitAppearance: 'none', padding: 4, fontSize: 24, borderRadius: 3}}/> */}
        <TextField
          className='search'
          label='Type an address (e.g. Street name etc).'
          id="margin-normal"
          margin="normal"
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Icon>place</Icon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <Button variant='contained' color='secondary' size='small'>
                  search
                  <Icon>search</Icon>
                </Button>
              </InputAdornment>
            )
          }}
        />
        {/* <div className='button'>
          <Button variant='contained' color='primary' size='small'>
            search
            <Icon>search</Icon>
          </Button>
        </div> */}
      </form>
    )
  };
}
