import { Component, OnInit, ViewChild } from "@angular/core";
import { usersListData } from "./users-list.data";
import { RequestPqrsPopulate } from "../../shared/models/RequestPqrs";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { PqrApiService } from "app/shared/services/pqr-api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { BodyRequestByStatus } from "../../shared/models/RequestPqrs";
@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"],
})
export class HistoryComponent implements OnInit {
  listHistoryPqrs: RequestPqrsPopulate[] = [];
  closeResult: string;

  constructor(
    private modalService: NgbModal,
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getHistoryPqrs();
  }

  open(content: any, item: RequestPqrsPopulate) {
    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getHistoryPqrs(): void {
    this.spinner.show();
    const body: BodyRequestByStatus = { page: 1, limit: 10, closed: true };
    this.pqrApi.getRequestByStatus(body).subscribe(st => {
      this.listHistoryPqrs = st?.data;
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
