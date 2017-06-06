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
    this.onChange = this.onChange.bind(this);
    this.saveNoteState = this.saveNoteState.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    const isSameTags = areArraysEqual(nextProps.tags, this.props.tags);
    const isSameId = nextProps.id === this.props.id;
    // Issue when delete tag doesn't update this component is with this line here
    if (isSameTags && isSameId) return;

    this.setState({ tagString: TagEditor.joinTagArray(nextProps.tags) });
  }

  onChange(event) {
    this.setState({
      tagString: event.target.value,
    });
  }

  saveNoteState() {
    const currentTagState = TagEditor.parseTagString(this.state.tagString);
    this.props.updateNoteTags(currentTagState);
  }

  render() {
    return (
      <input
        type="text"
        className="note-tags"
        placeholder="Enter some tags..."
        value={this.state.tagString}
        onChange={this.onChange}
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
