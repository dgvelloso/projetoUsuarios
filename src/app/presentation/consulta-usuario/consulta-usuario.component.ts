import { Component, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { UsuarioModel } from 'src/app/model/usuario-model.model';

@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',

})
export class ConsultaUsuarioComponent implements OnInit {

  pagina = 1;
  usuarioModel = new UsuarioModel();
  usuario!: any;

    currentPage = 1;
  pageSize = 20;

  ngOnInit(){
   this.getLocalSavedSteps();
  }

  isEmptyObject(obj: any) {
    return obj && Object.keys(obj).length === 0;
  }

  getLocalSavedSteps(){
    var formCadastro = JSON.parse(localStorage.getItem('formCadastro') || '{}');

    if(!this.isEmptyObject(formCadastro)){
      this.usuarioModel.nome = formCadastro.nome;
      this.usuarioModel.email = formCadastro.email;
      this.usuarioModel.permissao = formCadastro.permissao;
    }

    this.usuario = formCadastro;
    return
  }

  handlePageChange(event:any):void {
    this.pagina = event;
  }

}
