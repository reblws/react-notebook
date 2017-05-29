import React from 'react';
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
      <button onClick={props.createNewNote}>Add Note</button>
      <SearchBar updateSearchQuery={props.updateSearchQuery} />
      <div className="separator" />
      <div className="note-list-previews">
        {previewList}
      </div>
    </div>
  );
};

export default NoteList;
