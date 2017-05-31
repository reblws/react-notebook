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

  static replaceTags(oldTag, newTag, tagsArray) {
    const filteredArray = tagsArray.filter(tag => tag !== oldTag);
    return [
      ...filteredArray,
      newTag,
    ];
  }

  constructor(props) {
    super(props);
    this.state = {
      currentTag: 'All',
      notes: exampleNotes, // **TODO** change this**
    };
    this.updateCurrentTag = this.updateCurrentTag.bind(this);
    this.updateAllTags = this.updateAllTags.bind(this);
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

  updateAllTags(oldTag, newTag) {
    this.state.notes
      .filter(note => note.tags.includes(oldTag))
      .forEach((note) => {
        const newNoteTagsArray = Notebook.replaceTags(oldTag, newTag, note.tags);
        this.updateNoteStore(note.id, 'tags', newNoteTagsArray);
      });
    this.updateCurrentTag(newTag);
  }

  createNewNote(newNote) {
    const newNoteStore = [newNote, ...this.state.notes];
    this.setState({
      notes: newNoteStore,
    });
  }


  // Update a note in the current Notebook store
  updateNoteStore(noteToChangeId, noteKeyToChange, valueToChangeTo) {
    // Grab the note we want to change
    const noteToChange = this.state.notes
      .filter(note => note.id === noteToChangeId)[0];

    // Change its properties
    noteToChange[noteKeyToChange] = valueToChangeTo;
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
          updateAllTags={this.updateAllTags}
        />
        <Notes
          notes={this.state.notes}
          currentTag={this.state.currentTag}
          updateNoteStore={this.updateNoteStore}
          createNewNote={this.createNewNote}
        />
      </div>
    );
  }
}

export default Notebook;
