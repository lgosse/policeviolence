import React from 'react';
import './App.scss';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>BLACK LIVES MATTER</h1>
      </header>
      <section>
        <List />
      </section>
      <Footer />
    </div>
  );
}

export default App;
