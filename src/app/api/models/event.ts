/* tslint:disable */
/* eslint-disable */
import { Note } from './note';
import { Tag } from './tag';
export interface Event {
  data: (Note | Tag);
  type: string;
}
