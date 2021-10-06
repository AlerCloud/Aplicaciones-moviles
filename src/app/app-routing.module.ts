import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CardComponent } from 'src/pages/card/card.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { PerfilComponent } from 'src/pages/perfil/perfil.component';
import { WelcomeComponent } from 'src/pages/welcome/welcome.component';
import { RegisterComponent } from 'src/pages/register/register.component';


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
    path: 'Menu-Principal',
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
    path: 'welcome',
    component: WelcomeComponent
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
