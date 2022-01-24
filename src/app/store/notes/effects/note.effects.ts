import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as NoteActions from '../actions/note.actions';



@Injectable()
export class NoteEffects {

  loadNotes$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(NoteActions.loadNotes),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => NoteActions.loadNotesSuccess({ data })),
          catchError(error => of(NoteActions.loadNotesFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
