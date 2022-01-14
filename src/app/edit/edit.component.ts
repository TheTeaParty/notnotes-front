import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../api/services/api.service';
import {Note} from '../api/models/note';
import {debounceTime, Subject} from 'rxjs';
import {CreateOrUpdateNote} from '../api/models/create-or-update-note';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  note: Note | null = null;
  editableNote: CreateOrUpdateNote = {name: '', content: ''};

  debouncer: Subject<CreateOrUpdateNote> = new Subject<CreateOrUpdateNote>();

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private apiService: ApiService) {

    this.debouncer
      .pipe(debounceTime(1000))
      .subscribe((value) => this.save(value));
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      if (params.get('noteID')) {
        this.getNote(<string>params.get('noteID'));
      }
    });
  }

  getNote(noteID: string) {
    this.apiService.getNote({noteID}).subscribe(note => {
      this.note = note;
      this.editableNote = {name: note.name, content: note.content};
    })
  }

  onTitleChange(name: string) {
    this.debouncer.next({...this.editableNote, name});
  }

  onContentChange(content: string) {
    this.debouncer.next({...this.editableNote, content});
  }

  save(model: CreateOrUpdateNote) {

    const body: CreateOrUpdateNote = {content: model.content, name: model.name};

    if (!this.note) {
      this.apiService.createNote({body}).subscribe(note => {
        this.router.navigate([`/${note.id}`]);
      })
    } else {
      this.apiService.updateNote({body, noteID: this.note.id}).subscribe(note => {
        this.note = note;
      })
    }

  }

}
