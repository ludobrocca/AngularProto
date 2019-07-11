import { DataService } from './../core/data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  cityName: string;
  constructor( private dataService: DataService,
               private route: ActivatedRoute) { }

  ngOnInit() {
    const city = this.route.snapshot.paramMap.get('id');


} }


