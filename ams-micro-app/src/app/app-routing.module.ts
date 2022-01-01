import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ZoomIntegrationComponent } from './zoom-integration/zoom-integration.component';
import { ZoomComponent } from './zoom/zoom.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { IntegrationComponent } from './integration/integration.component';

const routes: Routes = [
  { path: 'zoomintegration', component: ZoomIntegrationComponent },
  
  { path: '', redirectTo: 'logo', pathMatch: 'full' },
  { path: 'logo', component: SplashScreenComponent },
  { path: 'signup', component: UserSignupComponent },
  //{ path: 'main', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent, 
  children:[
    { path:'calendar', component: CalendarComponent},
    { path: 'joinmeeting', component: ZoomComponent },
    { path: 'integration', component: IntegrationComponent }
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
