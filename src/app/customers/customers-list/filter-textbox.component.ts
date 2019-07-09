import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
selector: 'filter-textbox',
template: `
  Filter: <input type="text" [(ngModel)]= "filter"/>
`
})
export class FilterTextBoxComponent implements OnInit {

// tslint:disable-next-line: variable-name
  private _filter: string;

  @Input() get filter() {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter);
  }

  @Output() changed = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {

  }
}
