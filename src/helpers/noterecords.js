import Immutable from 'immutable';
import json from './testnotes.json';
import NoteRecord from '../constants/NoteRecord.js';


const testNotes = Immutable.List(json.array)
  .map(note => new NoteRecord(note))
  .map((noteRecord) => {
    const immutableTags = Immutable.List(noteRecord.tags);
    return noteRecord.set('tags', immutableTags);
  });

export default testNotes;
