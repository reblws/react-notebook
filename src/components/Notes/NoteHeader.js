import React from 'react';
import PropTypes from 'prop-types';
import TagEditor from '../Tags/TagEditor';

const NoteHeader = props => (
  <div className="note-header">
    <input
      type="text"
      className="note-title"
      value={props.title}
      onChange={props.updateNoteTitle}
    />
    <TagEditor
      id={props.id}
      tags={props.tags}
      updateNoteTags={props.updateNoteTags}
    />
  </div>
);

NoteHeader.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  updateNoteTitle: PropTypes.func.isRequired,
  updateNoteTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NoteHeader;
