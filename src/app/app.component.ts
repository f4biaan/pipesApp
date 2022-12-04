import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'f4biaan';
  numero: number = 10000;
  obj = {
    nombre: 'Fabián',
  }

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.numero);
    console.log(this.obj);
  }
}
