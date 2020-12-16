import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">
            POKEMON CRUD
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/">
                  <a class="nav-link" href="#">
                    Home
                    <span class="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <Link to="/PokemonTable">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pokemon List
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
