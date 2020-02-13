import React, { Component } from 'react';
import NoteListContext from '../utils/NoteListContext';
import Header from '../components/Header/Header';
import './App.css';

class App extends Component {
  static contextType = NoteListContext;

  render() {
    return (
      <div className='app'>
          <Header />
      </div>
    )
  }
}

export default App;
