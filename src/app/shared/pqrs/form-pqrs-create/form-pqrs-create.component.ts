import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AttachmentFile } from 'app/shared/models/Attachment';
import { Journey } from 'app/shared/models/Journey';
import { BodyRequestCreatePqr } from 'app/shared/models/RequestPqrs';
import { TypeDocument } from 'app/shared/models/TypeDocument';
import { TypeRequest } from 'app/shared/models/TypeRequest';
import { TypeSubrequest } from 'app/shared/models/TypeSubrequest';
import { PqrApiService } from 'app/shared/services/pqr-api.service';
import { UploadFilesService } from 'app/shared/services/upload-files.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-pqrs-create',
  templateUrl: './form-pqrs-create.component.html',
  styleUrls: ['./form-pqrs-create.component.scss'],
})
export class FormPqrsCreateComponent implements OnInit {
  listTypeDocument: TypeDocument[] = [];
  listTypeRequest: TypeRequest[] = [];
  listSubtypeRequest: TypeSubrequest[] = [];
  listOriginJourney: Journey[] = [];
  listDepartureJourney: Journey[] = [];
  formCreatePqr: FormGroup;

  // Attachements
  attachmentOne: AttachmentFile;
  attachmentTwo: AttachmentFile;
  attachmentThree: AttachmentFile;

  constructor(
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private uploadFilesService: UploadFilesService
  ) {}

  ngOnInit(): void {
    this.getTypeDocument();
    this.getTypeRequest();
    this.getSubtypeRequest();
    this.getJourneys();
    this.buildForm();
  }

  handleUpload(event, formcontrolname: string) {
    const file = event.target.files[0];
    if (file?.size > 300000) {
      this.toastr.warning(
        'Este adjunto no puede ser subido, el tamaño debe ser menor a 300Kb'
      );
      event.target.value = '';
      return;
    }
    const extension = this.uploadFilesService.getExtensionFile(file?.name);
    if (!this.uploadFilesService.extensionValidFile(extension)) {
      this.toastr.warning('Este adjunto no puede extensión/formato válido');
      event.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result: any = reader.result;
      const base: any = result?.split(',')[1];
      this.assignFile(
        {
          name: file.name?.replace(/ /g, '')?.replace(/[^a-zA-Z0-9]/g, ''),
          datafile: base,
          size: file.size,
          typefile: file.type,
        },
        formcontrolname
      );
    };
  }

  onSubmit(): void {
    const values = this.formCreatePqr.value;
    const body: BodyRequestCreatePqr = {
      codeRequestType: values?.codeRequestType,
      codeRequestSubtype: values?.codeRequestSubtype,
      attachmentOne: this.attachmentOne,
      attachmentTwo: this.attachmentTwo,
      attachmentThree: this.attachmentThree,
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
        Swal.fire(
          'Solicitud creada',
          `A tu correo registrado recibirás toda la información durante el proceso. Tu codigo de solicitud es ${cre.message}`,
          'success'
        );
        this.spinner.hide();
        this.attachmentOne = null;
        this.attachmentTwo = null;
        this.attachmentThree = null;

        this.formCreatePqr.reset();
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
      codeRequestType: new FormControl('', Validators.required),
      codeRequestSubtype: new FormControl('', Validators.required),
      attachmentOne: new FormControl(''),
      attachmentTwo: new FormControl(''),
      attachmentThree: new FormControl(''),
      sideVehicle: new FormControl(''),
      idVehicle: new FormControl(''),
      detail: new FormControl('', Validators.required),
      origin: new FormControl(''),
      departure: new FormControl(''),
      documentTypeSender: new FormControl('', Validators.required),
      idSender: new FormControl('', Validators.required),
      nameSender: new FormControl('', Validators.required),
      addressSender: new FormControl('', Validators.required),
      emailSender: new FormControl('', Validators.required),
      phoneSender: new FormControl('', Validators.required),
      terms: new FormControl(false, Validators.required)
    });
  }

  private assignFile(fileData: AttachmentFile, formcontrol: string): void {
    switch (formcontrol) {
      case 'attachmentOne':
        this.attachmentOne = fileData;
        return;
      case 'attachmentTwo':
        this.attachmentTwo = fileData;
        return;
      case 'attachmentThree':
        this.attachmentThree = fileData;
        return;
      default:
        break;
    }
  }
}
