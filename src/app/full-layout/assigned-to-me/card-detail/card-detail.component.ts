import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RequestPqrsPopulate } from 'app/shared/models/RequestPqrs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BodyResponseRequest } from 'app/shared/models/ResponseRequest';
import { PqrApiService } from 'app/shared/services/pqr-api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthUserService } from 'app/shared/services/auth-user.service';
import { User } from 'app/shared/models/Users';
import { AttachmentFile } from 'app/shared/models/Attachment';
import { UploadFilesService } from 'app/shared/services/upload-files.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
})
export class CardDetailComponent implements OnInit {
  pqrDetail: RequestPqrsPopulate;
  formResponsePqr: FormGroup;
  listUsers: User[];
  userIsAdmin = false;
  userReasigId: string;

  // Attachments
  attachmentResponseOne: AttachmentFile;
  attachmentResponseTwo: AttachmentFile;
  attachmentResponseThree: AttachmentFile;

  constructor(
    private location: Location,
    private router: Router,
    private pqrApi: PqrApiService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private userAuth: AuthUserService,
    private uploadFilesService: UploadFilesService
  ) {
    this.userIsAdmin = this.userAuth.authRolUser?.data?.admin;
    if (this.userIsAdmin) {
      this.getUsers();
    }
  }

  ngOnInit(): void {
    const state: any = this.location.getState();
    if (!state?.pqrInfo) {
      this.router.navigate(['/assigned-to-me']);
      return;
    }
    this.formBuild();
    this.pqrDetail = state?.pqrInfo;
  }

  handleUpload(event, formcontrolname: string) {

    const file = event.target.files[0];
    if (file?.size > 85000) {
      this.toastr.warning(
        'Este adjunto no puede ser subido, el tamaño debe ser menor a 85Kb'
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
      this.assignAttachment(
        {
          name: file.name?.replace(/ /g, ''),
          datafile: base,
          size: file.size,
          typefile: file.type,
        },
        formcontrolname
      );
    };
  }

  handleCancel(): void {
    this.router.navigate(['/assigned-to-me']);
  }

  handleAssign(): void {
    this.spinner.show();
    this.pqrApi
      .reasignRequest({ assignedUser: this.userReasigId }, this.pqrDetail?._id)
      .subscribe(
        (re) => {
          this.toastr.success('Petición reasignada');
          this.userReasigId = '';
          this.spinner.hide();
        },
        (err) => {
          this.spinner.hide();
          console.warn(err);
          this.toastr.error('Ocurrió un error reasignando esta petición');
        }
      );
  }

  onChangeReasign(event: string) {
    this.userReasigId = event;
  }

  handleSubmit(): void {
    const values = this.formResponsePqr.value;
    const body: BodyResponseRequest = {
      answer: values?.answer,
      attachmentOne: this.attachmentResponseOne,
      attachmentTwo: this.attachmentResponseTwo,
      attachmentThree: this.attachmentResponseThree,
    };
    this.spinner.show();
    this.pqrApi.responseRequest(body, this.pqrDetail?._id).subscribe(
      (upd) => {
        this.toastr.success(
          `Ha sido actualizaada con éxito la solicitud ${this.pqrDetail?.Id}`
        );
        this.spinner.hide();
        this.attachmentResponseOne = null;
        this.attachmentResponseTwo = null;
        this.attachmentResponseThree = null;
        this.router.navigate(['/assigned-to-me']);
      },
      (err) => {
        this.toastr.error('Ha ocurrido un error actualizando esta solicitud');
        this.spinner.hide();
      }
    );
  }

  private formBuild(): void {
    this.formResponsePqr = new FormGroup({
      answer: new FormControl('', Validators.required),
      attachmentOne: new FormControl(''),
      attachmentTwo: new FormControl(''),
      attachmentThree: new FormControl(''),
    });
  }

  private getUsers(): void {
    this.spinner.show();
    this.pqrApi.getUsers().subscribe(
      (usrs) => {
        this.listUsers = usrs.data;
        this.spinner.hide();
      },
      (err) => {
        this.toastr.error('Ha ocurrido un error obteniendo usuarios');
        console.warn(err);
        this.spinner.hide();
      }
    );
  }

  private assignAttachment(file: AttachmentFile, formcontrol: string): void {
    switch (formcontrol) {
      case 'attachmentOne':
        this.attachmentResponseOne = file;
        return;
      case 'attachmentTwo':
        this.attachmentResponseTwo = file;
        return;
      case 'attachmentThree':
        this.attachmentResponseThree = file;
        return;

      default:
        break;
    }
  }
}
