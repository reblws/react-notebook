import Immutable from 'immutable';

const NoteRecord = Immutable.Record({
  id: undefined,
  title: '',
  text: '',
  tags: [],
  dateCreated: undefined,
  dateModified: undefined,
});

export default NoteRecord;
