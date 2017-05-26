import React from 'react';

// *TODO*: fix textarea default height
const NoteEditor = props => (
  <div className="editor-container">
    <textarea>{props.text}</textarea>
  </div>
);

export default NoteEditor;
