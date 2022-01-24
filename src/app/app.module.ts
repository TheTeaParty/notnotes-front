import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {ApiModule} from './api/api.module';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { EditComponent } from './edit/edit.component';
import { MentionModule } from 'angular-mentions';
import { ServiceWorkerModule } from '@angular/service-worker';
import { reducers, metaReducers } from './store/reducers';
import * as fromNote from './store/notes/reducers/note.reducer';
import { NoteEffects } from './store/notes/effects/note.effects';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ApiModule.forRoot({rootUrl: environment.apiURL}),
    MatListModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatChipsModule,
    MentionModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(fromNote.noteFeatureKey, fromNote.reducer),
    EffectsModule.forFeature([NoteEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
