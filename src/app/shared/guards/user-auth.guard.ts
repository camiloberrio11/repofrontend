import { Injectable } from "@angular/core";
import { CanLoad, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthUserService } from "../services/auth-user.service";

@Injectable({
  providedIn: "root",
})

export class UserAuthGuard implements CanLoad {
  constructor(
    private authUserService: AuthUserService,
    private router: Router
  ) {}

  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    const existAuthUser = this.authUserService?.authRolUser;
    console.log(existAuthUser)
    if (!existAuthUser) {
      this.router.navigate(["/pages/login"]);
    }
    return !!existAuthUser;
  }
}
