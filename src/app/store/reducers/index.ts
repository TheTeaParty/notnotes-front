import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromNote from '../notes/reducers/note.reducer';


export interface State {

  [fromNote.noteFeatureKey]: fromNote.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromNote.noteFeatureKey]: fromNote.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
