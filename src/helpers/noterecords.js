import Immutable from 'immutable';
import testNotes from 'testnotes.json';

const NoteRecord = Immutable.Record({
  id: undefined,
  title: '',
  text: '',
  tags: new Immutable.List(),
  dateCreated: undefined,
  dateModified: undefined,
});

const testNotes = Immutable.List(json.array)
  .map(note => newNoteRecord(note.tags))
  .map(noteRecord => {
    const immutableTags = Immutable.fromJS(noteRecord.tags);
    return noteRecord.set('tags', immutableTags);
  });

export default testNotes;
