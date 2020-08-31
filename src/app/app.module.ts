import { routing, appRoutingProdivers } from './app.routing';
import { AppRoutingModule } from './app-routing.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule } from "@angular/forms";

import { Catalogo_Component } from  './components/catalogo/catalogo.component';
import { Add_ProductoComponent } from  './components/addProducto/addProducto.component';
import { ListadoProductos_Component } from  './components/listadoproductos/listadoproductos.component';
import { ConexionService } from './services/conexion.service';
import { AuthService } from './services/auth.service';

//import { AuthGuard } from './services/auth-guard.service';


import { AdministracionComponent } from  './components/administracion/administracion.component';
import { LoginComponent } from  './components/login/login.component';
import { NavbarComponent } from  './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent, Catalogo_Component, Add_ProductoComponent, ListadoProductos_Component, AdministracionComponent, LoginComponent, NavbarComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
  routing,
  ],
  providers: [ConexionService, appRoutingProdivers, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
