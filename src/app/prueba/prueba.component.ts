import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PERSONAS } from '../mockup'

@Component({
  selector: 'prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
hola:String;
mostrar:boolean;
modelo:String;
personas:Array<Persona>;

  constructor() {
    this.mostrar = true;
    this.modelo = "asd";

    this.personas = PERSONAS;
   }

  ngOnInit() {
    this.hola = "Hola";
  }

  prueba() {
    this.mostrar = !this.mostrar;
  }

}
