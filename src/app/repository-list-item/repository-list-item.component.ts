import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repository-list-item',
  templateUrl: './repository-list-item.component.html',
  styleUrls: ['./repository-list-item.component.scss']
})
export class RepositoryListItemComponent implements OnInit {

  @Input() repo

  constructor() { }

  ngOnInit(): void {
  }

}
