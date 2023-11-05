import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Bairro } from 'src/app/models/bairro-model/bairro';
import { Obra } from 'src/app/models/obra-model/obra';
import { Situacao } from 'src/app/models/situacao-enum/situacao';
import { Tipo } from 'src/app/models/tipo-enum/tipo';
import { BairroService } from 'src/app/service/bairro-service/bairro.service';
import { ObraService } from 'src/app/service/obra-service/obra.service';

@Component({
  selector: 'app-obra-form',
  templateUrl: './obra-form.component.html',
  styleUrls: ['./obra-form.component.scss']
})
export class ObraFormComponent {

  constructor(
    private http: HttpClient,
    private service: ObraService,
    private bairroService: BairroService
  ) {}

  @Input() obra: Obra = new Obra();
  @Input() bairro: Bairro = new Bairro
  @Output() return = new EventEmitter<Obra>();


  tipos = Tipo;
  situacoes = Situacao;

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
    if (this.obra.id != null) {
      this.update();
    } else {
      this.create();
    }
  }


  create() {
    this.bairroService.findByNome(this.bairro.nome).subscribe(
      response => {
        this.obra.bairro = response;
        console.log(this.obra);
        this.post();
      }, Error => {
        this.bairroService.create(this.bairro).subscribe(
          response => {
            this.obra.bairro = response;
            console.log(this.obra);
            this.post();
          }
        )
      }
    )
  }
  update() {
    this.bairroService.findByNome(this.bairro.nome).subscribe(
      response => {
        this.obra.bairro = response;
        console.log(this.obra);
        this.put();
      }, Error => {
        this.bairroService.create(this.bairro).subscribe(
          response => {
            this.obra.bairro = response;
            console.log(this.obra);
            this.put();
          }
        )
      }
    )
  }


  post() {
    this.service.create(this.obra).subscribe(
      response => {
        console.log('Obra criada com sucesso', response);
      }, error => {
        console.log(this.obra);
      }
    );
  }

  put() {
    this.service.update(this.obra.id, this.obra).subscribe(
      response => {
        console.log('Obra atualizada com sucesso', response);
      },error => {
        console.error('Falha ao atualizar a obra.', error);
      }
    );
  }
  

}
