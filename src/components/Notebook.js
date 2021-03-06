import React, { Component } from 'react';
import Notes from './Notes';
import Tags from './Tags';
import testNotes from '../helpers/noterecords'; // load our test notes
import '../styles/App.css';

class Notebook extends Component {

  // Rename prevTag as nextTag in tagList
  static replaceTags(prevTag, nextTag, tagList) {
    const filteredTagList = tagList
      .filter(tag => tag !== prevTag);
    // Delete the tag if empty
    return nextTag
      ? filteredTagList.push(nextTag)
      : filteredTagList;
  }

  static findNoteById(id, notesList) {
    const noteIndex = notesList.findIndex(note => note.id === id);
    return notesList.get(noteIndex);
  }

  constructor(props) {
    super(props);
    this.state = {
      currentTag: 'All',
      notes: testNotes, // **TODO** change this**
    };
    this.updateCurrentTag = this.updateCurrentTag.bind(this);
    this.updateAllTags = this.updateAllTags.bind(this);
    this.updateNoteStore = this.updateNoteStore.bind(this);
    this.createNewNote = this.createNewNote.bind(this);
  }

  // Take in a newTag as string and update the current Notebook state
  // with the new tag.
  updateCurrentTag(newTag) {
    this.setState({ currentTag: newTag });
  }

  updateAllTags(oldTag, newTag) {
    const newNoteState = this.state.notes.map((note) => {
      if (!note.tags.includes(oldTag)) return note;
      const newTagsArray = Notebook.replaceTags(oldTag, newTag, note.tags);
      return note.set('tags', newTagsArray);
    });
    this.setState({ notes: newNoteState });
    this.updateCurrentTag(newTag);
  }

  createNewNote(newNote) {
    const newNoteStore = this.state.notes.unshift(newNote);
    this.setState({ notes: newNoteStore });
  }

  // Update a note in the current Notebook store
  updateNoteStore(noteToChangeId, noteKeyToChange, valueToChangeTo) {
    // Grab and set new values on the note we want to change
    const noteToChange = Notebook.findNoteById(noteToChangeId, this.state.notes)
      .set(noteKeyToChange, valueToChangeTo)
      .set('dateModified', Date.now());

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
