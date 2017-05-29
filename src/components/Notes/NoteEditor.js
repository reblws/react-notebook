import React from 'react';

// *TODO*: fix textarea default height
const NoteEditor = props => (
  <div className="editor-container">
    <textarea onChange={props.updateNoteContent} value={props.text} />
  </div>
);

export default NoteEditor;
