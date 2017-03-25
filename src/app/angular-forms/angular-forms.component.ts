import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-angular-forms',
  templateUrl: './angular-forms.component.html',
  styleUrls: ['./angular-forms.component.scss']
})
export class AngularFormsComponent implements OnInit {
  @ViewChild('formRef') form;

  formList = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.form.valueChanges
      .subscribe(v => console.table(v));
  }

  onSubmit(formValue: any): void {
    console.log(formValue);
    this.formList.push(JSON.stringify(formValue));
  }
}
