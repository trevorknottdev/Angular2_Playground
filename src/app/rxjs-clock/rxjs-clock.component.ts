import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-rxjs-clock',
  templateUrl: './rxjs-clock.component.html',
  styleUrls: ['./rxjs-clock.component.scss']
})
export class RxjsClockComponent implements OnInit {

  constructor() {
    this.ticker.subscribe(
      console.log.bind(console)
    );
    this.clock = Observable.merge(
      this.click$,
      Observable.interval(5000)
    ).map(() => new Date());

    // Observable.interval(1000);
    // this.clock = this.click$.map(() => new Date());
  }

  ngOnInit() {
  }

  click$ = new Subject();

  clock;

  ticker = Observable.interval(1000);


}
