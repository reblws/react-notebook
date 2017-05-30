import React from 'react';
import TagEditor from '../Tags/TagEditor';

const NoteHeader = (props) => {
  return (
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
};


export default NoteHeader;
