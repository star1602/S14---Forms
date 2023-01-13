import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  Registro: string =""
  onSuccess(elemento:any){
    this.Registro = elemento;
  }
}
