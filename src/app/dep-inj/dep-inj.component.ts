import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { LogDebugger } from '../services/log-debug.service';
import { ConsoleService } from '../services/log-debugger.service';

@Component({
  selector: 'app-dep-inj',
  templateUrl: './dep-inj.component.html',
  styleUrls: ['./dep-inj.component.scss'],
  providers: [
    DataService,
    ConsoleService,
    {
      provide: LogDebugger,
      useFactory: (consoleService) => {
        return new LogDebugger(consoleService, true); // boolean that flips this use case
    },
    deps: [
      ConsoleService
    ]}
    // { provide: DataService, useClass: DataService }
  ]
})
export class DepInjComponent implements OnInit {

  items: Array<any>;

  constructor(
    private dataService: DataService,
    private logDebugger: LogDebugger
  ) { }

  ngOnInit() {
    this.logDebugger.debug('Getting items...');
    this.items = this.dataService.getItems();
  }

}
