/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CreateOrUpdateNote } from '../models/create-or-update-note';
import { Note } from '../models/note';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root',
})
export class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getTags
   */
  static readonly GetTagsPath = '/tags';

  /**
   * Get Tags.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTags()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTags$Response(params?: {
    name?: string;
  }): Observable<StrictHttpResponse<Array<Tag>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.GetTagsPath, 'get');
    if (params) {
      rb.query('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Tag>>;
      })
    );
  }

  /**
   * Get Tags.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTags$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTags(params?: {
    name?: string;
  }): Observable<Array<Tag>> {

    return this.getTags$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Tag>>) => r.body as Array<Tag>)
    );
  }

  /**
   * Path part for operation getNote
   */
  static readonly GetNotePath = '/notes/{noteID}';

  /**
   * Get Note.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNote()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNote$Response(params: {
    noteID: string;
  }): Observable<StrictHttpResponse<Note>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.GetNotePath, 'get');
    if (params) {
      rb.path('noteID', params.noteID, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Note>;
      })
    );
  }

  /**
   * Get Note.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getNote$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNote(params: {
    noteID: string;
  }): Observable<Note> {

    return this.getNote$Response(params).pipe(
      map((r: StrictHttpResponse<Note>) => r.body as Note)
    );
  }

  /**
   * Path part for operation updateNote
   */
  static readonly UpdateNotePath = '/notes/{noteID}';

  /**
   * Update Note.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateNote()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateNote$Response(params: {
    noteID: string;
    body: CreateOrUpdateNote
  }): Observable<StrictHttpResponse<Note>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.UpdateNotePath, 'put');
    if (params) {
      rb.path('noteID', params.noteID, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Note>;
      })
    );
  }

  /**
   * Update Note.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateNote$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateNote(params: {
    noteID: string;
    body: CreateOrUpdateNote
  }): Observable<Note> {

    return this.updateNote$Response(params).pipe(
      map((r: StrictHttpResponse<Note>) => r.body as Note)
    );
  }

  /**
   * Path part for operation deleteNote
   */
  static readonly DeleteNotePath = '/notes/{noteID}';

  /**
   * Delete Note.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteNote()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNote$Response(params: {
    noteID: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.DeleteNotePath, 'delete');
    if (params) {
      rb.path('noteID', params.noteID, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Delete Note.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteNote$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteNote(params: {
    noteID: string;
  }): Observable<void> {

    return this.deleteNote$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getNotes
   */
  static readonly GetNotesPath = '/notes';

  /**
   * Get Nots.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getNotes()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotes$Response(params?: {
    tags?: Array<string>;
    name?: string;
  }): Observable<StrictHttpResponse<Array<Note>>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.GetNotesPath, 'get');
    if (params) {
      rb.query('tags', params.tags, {"explode":false});
      rb.query('name', params.name, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Note>>;
      })
    );
  }

  /**
   * Get Nots.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getNotes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getNotes(params?: {
    tags?: Array<string>;
    name?: string;
  }): Observable<Array<Note>> {

    return this.getNotes$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Note>>) => r.body as Array<Note>)
    );
  }

  /**
   * Path part for operation createNote
   */
  static readonly CreateNotePath = '/notes';

  /**
   * Create Note.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createNote()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createNote$Response(params: {
    body: CreateOrUpdateNote
  }): Observable<StrictHttpResponse<Note>> {

    const rb = new RequestBuilder(this.rootUrl, ApiService.CreateNotePath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Note>;
      })
    );
  }

  /**
   * Create Note.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createNote$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createNote(params: {
    body: CreateOrUpdateNote
  }): Observable<Note> {

    return this.createNote$Response(params).pipe(
      map((r: StrictHttpResponse<Note>) => r.body as Note)
    );
  }

}
