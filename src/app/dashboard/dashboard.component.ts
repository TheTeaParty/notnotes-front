import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api/services/api.service';
import {Note} from '../api/models/note';
import {Tag} from '../api/models/tag';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public notes: Note[] = [];
  public tags: Tag[] = [];
  public searchValue: string = '';
  selectedTags: Tag[] = [];
  searchName: string = '';
  currentNoteID: string | null = null;

  constructor(private apiService: ApiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getNotes();
    this.getTags();

    this.activatedRoute.paramMap.subscribe(params => {
      this.currentNoteID = params.get('noteID');
    })
  }

  getNotes(name: string = '', tags: Tag[] = []) {
    this.apiService.getNotes({
      name,
      tags: tags.map(t => t.name)
    }).subscribe((notes) => {
      this.notes = notes;
    });
  }

  searchByName(searchName: string) {
    this.getNotes(searchName, this.selectedTags);
  }

  getTags(name: string = '') {
    this.apiService.getTags({name}).subscribe((tags) => {
      this.tags = tags;
    })
  }

  toggleTag(tag: Tag) {
    const index = this.selectedTags.indexOf(tag)
    if (index > -1) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }

    this.getNotes(this.searchName, this.selectedTags);
  }

  deleteNote(note: Note) {
    this.apiService.deleteNote({noteID: note.id}).subscribe(() => {
      this.getNotes(this.searchName, this.selectedTags);
      this.router.navigate(['/']);
    })
  }

}
