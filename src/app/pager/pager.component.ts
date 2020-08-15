import { Component, OnInit } from '@angular/core';
import { PagerService } from '../services/pager.service'

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {

  constructor(public pagerService: PagerService){
  }

  ngOnInit(): void {
  }

  previousPage(){
    this.pagerService.previousPage()
  }

  nextPage(){
    this.pagerService.nextPage()
  }

}
