import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {

  frameworks = ['Phoenix', 'SailsJS', 'NodeJs', 'MeteorJS', 'Rails', 'Spring', 'Entity', 'Angular2', 'Django'];
  framework: string = 'Angular2'; // Default to if Null

  constructor() { }

  ngOnInit() {

  }

}
