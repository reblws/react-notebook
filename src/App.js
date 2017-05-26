import React, { Component } from 'react';
import './styles/App.css';
import Notes from './components/Notes/';
import Tags from './components/Tags';

const exampleNotes = [
  {
    id: 123192,
    title: 'Test note',
    text: 'The quick brown fox jumps over the lazy dog, The quick brown fox jumps over the lazy dog, The quick brown fox jumps over the lazy dog, The quick brown fox jumps over the lazy dog',
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
    text: 'Like tears in rain',
    tags: ['dumk', 'deep'],
    dateCreated: Date.now(),
  },
];

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Tags notes={exampleNotes} />
        <Notes
          notes={exampleNotes}
          currentTag={'All'}
        />
      </div>
    );
  }
}

export default App;
