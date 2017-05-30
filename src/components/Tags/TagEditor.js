import React from 'react';

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
    if (nextProps.id === this.props.id) return;
    // Make sure we save before we re-render
    this.saveNoteState();
    // Set the new tag's state
    this.setState({
      tagString: TagEditor.joinTagArray(nextProps.tags),
    });
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

export default TagEditor;
