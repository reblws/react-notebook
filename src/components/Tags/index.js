import React from 'react';
import PropTypes from 'prop-types';
import TagsHeader from './TagsHeader';
import Tag from './Tag';
import '../../styles/Tags.css';


// Given a flat array of all tags, count the occurrence of each tag
// and return an object containing the counts
function reduceToTagCount(tagCounts, tag) {
  const tagCount = (tagCounts[tag]) ? tagCounts[tag] + 1 : 1;
  const newTagCount = {};
  newTagCount[tag] = tagCount;
  return Object.assign(tagCounts, newTagCount);
}

const Tags = (props) => {
  const tagArrays = props.notes.map(note => note.tags);

  // Get a flat array of every tag that appears in the note list
  const tagCountsObj = [].concat(...tagArrays)
    .reduce(reduceToTagCount, { All: props.notes.length });

  const tagCountsArray = Object.keys(tagCountsObj)
    .sort((prevTag, nextTag) => tagCountsObj[nextTag] - tagCountsObj[prevTag])
    .map(tagName => (
      <Tag
        key={tagName}
        name={tagName}
        count={tagCountsObj[tagName]}
        isCurrentTag={props.currentTag === tagName}
        updateCurrentTag={props.updateCurrentTag}
        updateAllTags={props.updateAllTags}
        deleteAllTags={props.deleteAllTags}
      />
    ));

  return (
    <div className="tags-container">
      <TagsHeader />
      <div className="tags-list" role="listbox">
        {tagCountsArray}
      </div>
    </div>
  );
};

Tags.propTypes = {
  updateCurrentTag: PropTypes.func.isRequired,
  updateAllTags: PropTypes.func.isRequired,
  deleteAllTags: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tags;

