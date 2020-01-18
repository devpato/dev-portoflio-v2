import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ExpirienceComponent } from "./expirience/expirience.component";
import { HomeComponent } from "./home/home.component";
import { IntroComponent } from "./intro/intro.component";
import { SkillsComponent } from "./skills/skills.component";
import { MarsComponent } from "./mars/mars.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { AstronautComponent } from "./shared/components/astronaut/astronaut.component";
import { EarthComponent } from './shared/components/earth/earth.component';
import { SaturnComponent } from './shared/components/saturn/saturn.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ExpirienceComponent,
    HomeComponent,
    IntroComponent,
    SkillsComponent,
    MarsComponent,
    NavbarComponent,
    FooterComponent,
    AstronautComponent,
    EarthComponent,
    SaturnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule {}
