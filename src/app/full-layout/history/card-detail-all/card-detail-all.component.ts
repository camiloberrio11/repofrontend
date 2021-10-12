import { Component, OnInit } from "@angular/core";
import { RequestPqrsPopulate } from "app/shared/models/RequestPqrs";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { PqrApiService } from "app/shared/services/pqr-api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ResponseRequest } from 'app/shared/models/ResponseRequest';
@Component({
  selector: "app-card-detail-all",
  templateUrl: "./card-detail-all.component.html",
  styleUrls: ["./card-detail-all.component.scss"],
})
export class CardDetailAllComponent implements OnInit {
  pqrDetail: RequestPqrsPopulate;
  reponseToPqr: ResponseRequest;

  constructor(
    private location: Location,
    private router: Router,
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    const state: any = this.location.getState();
    if (!state?.pqrDetail) {
      this.router.navigate(["/history"]);
      return;
    }
    this.pqrDetail = state?.pqrDetail;
    this.getResponseByIdRequest();
  }

  goBack(): void {
    this.router.navigate(["/history"]);
  }

  private getResponseByIdRequest(): void {
    this.spinner.show();
    this.pqrApi.getRepsonseByIdRequest(this.pqrDetail?._id).subscribe(
      (inf) => {
        this.reponseToPqr = inf.data;
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
        console.log(err);
      }
    );
  }
}
