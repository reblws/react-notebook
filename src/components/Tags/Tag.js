import React from 'react';
import PropTypes from 'prop-types';


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

Tag.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  currentTag: PropTypes.string.isRequired,
  updateCurrentTag: PropTypes.func.isRequired,
};

export default Tag;
