import { useEffect, useState } from 'react';

import InsertForm from './InsertForm';
import Contacts from './Contacts';
import './App.css';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const savedList = localStorage.getItem('list');
    if (savedList) {
      const parsedSavedList = JSON.parse(savedList);

      setList(parsedSavedList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const addNew = (item) => {
    const newList = list.slice();
    newList.push(item);

    setList(newList);
  };

  const deleteContact = (id) => {
    setList(list.filter((contact) => contact.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">Imenik</header>
      <InsertForm onInsert={addNew} />
      <Contacts list={list} onDelete={deleteContact} />
    </div>
  );
}

export default App;
