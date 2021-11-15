import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CardComponent } from 'src/pages/card/card.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { PerfilComponent } from 'src/pages/perfil/perfil.component';
import { WelcomeComponent } from 'src/pages/welcome/welcome.component';
import { RegisterComponent } from 'src/pages/register/register.component';
import { FavComponent } from 'src/pages/favorito/fav.component';
import { Card2Component } from 'src/pages/card2/card2.component';
import { Card3Component } from 'src/pages/card3/card3.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'main',
    component: MainComponent
  }, {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'card',
    component: CardComponent
  },
   {
    path: 'card2',
    component: Card2Component
  },
  {
    path: 'card3',
    component: Card3Component
  },
    
  

  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'fav',
    component: FavComponent
  },
  {
    path: 'dato',
    loadChildren: () => import('./dato/dato.module'). then( m => m.DatoModule)
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
