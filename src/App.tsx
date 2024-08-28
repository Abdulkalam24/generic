import React from 'react';
import Autocomplete from './components/Autocomplete/Autocomplete';
import './App.css';

function App() {
  const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry','Fig','Guava','Hazelnuts','Imbu','Jackfruit','Kiwi','Lemon','Mango','Neem','Olive'];

  return (
    <div className="App">
      <h1>Autocomplete Component</h1>
      <Autocomplete suggestions={suggestions} />
    </div>
  );
}

export default App;
