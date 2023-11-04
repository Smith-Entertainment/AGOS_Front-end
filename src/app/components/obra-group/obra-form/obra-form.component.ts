import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Bairro } from 'src/app/models/bairro-model/bairro';
import { Obra } from 'src/app/models/obra-model/obra';
import { Tipo } from 'src/app/models/tipo-enum/tipo';
import { BairroService } from 'src/app/service/bairro-service/bairro.service';
import { ObraService } from 'src/app/service/obra-service/obra.service';

@Component({
  selector: 'app-obra-form',
  templateUrl: './obra-form.component.html',
  styleUrls: ['./obra-form.component.scss']
})
export class ObraFormComponent {

  constructor(private http: HttpClient) { }

  @Input() obra: Obra = new Obra();
  @Input() bairro: Bairro = new Bairro
  @Output() return = new EventEmitter<Obra>();

  service = inject(ObraService);
  bairroService = inject(BairroService);

  tipos = Tipo;

  maskCEP(event: any) {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    const maxLength = 8;
    const truncatedValue = numericValue.slice(0, maxLength);
    this.obra.cep = truncatedValue;
    if (truncatedValue.length === maxLength) {
      this.getCEPInfo(truncatedValue);
    }
  }
  getCEPInfo(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    this.http.get(url).subscribe((data: any) => {
      this.bairro.nome = data.bairro;
      this.obra.rua = data.logradouro;
    });
  }

  save() {
    if (this.obra.id) {
      this.service.update(this.obra.id, this.obra).subscribe(response => {
        console.log('Obra atualizada com sucesso', response);
      });
    } else {
      this.bairroService.findByNome(this.bairro.nome).subscribe(existingBairro => {
        if (existingBairro != null) {  
          this.obra.bairro = existingBairro;
          this.createObra();
        } else {
          this.bairroService.create(this.bairro).subscribe(response => {
            this.bairroService.findByNome(this.bairro.nome).subscribe(find => {
              this.obra.bairro = find;
              this.createObra();
            });
          });

        }
      });
    }
  }

  createObra() {
    this.service.create(this.obra).subscribe(response => {
      console.log('Obra criada com sucesso', response);
    });
  }

}
