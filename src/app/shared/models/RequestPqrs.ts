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

export interface ResponseGetRequestByCode {
  ok: boolean;
  message: string;
  data?: RequestPqrsPopulate;
}

export interface RequestPqrs {
  _id: string;
  CodeRequestType: string;
  CodeRequestSubtype: string;
  Consecutive: number;
  Id: string;
  AssignedUser?: any;
  Finally: boolean;
  AttachmentOne: string;
  AttachmentTwo: string;
  AttachmentThree: string;
  EventDate: string;
  SideVehicle: string;
  IdVehicle: string;
  Detail: string;
  Origin: string;
  Departure: string;
  DocumentTypeSender: string;
  IdSender: string;
  NameSender: string;
  AddressSender: string;
  EmailSender: string;
  PhoneSender: string;
  __v: number;
}

export interface RequestPqrsPopulate {
  _id: string;
  CodeRequestType: FieldGeneralCode;
  CodeRequestSubtype: FieldGeneralCode;
  Consecutive: number;
  Id: string;
  AssignedUser?: any;
  Finally: boolean;
  AttachmentOne: string;
  AttachmentTwo: string;
  AttachmentThree: string;
  EventDate: string;
  SideVehicle: string;
  IdVehicle: string;
  Detail: string;
  Origin: FieldGeneral;
  Departure: FieldGeneral;
  DocumentTypeSender: FieldGeneral;
  IdSender: string;
  NameSender: string;
  AddressSender: string;
  EmailSender: string;
  PhoneSender: string;
  __v: number;
}

interface FieldGeneral {
  _id: string;
  Name: string;
}

interface FieldGeneralCode {
  _id: string;
  Name: string;
  Code: string;
}

export interface ResponseRequestByStatus {
  ok: boolean;
  message: string;
  data?: RequestPqrsPopulate[];
}

export interface BodyRequestByStatus {
  limit: number;
  page: number;
  closed: boolean;
  admin: boolean;
  user: string;
}
