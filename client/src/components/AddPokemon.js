import React, { Component } from 'react';

export default class AddPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Type: '',
    };
  }
  render() {
    return (
      <div>
        <p>Add New Pokemons!</p>
        <div class="form-group">
          <label>
            {' '}
            Name:
            <input
              onChange={(e) => {
                this.setState({ Name: e.target.value });
              }}
              type="text"
              name="Name"
              placeholder="Enter Pokemon Name"
            ></input>
          </label>
        </div>

        <div class="form-group">
          <label>
            Type:
            <select
              onChange={(e) => {
                this.setState({ Type: e.target.value });
              }}
              name="type"
            >
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="water">Water</option>
              <option value="Fire">Fire</option>
            </select>
          </label>
        </div>
        <button
          class="btn btn-primary"
          onClick={() => {
            this.props.addNewPokemon(this.state.Name, this.state.Type);
          }}
        >
          SUBMIT
        </button>
      </div>
    );
  }
}
