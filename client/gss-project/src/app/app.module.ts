import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './views/aboutus/aboutus.component';
import { CalendarComponent } from './views/calendar/calendar.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { PostsComponent } from './components/posts/posts.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { LatestNewsComponent } from './components/side-panel/latest-news/latest-news.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeAboutComponent } from './home-about/home-about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
    CalendarComponent,
    HomePageComponent,
    PostsComponent,
    SidePanelComponent,
    LatestNewsComponent,
    LoginComponent,
    HomeAboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
