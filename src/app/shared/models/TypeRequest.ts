export interface ResponseTypeRequest {
  ok: boolean;
  message: string;
  data: TypeRequest[];
}

export interface TypeRequest {
  _id: string;
  Name: string;
  Code: string;
}
