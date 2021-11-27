import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from 'src/pages/main/main.component';
import { PerfilComponent } from 'src/pages/perfil/perfil.component';

import { CardComponent } from 'src/pages/card/card.component';
import { Card2Component } from 'src/pages/card2/card2.component';
import { Card3Component } from 'src/pages/card3/card3.component';
import { WelcomeComponent } from 'src/pages/welcome/welcome.component';
import { FavComponent } from 'src/pages/favorito/fav.component';
import { MenuComponent } from './components/menu/menu.component';
import { GoogleMapsModule } from '@angular/google-maps'

import { LoginComponent } from 'src/pages/login/login.component';
import { AgregarComponent } from 'src/pages/agregar/agregar.component';


@NgModule({
  declarations: [AppComponent ,MenuComponent,  MainComponent, LoginComponent, PerfilComponent, 
                AgregarComponent, CardComponent, WelcomeComponent, FavComponent,
                Card2Component, Card3Component],
  entryComponents: [],
  exports: [MenuComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,FormsModule, ReactiveFormsModule,
            GoogleMapsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
