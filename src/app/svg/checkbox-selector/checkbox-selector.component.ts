import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-selector',
  templateUrl: './checkbox-selector.component.html',
  styleUrls: ['./checkbox-selector.component.scss']
})
export class CheckboxSelectorComponent implements OnInit {

  @Input() checked: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
}
