import { Component, OnInit } from '@angular/core';
import { Sitios } from '../../models/sitios';
import { ARREGLO_SITIOS } from '../../mocks/sitios-mock';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  public sitioSeleccionado: Sitios;
  public sitioArreglo: Sitios[];

  constructor() {
    this.sitioSeleccionado = new Sitios(0, '', 0, 0);
    this.sitioArreglo = ARREGLO_SITIOS;
  }

  ngOnInit(): void {}

  public seleccionar(tmpSitio: Sitios): void {
    this.sitioSeleccionado = tmpSitio;
  }

  public cancelar(): void {
    this.sitioSeleccionado = new Sitios(0, '', 0, 0);
  }

  public procesarSitio(): void {
    if (this.sitioSeleccionado.cod_sitio === 0) {
      this.sitioSeleccionado.cod_sitio = this.sitioArreglo.length + 1;
      this.sitioArreglo.push(this.sitioSeleccionado);
    }
    this.sitioSeleccionado = new Sitios(0, '', 0, 0);
  }

  public eliminarSitio(): void {
    if(confirm("¿En realidad quieres eliminar el sitio?")) {
      this.sitioArreglo = this.sitioArreglo.filter(elemento => elemento != this.sitioSeleccionado);
      this.sitioSeleccionado = new Sitios(0, '', 0, 0);
    }
  }
}
