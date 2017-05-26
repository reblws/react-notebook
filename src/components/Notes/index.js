import React from 'react';
import NoteEntry from './NoteEntry';
import NoteList from './NoteList';

// Takes in tag-state and is in charge of filtering out unwanted notes before
// passing them onto children
class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    };
    this.updateSearchQuery = this.updateSearchQuery.bind(this);
    this.notesFound = this.notesFound.bind(this);
  }

  updateSearchQuery(query) {
    this.setState({
      searchQuery: query,
    });
  }

  notesFound() {
    return this.props.notesArray.filter(note => (
      note.text.includes(this.searchQuery) || note.title.includes(this.searchQuery)
    ));
  }

  render() {
    return (
      <div className="notes-container">
        <NoteList
          notes={this.props.notesArray}
          updateSearchQuery={this.updateSearchQuery}
          currentTag={'all'}
        />
        <NoteEntry note={this.props.notesArray[0]} />
      </div>
    );
  }
}

export default Notes;
