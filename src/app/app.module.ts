import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ConsultaUsuarioComponent } from './presentation/consulta-usuario/consulta-usuario.component';
import { QuemSomosComponent } from './presentation/quem-somos/quem-somos.component';
import { FaleConoscoComponent } from './presentation/fale-conosco/fale-conosco.component';
import { CadastroUsuarioComponent } from './presentation/cadastro-usuario/cadastro-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HomeComponent } from './presentation/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './material-module';
import { MatCommonModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    ConsultaUsuarioComponent,
    QuemSomosComponent,
    FaleConoscoComponent,
    HomeComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AppRoutingModule,
    MatModule,
    MatGridListModule,
    FontAwesomeModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCommonModule,
    MatButtonModule,
    MatFormFieldModule,
    RouterModule,
    MatPaginatorModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
