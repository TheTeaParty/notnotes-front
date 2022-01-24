import { Action, createReducer, on } from '@ngrx/store';
import * as NoteActions from '../actions/note.actions';

export const noteFeatureKey = 'note';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(NoteActions.loadNotes, state => state),
  on(NoteActions.loadNotesSuccess, (state, action) => state),
  on(NoteActions.loadNotesFailure, (state, action) => state),

);
