export interface ResponseGetByIdRequest {
  ok: boolean;
  message: string;
  data: ResponseRequest;
}

export interface ResponseRequest {
  _id: string;
  IdRequest: string;
  Answer: string;
  AttachmentOne: string;
  AttachmentTwo: string;
  AttachmentThree: string;
  __v: number;
}
