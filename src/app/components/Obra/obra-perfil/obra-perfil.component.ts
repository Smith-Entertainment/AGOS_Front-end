import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Obra } from 'src/app/models/obra-model/obra';
import { ObraService } from 'src/app/service/obra-service/obra.service';

@Component({
  selector: 'app-obra-perfil',
  templateUrl: './obra-perfil.component.html',
  styleUrls: ['./obra-perfil.component.scss']
})
export class ObraPerfilComponent {
  obra!: Obra;

  constructor(
    private obraService: ObraService ,
    private route: ActivatedRoute // Injete o ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      const obraId = params['id']; 
      this.obraService.findById(obraId).subscribe((data) => {
        console.log(data);
        this.obra = data;
      });
    });
  }
}
