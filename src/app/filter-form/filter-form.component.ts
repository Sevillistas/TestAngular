import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../services/repository.service';
import { PagerService } from '../services/pager.service';
import { FilterService } from '../services/filter.service';

@Component({
selector: 'app-filter-form',
templateUrl: './filter-form.component.html',
styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {

	countOfChosenLanguages: number = 0

	anyLanguageChosen: boolean = false

	labelIsVisible: boolean = false

	inputIsNotEmpty: boolean = false

	inputLoginValue: string = ""

	showCheckboxContainer: boolean = false

	constructor(public repositoryService: RepositoryService, public pagerService: PagerService,
		public filterService: FilterService) { }

	ngOnInit(): void {
	}

	findReposByLogin(login: string){
		this.repositoryService.setUserName(login)
		this.filterService.refreshFilters()
		this.repositoryService.setAllRepos(login)
	}

	setLogin(value: string){
		this.inputLoginValue=value
		if(this.inputLoginValue){
			this.labelIsVisible=true
			this.inputIsNotEmpty=true
		} else {
			this.labelIsVisible=false
			this.inputIsNotEmpty=false
		}
	}

	getAnyLanguageChosen(){
		this.anyLanguageChosen = !!this.filterService.getCountChosenLanguages()
		return this.anyLanguageChosen
	}

	getCountOfChosenLanguages(){
		this.countOfChosenLanguages = this.filterService.getCountChosenLanguages()
		return this.countOfChosenLanguages;
	}

	getVisibilityCheckbox(){
		return this.filterService.getFiltersVisibility() && this.repositoryService.getLanguages().length
	}

	getVisibilityRadio(){
		return this.filterService.getFiltersVisibility() && this.repositoryService.getDates().length
	}

}
