import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FireBaseApp';
  usuario: boolean = false;

  constructor() {
    console.log();
   }

   toggleUsuario(){
     this.usuario = (this.usuario) ? false : true;
   }


}
