export interface LoginBodyRequest {
  username: string;
  password: string;
}

export interface ResponseLoginService {
  ok: boolean;
  message: string;
  data: {
    admin: boolean;
    manager: boolean;
    user: string;
    nameuser: string;
  };
}
