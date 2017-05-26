import React from 'react';
import SearchBar from './SearchBar';
import NotePreview from './NotePreview';

// class NoteList = props => (
//   has:
//    this.props.notes [array]
//    this.props.updateSearchQuery [array]
//    this.props.currentTag [string]
const NoteList = props => {
  const notes = props.notes
    .map(note => <NotePreview note={note} />);

  console.log(notes);
  return (
    <div className="note-list">
      <strong>{props.currentTag} notes</strong>
      <SearchBar updateSearchQuery={props.updateSearchQuery} />
      <div className="separator" />
      {notes}
    </div>
  );
}

export default NoteList;
