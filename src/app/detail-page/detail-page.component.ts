import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService } from '../services/repository.service'

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  name: string
  owner: string

  constructor(private route: ActivatedRoute, public repositoryService: RepositoryService) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.queryParams.name
    this.owner = this.route.snapshot.queryParams.owner
    this.repositoryService.setRepo(this.name, this.owner)
  }

}
