import React from 'react';
import NoteHeader from './NoteHeader';
import NoteEditor from './NoteEditor';
import '../../styles/Notes.css';

const NoteEntry = props => {
  return (
    <div className="note-container">
      <NoteHeader title={props.note.title} tags={props.note.tags} />
      <div className="separator" />
      <NoteEditor text={props.note.text} />
    </div>
  );
};

export default NoteEntry;
