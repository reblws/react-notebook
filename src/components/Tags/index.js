import React from 'react';
import PropTypes from 'prop-types';
import TagsHeader from './TagsHeader';
import Tag from './Tag';
import '../../styles/Tags.css';


// Given a flat array of all tags, count the occurrence of each tag
// and return an object containing the counts
function reduceToTagCount(tagCounts, tag) {
  if (!tagCounts[tag]) {
    tagCounts[tag] = 0;
  }
  tagCounts[tag] += 1;
  return tagCounts;
}

const Tags = (props) => {
  const tagArrays = props.notes.map(note => note.tags);

  // Get a flat array of every tag that appears in the note list
  const tagCountsObj = [].concat(...tagArrays)
    .reduce(reduceToTagCount, { All: props.notes.length });

  const tagCountsArray = Object.keys(tagCountsObj)
    .map(tagName => (
      <Tag
        key={tagName}
        name={tagName}
        count={tagCountsObj[tagName]}
        currentTag={props.currentTag}
        updateCurrentTag={props.updateCurrentTag}
      />
    ));

  return (
    <div className="tags-container">
      <TagsHeader />
      <div className="tags-list">
        {tagCountsArray}
      </div>
    </div>
  );
};

Tags.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.Object).isRequired,
  updateCurrentTag: PropTypes.func.isRequired,
};

export default Tags;

