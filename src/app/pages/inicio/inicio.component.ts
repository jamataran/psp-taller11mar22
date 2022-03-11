import {Component, OnInit} from '@angular/core';
import {Oferta} from 'src/app/model/oferta';
import {OfertaService} from "../../servicios/oferta.service";
import {LoginService} from "../../servicios/login.service";
import {Loginout} from "../../model/loginout";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public hayUsuario: boolean;

  public ofertas: Array<Oferta> = [];

  constructor(private ofertaSrv: OfertaService, private loginSrv: LoginService) {
    this.recuperarOfertas();
    this.hayUsuario = false;
    this.loginSrv.login.subscribe(loginRecibido => {
      console.log('Login recibido' + JSON.stringify(loginRecibido));
      let hayUsuario1 = loginRecibido !== null;
      console.log('hayusuario=' + hayUsuario1);
      this.hayUsuario = hayUsuario1;
    });
  }

  ngOnInit(): void {

  }



  /**
   * Método que recupera las ofertas.
   */
  recuperarOfertas(): void {
    this.ofertaSrv
      .obtenerOfertas()
      .subscribe(respuesta => {
        this.ofertas = respuesta;
        console.log('Ofertas recuperadas ==>' + JSON.stringify(this.ofertas));
      });
  }


}
