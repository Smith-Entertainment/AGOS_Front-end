import { Component, inject } from '@angular/core';
import { Obra } from 'src/app/models/obra';
import { ObraService } from 'src/app/service/obra.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  obraService = inject(ObraService);

  obras: Array<Obra> = new Array<Obra>();

  constructor(){
    this.findAll();
    console.log(this.obras);
  }

  findAll(){
    this.obraService.findAll().subscribe({
      next: response => {this.obras = response},
      error: erro => console.log(erro)
    });
  }
}
