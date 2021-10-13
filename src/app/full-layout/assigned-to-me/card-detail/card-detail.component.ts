import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { RequestPqrsPopulate } from "app/shared/models/RequestPqrs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BodyResponseRequest } from "app/shared/models/ResponseRequest";
import { PqrApiService } from "app/shared/services/pqr-api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-card-detail",
  templateUrl: "./card-detail.component.html",
  styleUrls: ["./card-detail.component.scss"],
})
export class CardDetailComponent implements OnInit {
  pqrDetail: RequestPqrsPopulate;
  formResponsePqr: FormGroup;

  constructor(
    private location: Location,
    private router: Router,
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    const state: any = this.location.getState();
    if (!state?.pqrInfo) {
      this.router.navigate(["/assigned-to-me"]);
      return;
    }
    this.formBuild();
    this.pqrDetail = state?.pqrInfo;
  }

  handleCancel(): void {
    this.router.navigate(["/assigned-to-me"]);
  }

  handleAssign(): void {
    
  }

  handleSubmit(): void {
    const values = this.formResponsePqr.value;
    const body: BodyResponseRequest = {
      answer: values?.answer,
      attachmentOne: values?.attachmentOne,
      attachmentTwo: values?.attachmentTwo,
      attachmentThree: values?.attachmentThree,
    };
    this.spinner.show();
    this.pqrApi.responseRequest(body, this.pqrDetail?._id).subscribe(
      (upd) => {
        this.toastr.success(
          `Ha sido actualizaada con éxito la solicitud ${this.pqrDetail?.Id}`
        );
        this.spinner.hide();
        this.router.navigate(["/assigned-to-me"]);
      },
      (err) => {
        this.toastr.error("Ha ocurrido un error actualizando esta solicitud");
        this.spinner.hide();

      }
    );
  }

  private formBuild(): void {
    this.formResponsePqr = new FormGroup({
      answer: new FormControl("", Validators.required),
      attachmentOne: new FormControl(""),
      attachmentTwo: new FormControl(""),
      attachmentThree: new FormControl(""),
    });
  }
}
