import { Component, ViewChild } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthUserService } from "app/shared/services/auth-user.service";
import { PqrApiService } from "app/shared/services/pqr-api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"],
})
export class LoginPageComponent {
  loginFormSubmitted = false;
  isLoginFailed = false;

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(
    private router: Router,
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private authUserRol: AuthUserService
  ) {}

  get lf() {
    return this.loginForm.controls;
  }

  // On submit button click
  onSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const values = this.loginForm?.value;
    this.spinner.show();
    this.pqrApi
      .login({ username: values?.username, password: values?.password })
      .subscribe(
        (log) => {
          this.authUserRol.setRolAuth = log;
          if (log?.data?.admin) {
            this.spinner.hide();
            this.router.navigate(["/dashboard"]);
            return;
          }
          this.spinner.hide();
          this.router.navigate(["/assigned-to-me"]);
        },
        (err) => {
          this.spinner.hide();
          this.toastrService.error(
            "Usuario/Contraseña no válidos",
            "Login fallido"
          );
        }
      );
  }
}
