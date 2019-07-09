import { DataService } from './../core/data.service';
import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../shared/interfaces';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  title: string;
  people: ICustomer[];
  isVisible = true;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Hi From customers';
    this.dataService.getCustomers()
      .subscribe((customers: ICustomer[]) => this.people = customers); // we take a cold observable and subscribe to it
  }
  changeVisibility() {
    this.isVisible = !this.isVisible;
  }

}
