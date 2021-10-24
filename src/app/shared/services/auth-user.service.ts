import { Injectable } from "@angular/core";
import { ResponseLoginService } from "../models/Login";

@Injectable({
  providedIn: "root",
})
export class AuthUserService {
  private rolUserAuth: ResponseLoginService;

  constructor() {}

  set setRolAuth(newRol: ResponseLoginService) {
    this.rolUserAuth = newRol;
  }

  get authRolUser(): ResponseLoginService {
    return this.rolUserAuth;
  }
}
