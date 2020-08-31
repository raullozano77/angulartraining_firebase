import { ConexionService } from './../../services/conexion.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfases/producto';

export interface ProductoId extends Producto {
  id: string;
}

@Component({
  selector: "home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  public titulo: string;
  productos: any;
  productoEditar: any = {
    nombre: '',
    marca: '',
    precio: ''
  };

  constructor(
    private _conexion: ConexionService

  ) {
    this.titulo = 'listadoproductos';
    this._conexion.listaProductos().subscribe(
      data => {
        this.productos = data,
        console.log(this.productos)
      },
      err => console.log(err)
    );
  }

  // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {
    console.log();
  }
}
