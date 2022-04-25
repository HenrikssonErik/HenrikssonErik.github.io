import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../app/views/aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { HomePageComponent } from './views/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
