import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Componente1SobremiComponent } from './componente1-sobremi/componente1-sobremi.component';
import { Componente2ContactoComponent } from './componente2-contacto/componente2-contacto.component';
import { Componente3CurriculumComponent } from './componente3-curriculum/componente3-curriculum.component';
import { Componente4HomeComponent } from './componente4-home/componente4-home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from'@angular/material/list';




@NgModule({
  declarations: [
    AppComponent,
    Componente1SobremiComponent,
    Componente2ContactoComponent,
    Componente3CurriculumComponent,
    Componente4HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
