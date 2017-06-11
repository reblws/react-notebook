import React from 'react';
import PropTypes from 'prop-types';
import NoteEntry from './NoteEntry';
import NoteList from './NoteList';
import NoteRecord from '../../constants/NoteRecord';

import '../../styles/Notes.css';

class Notes extends React.Component {

  static findNoteById(targetId, notesArray) {
    return notesArray.filter(note => note.id === targetId)[0];
  }

  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      selectedNote: this.props.notes.get(0),
    };
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
    this.updateSelectedNote = this.updateSelectedNote.bind(this);
    this.notesFound = this.notesFound.bind(this);
    this.createAndSwitchToNote = this.createAndSwitchToNote.bind(this);
  }

  createAndSwitchToNote() {
    const newNoteTags = (this.props.currentTag !== 'All')
      ? [this.props.currentTag]
      : [];
    const newNote = {
      id: Math.random() * 10, // **TODO** change this when we get a better schema for notes
      title: `New Note ${this.props.notes.length + 1}`,
      text: '',
      tags: newNoteTags,
      dateCreated: Date.now(),
      dateModified: Date.now(),
    };

    this.props.createNewNote(newNote);

    this.updateSelectedNote(newNote.id);
  }

  currentTagNotes() {
    if (this.props.currentTag === 'All') return this.props.notes;
    const notesOfCurrentTag = note => note.tags.includes(this.props.currentTag);
    return this.props.notes.filter(notesOfCurrentTag);
  }

  updateSearchQuery(event) {
    const query = event.target.value;
    this.setState({
      searchQuery: query,
    });
  }

  updateSelectedNote(newNoteId) {
    this.setState((prevState, props) => (
      { selectedNote: Notes.findNoteById(newNoteId, props.notes) }
    ));
  }

  selectedNote() {
    return this.state.selectedNote;
  }

  notesFound() {
    if (!this.state.searchQuery) return this.currentTagNotes();

    const searchResults = this.currentTagNotes().filter((note) => {
      // Gotta lowercase the results to get matches
      const searchQuery = this.state.searchQuery.toLowerCase();
      const noteTitle = note.title.toLowerCase();
      const noteText = note.text.toLowerCase();

      return (noteTitle.includes(searchQuery)
        || noteText.includes(searchQuery));
    });

    return searchResults;
  }

  render() {
    return (
      <div className="notes-container">
        <NoteList
          notes={this.notesFound()}
          updateSearchQuery={this.updateSearchQuery}
          updateSelectedNote={this.updateSelectedNote}
          createAndSwitchToNote={this.createAndSwitchToNote}
          selectedNote={this.selectedNote()}
          currentTag={this.props.currentTag}
        />
        <NoteEntry
          note={this.selectedNote()}
          updateNoteStore={this.props.updateNoteStore}
        />
      </div>
    );
  }
}

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentTag: PropTypes.string.isRequired,
  updateNoteStore: PropTypes.func.isRequired,
  createNewNote: PropTypes.func.isRequired,
};

export default Notes;
