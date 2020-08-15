import { Component, OnInit, Input } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { PagerService } from '../services/pager.service';
import { RepositoryService } from '../services/repository.service';

@Component({
  selector: 'app-checkbox-item',
  templateUrl: './checkbox-item.component.html',
  styleUrls: ['./checkbox-item.component.scss']
})
export class CheckboxItemComponent implements OnInit {

  @Input() item: any

  constructor(public filterService: FilterService, public pagerService: PagerService,
    public repositoryService: RepositoryService) {
    }

  ngOnInit(): void {
    
  }

  toggle(){
    this.item.checked=!this.item.checked;
    if(this.item.checked){
      this.filterService.addLanguage(this.item.name)
    } else {
      this.filterService.removeLanguage(this.item.name)
    }
    this.pagerService.refreshCurrentPage()
    this.pagerService.setPagerPreferences(this.filterService.filterItems(this.repositoryService.getAllRepos()))
  }
}
