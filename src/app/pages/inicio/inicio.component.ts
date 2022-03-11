import {Component, OnInit} from '@angular/core';
import {Oferta} from 'src/app/model/oferta';
import {OfertaService} from "../../servicios/oferta.service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public ofertas: Array<Oferta> = [];

  constructor(private ofertaSrv: OfertaService) {
  }

  ngOnInit(): void {
    this.recuperarOfertas();
  }

  /**
   * Método que recupera las ofertas.
   */
  recuperarOfertas(): void {
    this.ofertaSrv
      .obtenerOfertas()
      .subscribe(respuesta => {
        this.ofertas = respuesta;
      });
    console.log('Ofertas recuperadas ==>' + JSON.stringify(this.ofertas));
  }


}
