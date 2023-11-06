import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Obra } from 'src/app/models/obra';
import { ObraService } from 'src/app/service/obra.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  obraService = inject(ObraService);
  route = inject(ActivatedRoute);

  listType!: string | null;

  obras: Array<Obra> = new Array<Obra>();

  constructor(){
    this.route.paramMap.subscribe(params => {
      this.listType = params.get("type");
    })

    if(this.listType == "obra"){
      this.findAllObras();
    }
  }

  findAllObras(){
    this.obraService.findAll().subscribe({
      next: response => {this.obras = response},
      error: erro => console.log(erro)
    });
  }
}
