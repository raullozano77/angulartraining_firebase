import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit {
  public app_name: string = "CotoSoft";
  public isLogged: boolean = true;

  constructor(public _authS: AuthService) { }


  ngOnInit() { }

  salir() {
    this._authS.logout();
  }

}
