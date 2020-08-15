import { Component, OnInit, Input } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { PagerService } from '../services/pager.service';
import { RepositoryService } from '../services/repository.service';

@Component({
  selector: 'app-radio-item',
  templateUrl: './radio-item.component.html',
  styleUrls: ['./radio-item.component.scss']
})
export class RadioItemComponent implements OnInit {

  @Input() item: any

  constructor(public filterService: FilterService, public pagerService: PagerService,
    public repositoryService: RepositoryService) { }

  ngOnInit(): void {
  }

  toggle(){
    this.item.checked=!this.item.checked;
    if(this.item.checked){
      this.filterService.addDate(this.item.year)
      this.repositoryService.getDates().forEach(el => {
        if(el !== this.item){
          el.checked = false
        }
      })
    } else {
      this.filterService.removeDate(this.item.year)
    }
    this.pagerService.refreshCurrentPage()
    this.pagerService.setPagerPreferences(this.filterService.filterItems(this.repositoryService.getAllRepos()))
  }

}
