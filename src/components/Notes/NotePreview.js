import React from 'react';

const NotePreview = props => (
  <div
    onClick={() => props.updateSelectedNote(props.id)}
    className="note-preview"
    tabIndex={props.tabIndex}
  >
    <div className="note-title-preview">
      {props.note.title}
    </div>
    <div className="note-text-preview">
      {props.note.text.length > 30
        ? props.note.text.substr(0, 30)
        : props.note.text}
    </div>
    <div className="note-date-preview">
      {props.note.dateCreated}
    </div>
  </div>
);

export default NotePreview;
