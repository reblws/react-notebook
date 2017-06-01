import React from 'react';
import PropTypes from 'prop-types';
import * as areArraysEqual from 'array-equal';


class TagEditor extends React.Component {

  static joinTagArray(tagArray) {
    return tagArray
      .map(tag => `#${tag}`)
      .join(' ');
  }

  static parseTagString(tagString) {
    const hashtagPattern = /\s*?#/g;
    // First element's gonna be blank with this pattern on split
    // so slice the first el
    return tagString
      .split(hashtagPattern)
      .slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      tagString: TagEditor.joinTagArray(this.props.tags),
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.saveNoteState = this.saveNoteState.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    const isSameTags = areArraysEqual(nextProps.tags, this.props.tags);
    const isSameId = nextProps.id === this.props.id;
    // Issue when delete tag doesn't update this component is with this line here
    if (isSameTags && isSameId) return;
    // Make sure we save before we re-render
    // if (isSameTags) {
    //   this.saveNoteState();
    // }
    // Set the new tag's state
    this.setState({ tagString: TagEditor.joinTagArray(nextProps.tags) });
  }

  saveNoteState() {
    const currentTagState = TagEditor.parseTagString(this.state.tagString);
    this.props.updateNoteTags(currentTagState);
  }

  handleInputChange(event) {
    this.setState({
      tagString: event.target.value,
    });
  }

  render() {
    return (
      <input
        type="text"
        className="note-tags"
        value={this.state.tagString}
        onChange={this.handleInputChange}
        onBlur={this.saveNoteState}
      />
    );
  }
}

TagEditor.propTypes = {
  id: PropTypes.number.isRequired,
  updateNoteTags: PropTypes.func.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagEditor;
