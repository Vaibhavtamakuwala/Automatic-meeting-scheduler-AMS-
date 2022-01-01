import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoomComponent } from './zoom/zoom.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import{MatSliderModule} from '@angular/material/slider';
import{ MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import{ MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ZoomIntegrationComponent } from './zoom-integration/zoom-integration.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MainComponent } from './main/main.component';
//import { ToastModule } from '@syncfusion/ej2-angular-notifications';
//import { SidebarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
//import { ComboBoxModule, DropDownListModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { RecurrenceEditorModule, ScheduleModule } from '@syncfusion/ej2-angular-schedule';
//import { QuickPopups } from '@syncfusion/ej2-schedule/src/schedule/popups/quick-popups';
//import { TextBoxModule, MaskedTextBoxModule } from '@syncfusion/ej2-angular-inputs';
//import { DialogModule } from '@syncfusion/ej2-angular-popups';
//import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
//import { ListViewModule } from '@syncfusion/ej2-angular-lists';
//import { ChartModule } from '@syncfusion/ej2-angular-charts';
//import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { LoginComponent } from './login/login.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import{ToastrModule} from 'ngx-toastr';
import { IntegrationComponent } from './integration/integration.component';



@NgModule({
  declarations: [
    AppComponent,
    UserSignupComponent,
    SplashScreenComponent,
    ZoomIntegrationComponent,
    ZoomComponent,
    CalendarComponent,
    MainComponent,
    LoginComponent,
    IntegrationComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true}),
MatCardModule,MatInputModule,MatFormFieldModule,MatIconModule,MatButtonModule, MatSliderModule,
    ReactiveFormsModule,
    ScheduleModule,
    RecurrenceEditorModule,
    //DropDownListModule,
    //TreeViewModule,
    //DialogModule,
    //CheckBoxModule,
    //ToastModule,
    HttpClientModule,
    //TextBoxModule, MaskedTextBoxModule,

    //MultiSelectModule,
    //ComboBoxModule,
   // ButtonModule,
    //SwitchModule,
    //SplitButtonModule,
    //RadioButtonModule,
    DatePickerModule,
    TimePickerModule,
    //ListViewModule,
    //SidebarModule,
    //ChartModule,
    FormsModule

  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy }],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
