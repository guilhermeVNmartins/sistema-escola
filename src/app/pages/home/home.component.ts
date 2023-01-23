import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'sistema-escola-home';
  cursos = [
    {
    codigo: 1,
    nome: 'Angular',
    instrutor: 'Genival',
    local: 'Softex',
    carga: 36,
    inicio: '03/02/2020',
    },
    {
    codigo: 2,
    nome: 'Java',
    instrutor: 'Genival',
    local: 'Softex',
    carga: 60,
    inicio: '06/02/2020',
    },
    {
    codigo: 3,
    nome: 'Python',
    instrutor: 'Genival',
    local: 'Softex',
    carga: 60,
    inicio: '08/02/2020',
    }
    ];
}
