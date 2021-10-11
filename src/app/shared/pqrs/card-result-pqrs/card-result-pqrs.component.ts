import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { RequestPqrsPopulate } from "app/shared/models/RequestPqrs";
import { ResponseRequest } from 'app/shared/models/ResponseRequest';
import { PqrApiService } from 'app/shared/services/pqr-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-card-result-pqrs",
  templateUrl: "./card-result-pqrs.component.html",
  styleUrls: ["./card-result-pqrs.component.scss"],
})
export class CardResultPqrsComponent implements OnInit, OnChanges {
  @Input() pqr: RequestPqrsPopulate;
  responsePqr: ResponseRequest;

  constructor(
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnChanges() {
    if (this.pqr) {
      this.getResponse();
    }
  }

  ngOnInit(): void {}

  private getResponse(): void {
    this.spinner.show();
    this.pqrApi.getRepsonseByIdRequest(this.pqr?._id).subscribe(da => {
      this.responsePqr = da?.data;
      this.spinner.hide();

    }, err => {
      this.toastr.error('Ha ocurrido un error obteniendo la respuesta');
      this.spinner.hide();
    })
  }
}
