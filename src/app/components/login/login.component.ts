import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  constructor(public _authS: AuthService) {

    console.log();
  }

   ngOnInit() {}


  ingresar() {
    this._authS.login();

  }

  salir() {
    this._authS.logout();
  }
}
