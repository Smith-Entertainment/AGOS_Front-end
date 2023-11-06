import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Bairro } from 'src/app/models/bairro-model/bairro';
import { Empresa } from 'src/app/models/empresa-model/empresa';
import { Obra } from 'src/app/models/obra-model/obra';
import { BairroService } from 'src/app/service/bairro-service/bairro.service';
import { EmpresaService } from 'src/app/service/empresa-service/empresa.service';
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
    private bairroService: BairroService,
    private empresaService: EmpresaService,
  ) { }

  @Output() retorno = new EventEmitter<Obra>();
  @Input() obra: Obra = new Obra();
  bairro: Bairro = new Bairro();
  empresa: Empresa = new Empresa();

  tipos = ['EDUCACAO', 'INFRAESTRUTURA', 'SAUDE'];
  situacoes = ['EM_HOMOLOGACAO', 'EM_ANDAMENTO', 'ENTREGUE', 'PARALISADA'];

  sucesso: boolean = false;
  erro: boolean = false;
  mensagem !: string;


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
    this.bairroService.findByNome(this.bairro.nome).subscribe(
      response => {
        this.obra.bairro = response;
        console.log(this.obra);
        if (this.obra.id == null) {
          this.post();
        } else {
          this.put();
        }
      }, Error => {
        this.bairroService.create(this.bairro).subscribe(
          response => {
            this.obra.bairro = response;
            console.log(this.obra);
            if (this.obra.id == null) {
              this.post();
            } else {
              this.put();
            }
          }, error => {
            this.mensagem = "Status: " + error.status;
            this.erro = true;
            setTimeout(() => {
              this.erro = false;
            }, 1000);
          }
        )
      }
    )
  }

  post() {
    this.service.create(this.obra).subscribe(
      response => {
        this.sucesso = true;
        this.mensagem = "Sucesso..." ;
        setTimeout(() => {
          this.sucesso = false;
        }, 1000);
      }, error => {
        console.log(this.obra);
        this.mensagem = "Status: " + error.status;
        this.erro = true;
        setTimeout(() => {
          this.erro = false;
        }, 1000);
      }
    );
  }

  put() {
    this.fabric();
    this.service.update(this.obra.id, this.obra).subscribe(
      response => {
        this.sucesso = true;
        this.mensagem = "Sucesso..." ;
        setTimeout(() => {
          this.sucesso = false;
        }, 1000);
      }, error => {
        console.log(this.obra);
        this.mensagem = "Status: " + error.status;
        this.erro = true;
        setTimeout(() => {
          this.erro = false;
        }, 1000);
      }
    );
  }

  fabric() {
    this.empresaService.findByCNPJ(this.empresa.cnpj).subscribe(
      response => {
        this.obra.empresaContratada = response;
      }, error => {
        this.empresaService.create(this.empresa).subscribe(
          response => {
            this.obra.empresaContratada = response;
          }
        );
      });

  }
}