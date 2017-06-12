import Immutable from 'immutable';

const NoteRecord = Immutable.Record({
  id: undefined,
  title: '',
  text: '',
  tags: Immutable.List(),
  dateCreated: undefined,
  dateModified: undefined,
});

export default NoteRecord;
