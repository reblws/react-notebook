import React, { Component } from 'react';
import './styles/App.css';
import Notes from './components/Notes/';

const exampleNotes = [
  {
    id: 123192,
    title: 'Test note',
    text: 'The quick brown fox jumps over the lazy dog',
    tags: ['test', 'hi', 'dumk'],
    dateCreated: Date.now(),
  },
  {
    id: 123,
    title: 'Fuckk f',
    text: 'The qutest ',
    tags: ['dumk'],
    dateCreated: Date.now(),
  },
  {
    id: 12322,
    title: 'Peach',
    text: 'The princess ',
    tags: ['dumk', 'peach'],
    dateCreated: Date.now(),
  },
  {
    id: 121113,
    title: 'These memories will be lost in time',
    text: 'Like tears in falling rain',
    tags: ['dumk', 'deep'],
    dateCreated: Date.now(),
  },
];

class App extends Component {
  render() {
    return (
      <Notes
        notesArray={exampleNotes}
        currentTag={'All'}
      />
    );
  }
}

export default App;
