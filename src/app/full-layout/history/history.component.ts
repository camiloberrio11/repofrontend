import { Component, OnInit, ViewChild } from "@angular/core";
import { RequestPqrsPopulate } from "../../shared/models/RequestPqrs";
import { PqrApiService } from "app/shared/services/pqr-api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { BodyRequestByStatus } from "../../shared/models/RequestPqrs";
import { Router } from "@angular/router";
import { AuthUserService } from "app/shared/services/auth-user.service";
@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"],
})
export class HistoryComponent implements OnInit {
  listHistoryPqrs: RequestPqrsPopulate[] = [];
  currentPage = 1;
  totalItems = 0;

  constructor(
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private router: Router,
    private userService: AuthUserService
  ) {}

  ngOnInit(): void {
    this.getHistoryPqrs();
  }

  open(item: RequestPqrsPopulate) {
    this.router.navigate(["/history/detail"], { state: { pqrDetail: item } });
  }

  loadPage(event: number): void {
    this.currentPage = event;
    this.getHistoryPqrs();
  }

  private getHistoryPqrs(): void {
    this.spinner.show();
    const infoUser = this.userService.authRolUser?.data;
    const body: BodyRequestByStatus = {
      page: this.currentPage,
      limit: 10,
      closed: true,
      admin: infoUser?.admin,
      user: infoUser?.user,
    };
    this.pqrApi.getRequestByStatus(body).subscribe(
      (st) => {
        this.totalItems = +st.message;
        this.listHistoryPqrs = st?.data;
        this.spinner.hide();
      },
      (err) => {
        this.spinner.hide();
      }
    );
  }
}
