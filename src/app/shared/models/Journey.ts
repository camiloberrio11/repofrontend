export interface ResponseJourney {
  ok: boolean;
  message: string;
  data: Journey[];
}

export interface Journey {
  _id: string;
  Name: string;
}
