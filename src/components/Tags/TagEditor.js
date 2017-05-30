import React from 'react';

class TagEditor extends React.Component {

  static joinTagArray(tagArray) {
    return tagArray
      .map(tag => `#${tag}`)
      .join(' ');
  }

  static parseTagString(tagString) {
    const hashtagPattern = /\s*?#/g;
    return tagString.split(hashtagPattern);
  }

  constructor(props) {
    super(props);
    this.state = {
      tagString: TagEditor.joinTagArray(this.props.tags),
    };
    this.handleTagChange = this.handleTagChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id === this.props.id) return;
    // Save state into store before changing when new note selected
    const tagSnapShot = TagEditor.parseTagString(this.state.tagString);
    this.props.updateNoteStore(tagSnapShot);

    this.setState({
      tagString: TagEditor.joinTagArray(nextProps.tags),
    });
  }


  handleTagChange(event) {
    // Handle updating local store somehow
    //this.props.updateNoteTags
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
        onChange={this.handleTagChange}
      />
    );
  }
}

export default TagEditor;
