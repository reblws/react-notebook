import React from 'react';

const NoteHeader = props => {
  const tagString = props.tags
    .map(tag => `#${tag}`)
    .join(' ');
  return (
    <div className="note-header">
      <input
        type="text"
        className="note-title"
        value={props.title}
      />
      <input
        type="text"
        className="note-tags"
        value={tagString}
      />
    </div>
  );
};

export default NoteHeader;
