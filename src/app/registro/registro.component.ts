import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
  @Input() btnColor !: string;
  @Output() newItenEvent = new EventEmitter<string>();
    
    onEnviar(nombre: string,dni: string,estadocivil: string){
      let objUser = {
        "Nombre":nombre,
        "Dni":dni,
        "Estado civil":estadocivil,
      }
      this.newItenEvent.emit(JSON.stringify(objUser));
    }

}
