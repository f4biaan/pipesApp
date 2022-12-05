import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'F4biaan';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  cambiarPersona() {
    this.nombre = 'Susana';
    this.genero = 'femenino';
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Fernando', 'Juan', 'Susana'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'F4biaan',
    edad: 20,
    direccion: 'Moscow, Russia',
  };

  // JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];

  // Async Pipe
  miObservable = interval(1000); // 0,1,2,3,4,5,6,...
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });

}
