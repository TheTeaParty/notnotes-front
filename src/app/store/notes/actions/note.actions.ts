import { createAction, props } from '@ngrx/store';

export const loadNotes = createAction(
  '[Note] Load Notes'
);

export const loadNotesSuccess = createAction(
  '[Note] Load Notes Success',
  props<{ data: any }>()
);

export const loadNotesFailure = createAction(
  '[Note] Load Notes Failure',
  props<{ error: any }>()
);
