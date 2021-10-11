export interface ResponseTypeDocument {
  ok: boolean;
  message: string;
  data: TypeDocument[];
}

export interface TypeDocument {
  _id: string;
  Name: string;
}
