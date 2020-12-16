import Axios from 'axios';
import React, { useState } from 'react';

function EditPokemon(props) {
  const name = props.match.params.name;
  const type = props.match.params.type;

  const [Name, setName] = useState(name);
  const [Type, setType] = useState(type);

  function editPokemon() {
    const id = props.match.params.id;
    alert('Changes updated!');
    Axios.put('http://localhost:5000/edit/', {
      id: id,
      Name: Name,
      Type: Type,
    });
  }

  return (
    <div>
      <div class="form-group my-3">
        <label>
          {' '}
          Name:
          <input
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
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
            value={Type}
            onChange={(e) => {
              setType(e.target.value);
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
        class="btn btn-warning"
        onClick={() => {
          editPokemon(Name, Type);
        }}
      >
        UPDATE
      </button>
    </div>
  );
}

export default EditPokemon;
