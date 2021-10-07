import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { PerfilComponent } from 'src/pages/perfil/perfil.component';
import { RegisterComponent } from 'src/pages/register/register.component';
import { CardComponent } from 'src/pages/card/card.component';
import { Card2Component } from 'src/pages/card2/card2.component';
import { Card3Component } from 'src/pages/card3/card3.component';
import { WelcomeComponent } from 'src/pages/welcome/welcome.component';
import { FavComponent } from 'src/pages/favorito/fav.component';

@NgModule({
  declarations: [AppComponent , LoginComponent , MainComponent, PerfilComponent, 
                RegisterComponent, CardComponent, WelcomeComponent, FavComponent,
                Card2Component, Card3Component],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
