import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {

  }

  get historial(){
    return this.gifsService.historial;
  }

  buscar(buscado){
    this.gifsService.buscarGifs(buscado);
  }

}
