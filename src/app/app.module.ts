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


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TabWrapperComponent,
    AngularFormsComponent,
    TwoWayDatabindingComponent
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
