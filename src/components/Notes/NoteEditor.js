import React from 'react';
import PropTypes from 'prop-types';


// *TODO*: fix textarea default height
const NoteEditor = props => (
  <div className="editor-container">
    <textarea onChange={props.updateNoteContent} value={props.text} />
  </div>
);

NoteEditor.propTypes = {
  updateNoteContent: PropTypes.func.isRequired,
  text: PropTypes.string,
};

NoteEditor.defaultProps = {
  text: '',
};

export default NoteEditor;
