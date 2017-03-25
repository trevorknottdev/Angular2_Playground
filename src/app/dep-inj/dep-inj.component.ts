import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data-service';

@Component({
  selector: 'app-dep-inj',
  templateUrl: './dep-inj.component.html',
  styleUrls: ['./dep-inj.component.scss'],
  providers: [
    DataService
  ]
})
export class DepInjComponent implements OnInit {

  items: Array<any>;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.items = this.dataService.getItems();
  }

}
