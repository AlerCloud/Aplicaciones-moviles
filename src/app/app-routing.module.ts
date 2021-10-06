import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CardComponent } from 'src/pages/card/card.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { NoteComponent } from 'src/pages/note/note.component';
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
    path: 'Notas',
    component: NoteComponent
  },
  {
    path: 'card',
    component: CardComponent
  }

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
