import { Component, OnInit } from "@angular/core";
import { TypeDocument } from "app/shared/models/TypeDocument";
import { PqrApiService } from "app/shared/services/pqr-api.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-form-pqrs-create",
  templateUrl: "./form-pqrs-create.component.html",
  styleUrls: ["./form-pqrs-create.component.scss"],
})
export class FormPqrsCreateComponent implements OnInit {
  listTypeDocument: TypeDocument[] = [];
  constructor(
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getTypeDocument();
  }

  getTypeDocument(): void {
    this.spinner.show();
    this.pqrApi.getTypeDocument().subscribe(
      (data) => {
        this.listTypeDocument = data?.data;
        this.spinner.hide();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
