import React from 'react';

// Props:
  // name, count
// **TODO: Fix the tag counter**
const Tag = props => (
  <div className="tag-item">
    <input
      className="tag-input"
      type="text"
      defaultValue={props.name}
      disabled
    />
    {/*<div className="tag-item-count">
      ({props.count})
    </div>*/}
  </div>
);

export default Tag;
