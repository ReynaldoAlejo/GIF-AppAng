import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {

  @ViewChild('txtBuscar') txtBuscar: ElementRef<
  HTMLInputElement>;

  constructor(private gifService: GifsService) { }

  ngOnInit(): void {
  }

  buscar():void{

    const valor = this.txtBuscar.nativeElement.value;
    if (valor.trim().length === 0) {
      return;
    }
    this.gifService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = '';
  }

}
