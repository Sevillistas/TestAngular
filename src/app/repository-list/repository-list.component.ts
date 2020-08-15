import { Component, OnInit, DoCheck} from '@angular/core';

import { PagerService } from '../services/pager.service'
import { RepositoryService } from '../services/repository.service';

@Component({
	selector: 'app-repository-list',
	templateUrl: './repository-list.component.html',
	styleUrls: ['./repository-list.component.scss']
})

export class RepositoryListComponent implements OnInit {

	repos: any

	pagedRepos: any
	
	constructor(public repositoryService: RepositoryService, public pagerService: PagerService) { }

	ngOnInit(): void {
		// this.repos = this.repositoryService.getAllRepos()
		// this.pagedRepos = this.pagerService.getPagedItems()
	}

	ngDoCheck(){
		// this.repos = this.repositoryService.getAllRepos()
		// this.pagedRepos = this.pagerService.getPagedItems()
	}

}
