import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1SobremiComponent } from './componente1-sobremi/componente1-sobremi.component';
import { Componente2ContactoComponent } from './componente2-contacto/componente2-contacto.component';
import { Componente3CurriculumComponent } from './componente3-curriculum/componente3-curriculum.component';
import { Componente4HomeComponent } from './componente4-home/componente4-home.component';

const routes: Routes = [
  {path:'',component:Componente4HomeComponent},
  {path:'sobremi',component:Componente1SobremiComponent},
  {path:'contacto',component:Componente2ContactoComponent},
  {path:'curriculum',component:Componente3CurriculumComponent},
  {path:'home',component:Componente4HomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
