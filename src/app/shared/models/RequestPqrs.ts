export interface BodyRequestCreatePqr {
  codeRequestType: string;
  codeRequestSubtype: string;
  attachmentOne: string;
  attachmentTwo: string;
  attachmentThree: string;
  sideVehicle: string;
  idVehicle: string;
  detail: string;
  origin: string;
  departure: string;
  documentTypeSender: string;
  idSender: string;
  nameSender: string;
  addressSender: string;
  emailSender: string;
  phoneSender: string;
}

export interface ResponseCreatePqr {
  ok: boolean;
  message: string;
  data?: any;
}
