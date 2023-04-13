import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CadastroUsuarioComponent } from "./presentation/cadastro-usuario/cadastro-usuario.component";
import { ConsultaUsuarioComponent } from "./presentation/consulta-usuario/consulta-usuario.component";
import { FaleConoscoComponent } from "./presentation/fale-conosco/fale-conosco.component";
import { HomeComponent } from "./presentation/home/home.component";
import { QuemSomosComponent } from "./presentation/quem-somos/quem-somos.component";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
    { path: 'consulta-usuario', component: ConsultaUsuarioComponent },
    { path: 'quem-somos', component: QuemSomosComponent },
    { path: 'fale-conosco', component: FaleConoscoComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
