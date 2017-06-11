import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import TagsHeader from './TagsHeader';
import Tag from './Tag';
import '../../styles/Tags.css';


// Given a flat array of all tags, count the occurrence of each tag
// and return an object containing the counts
function reduceToTagCount(tagCounts, tag) {
  const oldTagCount = tagCounts.get(tag);
  const newTagCount = oldTagCount ? oldTagCount + 1 : 1;
  return tagCounts.set(tag, newTagCount);
}

function flattenTags(allTags, tagArray) {
  return allTags.concat(tagArray);
}

function tagCountsToMap(notesArray) {
  return notesArray
    .map(note => note.tags)
    .reduce(flattenTags, Immutable.List())
    .reduce(reduceToTagCount, Immutable.Map());
}

const Tags = (props) => {
  const deleteAllTags = tagToDelete => this.props.updateAllTags(tagToDelete, '');

  // Get a flat array of every tag that appears in the note list
  const tagCountsMap = tagCountsToMap(props.notes);

  const tagCountsArray = tagCountsMap.keySeq().toArray()
    .sort((prevTag, nextTag) => (
      tagCountsMap.get(nextTag) - tagCountsMap.get(prevTag)
    )).map(tagName => (
      <Tag
        key={tagName}
        name={tagName}
        count={tagCountsMap.get(tagName)}
        isCurrentTag={props.currentTag === tagName}
        updateCurrentTag={props.updateCurrentTag}
        updateAllTags={props.updateAllTags}
        deleteAllTags={deleteAllTags}
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
  updateAllTags: PropTypes.func.isRequired,
  updateCurrentTag: PropTypes.func.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Tags;

