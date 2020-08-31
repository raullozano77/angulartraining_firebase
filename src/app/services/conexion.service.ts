import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../interfases/producto';
//import { map } from "rxjs/operators";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ConexionService {
  private productosCollection: AngularFirestoreCollection<Producto>;
  private productos: Observable<Producto[]>;
  private productosDoc: Observable<Producto[]>;

  //Esto se utiliza para el metodo deleteProducto
  private productoDoc: AngularFirestoreDocument<Producto>;

  constructor(private _afs: AngularFirestore) {
    this.productosCollection = _afs.collection<Producto>("producto");
    //this.productos = this.productosCollection.valueChanges();
    this.productos = this.productosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Producto;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  listaProductos() {
    return this.productos;
  }

  addProducto(producto: Producto) {
    this.productosCollection.add(producto);
  }

  deleteProducto(producto) {
    this.productoDoc = this._afs.doc<Producto>(`producto/${producto.id}`);
    this.productoDoc.delete();
  }

  editProducto(producto) {
    console.log("Producto en editProducto: ", producto);
    this.productoDoc = this._afs.doc<Producto>(`producto/${producto.id}`);
    this.productoDoc.update(producto);
  }


}
