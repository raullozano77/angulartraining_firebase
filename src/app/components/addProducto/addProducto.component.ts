import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ConexionService } from './../../services/conexion.service';
import { Producto } from "../../interfases/producto";

@Component({
  selector: 'addProductoComponent',
  templateUrl: './addProducto.component.html'
}

) export class Add_ProductoComponent implements OnInit {
  productos: any;
  productoEditar: any = {
    nombre: '',
    marca: '',
    precio: '',
    uid: ''
  };

  constructor(private _conexion: ConexionService,
    public _authS: AuthService
  ) {
    this._conexion.listaProductos().subscribe(
      data => {
        this.productos = data;
      },
      err => console.log(err)
    );
  }


  ngOnInit() { }

  /*   editar(producto: any) {
      this.productoEditar = producto;
      console.log("this.productoEditar: ", this.productoEditar);
    } */

  agregarProductoEditado() {
    this.productoEditar.uid = this._authS.usuario.uid;
    this._conexion.addProducto(this.productoEditar);
  }
}
