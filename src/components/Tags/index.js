import React from 'react';
import TagsHeader from './TagsHeader';
import Tag from './Tag';
import '../../styles/Tags.css';

class Tags extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tagArrays = this.props.notes.map(note => note.tags);

    // Get a flat array of every tag that appears in the note list
    const tagCountsObj = [].concat.apply([], tagArrays)
      .reduce((tagCounts, tag) => {
        if (!tagCounts[tag]) {
          tagCounts[tag] = 0;
        }
        tagCounts[tag] += 1;
        return tagCounts;
      }, {});

    const tagCountsArray = Object.keys(tagCountsObj)
      .map(tagName => (
        <Tag
          key={tagName}
          name={tagName}
          count={tagCountsObj[tagName]}
          currentTag={this.props.currentTag}
          updateCurrentTag={this.props.updateCurrentTag}
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
  }
}

export default Tags;
