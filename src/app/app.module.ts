/* Angular Pkgs */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Material Related*/
import { MaterialModule } from '@angular/material';
import 'hammerjs';

/* Components */
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TabWrapperComponent } from './tab-wrapper/tab-wrapper.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { TwoWayDatabindingComponent } from './two-way-databinding/two-way-databinding.component';
import { FormMiscComponent } from './form-misc/form-misc.component';
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TabWrapperComponent,
    AngularFormsComponent,
    TwoWayDatabindingComponent,
    FormMiscComponent,
    RadioButtonsComponent,
    DropdownListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
