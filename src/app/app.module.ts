import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { MainContainerComponent } from '@core/components/main-container/main-container.component';
import { FooterComponent } from '@core/components/footer/footer.component';
import { SidebarComponent } from '@core/components/sidebar/sidebar.component';
import {HeaderComponent} from "@core/components/header/header.component";


@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
