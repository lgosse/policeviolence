import React from 'react';
import './App.scss';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>BLACK LIVES MATTER</h1>
        <h2>
          This is a list of incidents where black people were killed by US police since the beginning of 2020 (last updated 2020/06/01).<br />
          The data used comes from the <a href="https://fatalencounters.org/" target="_blank" rel="noopener noreferrer">fatalencounters</a> website.<br />
          Incidents where responsibility can not be attributed to the US police have been filtered out.<br />
          No assumptions are made on wether or not the incident was to be avoided.
        </h2>
      </header>
      <section>
        <List />
      </section>
      <Footer />
    </div>
  );
}

export default App;
