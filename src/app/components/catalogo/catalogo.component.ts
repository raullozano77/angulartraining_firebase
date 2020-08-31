import { ConexionService } from './../../services/conexion.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfases/producto';

export interface ProductoId extends Producto {
  id: string;
}

@Component({
  selector: 'catalogoComponent',
  templateUrl: './catalogo.component.html'
}

) export class Catalogo_Component implements OnInit {
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
    this.titulo = 'Catalogo';
    this._conexion.listaProductos().subscribe(
      data => {
        this.productos = data
      },
      err => console.log(err)
    );
  }

  // Hook es un evento que sucede en alguna parte del ciclo de vida del componente
  // Ocurre cuando inicia el componente, y solo al inicio
  ngOnInit() {
    console.log();
  }

  eliminar(producto: any) {
    console.log('Estoy en eliminar');
    this._conexion.deleteProducto(producto);
  }

  editar(producto: any) {
    this.productoEditar = producto;
    console.log("this.productoEditar: ", this.productoEditar);
  }

  agregarProductoEditado() {
    console.log('En agregarProductoEditado');
    // this.productoEditar = producto;
    this._conexion.editProducto(this.productoEditar);
  }

}
