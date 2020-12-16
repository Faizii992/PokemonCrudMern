import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
function PokemonTable() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:5000/show').then((res) => {
      setList(res.data);
    });
  }, [list]);

  function deletePokemon(id) {
    alert(id);
    Axios.delete(`http://localhost:5000/delete/${id}`);
  }
  return (
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {list.map((x) => (
            <tr class="table-active">
              <th scope="row">Active</th>
              <td>{x.Name}</td>
              <td>{x.Type}</td>
              <td>
                <Link to={`/EditPokemon/${x._id}/${x.Name}/${x.Type}`}>
                  <button class="btn btn-warning">EDIT</button>{' '}
                </Link>
              </td>
              <td>
                <button
                  onClick={() => {
                    deletePokemon(x._id);
                  }}
                  class="btn btn-danger"
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PokemonTable;
