import { createAction, props } from '@ngrx/store';

export const loadNotess = createAction(
  '[Notes] Load Notess'
);

export const loadNotessSuccess = createAction(
  '[Notes] Load Notess Success',
  props<{ data: any }>()
);

export const loadNotessFailure = createAction(
  '[Notes] Load Notess Failure',
  props<{ error: any }>()
);
