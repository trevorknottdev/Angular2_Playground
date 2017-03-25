import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent implements OnInit {

  languages = ['Elixir', 'Typescript', 'Javascript', 'Ruby', 'C#', 'Node'];

  constructor() { }

  ngOnInit() {
  }

}
