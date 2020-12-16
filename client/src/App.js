import AddPokemon from './components/AddPokemon';
import EditPokemon from './components/EditPokemon';
import PokemonTable from './components/PokemonTable';
import Navbar from './layouts/Navbar';
import Axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
function App() {
  function addNewPokemon(Name, Type) {
    Axios.post('http://localhost:5000/insert', {
      Name: Name,
      Type: Type,
    });
    alert('New Pokemon Added!');
  }
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Route
          exact
          path="/"
          component={() => (
            <AddPokemon addNewPokemon={addNewPokemon}></AddPokemon>
          )}
        ></Route>
        <Route exact path="/PokemonTable" component={PokemonTable}></Route>
        <Route
          path="/EditPokemon/:id/:name/:type"
          component={EditPokemon}
        ></Route>
      </div>
    </Router>
  );
}

export default App;
