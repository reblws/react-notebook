import React from 'react';
import PropTypes from 'prop-types';
import NoteHeader from './NoteHeader';
import NoteEditor from './NoteEditor';
import noteSchema from './schema';

const NoteEntry = (props) => {
  // Define closures over updateNoteStore
  const updateNoteContent = (event) => {
    const newNoteContent = event.target.value;
    return props.updateNoteStore(props.note.id, 'text', newNoteContent);
  };

  const updateNoteTitle = (event) => {
    const newNoteTitle = event.target.value;
    return props.updateNoteStore(props.note.id, 'title', newNoteTitle);
  };

  const updateNoteTags = (newTagsArray) => (
    props.updateNoteStore(props.note.id, 'tags', newTagsArray)
  );

  return (
    <div className="note-container">
      <NoteHeader
        id={props.note.id}
        title={props.note.title}
        tags={props.note.tags}
        updateNoteTitle={updateNoteTitle}
        updateNoteTags={updateNoteTags}
      />
      <div className="separator" />
      <NoteEditor
        text={props.note.text}
        updateNoteContent={updateNoteContent}
      />
    </div>
  );
};

NoteEntry.propTypes = {
  updateNoteStore: PropTypes.func.isRequired,
  note: PropTypes.shape(noteSchema).isRequired,
};

export default NoteEntry;
