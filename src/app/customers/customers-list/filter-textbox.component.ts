import {Component, OnInit} from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
selector: 'filter-textbox',
template: `
  Filter: <input type="text"/>
`
})
export class FilterTextBoxComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }
}
