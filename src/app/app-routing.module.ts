import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from "./pages/inicio/inicio.component";
import {LoginComponent} from "./pages/login/login.component";
import {NuevaOfertaComponent} from "./pages/nueva-oferta/nueva-oferta.component";
import {OfertaComponent} from "./pages/oferta/oferta.component";
import {OfertasComponent} from "./pages/ofertas/ofertas.component";

const routes: Routes = [
  // Ruta "padre"
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'nueva-oferta',
    component: NuevaOfertaComponent
  },
  {
    path: 'oferta/:id',
    component: OfertaComponent
  },
  {
    path: 'ofertas',
    component: OfertasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
