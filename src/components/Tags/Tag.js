import React from 'react';

// Props:
  // name, count
// **TODO: Fix the tag counter**
const Tag = (props) => {
  const isCurrentTag = props.name === props.currentTag;
  const tagClassName = isCurrentTag ? 'selected-tag' : 'tag-item';
  return (
    <div
      className={tagClassName}
      onClick={() => props.updateCurrentTag(props.name)}
    >
      <a>
        <input
          className="tag-input"
          type="text"
          value={`${props.name} (${props.count})`}
          disabled
        />
      </a>
    </div>
  );
};

export default Tag;
