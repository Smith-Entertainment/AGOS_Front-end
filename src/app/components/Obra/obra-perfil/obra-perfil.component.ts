import { Component } from '@angular/core';
import { Obra } from 'src/app/models/obra';
import { ObraService } from 'src/app/service/obra.service';

@Component({
  selector: 'app-obra-perfil',
  templateUrl: './obra-perfil.component.html',
  styleUrls: ['./obra-perfil.component.scss']
})
export class ObraPerfilComponent {
  obra !: Obra;

  constructor(private obraService: ObraService) {
    this.obraService.findById(1).subscribe((data) => {
      console.log(data); 
      this.obra = data;
    });
  }
}