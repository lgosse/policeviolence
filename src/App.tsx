import React from 'react';
import './App.scss';
import List from './components/List';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>BLACK LIVES MATTER</h1>
      </header>
      <section>
        <List />
      </section>
    </div>
  );
}

export default App;
