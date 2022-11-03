import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import jsonData from './countries.json';
import { useState, useEffect } from 'react';

//With API
import axios from 'axios';

function App() {
  const [countriesList, setCountriesList] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  //With API

  useEffect(() => {
    setIsFetching(true);
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((response) => {
        //  console.log(response.data);
        setCountriesList(response.data);
        setIsFetching(false);
      })
      .catch((err) => console.log('Some wrong', err));
  }, []);

  // console.log(id)
  if (isFetching === true) {
    return <h3>... buscando</h3>;
  }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="d-flex">
          <CountriesList countriesList={countriesList} />
          <Routes>
            <Route
              path="/:id"
              element={<CountryDetails countriesList={countriesList} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
