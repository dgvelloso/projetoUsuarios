import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-fale-conosco',
  templateUrl: './fale-conosco.component.html',
})
export class FaleConoscoComponent {

  mensagem = "";

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  formFaleConosco = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mensagem: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formFaleConosco.controls;
  }

  onSubmit()  {
    this.dialog.open(FaleConoscoDialog);
  }

  clear()  {
    this.mensagem = "";
  }

}

@Component({
  selector: 'fale-conosco-dialog',
  templateUrl: 'fale-conosco-dialog.component.html',
})
export class FaleConoscoDialog {}

