import React from 'react';
import NoteHeader from './NoteHeader';
import NoteEditor from './NoteEditor';

// parse tag string
// '#hey #there #sam' -> ['hey', 'there', 'sam']
function parseTagString(tagString) {
  // All tags will be prefixed by a hasthtag
  const tagPattern = /#([^#]+)/g;
  const tagsArray = tagString
    .replace(tagPattern, (match, tag) => `${tag.trim()} `)
    .split(' ');

  // When we replace the string there's going to be an empty element at the end
  return tagsArray.slice(0, -1);
}


const NoteEntry = (props) => {
  // Define closures over updateNoteStore
  const updateNoteContent = (event) => {
    const newNoteContent = event.target.value;
    return props.updateNoteStore(props.note.id, 'text', newNoteContent);
  };

  const updateNoteTitle = (event) => {
    const newNoteTitle = event.target.value;
    return props.updateNoteStore(props.note.id, 'title', newNoteTitle);
  };

  const updateNoteTags = (newTagsArray) => {
    // const newTagsArray = parseTagString(event.target.value);
    return props.updateNoteStore(props.note.id, 'tags', newTagsArray);
  };

  return (
    <div className="note-container">
      <NoteHeader
        id={props.note.id}
        title={props.note.title}
        tags={props.note.tags}
        updateNoteTitle={updateNoteTitle}
        updateNoteTags={updateNoteTags}
      />
      <div className="separator" />
      <NoteEditor
        text={props.note.text}
        updateNoteContent={updateNoteContent}
      />
    </div>
  );
};



// This component represents the overall state of a note
//
    // id: 123,
    // title: 'Fuckk f',
    // text: 'The qutest ',
    // tags: ['dumk'],
    // dateCreated: Date.now(),

/*class NoteEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note.id,
      title: this.props.note.title,
      text: this.props.note.text,
      tags: this.props.note.tags,
      dateCreated: this.props.note.dateCreated,
      dateModified: this.props.note.dateModified || Date.now(),
    };

    this.updateEntryField = this.updateEntryField.bind(this);
    this.updateNoteTitle = this.updateNoteTitle.bind(this);
    this.updateNoteContent = this.updateNoteContent.bind(this);
  }

  componentWillUpdate() {
    const noteStateObject = { ...this.state };
    this.props.updateNoteStore(noteStateObject);
  }

  updateEntryField(noteKey, noteValue) {
    this.setState({
      noteKey: noteValue,
      dateModified: Date.now(),
    });
  }

  updateNoteTitle(event) {
    const newTitle = event.target.value;
    this.updateEntryField('title', newTitle);
  }

  updateNoteContent(event) {
    const newContent = event.target.value;
    this.updateEntryField('text', newContent);
  }

  // **TODO** Add support for updating note tags
  // updateNoteTag(event) {
  //   return;
  // }


  // updateNoteTags(event) {}

  render() {
    return (
      <div className="note-container">
        <NoteHeader
          title={this.props.title}
          tags={this.props.tags}
          updateNoteTitle={this.updateNoteTitle}
        />
        <div className="separator" />
        <NoteEditor
          text={this.state.text}
          updateNoteContent={this.updateNoteContent}
        />
      </div>
    );
  }
}*/


export default NoteEntry;
