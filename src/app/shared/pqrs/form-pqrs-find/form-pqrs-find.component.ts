import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { PqrApiService } from "app/shared/services/pqr-api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-form-pqrs-find",
  templateUrl: "./form-pqrs-find.component.html",
  styleUrls: ["./form-pqrs-find.component.scss"],
})
export class FormPqrsFindComponent implements OnInit {
  formFindPqr: FormGroup;

  constructor(
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  findPqr(): void {
    const values = this.formFindPqr.value;
    this.spinner.show();
    this.pqrApi.getPqrByCodes(values?.codePqrs, values?.idSender).subscribe(
      (suc) => {
        if (!suc?.data) {
          this.toastr.error('No hemos encontrado una solicitud con los parámetros dados');
          return;
        }
        if (!suc?.data?.Finally) {
          this.toastr.info('Hemos encontrado tu solicitud, pero aún se encuentra en revisión por uno de nuestros agentes');
          return;
        }
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();

        this.toastr.error(
          "No hemos encontrado una solicitud con los datos dados"
        );
      }
    );
  }

  private buildForm(): void {
    this.formFindPqr = new FormGroup({
      codePqrs: new FormControl("", Validators.required),
      idSender: new FormControl("", Validators.required),
    });
  }
}
