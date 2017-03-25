import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.scss']
})
export class AngularFormsComponent implements OnInit {
  formList = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formValue: any): void {
    console.log(formValue);
    this.formList.push(JSON.stringify(formValue));
  }
}
