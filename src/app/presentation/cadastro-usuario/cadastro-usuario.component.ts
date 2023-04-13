import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UsuarioModel } from 'src/app/model/usuario-model.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
})
export class CadastroUsuarioComponent {
  mensagem = "";
  public formCadastro!: FormGroup;

  constructor(
    public dialog: MatDialog,
    private _formBuilder: FormBuilder,
    public snackBar: MatSnackBar,


  ) { }

  ngOnInit() {
    this.setFormCadastro();
  }

  setFormCadastro(){
    this.formCadastro = this._formBuilder.group({
      nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.minLength(10)]),
      permissao: new FormControl('', [Validators.required])
    });

  }


  get form(): any {
    return this.formCadastro.controls;
  }


  saveLocalStorage(formName: any){
    localStorage.setItem('formCadastro', JSON.stringify(formName));
  }

  getFormModel(){
    let model = new UsuarioModel();
    var formCadastro = this.formCadastro.value;

    model.nome =  formCadastro.nome;
    model.email =  formCadastro.email;
    model.permissao =  formCadastro.permissao;

    this.saveLocalStorage(model);

  }


  onSubmit()  {
    this.getFormModel();
    this.snackBar.open('Cadastro realizado com sucesso!', '', { duration: 1000 });

  }

  clear()  {
    this.mensagem = "";
  }



}

