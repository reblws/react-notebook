import React, { Component } from 'react';
import '../styles/App.css';
import Notes from './Notes';
import Tags from './Tags';

const exampleNotes = [
  {
    id: 123192,
    title: 'Test note',
    text: 'The quick brown fox jumps over the lazy dog, The quick brown fox jumps over the lazy dog, The quick brown fox jumps over the lazy dog, The quick brown fox jumps over the lazy dog',
    tags: ['test', 'hi', 'dumk'],
    dateCreated: Date.now(),
  },
  {
    id: 123,
    title: 'Fuckk f',
    text: 'The qutest ',
    tags: ['dumk'],
    dateCreated: Date.now(),
  },
  {
    id: 12322,
    title: 'Peach',
    text: 'The princess ',
    tags: ['dumk', 'peach'],
    dateCreated: Date.now(),
  },
  {
    id: 121113,
    title: 'These memories will be lost in time',
    text: 'Like tears in rain',
    tags: ['dumk', 'deep'],
    dateCreated: Date.now(),
  },
];

class Notebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTag: 'All',
      notes: exampleNotes, // **TODO** change this**
    };
    this.updateCurrentTag = this.updateCurrentTag.bind(this);
  }

  // Take in a newTag as string and update the current Notebook state
  // with the new tag.
  updateCurrentTag(newTag) {
    this.setState({
      currentTag: newTag,
    });
  }

  currentTagNotes() {
    if (this.state.currentTag === 'All') return this.state.notes;
    // If not all just filter the notes that don't contain the currentTag
    return this.state.notes.filter(note => note.tags.includes(this.state.currentTag));
  }

  render() {
    return (
      <div className="app-container">
        <Tags
          notes={this.state.notes}
          updateCurrentTag={this.updateCurrentTag}
          currentTag={this.state.currentTag}
        />
        <Notes
          notes={this.currentTagNotes()}
          currentTag={this.state.currentTag}
        />
      </div>
    );
  }
}

export default Notebook;
