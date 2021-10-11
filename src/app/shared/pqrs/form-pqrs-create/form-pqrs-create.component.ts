import { Component, OnInit } from "@angular/core";
import { Journey } from 'app/shared/models/Journey';
import { TypeDocument } from "app/shared/models/TypeDocument";
import { TypeRequest } from 'app/shared/models/TypeRequest';
import { TypeSubrequest } from 'app/shared/models/TypeSubrequest';
import { PqrApiService } from "app/shared/services/pqr-api.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-form-pqrs-create",
  templateUrl: "./form-pqrs-create.component.html",
  styleUrls: ["./form-pqrs-create.component.scss"],
})
export class FormPqrsCreateComponent implements OnInit {
  listTypeDocument: TypeDocument[] = [];
  listTypeRequest: TypeRequest[] = [];
  listSubtypeRequest: TypeSubrequest[] = [];
  listOriginJourney: Journey[] = [];
  listDepartureJourney: Journey[] = [];



  constructor(
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getTypeDocument();
    this.getTypeRequest();
    this.getSubtypeRequest();
    this.getJourneys();
  }

  private getTypeDocument(): void {
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

  private getTypeRequest(): void {
    this.spinner.show();
    this.pqrApi.getTypeRequest().subscribe(
      (data) => {
        this.listTypeRequest = data?.data;
        this.spinner.hide();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private getSubtypeRequest(): void {
    this.spinner.show();
    this.pqrApi.getSubtypeRequest().subscribe(
      (data) => {
        this.listSubtypeRequest = data?.data;
        this.spinner.hide();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  private getJourneys(): void {
    this.spinner.show();
    this.pqrApi.getJourneys().subscribe(
      (data) => {
        this.listOriginJourney = data?.data;
        this.listDepartureJourney = data?.data;

        this.spinner.hide();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
