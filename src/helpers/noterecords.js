import Immutable from 'immutable';
import json from './testnotes.json';
import NoteRecord from '../constants/NoteRecord.js';


const testNotes = Immutable.fromJS(json.array);

export default testNotes;
