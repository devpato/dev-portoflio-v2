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
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { registerLocaleData } from "@angular/common";
import en from "@angular/common/locales/en";
import { AstronautComponent } from "./shared/components/astronaut/astronaut.component";
import { EarthComponent } from "./shared/components/earth/earth.component";
import { SaturnComponent } from "./shared/components/saturn/saturn.component";
import { BannerComponent } from "./shared/components/banner/banner.component";
import { ShipComponent } from "./shared/components/ship/ship.component";
import { SatelliteComponent } from "./shared/components/satellite/satellite.component";
import { VenusComponent } from "./shared/components/venus/venus.component";
import { StarsComponent } from "./shared/components/stars/stars.component";
import { RockComponent } from "./rock/rock.component";
import { MarsComponent } from "./shared/components/mars/mars.component";
import { MoonComponent } from './moon/moon.component';

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
    SaturnComponent,
    BannerComponent,
    ShipComponent,
    SatelliteComponent,
    VenusComponent,
    StarsComponent,
    RockComponent,
    MoonComponent
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
