import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'f4biaan';
  nombreUpper: string = 'F4BIAAN';
  nombreCompleto: string = 'F4biAan monTOya';

  fecha: Date = new Date(); // el día de hoy

}
