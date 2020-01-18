import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExpirienceComponent } from './expirience/expirience.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
   declarations: [
      AppComponent,
      AboutComponent,
      ContactComponent,
      ExpirienceComponent,
      HomeComponent,
      IntroComponent,
      SkillsComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
