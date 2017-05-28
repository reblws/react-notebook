import React from 'react';

const NotePreview = (props) => {
  const className = props.isSelectedNote
    ? 'note-selected-preview note-preview'
    : 'note-preview';
  return (
    <div
      onClick={() => props.updateSelectedNote(props.id)}
      className={className}
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
};

export default NotePreview;
