import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PlayersComponent } from './players/players.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ServiceWorkerModule } from '@angular/service-worker';



@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      FooterComponent,
      PlayersComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
