import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Journey } from "app/shared/models/Journey";
import { BodyRequestCreatePqr } from "app/shared/models/RequestPqrs";
import { TypeDocument } from "app/shared/models/TypeDocument";
import { TypeRequest } from "app/shared/models/TypeRequest";
import { TypeSubrequest } from "app/shared/models/TypeSubrequest";
import { PqrApiService } from "app/shared/services/pqr-api.service";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from 'ngx-toastr';

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
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getTypeDocument();
    this.getTypeRequest();
    this.getSubtypeRequest();
    this.getJourneys();
    this.buildForm();
  }

  onSubmit(): void {
    const values = this.formCreatePqr.value;
    const body: BodyRequestCreatePqr = {
      codeRequestType: values?.codeRequestType,
      codeRequestSubtype: values?.codeRequestSubtype,
      attachmentOne: values?.attachmentOne,
      attachmentTwo: values?.attachmentTwo,
      attachmentThree: values?.attachmentThree,
      sideVehicle: values?.sideVehicle,
      idVehicle: values?.idVehicle,
      detail: values?.detail,
      origin: values?.origin,
      departure: values?.departure,
      documentTypeSender: values?.documentTypeSender,
      idSender: values?.idSender,
      nameSender: values?.nameSender,
      addressSender: values?.addressSender,
      emailSender: values?.emailSender,
      phoneSender: values?.phoneSender,
    };
    this.spinner.show();
    this.pqrApi.createPqrs(body).subscribe(
      (cre) => {
        this.toastr.success('Se ha creado con éxito tu solicitud');
        this.spinner.hide();
      },
      (err) => {
        this.toastr.error('Ha ocurrido un error creando tu PQRS');
        this.spinner.hide();
      }
    );
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
      codeRequestSubtype: new FormControl("", Validators.required),
      attachmentOne: new FormControl(""),
      attachmentTwo: new FormControl(""),
      attachmentThree: new FormControl(""),
      sideVehicle: new FormControl(""),
      idVehicle: new FormControl(""),
      detail: new FormControl("", Validators.required),
      origin: new FormControl("", Validators.required),
      departure: new FormControl("", Validators.required),
      documentTypeSender: new FormControl("", Validators.required),
      idSender: new FormControl("", Validators.required),
      nameSender: new FormControl("", Validators.required),
      addressSender: new FormControl("", Validators.required),
      emailSender: new FormControl("", Validators.required),
      phoneSender: new FormControl("", Validators.required),
    });
  }
}
