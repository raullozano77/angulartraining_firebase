import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
//Componentes
import { AuthGuard } from './services/auth-guard.service';
import { AdministracionComponent } from "./components/administracion/administracion.component";
import { LoginComponent } from "./components/login/login.component";
import { ListadoProductos_Component } from  './components/listadoproductos/listadoproductos.component';

//Definir las rutas
const appRoutes: Routes = [
  //cuando la ruta está vacía
  { path: '', component: ListadoProductos_Component },
  //cuando se pone el nombre del componente en la ruta
  //{ path: "home", component: HomeComponent },
  { path: 'home', component: ListadoProductos_Component },
  {
    path: 'administracion',
    component: AdministracionComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },

  //Cuando que no existe
  { path: '**', component: ListadoProductos_Component }
];

export const appRoutingProdivers: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
