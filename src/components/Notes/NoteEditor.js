import React from 'react';

// *TODO*: fix textarea default height
const NoteEditor = props => (
  <div className="editor-container">
    <textarea defaultValue={props.text} />
  </div>
);

export default NoteEditor;
