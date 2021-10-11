export interface ResponseTypeSubrequest {
  ok: boolean;
  message: string;
  data: TypeSubrequest[];
}

export interface TypeSubrequest {
  _id: string;
  Name: string;
  Code: string;
}
