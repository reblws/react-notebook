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

  updateSearchQuery(event) {
    const query = event.target.value;
    this.setState({
      searchQuery: query,
    });
  }

  notesFound() {
    if (!this.state.searchQuery) {
      return this.props.notes;
    }

    const searchResults = this.props.notes.filter(note => {
      // Gotta lowercase the results to get matches
      const searchQuery = this.state.searchQuery.toLowerCase();
      const noteTitle = note.title.toLowerCase();
      const noteText = note.text.toLowerCase();

      return (noteTitle.includes(searchQuery)
        || noteText.includes(searchQuery));
    });

    return searchResults;
  }

  render() {
    return (
      <div className="notes-container">
        <NoteList
          notes={this.notesFound()}
          updateSearchQuery={this.updateSearchQuery}
          currentTag={'all'}
        />
        <NoteEntry note={this.props.notes[0]} />
      </div>
    );
  }
}

export default Notes;
