import React, { Component } from 'react';
import Notes from './Notes';
import Tags from './Tags';
import '../styles/App.css';

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
    title: 'These moments will be lost in time',
    text: 'Like tears in rain',
    tags: ['dumk', 'deep', 'bladerunner', 'movies'],
    dateCreated: Date.now(),
  },
];

class Notebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTag: 'All',
      notes: exampleNotes, // **TODO** change this**
    };
    this.updateCurrentTag = this.updateCurrentTag.bind(this);
    this.updateNoteStore = this.updateNoteStore.bind(this);
    this.createNewNote = this.createNewNote.bind(this);
  }

  // Take in a newTag as string and update the current Notebook state
  // with the new tag.
  updateCurrentTag(newTag) {
    this.setState({
      currentTag: newTag,
    });
  }

  currentTagNotes() {
    if (this.state.currentTag === 'All') return this.state.notes;
    const notesOfCurrentTag = note => note.tags.includes(this.state.currentTag);
    return this.state.notes.filter(notesOfCurrentTag);
  }

  createNewNote() {
    const newNote = {
      id: Math.random() * 10, // **TODO** change this when we get a better schema for notes
      title: `New Note ${this.state.notes.length + 1}`,
      text: '',
      tags: [],
      dateCreated: Date.now(),
      dateModified: Date.now(),
    };

    const newNoteStore = [newNote, ...this.state.notes];
    this.setState({
      notes: newNoteStore,
    });
  }

  // Update a note in the current Notebook store
  updateNoteStore(noteToChangeId, noteKeyToChange, noteValueToChange) {
    // Grab the note we want to change
    const noteToChange = this.state.notes
      .filter(note => note.id === noteToChangeId)[0];

    // Change its properties
    noteToChange[noteKeyToChange] = noteValueToChange;
    noteToChange.dateModified = Date.now();

    // Redefine our note store and store it
    const newNoteState = this.state.notes.map(note => (
      note.id === noteToChangeId ? noteToChange : note
    ));

    this.setState({
      notes: newNoteState,
    });
  }

  render() {
    return (
      <div className="app-container">
        <Tags
          notes={this.state.notes}
          updateCurrentTag={this.updateCurrentTag}
          currentTag={this.state.currentTag}
        />
        <Notes
          notes={this.currentTagNotes()}
          currentTag={this.state.currentTag}
          updateNoteStore={this.updateNoteStore}
          createNewNote={this.createNewNote}
        />
      </div>
    );
  }
}

export default Notebook;
