import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component'
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {path:'cadastro',component: CadastroComponent},
    {path:'home', component: HomeComponent},
    {path:'', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CadastroComponent, HomeComponent]
