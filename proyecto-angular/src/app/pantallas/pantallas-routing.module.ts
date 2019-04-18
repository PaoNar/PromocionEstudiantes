import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'pantalla1', loadChildren: './pantallas/pantalla1.module#Pantalla1Module'},
  {path: 'not.found', redirectTo: './pantalla1', pathMatch: 'full'},
  {path: '**', loadChildren: './pantalla1', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantallasRoutingModule { }

