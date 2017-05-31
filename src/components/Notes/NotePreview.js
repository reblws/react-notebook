import React from 'react';
import PropTypes from 'prop-types';
import noteSchema from './schema/';

const NotePreview = (props) => {
  const className = props.isSelectedNote
    ? 'note-selected-preview note-preview'
    : 'note-preview';
  const notePreviewToShow = props.note.text.length > 30
    ? props.note.text.substr(0, 50)
    : props.note.text;
  const noteDateString = (unixTime) => {
    const date = new Date(unixTime);
    return `${date.toDateString()} ${date.toTimeString().slice(0, 8)}`;
  };

  return (
    <div
      role="option"
      aria-selected={props.isSelectedNote}
      onClick={() => props.updateSelectedNote(props.note.id)}
      className={className}
      tabIndex={props.tabIndex}
    >
      <div className="note-title-preview">
        {props.note.title}
      </div>
      <div className="note-text-preview">
        {notePreviewToShow}
      </div>
      <div className="note-date-preview">
        {noteDateString(props.note.dateCreated)}
      </div>
    </div>
  );
};

NotePreview.propTypes = {
  isSelectedNote: PropTypes.bool.isRequired,
  note: PropTypes.shape(noteSchema).isRequired,
  tabIndex: PropTypes.number.isRequired,
  updateSelectedNote: PropTypes.func.isRequired,
};


export default NotePreview;
