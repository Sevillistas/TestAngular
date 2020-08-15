import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radio-selector',
  templateUrl: './radio-selector.component.html',
  styleUrls: ['./radio-selector.component.scss']
})
export class RadioSelectorComponent implements OnInit {

    @Input() checked: boolean = false

    constructor() { }

    ngOnInit(): void {
  }
}
