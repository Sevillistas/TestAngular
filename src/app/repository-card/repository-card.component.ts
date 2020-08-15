import { Component, OnInit, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})

export class RepositoryCardComponent implements OnInit {

  @Input() repo

  languages: string

  constructor() {}

  ngOnInit(): void {

  }

  ngDoCheck(): void{
    this.languages=this.getLanguages()
  }

  getLanguages(): string{
    return this.repo.languages.edges.map(el => el.node.name).join(", ")
  }

}
