export interface ResponseGetReportByType {
  ok: boolean;
  message: string;
  data: {
    _id: string;
    count: number;
    requesttypes: Requesttype[];
  }[];
}

interface Requesttype {
  _id: string;
  Name: string;
  Code: string;
}
