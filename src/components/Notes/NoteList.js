import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import SearchBar from './SearchBar';
import NotePreview from './NotePreview';

// class NoteList = props => (
//   has:
//    this.props.notes [array]
//    this.props.updateSearchQuery [array]
//    this.props.currentTag [string]
const NoteList = (props) => {
  const previewList = props.notes.map((note, noteIndex) => (
    <NotePreview
      key={note.id}
      id={note.id}
      isSelectedNote={note.id === props.selectedNote.id}
      note={note}
      tabIndex={noteIndex}
      updateSelectedNote={props.updateSelectedNote}
    />
  ));

  return (
    <div className="note-list">
      <strong>{props.currentTag} notes</strong>
      <button onClick={props.createAndSwitchToNote}>Add Note</button>
      <SearchBar updateSearchQuery={props.updateSearchQuery} />
      <div className="separator" />
      <div className="note-list-previews" role="listbox">
        {previewList}
      </div>
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.instanceOf(Immutable.List).isRequired,
  updateSelectedNote: PropTypes.func.isRequired,
  currentTag: PropTypes.string.isRequired,
  createAndSwitchToNote: PropTypes.func.isRequired,
  updateSearchQuery: PropTypes.func.isRequired,
};

export default NoteList;
