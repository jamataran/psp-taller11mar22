import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { OfertaComponent } from './oferta/oferta.component';
import { LoginComponent } from './login/login.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { NuevaOfertaComponent } from './nueva-oferta/nueva-oferta.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ServiciosModule} from "../servicios/servicios.module";



@NgModule({
  declarations: [
    InicioComponent,
    OfertaComponent,
    LoginComponent,
    OfertasComponent,
    NuevaOfertaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ServiciosModule
  ]
})
export class PagesModule { }
