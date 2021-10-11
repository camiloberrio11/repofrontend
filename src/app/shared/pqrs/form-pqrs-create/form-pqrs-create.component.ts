import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Journey } from "app/shared/models/Journey";
import { TypeDocument } from "app/shared/models/TypeDocument";
import { TypeRequest } from "app/shared/models/TypeRequest";
import { TypeSubrequest } from "app/shared/models/TypeSubrequest";
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
  formCreatePqr: FormGroup;

  constructor(
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.getTypeDocument();
    this.getTypeRequest();
    this.getSubtypeRequest();
    this.getJourneys();
    this.buildForm();
  }

  onChange(event: string, formControl: string): void {
    this.formCreatePqr.patchValue({
      [formControl]: event,
    });
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

  private buildForm(): void {
    this.formCreatePqr = new FormGroup({
      codeRequestType: new FormControl("", Validators.required),
      codeRequestSubtype: new FormControl(""),
      attachmentOne: new FormControl("", Validators.required),
      attachmentTwo: new FormControl(""),
      attachmentThree: new FormControl(""),
      sideVehicle: new FormControl(""),
      idVehicle: new FormControl("", Validators.required),
      detail: new FormControl("", Validators.required),
      origin: new FormControl("", Validators.required),
      departure: new FormControl(""),
      documentTypeSender: new FormControl("", Validators.required),
      idSender: new FormControl("", Validators.required),
      nameSender: new FormControl("", Validators.required),
      addressSender: new FormControl("", Validators.required),
      emailSender: new FormControl("", Validators.required),
      phoneSender: new FormControl(""),
    });
  }
}
