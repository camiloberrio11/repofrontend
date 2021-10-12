import { RequestPqrs } from './RequestPqrs';

export interface ResponseGetByIdRequest {
  ok: boolean;
  message: string;
  data: ResponseRequest;
}

export interface ResponseRequest {
  _id: string;
  IdRequest: string;
  Answer: string;
  AnswerDate: string;
  AttachmentOne: string;
  AttachmentTwo: string;
  AttachmentThree: string;
  __v: number;
}

export interface BodyResponseRequest {
  answer: string;
  attachmentOne: string;
  attachmentTwo: string;
  attachmentThree: string;
}

export interface ResponseUpdateRequest {
  ok: boolean;
  message: string;
  data: RequestPqrs;
}
