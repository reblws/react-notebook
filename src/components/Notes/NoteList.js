import React from 'react';
import SearchBar from './SearchBar';
import NotePreview from './NotePreview';

// class NoteList = props => (
//   has:
//    this.props.notes [array]
//    this.props.updateSearchQuery [array]
//    this.props.currentTag [string]
const NoteList = props => {
  const previewList = props.notes
    .map(note => <NotePreview key={note.id} note={note} />);

  return (
    <div className="note-list">
      <strong>{props.currentTag} notes</strong>
      <SearchBar updateSearchQuery={props.updateSearchQuery} />
      <div className="separator" />
      {previewList}
    </div>
  );
};

export default NoteList;
