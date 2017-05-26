import React from 'react';

const NotePreview = props => (
  <div className="note-preview">
    <div className="note-title-preview">
      {props.note.title}
    </div>
    <div className="note-text-preview">
      {props.note.text}
    </div>
    <div className="note-date-preview">
      {props.note.dateCreated}
    </div>
  </div>
);

export default NotePreview;
