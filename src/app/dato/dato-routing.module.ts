import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarComponent } from './buscar/buscar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { ListarComponent } from './listar/listar.component';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
  {
    path: '',
    component: ListarComponent
  },
  {
    path: ':id',
    component: BuscarComponent
  },
  {
    path: 'modificar/:id',
    component: ModificarComponent
  },
  {
    path: 'eliminar/:id',
    component: EliminarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatoRoutingModule { }
